import { ref, get, child, getDatabase, set, push } from "firebase/database";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, OAuthProvider, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getHoursBetweenDates } from '@utils/helpers/timeFunctions.js';

//Создать коллекцию в БД с доп. данными регистрируемого пользователя
async function registerUserData(uid, email, name, metadata){
    const userData = {
        email: email,
        name: name,
        balance: 0,
        uid: uid,
        isBlocked: false,
        metadata: metadata,
        isReadNotifications: true
    }
    return await getData(`users/${uid}`).then(response => {
        response.length === 0 && setData(`users/${uid}`, userData);
        return userData;
    }).catch(()=>{
        console.log('err');
    })
}

// Войти через google
export async function signInWithGoogle(){
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider)
    .then(response => {
        const user = response.user;
        return registerUserData(user.uid, user.email, user.displayName, user.metadata);
    }).catch((error) => {
        console.log('err');
    });
}

// Вход через apple
export async function signInWithApple(){
    const auth = getAuth();
    const provider = new OAuthProvider('apple.com');

    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            resolve(user);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

// Регистрация пользователя через email
export async function signUpWithEmail(name, email, password) {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(auth, email, password)
        .then(response =>{
            const user = response.user;
            return registerUserData(user.uid, user.email, name, user.metadata);
        }).catch( err => {
            return err.code;
        })
}

// Вход через email
export function signInWithEmail(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return getData(`users/${user.uid}`);
        })
        .catch(error => {
            return false;
        });
}

// Завершить сеанс
export async function logout() {
    const auth = await getAuth();
    return signOut(auth).then(() => {
        return true;
    }).catch((error) => {
        return false;
    });
}

// Получить коллекцию
export async function getData(collectionName, isObj){
    const dbRef = ref(getDatabase());
    const response = await get(child(dbRef, collectionName));
    if (response.exists()) {
        let result = response.val();
        result = isObj ? result : Object.values(result);
        return result;
    } else {
        return [];
    }
}

// Загрузить данные в БД
export async function pushData(collectionName, data) {
    const db = getDatabase();
    const dtpCollectionRef = await push(ref(db, collectionName));
    return await set(dtpCollectionRef, { ...data });
}

// Загрузить данные в БД (без uid)
export async function setData(collectionName, data) {
    const db = getDatabase();
    const dtpCollectionRef = await ref(db, collectionName);
    return await set(dtpCollectionRef, { ...data });
}

// Записаться на занятие
export async function joinOnActivity(user, activity){
    return new Promise((resolve, reject) => {
        if(user.balance >= activity.price){ 
            setData(`records/${activity.uid}/users/${user.uid}`, {email: user.email, uid: user.uid}).then(()=>{ //Запись на занятие
                let balance = user.balance - activity.price;
                setData(`users/${user.uid}/`, {...user, balance: balance} ).then(()=> { //Списание средств
                    pushUserAction(user.uid, { //Записываем действие пользователя в его коллекцию
                        name: "Запись на занятие",
                        activityUid: activity.uid,
                        userBalanceBefore: user.balance
                    });
                    resolve('OK');
                    
                }).catch(()=> {
                    reject('ERR'); //Ошибка при списании средств
                })
            }).catch(() => {
                reject('ERR'); // Ошибка при записи на занятие
            })
        }else{
            resolve('BALANCE_ERR'); //Недостаточно средств
        }
    })
}

//Отменить занятие
export async function unjoinOnActivity(user, activity){
    return new Promise((resolve, reject) => {    
        setData(`records/${activity.uid}/users/${user.uid}`, null).then(()=> { //Отмена занятия
            let diff = getHoursBetweenDates(new Date(), activity.date); //Разница между текущей датой и днем проведения занятия (в часах)
            if(diff >= 24){
                let balance = user.balance + activity.price;
                setData(`users/${user.uid}/`, {...user, balance: balance} ).then(()=> {
                    pushUserAction(user.uid, { //Записываем действие пользователя в его коллекцию
                        name: "Отмена записи на занятие c возвратом средств",
                        activityUid: activity.uid,
                        userBalanceBefore: user.balance
                    });
                    resolve("UNJOIN_WITH_MONEY"); //Отмена записи с возвратом средств
                }).catch(()=> {
                    reject('REFUND_ERR'); //Ошибка возврата средств
                })
            }else{
                pushUserAction(user.uid, { //Записываем действие пользователя в его коллекцию
                    name: "Отмена записи на занятие без возврата средств",
                    activityUid: activity.uid,
                    userBalanceBefore: user.balance
                });
                resolve("UNJOIN_WITHOUT_MONEY"); //Отмена записи без возврата средств
            }
        }).catch(() => {
            reject('ERR'); //Ошибка отмены занятия
        });
    })
}

// Отправить сообщение в чат с тех.поддержкой
export async function sendSupportMessage(userUid, userEmail, message, date){
    return pushData(`supportChats/${userUid}`, {role: 'user', userUid: userUid, userEmail:userEmail, message: message, date});
}

// Установить статус "Уведомления прочитаны" в true
export async function setIsReadNotifications(user){
    pushUserAction(user.uid, { //Записываем действие пользователя в его коллекцию
        name: "Прочитал уведомления",
    });
    return setData(`users/${user.uid}`, {...user, isReadNotifications: true});
}

// Получить список людей, идущих на занятие
export async function getWhoGoing(users){
    let whoGoingList = [];

    for(let userUid in users){
        await getData(`users/${userUid}`, true).then(user => {
            whoGoingList.push(user.name);
        });
    }
    return whoGoingList;
}

// Функция записи любого действия пользователя
function pushUserAction(uid, obj){
    pushData(`users/${uid}/actions`, { ...obj, date: String(new Date())});
}
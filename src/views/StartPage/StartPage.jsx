import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ACTIVITY_PAGE } from '@utils/constants/routesConstants.js';
import MainPreloader from '@components/MainPreloader/MainPreloader';
import MainBg from '@assets/img/main-bg.webp';

import Block from './Block/Block';
import Modal from './Modal/Modal';
import CenterModal from '@components/CenterModal/CenterModal';

// firebase
import { signInWithGoogle, signInWithApple, signUpWithEmail, signInWithEmail } from '@services/firebase/firebaseApi';

// validate
import { emailValidate } from '../../utils/helpers/validateFunctions.js';

export default function StartPage({user}) {
  const [isActiveModal, setActiveModal] = useState(false);
  const [isActiveDangerModal, setIsActiveDangerModal] = useState(false);
  const [dangerModalTitle, setDangerModalTitle] = useState('');

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepassword, setUserRepassword] = useState('');

  const [userLoginEmail, setUserLoginEmail] = useState('');
  const [userLoginPassword, setUserLoginPassword] = useState('');

  const [userNameErr, setUserNameErr] = useState(false); 
  const [userEmailErr, setUserEmailErr] = useState(false);
  const [userPasswordErr, setUserPasswordErr] = useState(false);

  const navigate = useNavigate();

  // Клик на кнопку "записаться"
  const onClickHandle = () => user ? navigate(ACTIVITY_PAGE) : setActiveModal(true);

  // Вход через google
  const onSignInWithGoogle = () => {
      signInWithGoogle().then(response => {
        navigate(ACTIVITY_PAGE);
      }).catch(err => {
          alert('При входе в аккаунт возникла ошибка! Попробуйте еще раз.');
      })
  }

  // Вход через apple
  const onSignInWithApple = () => {
    signInWithApple().then(response => {
      alert('Ошибка авторизации!');
    }).catch(err => {
      alert('Ошибка авторизации!');
    })
  }

  // Зарегистрироваться через email
  const onSignUpWithEmail = () => {
    if(checkFields()){
      signUpWithEmail(userName.toLocaleLowerCase(), userEmail.toLocaleLowerCase(), userPassword).then( response => {
        switch (response) {
          case 'auth/email-already-in-use':
              setDangerModalTitle('Данный e-mail уже используется!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/invalid-email':
              alert('Указан недопустимый формат e-mail!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/operation-not-allowed':
              alert('Создание новых пользователей отключено!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/weak-password':
              alert('Указанный пароль слишком слабый!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/network-request-failed':
              alert('Произошла ошибка сети!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/too-many-requests':
              alert('Превышено максимальное количество попыток создания учетной записи!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/operation-not-supported-in-this-environment':
              alert('Операция не поддерживается в данном окружении!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/app-deleted':
              alert('Произошла ошибка!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/app-not-authorized':
              alert('Произошла ошибка!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/argument-error':
              alert('Неверный аргумент функции!');
              setIsActiveDangerModal(true);
              break;
          case 'auth/internal-error':
              alert('Произошла внутренняя ошибка аутентификации!');
              setIsActiveDangerModal(true);
              break;
          default:
            navigate(ACTIVITY_PAGE);
            break;
        }
      }).catch(err => {
        alert('Произошла внутренняя ошибка аутентификации!');
      })
    }
  }

  // Проверка полей на заполненность
  const checkFields = () => {
    userName.trim().length <= 3 ? setUserNameErr('Слишком короткое имя!') : setUserNameErr(false);
    emailValidate(userEmail) ? setUserEmailErr('Вы ввели некорректный email!') : setUserEmailErr(false);
    userPassword.trim().length <= 5 ? setUserPasswordErr('Слишком короткий пароль!') : setUserPasswordErr(false);
    return !userNameErr && !userEmailErr && !userPasswordErr;
  }

  useEffect(() => {
    checkFields();
  }, [userName, userEmail, userPassword])

  // Войти через email и пароль
  const onSignInWithEmail = () => {
    signInWithEmail(userLoginEmail, userLoginPassword).then(response => {
      if(!response){
        setIsActiveDangerModal(true);
        setDangerModalTitle('Ошибка! Возможно Вы неверно указали email или пароль.');
      }else{
        navigate(ACTIVITY_PAGE);
      }
    }).catch(()=>{
      console.log('error!');
    }, [])
  }

  return (
    <div className='w-full h-full bg-black'>
      <AnimatePresence>
        {
          isActiveDangerModal && 
            <CenterModal title={dangerModalTitle} setActiveModal={setIsActiveDangerModal} type="danger"/>
        }
        
        {
          user !== null ?
            <motion.div 
              key="Dsasd&dasd83423fsdcSD"
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 3}}
              className='flex items-center justify-center bg-black/80 h-[100vh]' style={{ background: `url(${MainBg})`, backgroundSize: 'cover' }}
            >
              <Block onClickHandle={onClickHandle} />
              <Modal
                isActiveModal={isActiveModal}
                setActiveModal={setActiveModal}
                onSignInWithGoogle={onSignInWithGoogle}
                onSignInWithApple={onSignInWithApple}
                onSignUpWithEmail={onSignUpWithEmail}
                onSignInWithEmail={onSignInWithEmail}

                userName={userName}
                userEmail={userEmail}
                userPassword={userPassword}
                userRepassword={userRepassword}

                setUserName={setUserName}
                setUserEmail={setUserEmail}
                setUserPassword={setUserPassword}
                setUserRepassword={setUserRepassword}
                checkFields={checkFields}

                userNameErr={userNameErr}
                userEmailErr={userEmailErr}
                userPasswordErr={userPasswordErr}

                userLoginEmail={userLoginEmail}
                userLoginPassword={userLoginPassword}
                
                setUserLoginEmail={setUserLoginEmail}
                setUserLoginPassword={setUserLoginPassword}
              />
            </motion.div>
            : <MainPreloader/>
        }
      </AnimatePresence>

        
    </div>
  )
}
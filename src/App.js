import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  MAIN_PAGE, 
  ACCOUNT_PAGE,
  ACTIVITY_PAGE,
  ACTIVITIES_HISTORY,
  SUPPORT_PAGE,
  NOTIFICATIONS_PAGE,
  PAY_PAGE
} from '@utils/constants/routesConstants.js';

// firebase
import './services/firebase/firebaseConfig.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref, onValue } from "firebase/database";

import { getHoursBetweenDates } from '@utils/helpers/timeFunctions.js';

import PrivateRoute from '@components/PrivateRoute/PrivateRoute';
import UserContext from '@components/contexts/User/UserContext';
import AppContext from '@components/contexts/App/AppContext';

// pages
import StartPage from './views/StartPage/StartPage';
import AccountPage from './views/AccountPage/AccountPage';
import ActivityPage from './views/ActivityPage/ActivityPage';
import SupportPage from './views/SupportPage/SupportPage';
import ActivitiesHistoryPage from './views/ActivitiesHistoryPage/ActivitiesHistoryPage';
import NotificationsPage from './views/NotificationsPage/NotificationsPage';
import PayPage from './views/PayPage/PayPage';

export default function App() {
  const { user, setUser } = useContext(UserContext);
  const { setApp } = useContext(AppContext);
  
  const [records, setRecords] = useState(null);
  const [historyRecords, setHistoryRecords] = useState(null);
  
  useEffect(()=> {
    // Получить данные пользователя
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user){
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setUser(data);
        });
      }else{
        setUser(false);
      }
    });

    // Получить данные приложения
    const db = getDatabase();
    const recordsRef = ref(db, `app`);
    onValue(recordsRef, (snapshot) => {
      const data = snapshot.val();
      setApp(data);
    });
  }, []);

  // Получить все активные записи
  useEffect(() => {
    const db = getDatabase();
    const recordsRef = ref(db, `records`);
    onValue(recordsRef, (snapshot) => {
      const data = Object.values(snapshot.val() ? snapshot.val() : {} );
      const filteredRecords = data.filter(item => getHoursBetweenDates(new Date(), item.date) >= 0); //Получаем только те занятия, которые еще не наступили
      setRecords(filteredRecords);

      if(user !== null){
        const filteredHistoryRecords = data.filter(item => item?.users?.[user.uid]) //получили все записи, на которые записан пользователь
          .filter(item => getHoursBetweenDates(new Date(), item.date) < 0) //отфильтровали все записи, на которые записан пользователь и вернули те, которые уже прошли
        setHistoryRecords(filteredHistoryRecords);
      }      
    });
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ MAIN_PAGE } element={<StartPage user={user} setUser={setUser}/>}/>
        <Route path={ ACCOUNT_PAGE } element={
          <PrivateRoute>
            <AccountPage user={user} historyRecords={historyRecords}/>
          </PrivateRoute>
        }/>

        <Route path={ ACTIVITY_PAGE } element={
          <PrivateRoute>
            <ActivityPage user={user} records={records}/>
          </PrivateRoute>
        }/>

        <Route path={ SUPPORT_PAGE } element={
          <PrivateRoute>
            <SupportPage user={user}/>
          </PrivateRoute>
        }/>

        <Route path={ ACTIVITIES_HISTORY } element={
          <PrivateRoute>
            <ActivitiesHistoryPage historyRecords={historyRecords}/>
          </PrivateRoute>
        }/>

        <Route path={ NOTIFICATIONS_PAGE } element={
          <PrivateRoute>
            <NotificationsPage user={user}/>
          </PrivateRoute>
        }/>

        <Route path={ PAY_PAGE } element={
          <PrivateRoute>
            <PayPage user={user}/>
          </PrivateRoute>
        }/>
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

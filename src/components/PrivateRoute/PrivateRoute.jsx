import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MAIN_PAGE } from '@utils/constants/routesConstants.js';
import UserContext from '@components/contexts/User/UserContext';
import AppContext from '@components/contexts/App/AppContext';
import MainPreloader from '@components/MainPreloader/MainPreloader';
import NotificationMessage from '@components/NotificationMessage/NotificationMessage';
import BlockedUser from '@components/BlockedUser/BlockedUser';
import EngineeringWorks from '@components/EngineeringWorks/EngineeringWorks';

export default function PrivateRoute({children}) {
  const { user } = useContext(UserContext);
  const { app } = useContext(AppContext);
  const [isNotificationShow, setIsNotificationShow] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => setIsNotificationShow(false), 5000);
  }, []);

  useEffect(() => {
    if(user && user.isReadNotifications === false){
      setIsNotificationShow(true);
    }
  }, [user]);

  if(user === null || app === null) {
    return <MainPreloader/>
  }

  if(app.engineeringWorks === true){
    return <EngineeringWorks/>
  }

  if(user.isBlocked){
    return <BlockedUser/>;
  }

  else if(user){
    return (
      <>
        <AnimatePresence>
          {isNotificationShow && <NotificationMessage title="У вас есть непрочитанные уведомления!" setIsNotificationShow={setIsNotificationShow}/>}
        </AnimatePresence>
        {children}
      </>
    )
  }else{
    navigate(MAIN_PAGE);
  }
}

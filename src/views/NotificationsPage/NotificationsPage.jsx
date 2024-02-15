import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from '@components/Nav/Nav';
import EmptyNotifications from './EmptyNotifications/EmptyNotifications';
import Container from '@components/Container/Container';
import NotificationItem from './NotificationItem/NotificationItem';
import Button from '@components/Button/Button';
import Spinner from '@components/Spinner/Spinner'; 

// modal
import NotificationDataModal from './NotificationDataModal/NotificationDataModal';

// firebase
import { setIsReadNotifications } from '@services/firebase/firebaseApi.js';

export default function NotificationsPage({user}) {
  const [notifications, setNotifications] = useState(null);
  const [notificationsPer, setNotificationsPer] = useState(10);

  const [isActiveNotificationDataModal, setIsActiveNotificationDataModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(false);

  // Получаем уведомления пользователя
  useEffect(()=>{
    setNotifications(Object.values(user && user.notifications ? user.notifications : []).reverse());

    user && user.isReadNotifications === false && setIsReadNotifications(user).then(()=>{
      //Сообщения прочитаны
    }).catch(()=> alert('Возникла ошибка! Пожалуйста сообщите об этом нам.'));
  }, [user]);

  const onClickReadNotification = (notification) =>{
    setSelectedNotification(notification);
    setIsActiveNotificationDataModal(true);
  }

  return (
    <>
      <AnimatePresence>
        {
          isActiveNotificationDataModal && 
            <NotificationDataModal 
              data={selectedNotification} 
              setActiveModal={setIsActiveNotificationDataModal}
            />
        }
      </AnimatePresence>
      
      <Nav title="Уведомления" backArrow={true}/>
      <Container className="mt-[80px] pb-[100px] flex flex-col gap-4">
        {
          notifications && notifications.map((notification, index) => 
            index < notificationsPer && 
              <NotificationItem 
                key={index}
                data={notification} 
                onClickReadNotification={onClickReadNotification}
              />
          )
        }

        { notifications === null && <Spinner/> }
        { notifications && notifications.length === 0 && <EmptyNotifications/> }
        { notifications && notifications.length > notificationsPer &&  <Button onClick={() => setNotificationsPer(notificationsPer + 3)}>Загрузить еще</Button>}
      </Container>
    </>
  )
}

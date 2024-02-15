import React, { useState } from 'react';
import { joinOnActivity, unjoinOnActivity } from '@services/firebase/firebaseApi.js';

import Header from './Header/Header';
import Activities from './Activities/Activities';

// firebase
import { getWhoGoing } from '@services/firebase/firebaseApi.js';

// modals
import WhoGoingModal from './modals/WhoGoingModal/WhoGoingModal';
import SuccessJoinModal from './modals/SuccessJoinModal/SuccessJoinModal';
import SuccessUnjoinModal from './modals/SuccessUnjoinModal/SuccessUnjoinModal';
import SuccessUnjoinWithoutMoneyModal from './modals/SuccessUnjoinWithoutMoneyModal/SuccessUnjoinWithoutMoneyModal';
import DangerInsufficientFundsModal from './modals/DangerInsufficientFundsModal/DangerInsufficientFundsModal';

export default function ActivityPage({ user, records }) {

  const [whoGoindModalIsActive, setWhoGoindModalIsActive] = useState(false);
  const [whoGoingList, setWhoGoingList] = useState(null);

  const [successJoinModalIsActive, setSuccessJoinModalIsActive] = useState(false);
  const [successUnjoinModalIsActive, setSuccessUnjoinModalIsActive] = useState(false);
  const [successUnjoinWithoutMoneyModalIsActive, setSuccessUnjoinWithoutMoneyModalIsActive] = useState(false);
  const [dangerInsufficientFundsModalIsActive, setDangerinsufficientFundsModalIsActive] = useState(false);

  // Записаться на занятие
  function onJoinClick(activity){
    joinOnActivity(user, activity).then(response => {
      switch (response) {
        case 'BALANCE_ERR':
          setDangerinsufficientFundsModalIsActive(true);
          break;
        
        case 'OK':
          setSuccessJoinModalIsActive(true);
          break
          
        default:
          break;
      }
    }).catch(() => {
      alert('При попытке записи на занятие возникла ошибка! Попробуйте еще раз.');
    })
  }

  //Отменить запись на занятие 
  function onUnjoinClick(activity){
    unjoinOnActivity(user, activity).then( response=> {
      switch (response) {
        case 'UNJOIN_WITH_MONEY':
          setSuccessUnjoinModalIsActive(true);
          break;

        case 'UNJOIN_WITHOUT_MONEY':
          setSuccessUnjoinWithoutMoneyModalIsActive(true);
          break;
      
        default:
          break;
      }
    }).catch(() => {
      alert('Во время отмены записи произошла ошибка! Попробуйте еще раз или свяжитесь с нами в чате с тех.поддержкой.');
    });
  }

  // Кто идет на занятие
  function onWhoGoingClick(activity){
    getWhoGoing(activity.users).then(response => {
      setWhoGoingList(response);
      setWhoGoindModalIsActive(true);
    }).catch(()=> alert('Возникла ошибка!'));
  }

  return (
    <>
      <WhoGoingModal 
        whoGoingList={whoGoingList}
        whoGoindModalIsActive={whoGoindModalIsActive} 
        setWhoGoindModalIsActive={setWhoGoindModalIsActive}
      />

      <SuccessJoinModal
        isActiveModal={successJoinModalIsActive} 
        setActiveModal={setSuccessJoinModalIsActive}
      />

      <SuccessUnjoinModal
        isActiveModal={successUnjoinModalIsActive} 
        setActiveModal={setSuccessUnjoinModalIsActive}
      />

      <SuccessUnjoinWithoutMoneyModal
        isActiveModal={successUnjoinWithoutMoneyModalIsActive} 
        setActiveModal={setSuccessUnjoinWithoutMoneyModalIsActive}
      />

      <DangerInsufficientFundsModal
        isActiveModal={dangerInsufficientFundsModalIsActive} 
        setActiveModal={setDangerinsufficientFundsModalIsActive}
      />

      <Header />

      <Activities
        user={user} 
        records={records} 
        onJoinClick={onJoinClick} 
        onUnjoinClick={onUnjoinClick} 
        onWhoGoingClick={onWhoGoingClick}
      />
    </>
  )
}

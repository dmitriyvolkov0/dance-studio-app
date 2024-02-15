import React from 'react';
import EmptyNotificationsImg from '@assets/img/emptyNotifications.webp';

export default function EmptyNotifications() {
  return (
    <div>
        <img className="max-w-[250px] mx-auto" src={EmptyNotificationsImg} alt="У Вас пока нет уведомлений!" />
        <h1 className='mt-2 text-[18px] text-[#777] font-medium text-center'>У Вас пока нет уведомлений!</h1>
    </div>
  )
}

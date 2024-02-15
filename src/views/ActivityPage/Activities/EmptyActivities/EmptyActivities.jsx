import React from 'react';
import EmptyActivitiesImg from '@assets/img/emptyActivities.webp';

export default function EmptyActivities() {
  return (
    <div className='mt-4'>
        <img className="mx-auto max-w-[250px]" src={EmptyActivitiesImg} alt="Здесь скоро будут записи!" />
        <h1 className='text-[18px] text-brand text-center font-medium'>Записей пока нет, но они скоро появятся новые записи! Следите за нами)</h1>
    </div>
  )
}

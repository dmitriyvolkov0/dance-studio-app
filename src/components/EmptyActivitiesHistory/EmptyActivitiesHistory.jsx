import React from 'react';
import EmptyHistoryImg from '@assets/img/emptyHistory.webp';
import Button from '@components/Button/Button';
import { FaRegPenToSquare } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { ACTIVITY_PAGE } from '@utils/constants/routesConstants.js';

export default function EmptyActivitiesHistory() {
  const navigate = useNavigate();

  return (
    <div>
        <img src={EmptyHistoryImg} className="mx-auto" alt="История пуста" />
        <p className='mb-4 mt-2 text-center text-[16px] font-medium'>История пуста. Запишитесь на Ваше первое занятие на странице "занятия"</p>
        <Button className="w-full" onClick={() => navigate(ACTIVITY_PAGE)}><FaRegPenToSquare className='text-[18px]'/>Записаться</Button>
    </div>
  )
}

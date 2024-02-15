import React from 'react';
import EmptyChatImg from '../../../assets/img/emptyChat.webp';

export default function EmptyChat() {
  return (
    <div className='mt-5'>
        <img src={EmptyChatImg} className=" max-w-[300px] mx-auto" alt="Чат с тех.поддержкой пуст"/>
        <h1 className='mt-3 text-[18px] text-center text-[#777] font-medium'>Чат с тех.поддержкой пуст!</h1>
    </div>
  )
}

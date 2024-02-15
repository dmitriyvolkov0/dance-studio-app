import React, { useState, useEffect } from 'react';
import Button from '@components/Button/Button';
import { getCurrentTime } from '@utils/helpers/timeFunctions.js';

export default function ActivityCard({ user, data, isHideButtons, onJoinClick, onUnjoinClick, onWhoGoingClick }) {
    const [isJoin, setIsJoin] = useState(null);
    const [signedUsers, setSignedUsers] = useState(0);

    const date = new Date(data.date);
    const day = date.getDate();
    const time = getCurrentTime(date);
    let week = date.getDay();
    let month = date.getMonth();
    
    switch (week) {
        case 0: week = 'воскресенье'; break;
        case 1: week = 'понедельник'; break;
        case 2: week = 'вторник'; break;
        case 3: week = 'среда'; break;
        case 4: week = 'четверг'; break;
        case 5: week = 'пятница'; break;
        case 6: week = 'суббота'; break;
        default: month = 'Ошибка!'; break;
    }
    
    switch (month) {
        case 0: month = 'января'; break;
        case 1: month = 'февраля'; break;
        case 2: month = 'марта'; break;
        case 3: month = 'апреля'; break;
        case 4: month = 'мая'; break;
        case 5: month = 'июня'; break;
        case 6: month = 'июля'; break;
        case 7: month = 'августа'; break;
        case 8: month = 'сентября'; break;
        case 9: month = 'октября'; break;
        case 10: month = 'ноября'; break;
        case 11: month = 'декабря'; break;
        default: month = 'Ошибка!'; break;
    }

    useEffect(()=>{
        if (!isHideButtons){
            setIsJoin(data.users ? Object.values(data.users).some(item => item.email === user.email) : false);
            setSignedUsers(data.users ? Object.values(data.users).length : 0);
        }
    }, [data]);
    
    
    return (
        <div className='
            shadow-1
            bg-white
            rounded-[20px]
            relative
            py-[25px] px-[10px]
            [330px]:px-[15px]
            [350px]:px-[20px]
            [360px]:px-[25px]
        '>
                <div className='flex items-center justify-between'>
                    {data.groupType === 'open' ? 
                        <span className={`absolute right-0 top-0 text-[14px] rounded-bl-[10px] rounded-tr-[20px] px-[8px] py-[4px] text-white ${data.isCanceled ? 'bg-[#ccc]' : 'bg-[#62e233]' }`}>открытая группа</span>
                        :
                        <span className={`absolute right-0 top-0 text-[14px] rounded-bl-[10px] rounded-tr-[20px] px-[8px] py-[4px] text-white ${data.isCanceled ? 'bg-[#ccc]' : 'bg-[#FF6376]' }`}>закрытая группа</span>
                    }
            
                    <div className='flex items-center gap-2 font-medium'>
                        <span className={`${data.isCanceled ? 'text-[#ccc]' : 'text-[#333]'} text-[50px]`}> {day} </span>
                        <div className='flex flex-col text-[16px]'>
                            <span className={data.isCanceled ? 'text-[#ccc]' : 'text-brand'}> {week} </span>
                            <span className={data.isCanceled ? 'text-[#ccc]' : 'text-[#333]'}>{month}</span>
                        </div>
                    </div>
                        
                    <div className='flex flex-col font-medium'>
                        <span className={data.isCanceled ? 'text-[#ccc]' : 'text-[#333]'}>Время: <span className={data.isCanceled ? 'text-[#ccc]' : 'text-brand'}>{time}</span></span>
                        <span className={data.isCanceled ? 'text-[#ccc]' : 'text-[#333]'}>Мест: <span className={data.isCanceled ? 'text-[#ccc]' : 'text-brand'}>{data.totalPlaces - signedUsers}</span></span>
                    </div>

                    <span className={`
                        absolute
                        bottom-0 right-0
                        py-1 pl-[25px] pr-[10px]
                        text-[18px] text-white font-medium
                        rounded-tl-[100px] rounded-br-[20px]
                        ${data.isCanceled ? 'bg-[#ccc]' : 'bg-[#333]'}
                    `}>
                        {data.price} Р
                    </span>
                </div>

                {(!isHideButtons && !data.isCanceled) && 
                    <>
                        {!isJoin &&
                            <div className='flex gap-3'>
                                { data.totalPlaces - signedUsers > 0 && <Button onClick={() => onJoinClick(data)} butSize="sm">Записаться</Button> }
                                <Button onClick={() => onWhoGoingClick(data)} butSize="sm">Кто идет?</Button>
                            </div>
                        }
                        
                        {isJoin &&
                            <div className='flex gap-3 mb-2'>
                                <Button onClick={() => onUnjoinClick(data)}  butSize="sm" butType="danger">Отменить запись</Button>
                                <Button onClick={() => onWhoGoingClick(data)} butSize="sm">Кто идет?</Button>
                            </div>
                        }
                    </>
                }

                {data.isCanceled && <span className='text-[13px] text-[#aaa]'>Занятие отменено! Денежные средства возвращены на баланс.</span>}
        </div>
    )
}

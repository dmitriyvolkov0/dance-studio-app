import React from 'react';

import { ACCOUNT_PAGE, ACTIVITY_PAGE, SUPPORT_PAGE } from '../../../utils/constants/routesConstants.js'

import { FaUser } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

import Item from './Item/Item.jsx';

export default function BottomNav() {
  return (
    <div className='
        flex items-center justify-between
        [400px]:justify-around
        fixed bottom-0 left-0
        bg-white shadow-1
        h-[60px] w-full
        px-[20px]
        text-[22px]
        z-10
    '>
        <Item link={ACCOUNT_PAGE} icon={<FaUser/>} title="Аккаунт"/>
        <Item link={ACTIVITY_PAGE} icon={<FaRegCalendarAlt/>} title="Занятия"/>
        <Item link={SUPPORT_PAGE} icon={<MdSupportAgent/>} title="Помощь"/>
    </div>
  )
}

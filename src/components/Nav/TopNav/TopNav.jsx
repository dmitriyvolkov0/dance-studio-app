import React, { useContext } from 'react';
import UserContext from '@components/contexts/User/UserContext';

import {useNavigate} from 'react-router-dom';
import { NOTIFICATIONS_PAGE } from '@utils/constants/routesConstants';
import { motion } from 'framer-motion';

import { IoIosNotifications } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";

export default function TopNav({title, backArrow}) {
  const { user } = useContext(UserContext);
  
  const navigate = useNavigate();

  return (
    <div className="
      flex items-center justify-between 
      fixed 
      w-full h-[60px] 
      left-0 top-0 
      bg-white 
      shadow-1
      px-[20px]
      z-10
    ">
        <div className="flex gap-4">
          {backArrow && <button onClick={() => navigate(-1)}> <IoArrowBackOutline className="text-[19px]"/> </button>}
          <div className="text-[20px] font-medium">{title}</div>
        </div>
        
        <button className='
          hover:text-brand-hover
            active:text-brand-active'
          onClick={() => navigate(NOTIFICATIONS_PAGE)}  
        >
          {user && user.isReadNotifications ? 
            <div>
              <IoIosNotifications className='text-[24px]'/>
            </div>
            :
            <motion.div
              initial={{ rotate: -40 }}
              animate={{ rotate: 40 }}
              transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: [0.6, 0.3, 0.3, 0.6] }}
            >
              <IoIosNotifications className='text-[24px]'/>
            </motion.div>
          }
        </button>
    </div>
  )
}

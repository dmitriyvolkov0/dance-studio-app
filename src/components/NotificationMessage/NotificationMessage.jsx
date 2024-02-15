import React from 'react';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { NOTIFICATIONS_PAGE } from '@utils/constants/routesConstants.js';

export default function NotificationMessage({title, setIsNotificationShow}) {
    const navigate = useNavigate();

    const onMessageClick = () => {
        setIsNotificationShow(false);
        navigate(NOTIFICATIONS_PAGE);
    } 

    return (
        <motion.div 
            onClick={onMessageClick}
            initial={{opacity: 0, bottom: 0}}    
            animate={{opacity: 1, bottom: 100}}    
            exit={{opacity: 0, bottom: -20}}    
            className='fixed bottom-[100px] left-0 right-0 w-fit max-w-[95%] mx-auto py-[10px] px-[15px] shadow-lg rounded-[5px] bg-[#333333e5] text-white cursor-pointer text-center z-[1]'
        >
            <span>{title}</span>
        </motion.div>
    )
}

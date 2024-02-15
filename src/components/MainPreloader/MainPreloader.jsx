import React from 'react';
import Spinner from '@components/Spinner/Spinner';
import {motion} from 'framer-motion';

export default function MainPreloader() {
    return (
        <motion.div 
            key="IOsdfksdKDas665fsaDs"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='
                flex justify-center items-center 
                w-full h-[100vh]
        '>
            <div className='flex justify-center items-center bg-white shadow-1 w-[200px] h-[140px] rounded-[15px]'>
                <Spinner text="Загрузка..."/>
            </div>
        </motion.div>
    )
}

import React from 'react';
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidErrorAlt } from "react-icons/bi";
import Button from '@components/Button/Button';

export default function CenterModal({title, setActiveModal, children, type}) {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.2 }}

        className='
            fixed 
            flex justify-center items-center
            w-full h-full 
            bg-black/50
            z-[9999]
            px-[15px]
            backdrop-blur-sm
    '>

        <motion.div className={`
            bg-white 
            rounded-[20px]
            w-full max-w-[400px]
        `}

            initial={{ opacity: 0, bottom: -300}}
            animate={{ opacity: 1, bottom: 0}}
            exit={{ opacity: 0,  bottom: -300}}
            transition={{ duration: 0.3 }}
        >
            {/* header */}
            <div className='p-[20px] pb-0'>
                <button onClick={() => setActiveModal(false)} className='ml-auto block'> <IoMdClose className='text-[24px]'/> </button>    
            </div>
            
            <div className='px-[20px] pb-[35px]'>
                <div className='flex flex-col justify-center items-center gap-3'>

                    {type === 'success' && <FaCheckCircle className='text-[100px] text-green-500'/>}
                    {type === 'danger' && <BiSolidErrorAlt className='text-[110px] text-red-500'/>}
                    
                    <h1 className='text-[18px] uppercase font-medium text-center'>{title}</h1>
                    <div className='flex flex-col gap-[10px] text-[14px] text-[#777]'>
                        {children}
                    </div>
                        <Button onClick={() => setActiveModal(false)}>Хорошо</Button>
                    </div>
            </div>
            

        </motion.div>
    </motion.div>
  )
}

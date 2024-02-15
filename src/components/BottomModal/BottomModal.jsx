import React from 'react';
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export default function BottomModal({title, setActiveModal, isFullScreen, children}) {
  return (
    <motion.div className='
        fixed top-0 left-0
        flex justify-center
        w-full h-full 
        bg-black/50
        z-[9998]
        backdrop-blur-sm'
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.2 }}
    >
        <motion.div className={`
            absolute
            bg-white 
            rounded-t-[20px]
            w-full max-w-[400px] max-h-[90vh]
            overflow-auto
            ${isFullScreen && 'h-[95%]'}    
        `}

            initial={{ opacity: 0, bottom: -300}}
            animate={{ opacity: 1, bottom: 0}}
            exit={{ opacity: 0,  bottom: -300}}
            transition={{ duration: 0.3 }}
        >
            {/* header */}
            <div className='
                flex justify-between 
                items-center 
                p-[20px]
                border-b border-[#ddd]
            '>
                <span className='text-[18px] font-medium'>
                    {title}
                </span>
                <button onClick={() => setActiveModal(false)}>
                    <IoMdClose className='text-[24px]'/>
                </button>    
            </div>

            {/* body */}
            <div className='mt-[15px] pb-[40px]'>
                {children}
            </div>
        </motion.div>
    </motion.div>
  )
}

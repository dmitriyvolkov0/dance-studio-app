import React from 'react';
import { FaUserCircle } from "react-icons/fa";

export default function WhoGoindItem({data}) {
  return (
    <div className='
        flex items-center gap-4 
        py-[10px] px-[10px] mb-[5px] 
        bg-[#f1f1f1] 
        text-[#333]
        rounded-[5px]
        active:translate-x-2
        duration-300
        cursor-pointer
    '>
        <FaUserCircle className='text-[24px]'/>
        <span className='text-[16px] capitalize'>{data}</span>
    </div>
  )
}

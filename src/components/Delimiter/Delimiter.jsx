import React from 'react'

export default function Delimiter({children, className}) {
  return (
    <div className={`flex justify-center items-center gap-4 ${className}`}>
        <div className='w-[80px] h-px bg-[#aaa]'></div>
        <span className='text-[#aaa]'>
            {children}
        </span>
        <div className='w-[80px] h-px bg-[#aaa]'></div>
    </div>
  )
}

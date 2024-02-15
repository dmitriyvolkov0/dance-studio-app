import React from 'react'

export default function Input({className, ref, ...props}) {
  return (
    <input 
        {...props}
        className={`bg-white shadow-1 rounded-[5px] px-[15px] py-[10px] text-[16px] outline-none ${className}`}
    />
  )
}

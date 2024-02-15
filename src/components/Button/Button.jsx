import React from 'react';
import Spinner from '@components/Spinner/Spinner';

export default function Button({ butType, butSize, children, isLoading, className, ...props }) {
    
    switch (butType) {
        case 'danger':
            return (
              <button
                  {...props}
                    className={`
                        shadow-1 
                        flex items-center justify-center gap-2
                        bg-red-600 text-[#fff]
                        hover:bg-red-400
                        active:bg-red-700
                        duration-300
                        rounded-[5px] 
                        outline-none 
                        ${butSize === 'sm' ? 'px-[7px] py-[7px] text-[14px]' : ' px-[15px] py-[10px] text-[16px]'}
                        ${className}`}
              >
                  {children}
              </button>
            )
    
        default:
            return (
                <button
                    {...props}
                    className={`
                        shadow-1 
                        flex items-center justify-center gap-2
                        bg-brand text-[#fff]
                        hover:bg-brand-hover
                        active:bg-brand-active
                        duration-300
                        rounded-[5px] 
                        outline-none
                        ${butSize === 'sm' ? 'px-[7px] py-[7px] text-[14px]' : ' px-[15px] py-[10px] text-[16px]'}
                        ${className}    
                    `}
                >
                    {children}
                </button>
              )
    }
}

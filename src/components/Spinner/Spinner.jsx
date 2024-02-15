import React from 'react';
import s from './Spinner.module.css';
export default function Spinner({text, className}) {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>   
            <div className={s.lds_ring}><div></div><div></div><div></div><div></div></div>
            {text && <span className='text-[14px] text-[#444]'>{text}</span>}
        </div>
    )
}

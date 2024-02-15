import React from 'react';

export default function Block({ onClickHandle }) {
  return (
    <div>
        <h1 className="font-1 text-[96px] text-white text-center">
            <span className='text-brand'>Spin </span>City
        </h1>
        <div className='bg-white h-px w-[120px] mx-auto'></div>
        <p className="font-2 text-[24px] mt-[15px] text-white uppercase text-center">Школа танцев <br/>в воронеже</p>
        
        <button className='
            font-2
            font-[900]
            uppercase
            block
            mx-auto mt-[15px]
            bg-white 
            hover:bg-brand-hover
            active:bg-brand-active
            px-[50px] py-3
            duration-300
        '
            onClick={onClickHandle}
        >
            Записаться
        </button>
    </div>
  )
}

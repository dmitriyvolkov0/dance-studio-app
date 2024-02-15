import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Item({link, icon, title}) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <Link to={link} className={`
                flex flex-col justify-center items-center 
                ${currentPath === link && 'text-brand font-medium'}
            `}>

                {icon}
                <span className='text-[13px] mt-[2px]'>{title}</span>
            </Link>
        </div>
    )
}

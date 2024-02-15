import React from 'react'
import Button from '@components/Button/Button';
import Container from '@components/Container/Container'; 
import { FaUserCircle } from "react-icons/fa";
import Card from '@components/Card/Card';

import { MdOutlineLogout } from "react-icons/md";

export default function ProfileBlock({ user, onLogout }) {

  return (
    <div>
        <div className="w-full h-[200px] bg-gradient-1 rounded-bl-[55px]"></div>
        <Container>
          <Card className="-mt-[100px] text-center">
            <FaUserCircle className='text-[80px] text-[#222]'/>
            <span className='text-[18px] font-medium mt-1 capitalize'>{user.name}</span>
            <span className='text-[15px] text-[#666] mb-3'>{user && user.email}</span>
            <Button onClick={onLogout} className="w-full max-w-[200px] mt-2"><MdOutlineLogout className='text-[18px]'/>Выйти</Button>
          </Card>
        </Container>
    </div>
  )
}

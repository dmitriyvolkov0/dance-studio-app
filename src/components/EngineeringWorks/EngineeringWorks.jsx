import React from 'react';
import EngineeringWorksImg from '@assets/img/engineeringWorks.webp';
import Container from '@components/Container/Container';

export default function EngineeringWorks() {
  return (
    <Container className="flex gap-4 h-screen w-full flex-col justify-center items-center bg-brand/40">
        <img src={EngineeringWorksImg} alt="Технические работы" />
        <h1 className='text-center font-[20px] font-medium'>На нашем сервисе проводятся технические работы! Извините за неудобства.</h1>
    </Container>
  )
}
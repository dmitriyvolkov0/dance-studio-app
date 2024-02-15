import React from 'react';
import BlockedUserImg from '@assets/img/account-blocked.webp';
import Container from '@components/Container/Container';

export default function BlockedUser() {
  return (
    <Container className='flex flex-col items-center justify-center h-screen bg-red-600'>
        <img src={BlockedUserImg} alt="Ваш аккаунт заблокирован!" />
        <span className='text-[18px] uppercase font-medium text-[#fff] text-center mt-4'>Ваш аккаунт заблокирован администрацией!</span>
    </Container>
  )
}

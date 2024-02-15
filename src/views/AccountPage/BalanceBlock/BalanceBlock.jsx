import React from 'react';
import Card from '@components/Card/Card';
import Container from '@components/Container/Container';
import Title from '@components/Title/Title';
import Button from '@components/Button/Button';

import { MdAddCard } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import {PAY_PAGE} from '@utils/constants/routesConstants.js';

export default function BalanceBlock({ user }) {
  const navigate = useNavigate();

  return (
    <Container className="my-6">
        <Card>
            <Title>Мой Баланс</Title>
            <span className='text-gradient-1 text-[50px] font-bold'>{user.balance} Р</span>
            <Button onClick={() => navigate(PAY_PAGE)} className="w-full max-w-[200px] mt-3"><MdAddCard className='text-[18px]'/>Пополнить</Button>
            {/* <Button onClick={() => navigate(PAY_PAGE)} className="w-full max-w-[200px] mt-3"><IoCashOutline className='text-[18px]'/>Вывести</Button> */}
        </Card>
    </Container>
  )
}

import React from 'react';
import Title from '@components/Title/Title';
import Container from '@components/Container/Container';
import QuestionsImg from '@assets/img/questions.webp';
import Button from '@components/Button/Button';
import { LuHelpCircle } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { SUPPORT_PAGE } from '@utils/constants/routesConstants.js';

export default function ProblemBlock() {
  const navigate = useNavigate();

  return (
    <Container className="mt-6 mb-[100px]">
        <Title className="mb-4">Возникла проблема?</Title>
        <img src={QuestionsImg} alt="ВОЗНИКЛА ПРОБЛЕМА?" className='mx-auto'/>
        <p className='text-center text-[16px] font-medium my-4'>Вы всегда можете обратиться к нам и мы с радостью Вам поможем!</p>
        <Button className="w-full" onClick={ ()=> navigate(SUPPORT_PAGE)}><LuHelpCircle className='text-[18px]'/>Задать вопрос</Button>
    </Container>
  )
}

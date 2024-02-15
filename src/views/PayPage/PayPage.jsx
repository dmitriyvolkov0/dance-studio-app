import React from 'react';

import Nav from '@components/Nav/Nav';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Title from '@components/Title/Title';
import Container from '@components/Container/Container';
import { MdOutlineCurrencyRuble } from "react-icons/md";
import MoneyImg from '@assets/img/money.webp';

export default function PayPage({user}) {
  const [sum, setSum] = React.useState(100);

  return (
    <>
      <Nav title="Пополнить" backArrow={true}/>
      <Container className="flex items-cente justify-center w-full h-screen -mt-[50px]">
        <form className="flex flex-col gap-4 items-center justify-center" method="POST" action="https://yoomoney.ru/quickpay/confirm">
          <input type="hidden" name="receiver" value="4100116399893441"/> {/* Счет, на который поступят средства */}
          <input type="hidden" name="label" value={user.uid}/> {/* user uid*/}
          <input type="hidden" name="quickpay-form" value="button"/>
          <input type="hidden" data-type="number" name="sum" value={+sum + (sum/100*3)} readOnly/>

          <img src={MoneyImg} className="max-w-[200px] w-full" alt="Пополнение баланса" />
          <Title>Пополнение баланса</Title>
          <div className='w-full'>
            <span className='block mb-[7px] text-[#777] text-[12px]'>Сумма пополнения:</span>
            <div className='relative'>
              <Input className="w-full" min="1" max="1000" type="number" onInput={(e) => setSum(e.target.value)} value={sum}  placeholder="Укажите сумму"/>
              <MdOutlineCurrencyRuble className='absolute top-0 bottom-0 right-[30px] my-auto h-fit'/>
            </div>
          </div>
          
          <Button className="w-full" type="submit">Пополнить счёт</Button>

        </form>
      </Container>
    </>
  )
}

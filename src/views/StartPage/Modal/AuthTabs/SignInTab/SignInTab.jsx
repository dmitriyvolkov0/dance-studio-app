import React from 'react';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Delimiter from '@components/Delimiter/Delimiter';
import { FaGooglePlusG } from "react-icons/fa";

export default function SignInTab({props}) {
  return (
    <>
        <Input value={props.userLoginEmail} onInput={(e) => props.setUserLoginEmail(e.target.value)} type="email" placeholder="Ваш Email"/>
        <Input value={props.userLoginPassword} onInput={(e) => props.setUserLoginPassword(e.target.value)} type="password" placeholder="Пароль"/>
        <Button onClick={props.onSignInWithEmail} butType="brand">Войти</Button>
        <Delimiter>Или</Delimiter>
        <Button butType="danger" onClick={props.onSignInWithGoogle}>
            <FaGooglePlusG className='text-[25px]'/>Войти через Google
        </Button>
        {/* <Button className="bg-black hover:bg-gray-400 active:bg-gray-900" onClick={onSignInWithApple}>
            <IoLogoApple className='text-[25px]'/>Войти через Apple
        </Button> */}
    </>
  )
}

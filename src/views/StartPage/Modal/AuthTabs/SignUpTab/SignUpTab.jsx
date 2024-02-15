import React from 'react';
import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Delimiter from '@components/Delimiter/Delimiter';
import { FaGooglePlusG } from "react-icons/fa";

export default function SignUpTab({props}) {
  return (
    <>
        <Input value={props.userName} onInput={(e) => props.setUserName(e.target.value)} type="name" placeholder="Как к Вам обращаться?"/>
        {props.userNameErr && <span className='text-red-500 text-[13px] -mt-[10px]'>{props.userNameErr}</span> }

        <Input value={props.userEmail} onInput={(e) => props.setUserEmail(e.target.value)} type="email" placeholder="Укажите Ваш email"/>
        {props.userEmailErr && <span className='text-red-500 text-[13px] -mt-[10px]'>{props.userEmailErr}</span> }
        
        <Input value={props.userPassword} onInput={(e) => props.setUserPassword(e.target.value)} type="password" placeholder="Придумайте пароль"/>
        {props.userPasswordErr && <span className='text-red-500 text-[13px] -mt-[10px]'>{props.userPasswordErr}</span> }

        <Button isLoading={true} butType="brand" onClick={props.onSignUpWithEmail}>Зарегистрироваться</Button>
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

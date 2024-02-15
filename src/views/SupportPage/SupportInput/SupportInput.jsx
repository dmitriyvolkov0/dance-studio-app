import React from 'react'
import Input from '@components/Input/Input';
import { IoSendSharp } from "react-icons/io5";
import Container from '@components/Container/Container';

export default function SupportInput({ sendMessage, inputText, setInputText }) {


  return (
    <Container className='fixed left-0 right-0  bottom-[75px] w-full mx-auto'>
        <Input className="w-full rounded-[90px] pr-[40px]" 
            placeholder="Задайте свой вопрос..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value) }
        />
        <button className='
            absolute right-[15px] top-0 bottom-0 
            my-auto 
            p-[10px] 
            rounded-r-[90px]
            text-brand
            hover:text-brand-hover    
            active:text-brand-active'
            onClick={sendMessage}
        >
            <IoSendSharp/>
        </button>
    </Container>
  )
}

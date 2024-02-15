import React, { useEffect, useState } from 'react';
import Nav from '@components/Nav/Nav';
import Container from '@components/Container/Container';
import Message from './Message/Message';
import SupportInput from './SupportInput/SupportInput';
import Spinner from '@components/Spinner/Spinner';
import EmptyChat from './EmptyChat/EmptyChat.jsx';

import { sendSupportMessage } from '../../services/firebase/firebaseApi.js';
import { getDatabase, onValue, ref } from '@firebase/database';
import { getFullCurrentDate, getCurrentTime } from '@utils/helpers/timeFunctions.js';

export default function SupportPage({ user }) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState(null);

  // Отправить сообщение
  const sendMessage = () => {
    setInputText('');
    if(inputText.trim() !== ''){
      const date = {
        full: getFullCurrentDate(),
        time: getCurrentTime()
      }
      sendSupportMessage(user.uid, user.email, inputText, date);
    }
  }

  // Получить все сообщения
  useEffect(()=> {
    const db = getDatabase();
    const recordsRef = ref(db, `supportChats/${user.uid}`);
    onValue(recordsRef, (snapshot) => {
      const data = Object.values(snapshot.val() ? snapshot.val() : {});
      setMessages(data);
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight + 100), 0);
    })
  }, []);

  
  return (
    <>
      <Nav title="Тех.поддержка"/>
      <Container className="mt-[80px] pb-[150px] flex flex-col gap-3">
        {
          messages && messages.map((item, index) => 
            <Message role={item.role} text={item.message} time={item.date.time} key={index}/>
          )
        }

        {
          messages === null && <Spinner/>
        }

        {
          messages && messages.length === 0 && <EmptyChat />
        }
      </Container>
      <SupportInput sendMessage={sendMessage} inputText={inputText} setInputText={setInputText}/>
    </>
  )
}

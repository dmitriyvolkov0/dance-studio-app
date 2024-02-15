import React from 'react';
import { logout } from '@services/firebase/firebaseApi.js';

import Nav from '@components/Nav/Nav';
import ProfileBlock from './ProfileBlock/ProfileBlock'; 
import BalanceBlock from './BalanceBlock/BalanceBlock';
import HistoryBlock from './HistoryBlock/HistoryBlock';
import ProblemBlock from './ProblemBlock/ProblemBlock';

export default function AccountPage({ user, historyRecords }) {
    const onLogout = () => {
        logout().then( response => {
            
        }).catch((err) => {
            alert('При выходе из аккаунта возникла ошибка!');
        })
    }

    return (
        <div>
            <Nav title="Аккаунт"/>
            <ProfileBlock user={user} onLogout={onLogout}/>
            <BalanceBlock user={user}/>
            <HistoryBlock historyRecords={historyRecords}/>
            <ProblemBlock/>
        </div>
    )
}

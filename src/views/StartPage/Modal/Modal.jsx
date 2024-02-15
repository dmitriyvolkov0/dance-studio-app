import React from 'react';
import { AnimatePresence } from "framer-motion";

import BottomModal from '@components/BottomModal/BottomModal';
import AuthTabs from './AuthTabs/AuthTabs';

export default function Modal(props) {
    return (
        <AnimatePresence>
            {props.isActiveModal && 
                <BottomModal title="Авторизация" setActiveModal={props.setActiveModal}>
                    <AuthTabs props={props}/>
                </BottomModal>        
            }
        </AnimatePresence>
    )
}

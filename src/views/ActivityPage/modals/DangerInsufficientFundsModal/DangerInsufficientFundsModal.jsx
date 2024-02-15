import React from 'react';
import { AnimatePresence } from 'framer-motion';
import CenterModal from '@components/CenterModal/CenterModal';

export default function DangerInsufficientFundsModal({ isActiveModal, setActiveModal }) {
  return (
    <AnimatePresence>
      {isActiveModal && 
        <CenterModal 
          title="Недостаточно средств!" 
          setActiveModal={setActiveModal} 
          type="danger"
        >
          <p>На Вашем балансе недостаточно средств! Пополните баланс в личном кабинете.</p>
        </CenterModal>
      }
    </AnimatePresence>
  )
}

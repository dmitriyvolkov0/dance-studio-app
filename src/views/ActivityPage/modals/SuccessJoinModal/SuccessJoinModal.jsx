import React from 'react';
import { AnimatePresence } from 'framer-motion';
import CenterModal from '@components/CenterModal/CenterModal';

export default function SuccessJoinModal({ isActiveModal, setActiveModal }) {
  return (
    <AnimatePresence>
        {isActiveModal && 
          <CenterModal 
            title="Вы успешно записались на занятие!" 
            setActiveModal={setActiveModal} 
            type="success"
          >
            <p>С Вашего баланса списались денежные средства. Эти средства можно вернуть, если отменить запись более чем за 24 часа до начала занятия.</p>
            <p>Если Вы отменили занятие менее чем за 24 часа до начала, то возврат средств будет невозможен!</p>
          </CenterModal>
        }
      </AnimatePresence>
  )
}

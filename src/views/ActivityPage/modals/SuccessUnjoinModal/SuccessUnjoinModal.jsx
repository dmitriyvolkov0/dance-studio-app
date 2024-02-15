import React from 'react';
import { AnimatePresence } from 'framer-motion';
import CenterModal from '@components/CenterModal/CenterModal';

export default function SuccessUnjoinModal({ isActiveModal, setActiveModal }) {
  return (
    <AnimatePresence>
      {isActiveModal && 
        <CenterModal 
          title="Вы успешно отменили запись на занятие!" 
          setActiveModal={setActiveModal} 
          type="success"
        >
          <p>Вы отменили запись на занятие. Ваши средства вернулись на баланс.</p>
        </CenterModal>
      }
    </AnimatePresence>
  )
}

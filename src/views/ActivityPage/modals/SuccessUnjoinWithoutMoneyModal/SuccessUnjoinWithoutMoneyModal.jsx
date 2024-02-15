import React from 'react';
import { AnimatePresence } from 'framer-motion';
import CenterModal from '@components/CenterModal/CenterModal';

export default function SuccessUnjoinWithoutMoneyModal({ isActiveModal, setActiveModal }) {
  return (
    <AnimatePresence>
      {isActiveModal && 
        <CenterModal 
          title="Вы успешно отменили запись на занятие менее чем за 24 часа!" 
          setActiveModal={setActiveModal} 
          type="success"
        >
          
          <p>Вы отменили запись на занятие. По нашим правилам <span className='bg-red-300 text-[#333] p-[1px] rounded-[4px]'>мы не можем вернуть Ваши средства,</span> если отмена записи была произведена менее чем за 24 часа до начала занятия.</p>
        </CenterModal>
      }
    </AnimatePresence>
  )
}

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import BottomModal from '@components/BottomModal/BottomModal';
import Spinner from '@components/Spinner/Spinner';
import Container from '@components/Container/Container';

import WhoGoindItem from './WhoGoindItem/WhoGoindItem';
import WhoGoingEmptyList from './WhoGoingEmptyList/WhoGoingEmptyList';

export default function WhoGoingModal({ whoGoingList, whoGoindModalIsActive, setWhoGoindModalIsActive }) {

  return (
    <AnimatePresence>
        { whoGoindModalIsActive && 
          <BottomModal isFullScreen={true} title="Кто идет?" setActiveModal={setWhoGoindModalIsActive}>
            <Container>
                {
                    whoGoingList && whoGoingList.map((item, index) => 
                        <WhoGoindItem data={item} key={index}/>
                    )
                }

                {whoGoingList === null && <Spinner/>}
                {whoGoingList && whoGoingList.length === 0 && <WhoGoingEmptyList/>}
            </Container>
            
          </BottomModal>
        }
      </AnimatePresence>
  )
}

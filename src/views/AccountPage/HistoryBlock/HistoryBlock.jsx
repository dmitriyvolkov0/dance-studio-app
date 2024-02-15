import React from 'react';
import { useNavigate } from 'react-router';
import { ACTIVITIES_HISTORY } from '@utils/constants/routesConstants.js';

import Container from '@components/Container/Container';
import Title from '@components/Title/Title';
import ActivityCard from '@components/ActivityCard/ActivityCard';
import Button from '@components/Button/Button';
import Spinner from '@components/Spinner/Spinner'; 
import EmptyActivitiesHistory from '@components/EmptyActivitiesHistory/EmptyActivitiesHistory';

export default function HistoryBlock({ historyRecords }) {
  const navigate = useNavigate();

  return (
    <Container>
        <Title className="mb-4">Посещённые занятия</Title>
        <div className='flex flex-col gap-6'>
          {
            historyRecords && historyRecords.map((record, index) => 
              index <= 2 && <ActivityCard data={record} isHideButtons={true} key={index}/>
            )
          }

          {
            historyRecords && historyRecords.length > 2 &&
              <Button onClick={() => navigate(ACTIVITIES_HISTORY)}>Больше информации</Button>
          }
          { historyRecords === null && <Spinner/> }
          { historyRecords && historyRecords.length === 0 && <EmptyActivitiesHistory/> }
        </div>
    </Container>
  )
}

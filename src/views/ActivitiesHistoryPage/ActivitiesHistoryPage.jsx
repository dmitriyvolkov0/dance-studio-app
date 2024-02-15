import React, { useEffect, useState } from 'react';
import Nav from '@components/Nav/Nav';
import Container from '@components/Container/Container';
import ActivityCard from '@components/ActivityCard/ActivityCard';
import EmptyActivitiesHistory from '@components/EmptyActivitiesHistory/EmptyActivitiesHistory';
import Spinner from '@components/Spinner/Spinner'; 
import Button from '@components/Button/Button';

export default function ActivitiesHistoryPage({ historyRecords }) {
  const [historyPer, setHistoryPer] = useState(10);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <>
        <Nav title="История" backArrow={true}/>
        <Container className="mt-[80px] pb-[100px] flex flex-col gap-6">
            {
                historyRecords && historyRecords.map((record, index) => 
                    index < historyPer && <ActivityCard data={record} isHideButtons={true} key={index}/>
                )
            }

            { historyRecords === null && <Spinner/> }
            { historyRecords && historyRecords.length === 0 && <EmptyActivitiesHistory/> }
            { historyRecords && historyRecords.length > historyPer && <Button onClick={() => setHistoryPer(historyPer + 3)}>Вывести еще</Button> }

        </Container>
    </>
  )
}

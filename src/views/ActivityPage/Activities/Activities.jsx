import React from 'react';
import ActivityCard from '@components/ActivityCard/ActivityCard';
import Spinner from '@components/Spinner/Spinner'; 
import Container from '@components/Container/Container'; 
import EmptyActivities from './EmptyActivities/EmptyActivities';

export default function Activities({ user, records, onJoinClick, onUnjoinClick, onWhoGoingClick }) {
    return (
        <Container className="mt-6 mb-[100px] flex flex-col gap-6">
            {
                records && records.map((record, index) => 
                    <ActivityCard 
                        user={user}
                        data={record} 
                        isRecorded={false} 
                        key={index} 
                        onJoinClick={onJoinClick}
                        onUnjoinClick={onUnjoinClick}
                        onWhoGoingClick={onWhoGoingClick}
                    />
                ).reverse()
            }
            {records && records.length === 0 && <EmptyActivities/>}
            {records === null && <Spinner text="Загрузка информации" />}
        </Container>
    )
}

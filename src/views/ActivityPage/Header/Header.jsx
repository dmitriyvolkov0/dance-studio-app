import React from 'react';
import Nav from '@components/Nav/Nav';

export default function Header() {
  return (
    <>
        <Nav title="Занятия" />
        <div className="w-full h-[200px] bg-gradient-1 rounded-bl-[55px] flex items-center justify-center">
            <h1 className="mt-[55px] text-[24px] font-medium text-white">Доступные занятия</h1>
        </div>
    </>
  )
}

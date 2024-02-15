import React from 'react';
import TopNav from './TopNav/TopNav';
import BottomNav from './BottomNav/BottomNav';

export default function Nav({ title, backArrow }) {
  return (
    <>
      <TopNav title={title} backArrow={backArrow}/>
      <BottomNav/>
    </>
  )
}

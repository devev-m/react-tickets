import React from 'react';
import './style.css';
import { FilterControlPanel } from './components/FilterControlPanel/FilterControlPanel';
import { TicketsGroup } from './components/TicketsGroup/TicketsGroup';

export const MainInfo = () => {

  return (
    <div className='main'>
      <FilterControlPanel />
      <TicketsGroup />
    </div >
  )
}

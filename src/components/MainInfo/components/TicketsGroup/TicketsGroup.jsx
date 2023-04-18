import React from 'react';
import tickets from '../../../../tickets.json';
import { Ticket } from './components/Ticket/Ticket';

export const TicketsGroup = () => {


   return (
      <div className='tickets'>
         {tickets.tickets.map((item) => (
            <Ticket
               key={item}
            />
         ))}
      </div>
   )
}

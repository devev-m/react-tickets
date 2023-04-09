import React from 'react';
import tickets from '../../tickets.json';

export default function TicketsGroup() {
   return (
      <div>
         {tickets.tickets.map((item, index) => (
            <div key={index}>
               {item.arrival_date}
            </div>
         ))};
      </div>
   )
}

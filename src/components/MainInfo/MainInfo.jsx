import React from 'react';
import './style.css';
import tickets from '../../tickets.json';
import { FilterControlPanel } from './components/FilterControlPanel/FilterControlPanel';
import { Ticket } from './components/Ticket/Ticket';
import { useSelector } from 'react-redux';

export const MainInfo = () => {
  const ticketsArray = tickets.tickets;

  const data = useSelector((state) => state.data);

  console.log(data.data);

  return (
    <div className="main">
      <FilterControlPanel />
      <div className="tickets">
        {ticketsArray
          .sort((a, b) => a.price - b.price)
          .map((item) => (
            <Ticket
              key={
                item.departure_date + item.departure_time + item.arrival_date + item.arrival_time
              }
              item={item}
            />
          ))}
      </div>
    </div>
  );
};

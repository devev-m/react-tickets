import React from 'react';
import './style.css';
import tickets from '../../tickets.json';
import { FilterControlPanel } from '../../components/FilterControlPanel/FilterControlPanel';
import { Ticket } from '../../components/Ticket/Ticket';
import { useSelector } from 'react-redux';

export const HomePage = () => {
  const ticketsArray = tickets.tickets;

  const data = useSelector((state) => {
    return state;
  });

  const checkboxArray = data.checkbox;

  const mergeArr = ticketsArray
    .map((item1) => {
      const item2 = checkboxArray.find((item2) => item1.stops === item2.stops);
      return { ...item1, ...item2 };
    })
    .filter((item) => item.isChecked === true);

  return (
    <>
      <h1 className="title">React tickets App</h1>

      <div className="main">
        <FilterControlPanel />
        <div className="tickets">
          {(checkboxArray.length === 0 ? ticketsArray : mergeArr)
            .sort((a, b) => a.price - b.price)
            .map((item) => (
              <Ticket
                key={
                  item.departure_date + item.departure_time + item.arrival_date + item.arrival_time
                }
                item={item}
                currency={data.currency}
              />
            ))}
        </div>
      </div>
    </>
  );
};

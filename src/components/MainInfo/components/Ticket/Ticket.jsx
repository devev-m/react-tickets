import React from 'react';
import './style.css';
import { GetDate } from './GetDate';

export const Ticket = ({ item }) => {
  const ticketStops =
    item.stops === 0
      ? 'Без пересадок'
      : item.stops === 1
      ? '1 пересадка'
      : item.stops === 2
      ? '2 пересадки'
      : item.stops === 3
      ? '3 пересадки'
      : '';

  const departureDate = GetDate(item.departure_date);
  const arrivalDate = GetDate(item.arrival_date);

  return (
    <div className="tickets__item">
      <div className="tickets__item-left">
        <img
          className="tickets__item-left-img"
          src={process.env.PUBLIC_URL + '/images/' + item.carrier + '-logo.png'}
          alt="logo-flight"
        />
        <button className="tickets__item-left-button">
          <span>Купить</span> за {item.price}
        </button>
      </div>
      <div className="tickets__item-right">
        <div className="tickets__item-right-header">
          <div className="tickets__item-right-time">{item.departure_time}</div>
          <div className="tickets__item-stops">
            <div className="tickets__item-stops-name">{ticketStops}</div>
            <img
              src={process.env.PUBLIC_URL + '/images/plane.svg'}
              className="tickets__item-stops-icon"
              alt="plane-logo"
            />
          </div>
          <div className="tickets__item-right-time">{item.arrival_time}</div>
        </div>
        <div className="tickets__item-right-body">
          <div className="tickets__item-origin">
            <div className="tickets__item-origin-city tickets__item-city">
              {item.origin}, {item.origin_name}
            </div>
            <div className="tickets__item-origin-date tickets__item-date">{departureDate}</div>
          </div>
          <div className="tickets__item-destination">
            <div className="tickets__item-destination-city tickets__item-city">
              {item.destination}, {item.destination_name}
            </div>
            <div className="tickets__item-destination-date tickets__item-date">{arrivalDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

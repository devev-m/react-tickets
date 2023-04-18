import React from 'react';
import './style.css';
import { Currency } from './components/Currency/Currency';

export const CurrencyGroup = () => {
  const currency = ['RUB', 'USD', 'EUR'];

  return (
    <div className='filters__currency'>
      <div className='filters__currenc-title'>Валюта</div>
      <div className='filters__currency-buttons'>
        {currency.map(item => {
          return (
            <Currency
              key={item}
              currency={item}
            />
          )
        })}
      </div>

    </div>
  )
};

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { setCurrency } from '../../../../store/actions';
import { CurrencyButton } from './components/Currency/CurrencyButton';

export const CurrencyGroup = () => {
  const [activeButton, setActiveButton] = useState('RUB');

  const currencyArray = ['RUB', 'USD', 'EUR'];

  const dispatch = useDispatch();

  const handleClick = (name) => {
    setActiveButton(name);
    dispatch(setCurrency(name));
  };

  return (
    <div className="filters__currency">
      <div className="filters__currency-title">Валюта</div>
      <div className="filters__currency-buttons">
        {currencyArray.map((item) => (
          <CurrencyButton
            key={item}
            name={item}
            activeButton={activeButton}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

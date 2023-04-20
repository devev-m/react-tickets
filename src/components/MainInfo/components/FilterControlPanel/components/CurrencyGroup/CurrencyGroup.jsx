import React, { useState } from 'react';
import './style.css';
import { CurrencyButton } from './components/Currency/CurrencyButton';

export const CurrencyGroup = () => {
  const [activeButton, setActiveButton] = useState('RUB');

  return (
    <div className="filters__currency">
      <div className="filters__currency-title">Валюта</div>
      <div className="filters__currency-buttons">
        <CurrencyButton
          name={'RUB'}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <CurrencyButton
          name={'USD'}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <CurrencyButton
          name={'EUR'}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
    </div>
  );
};

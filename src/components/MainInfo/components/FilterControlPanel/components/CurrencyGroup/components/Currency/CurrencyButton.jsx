import React from 'react';
import './style.css';

export const CurrencyButton = ({ name, activeButton, setActiveButton }) => {
  const toggleActiveButton = (e) => {
    setActiveButton(e.target.innerText);
  };

  return (
    <button
      className={
        activeButton === name
          ? 'filters__currency-button filters__currency-button_active'
          : 'filters__currency-button'
      }
      onClick={(e) => toggleActiveButton(e)}
    >
      {name}
    </button>
  );
};

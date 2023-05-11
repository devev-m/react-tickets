import React from 'react';
import './style.css';

export const CurrencyButton = ({ name, activeButton, handleClick }) => {
  const toggleActiveButton = (e) => {
    handleClick(e.target.innerText);
  };

  return (
    <button
      className={
        activeButton === name
          ? 'filters__currency-button filters__currency-button_active'
          : 'filters__currency-button'
      }
      onClick={toggleActiveButton}
    >
      {name}
    </button>
  );
};

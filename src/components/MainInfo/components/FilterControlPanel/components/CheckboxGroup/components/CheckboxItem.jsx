import React from 'react';
import './styles.css';

export const CheckboxItem = ({ name }) => {
  return (
    <div className="filters__checkbox-item">
      <div className="filters__checkbox-item-name">
        <label className="filters__checkbox-item-label">
          <img
            src={process.env.PUBLIC_URL + '/images/check.svg'}
            className="filters__checkbox-item-icon"
            alt="plane-logo"
          />
        </label>
        <input
          className="filters__checkbox-item-input"
          type="checkbox"
        />
        {name}
      </div>
      <div className="filters__checkbox-item-only">Только</div>
    </div>
  );
};

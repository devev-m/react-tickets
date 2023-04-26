import React from 'react';
import './styles.css';

export const CheckboxItem = ({ name, isChecked, checkVisible, checkFromButtonOnly }) => {
  const checkIconVisible = () => {
    checkVisible(name);
  };

  const checkThisIconVisible = () => {
    checkFromButtonOnly(name);
  };

  return (
    <div className="filters__checkbox-item">
      <div className="filters__checkbox-item-name">
        <label className="filters__checkbox-item-label">
          <input
            onChange={checkIconVisible}
            className="filters__checkbox-item-input"
            type="checkbox"
          />
          {isChecked && (
            <img
              src={process.env.PUBLIC_URL + '/images/check.svg'}
              className="filters__checkbox-item-icon"
              alt="plane-logo"
            />
          )}
        </label>
        {name}
      </div>
      {name !== 'Все' && (
        <div
          className="filters__checkbox-item-only"
          onClick={checkThisIconVisible}
        >
          Только
        </div>
      )}
    </div>
  );
};

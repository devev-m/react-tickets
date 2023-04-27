import React from 'react';
import './styles.css';

export const CheckboxItem = ({ name, isChecked, checkUsingInput, checkUsingButtonOnly }) => {
  const clickFromInput = () => {
    checkUsingInput(name);
  };

  const clickFromButtonOnly = () => {
    checkUsingButtonOnly(name);
  };

  return (
    <div className="filters__checkbox-item">
      <div className="filters__checkbox-item-name">
        <label className="filters__checkbox-item-label">
          <input
            onChange={clickFromInput}
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
          onClick={clickFromButtonOnly}
        >
          Только
        </div>
      )}
    </div>
  );
};

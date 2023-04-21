import React from 'react';
import './style.css';
import { CheckboxItem } from './components/CheckboxItem';

export const CheckboxGroup = () => {
  return (
    <div className="filters__checkbox">
      <div className="filters__checkbox-title">Количество пересадок</div>
      <CheckboxItem
        id="all"
        name="Все"
      />
      <CheckboxItem
        id="0"
        name="Без пересадок"
      />
      <CheckboxItem
        id="1"
        name="1 пересадка"
      />
      <CheckboxItem
        id="2"
        name="2 пересадки"
      />
      <CheckboxItem
        id="3"
        name="3 пересадки"
      />
    </div>
  );
};

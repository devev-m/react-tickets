import React, { useState } from 'react';
import './style.css';
import { CheckboxItem } from './components/CheckboxItem';

export const CheckboxGroup = () => {
  const [checkState, setCheckState] = useState([
    { id: 1, name: 'Все', isChecked: false },
    { id: 2, name: 'Без пересадок', isChecked: false },
    { id: 3, name: '1 пересадка', isChecked: false },
    { id: 4, name: '2 пересадки', isChecked: false },
    { id: 5, name: '3 пересадки', isChecked: false },
  ]);

  const checkVisible = (name) => {
    const index = checkState.findIndex((elem) => elem.name === name);
    const newArr = [...checkState];
    const isChecked = newArr[index].isChecked;
    if (name === 'Все') {
      if (isChecked === false) {
        newArr.forEach((item) => (item.isChecked = true));
      } else {
        newArr.forEach((item) => (item.isChecked = false));
      }
    } else {
      if (isChecked === false) {
        newArr[index].isChecked = true;
      } else if (isChecked === true) {
        newArr[index].isChecked = false;
      }
    }
    setCheckState(newArr);
  };

  const checkFromButtonOnly = (name) => {
    console.log(name);
  };

  return (
    <div className="filters__checkbox">
      <div className="filters__checkbox-title">Количество пересадок</div>
      {checkState.map((item) => (
        <CheckboxItem
          key={item.id}
          name={item.name}
          isChecked={item.isChecked}
          checkVisible={checkVisible}
          checkFromButtonOnly={checkFromButtonOnly}
        />
      ))}
    </div>
  );
};

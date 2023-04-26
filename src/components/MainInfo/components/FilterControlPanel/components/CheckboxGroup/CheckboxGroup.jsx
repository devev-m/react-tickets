import React, { useState } from 'react';
import './style.css';
import { CheckboxItem } from './components/CheckboxItem';

export const CheckboxGroup = () => {
  const [checkboxItemArr, setCheckboxItemArr] = useState([
    { id: 1, name: 'Все', isChecked: true },
    { id: 2, name: 'Без пересадок', isChecked: true },
    { id: 3, name: '1 пересадка', isChecked: true },
    { id: 4, name: '2 пересадки', isChecked: true },
    { id: 5, name: '3 пересадки', isChecked: true },
  ]);

  const checkVisible = (name) => {
    const newArr = [...checkboxItemArr];

    const clickedItem = checkboxItemArr.find((elem) => elem.name === name);

    const isChecked = clickedItem.isChecked;

    if (name === 'Все') {
      if (isChecked === false) {
        newArr.forEach((item) => (item.isChecked = true));
      } else {
        newArr.forEach((item) => (item.isChecked = false));
      }
    } else {
      if (isChecked === false) {
        clickedItem.isChecked = true;
      } else if (isChecked === true) {
        clickedItem.isChecked = false;
      }
    }
    setCheckboxItemArr(newArr);
  };

  const checkFromButtonOnly = (name) => {
    const newArr = [...checkboxItemArr];

    const clickedItem = checkboxItemArr.find((elem) => elem.name === name);

    newArr.forEach((item) => (item.isChecked = false));

    clickedItem.isChecked = true;

    setCheckboxItemArr(newArr);
  };

  return (
    <div className="filters__checkbox">
      <div className="filters__checkbox-title">Количество пересадок</div>

      {checkboxItemArr.map((item) => (
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

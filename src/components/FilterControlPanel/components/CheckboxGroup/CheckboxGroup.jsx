import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { CheckboxItem } from './components/CheckboxItem';
import { setCheckbox } from '../../../../store/actions';

export const CheckboxGroup = () => {
  const [checkboxItemArr, setCheckboxItemArr] = useState([
    { id: 1, name: 'Все', isChecked: true },
    { id: 2, name: 'Без пересадок', stops: 0, isChecked: true },
    { id: 3, name: '1 пересадка', stops: 1, isChecked: true },
    { id: 4, name: '2 пересадки', stops: 2, isChecked: true },
    { id: 5, name: '3 пересадки', stops: 3, isChecked: true },
  ]);

  const dispatch = useDispatch();

  const checkUsingInput = (name) => {
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
      newArr[0].isChecked = false;
      if (isChecked === false) {
        clickedItem.isChecked = true;
        if (
          newArr[1].isChecked === true &&
          newArr[2].isChecked === true &&
          newArr[3].isChecked === true &&
          newArr[4].isChecked === true
        ) {
          newArr[0].isChecked = true;
        }
      } else if (isChecked === true) {
        clickedItem.isChecked = false;
      }
    }
    setCheckboxItemArr(newArr);
    dispatch(setCheckbox(checkboxItemArr));
  };

  const checkUsingButtonOnly = (name) => {
    const newArr = [...checkboxItemArr];

    const clickedItem = checkboxItemArr.find((elem) => elem.name === name);

    newArr.forEach((item) => (item.isChecked = false));

    clickedItem.isChecked = true;

    setCheckboxItemArr(newArr);
    dispatch(setCheckbox(checkboxItemArr));
  };

  return (
    <div className="filters__checkbox">
      <div className="filters__checkbox-title">Количество пересадок</div>

      {checkboxItemArr.map((item) => (
        <CheckboxItem
          key={item.id}
          name={item.name}
          isChecked={item.isChecked}
          checkUsingInput={checkUsingInput}
          checkUsingButtonOnly={checkUsingButtonOnly}
        />
      ))}
    </div>
  );
};

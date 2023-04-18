import React from 'react';
import './style.css';
import { CurrencyGroup } from './components/CurrencyGroup/CurrencyGroup';
import { CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';

export const FilterControlPanel = () => {
   return (
      <div className='filters'>
         <CurrencyGroup />
         <CheckboxGroup />
      </div>
   )
};

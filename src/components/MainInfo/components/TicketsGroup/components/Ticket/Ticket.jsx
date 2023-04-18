import React from 'react';
import './style.css';

export const Ticket = () => {
  return (
    <div className='tickets__item'>
      <div className='tickets__item-left'>
        <img className='tickets__item-left-img' src={process.env.PUBLIC_URL + '/images/s7-logo.png'} alt='logo-flight' />
        <button className='tickets__item-left-button'>Купить за ...</button>
      </div>
      <div className='tickets__item-right'></div>
    </div>
  )
}

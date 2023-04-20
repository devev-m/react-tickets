import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">React tickets App</h1>
      <a
        className="header__link"
        href="https://github.com/devev-m/react-tickets"
      >
        <img
          className="header__image"
          src={process.env.PUBLIC_URL + '/images/github.svg'}
          alt="github logo"
        />
        My GitHub
      </a>
    </div>
  );
};

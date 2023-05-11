import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <span>
          <Link to="/">Главная</Link>
        </span>
        <span>
          <Link to="/about">О проекте</Link>
          <a
            className="header__link"
            href="https://github.com/devev-m/react-tickets"
            target="_blunk"
          >
            My GitHub
          </a>
        </span>
      </nav>
    </div>
  );
};

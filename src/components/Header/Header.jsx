import React from 'react';
import './style.css';

export default function Header() {
   return (
      <div className='header'>
         <h1 className="header__title">React tickets App</h1>
         <a
            href="https://github.com/devev-m/react-tickets"
            className="header__link">
            <img
               src={process.env.PUBLIC_URL + "/images/github.svg"}
               alt="github logo"
               className="header__image"
            />
            My GitHub
         </a>
      </div>
   )
}

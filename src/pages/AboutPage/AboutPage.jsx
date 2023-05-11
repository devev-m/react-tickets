import React from 'react';
import './style.css';

export const AboutPage = () => {
  return (
    <div className="container">
      <ul className="about__list">
        Рендер авиабилетов из JSON-файла:
        <li>сортировка данных по цене (по возрастанию)</li>
        <li>фильтрация по пересадкам</li>
        <li>переключение валют (курс валют - условный, статический)</li>
      </ul>
      <ul className="about__list">
        Используемый стек:
        <li>HTML, CSS, JS</li>
        <li>react</li>
        <li>redux</li>
        <li>react-router-dom</li>
      </ul>
    </div>
  );
};

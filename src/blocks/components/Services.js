import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <section className='services'>
        <h3 className='services__title'>
          Услуги
        </h3>
        <ul className='servicesStock'>
          <li className='servicesStock__item'>
            <i className='fa fa-circle-o' />
            Персональный сайт на Django
          </li>
          <li className='servicesStock__item'>
            <i className='fa fa-circle-o' />
            Разработка дизайна
          </li>
          <li className='servicesStock__item'>
            <i className='fa fa-circle-o' />
            Интернет-магазин на Django
          </li>
          <li className='servicesStock__item'>
            <i className='fa fa-circle-o' />
            Адаптивная вёрстка
          </li>
          <li className='servicesStock__item'>
            <i className='fa fa-circle-o' />
            Landing page на Django
          </li>
          <li className='servicesStock__item'>
            <i className='fa fa-circle-o' />
            Поддержка сайта
          </li>
        </ul>
      </section>
    );
  }
}
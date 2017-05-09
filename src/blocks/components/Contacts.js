import React, { Component } from 'react';

export default class Contacts extends Component {
  render() {
    return (
      <section className='contacts'>
        <h3 className='contacts__title'>
          Контакты
        </h3>
        <ul className='contactsStock'>
          <li className='contactsStock__item'>
            <a href='mailto:shiningfinger@list.ru'>
              <i className='fa fa-envelope-o fa-1x'></i>
              <span>shiningfinger@list.ru</span>
            </a>
          </li>
          <li className='contactsStock__item'>
            <a href='#'
               className='not-follow'>
              <i className='fa fa-skype fa-1x'></i>
              <span>Пишите в скайп</span>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
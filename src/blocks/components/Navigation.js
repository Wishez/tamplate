import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isOpen: false
    };

    this.getActiveClass = this.getActiveClass.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }
  
  openMenu() {
    let $navList = $('#navList');
    
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $navList.show('fast');
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
    }
  }
   
  render() {
    const { blog, contacts, about, archive} = this.props;

    return (
      <div>
        <nav className='navigaton'>
          <button id='openMenuButton'
            className='navigation__openMenuButton visible-xs'
            onClick={this.openMenu}>
            <span className='sr-only'> 
              Toggle navigation
            </span>
            <i className='fa fa-bars fa-2x' />
          </button>
          <ul className='navList'
              id='navList'>
            <li className={this.getActiveClass(blog ? 'BLOG' : '')}>
              <a 
                href='#'
                className='navItem__refer'>
                Блог
              </a>
            </li>
            <li className={this.getActiveClass(contacts ? 'CONTACTS' : '')}>
              <a 
                href='#'
                className='navItem__refer'>
                  Контакты
              </a>
            </li>
            <li className='navItem'>
              <a href='http://shining-present.tw1.ru' 
                 className='navItem__refer not-follow'>
                 Портфолио
              </a>
            </li>
            <li className={this.getActiveClass(about ? 'ABOUT' : '')}>
              <a 
                href='#'
                className='navItem__refer'>
                  Обо мне
              </a>
            </li>
            <li className={this.getActiveClass(archive ? 'ARCHIVE' : '')}>
              <a 
                href='#'
                className='navItem__refer'>
                  Архив
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }


  getActiveClass(linkName) {
    const activeState = {
        'navItem': true,
        'active': true
    },
          normalState = 'navItem';
    switch (linkName) {
      case 'BLOG':      
        return classNames(activeState);
      case 'CONTACTS':
        return classNames(activeState);
      case 'ABOUT':
        return classNames(activeState);
      case 'ARCHIVE':
        return classNames(activeState);
      default:
        return normalState;
    }
  }
}

// <li className='navItem active'>
//               <Link 
//                   to='/' 
//                   className='navItem__refer'
//                   onClick={}>Блог</Link>
//             </li>
//             <li className='navItem'>
//               <Link to='/connect' 
//                   className='navItem__refer'
//                   onClick={this.toggleMenu}>Контакты</Link>
//             </li>
//             <li className='navItem'>
//               <a href='http://shining-present.tw1.ru' 
//                  className='navItem__refer not-follow'>
//                  Портфолио
//               </a>
//             </li>
//             <li className='navItem'>
//               <Link to='/about' 
//                   className='navItem__refer'
//                   onClick={this.toggleMenu}>Обо мне</Link>
//             </li>
//             <li className='navItem'>
//               <Link to='/archive' 
//                   className='navItem__refer'
//                   onClick={this.toggleMenu}>Архив</Link>
//             </li>
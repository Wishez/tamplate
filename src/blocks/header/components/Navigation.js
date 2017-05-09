import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        isOpen: false
    };
    
    this.toggleMenu = this.toggleMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }
  
  toggleMenu(e) {
    let $target = $(e.target);

    $('.navItem').removeClass('active');

    $target
      .parent()[0]
      .className += ' active';
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
            <li className='navItem active'>
              <Link to='/' 
                  className='navItem__refer'
                  onClick={this.toggleMenu}>Блог</Link>
            </li>
            <li className='navItem'>
              <Link to='/connect' 
                  className='navItem__refer'
                  onClick={this.toggleMenu}>Контакты</Link>
            </li>
            <li className='navItem'>
              <a href='http://shining-present.tw1.ru' 
                 className='navItem__refer not-follow'>
                 Портфолио
              </a>
            </li>
            <li className='navItem'>
              <Link to='/about' 
                  className='navItem__refer'
                  onClick={this.toggleMenu}>Обо мне</Link>
            </li>
            <li className='navItem'>
              <Link to='/archive' 
                  className='navItem__refer'
                  onClick={this.toggleMenu}>Архив</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
// <span className='icon-bar' />
//             <span className='icon-bar' />
//             <span className='icon-bar' />
export { Navigation }; 
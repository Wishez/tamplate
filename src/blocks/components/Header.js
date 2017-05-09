import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search'; 
import Navigation from './Navigation'; 
 
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <Logo />
          <Search />
          <Navigation />
          <div className='slogan text-center'>
            <h2 className='slogan__text'> 
              Сайты на Django.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
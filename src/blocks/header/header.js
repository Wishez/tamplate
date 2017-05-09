import React from 'react';
import { Logo } from './components/Logo.js';
import { Search } from './components/Search.js'; 
import { Navigation } from './components/Navigation.js'; 
 
function Header(props) {
  return (
    <div className='header'>
      <div className='container'>
        <Logo />
        <Search />
        <Navigation />
        {props.children}
        <div className='slogan text-center'>
          <h2 className='slogan__text'> 
            Сайты на Django.
          </h2>
        </div>
      </div>
    </div>
  );
}

export { Header };
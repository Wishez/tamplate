import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='navContent__logo logo navbar-header'>
        <a id='logo' 
           className='navbar-brand' 
           href="index.html">
          <h1 className='logo__name'>  
            Filipp Zhuravlev 
          </h1>
        </a>
        <button className='logo__navButton navbar-toggle collapsed' 
                type='button'
                data-toggle='collapse'
                data-target='#collapsable'
                aria-expanded='false'>
          <span className='sr-only'> Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
      </div>
    );
  }
}
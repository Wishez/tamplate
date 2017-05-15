import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search'; 
import Navigation from './Navigation'; 
 
export default class Header extends Component {
  render() {
    const { activeBlog, activeContacts, activeAbout, activeArchive } = this.props;
    return (
      <div className='header'>
        <div className='container'>
          <Logo />
          <Search />
          <Navigation 
            blog={activeBlog}
            contacts={activeContacts}
            about={activeAbout}
            archive={activeArchive} />
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
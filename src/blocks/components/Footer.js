import React, { Component } from 'react';
import Logo from './Logo';
import Services from './Services';
import Contacts from './Contacts';


export default class Footer extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='footer'> 
          <div className='container'> 
            <Logo />
            <Contacts />
            <Services />
          </div>
        </div>
        <section className='border text-center'>
          <div className='socials'>
            <a href='https://github.com/Wishez'
               className='not-follow'>
              <i className='fa fa-github fa-2x'/>
            </a>
            <a href='https://vk.com/shining_finger'
               className='not-follow'>
              <i className='fa fa-vk fa-2x'/>
            </a>
          </div>
          <p className='copyright'>
            &copy;&thinsp;2017 Филипп Журавлёв &ndash; создание сайтов на Django
          </p>
        </section>
      </div>
    );
  }
}
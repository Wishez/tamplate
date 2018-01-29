import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logo = ({}) => (
  <div className='brand'>
    <Link to='/'
       className='brand__refer'>
      <figure className='brand__name' />  
    </Link>
  </div>
);

export default Logo;
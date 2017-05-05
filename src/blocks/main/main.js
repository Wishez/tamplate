import React from 'react'; 
import { render } from 'react-dom';
import { Route } from 'react-router-dom'
import { About }from './../main/components/About.js';
import { Archive } from './../main/components/Archive.js';
import { Blog } from '../main/components/Blog.js';
import { Contacts } from '../main/components/Contacts.js';
import { NotFound } from '../main/components/NotFound.js';

const Main = () => (
	<main>       
    <div className='container'>
	  <Route exact path='/' component={Blog} />
      <Route path="/connect" component={Contacts}/>
      <Route path="/about" component={About}/>
      <Route path="/archive" component={Archive}/>
	 </div>
   </main>
)


export { Main };
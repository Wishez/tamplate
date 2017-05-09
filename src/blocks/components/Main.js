import React, { Component } from 'react'; 
import { Route } from 'react-router-dom'
import About from './About';
import Archive  from './Archive';
import Blog from './Blog';
import Connect  from './Connect';
import NotFound from './NotFound';

export default class Main extends Component {
  render() {
    return (
		<main>       
	    <div className='container'>
		  <Route exact path='/' component={Blog} />
	      <Route path="/connect" component={Connect}/>
	      <Route path="/about" component={About}/>
	      <Route path="/archive" component={Archive}/>
		 </div>
	   </main>
   	);
  }
}
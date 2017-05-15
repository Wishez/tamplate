import React, { Component } from 'react'; 
import { Route } from 'react-router-dom'
import About from './About';
import Archive  from './Archive';
import Blog from './Blog';
import Connect  from './Connect';
import NotFound from './NotFound';
import Article from './Article';

		  // <Route path='/:article_id' component={}
export default class Main extends Component {
  render() {
  	const { content } = this.props;
    return (
		<main>       
	      <div className='container'>
	      	{content}
		  </div>
	   </main>
   	);
  }
}
		    // <Route exact path='/' component={Blog} />
	     //    <Route path="/connect" component={Connect}/>
	     //    <Route path="/about" component={About}/>
	     //    <Route path="/archive" component={Archive}/>
	  	  //   <Route path="/:article_id" component={Article}/>
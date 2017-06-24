import React, { Component } from 'react'; 
import { Route } from 'react-router-dom'
import NotFound from './../components/NotFound';
import FadeIn from 'react-fade-in';


const Main = () => (
  <main>
  	<Switch>         
    	<Route exact path='/' render={() => (
    		<FadeIn>
    			<section>Hello world!</section>
    		</FadeIn>
    	)} />
    	<Route path='/second' render={() => (
    		<FadeIn>
    			<section>It is second section!</section>
    		</FadeIn>
    	)} />
    	<Route path='/third' render={() => (
    		<FadeIn>
    			<section>It is third section!</section>
    		</FadeIn>
    	)} />
    	<Route path='/fourth' render={() => (
    		<FadeIn>
    			<section>It is fourth section!</section>
    		</FadeIn>
    	)} />
    	<Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
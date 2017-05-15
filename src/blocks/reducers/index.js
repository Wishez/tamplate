import { createStore, combineReducers } from 'redux';
import connect_form from './connect_form.js';
import counter from './counter.js';
import articles from './articles.js';

const rootReducer = combineReducers(
	connect_form,
	counter,
	articles 
);


export default rootReducer;
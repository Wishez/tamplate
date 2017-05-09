import React, { Component } from 'react';
import { Paragraph } from './Paragraph.js';
import { Title } from './Title.js';
import classnames from 'classnames';
import ConnectForm from './ConnectForm.js';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
const reducers = {
	// Add other reducers here if you need...
	form: formReducer
},
 			reducer = combineReducers(reducers),
			store = createStore(reducer);

class Connect extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className='connect'>
				<Title block='connect' text='Свяжитесь со мной'/>
				<Provider store={store}>
					<ConnectForm />
				</Provider>
			</section>
    );
	} 
}

function fixString(string) {

	return string
		.replace(new RegExp(/[\s\d,\-\.!@#$%^&*_\\\/'";:\]\[{}~`]/, 'g'), '')
		.replace(string[0], string[0].toUpperCase())
		.replace(string.slice(1), string.slice(1).toLowerCase());
}

export { Connect };
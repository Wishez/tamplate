import React, { Component } from 'react';
import Title from './Title';
import ConnectForm from './ConnectForm';

export default class Connect extends Component{
	render() {
		return (
			<section className='connect'>
				<Title block='connect' text='Свяжитесь со мной'/>
				<ConnectForm />
			</section>
   	);
	} 
}
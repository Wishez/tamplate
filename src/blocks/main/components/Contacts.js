import React from 'react';
import { Paragraph } from './Paragraph.js';
import { Title } from './Title.js';

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			message: ''
		};
		
	}

	render() {
		return (
			<section className='connect'>
				<Title block='connect' text='Свяжитесь со мной'/>
				<div className='connect__form'>
				</div>
			</section>
		);
	}
}

export { Contacts };
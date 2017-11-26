import React from 'react';
import Title from './Title';
import RegistrationForm from './RegistrationForm';

const Registration = ({
	registered,
	...rest
}) => (
	<section className='registration'>
		<Title block='registration'
			text='Регистрация' 
		/>
		{registered ?
			<p className='registration__message registration__message--succes'>
				{rest.registerMessage}
			</p> :
 			<RegistrationForm
 				{...rest} />
		}
	</section>
);

export default Registration;
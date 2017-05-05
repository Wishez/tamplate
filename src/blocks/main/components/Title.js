import React from 'react';

const Title = (props) => (
	<h2 className={props.block + '__title title'}>
		{props.text}
	</h2>
)

export { Title };
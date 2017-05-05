import React from 'react';

const Paragraph = (props) => (
	<p className={props.block + '__paragraph paragraph'}>
		{props.text}
	</p>
)

export { Paragraph };
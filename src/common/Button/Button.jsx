import React from 'react';

import './Button.css';

function Button(props) {
	return (
		<button
			className='button-wrapper'
			type={props.type}
			onClick={props.onClick}
		>
			{props.title}
		</button>
	);
}

export default Button;

import React from 'react';

import './Input.css';

function Input(props) {
	const { label, labelOff, placeholder, bind, value, onChange, onBlur } = props;

	return (
		<div className='input-content'>
			{!labelOff ? <label htmlFor={bind}>{label}</label> : null}
			<input
				placeholder={placeholder}
				name={bind}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				// required
			/>
		</div>
	);
}

export default Input;

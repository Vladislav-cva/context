import React from 'react';

import { Input } from 'formik-antd';

import './FormInput.css';

function FormInput(props) {
	const { label, labelOff, placeholder, name, value, onChange, onBlur } = props;
	return (
		<div className='input-wrapper'>
			{!labelOff ? <label htmlFor={name}>{label}</label> : null}
			<Input
				search='true'
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</div>
	);
}

export default FormInput;

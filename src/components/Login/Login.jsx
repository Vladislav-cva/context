import React from 'react';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { COURSES_URL } from '../Courses/urlsConstants.js';
import { REGISTRATION_URl } from '../Registration/urlsConstants.js';

import FormInput from '../../common/FormInput/FormInput.jsx';
import Button from '../../common/Button/Button.jsx';

import axios from 'axios';

import { Formik } from 'formik';
import { Form } from 'formik-antd';
import * as Yup from 'yup';

import './Sign.css';

const LoginSchema = Yup.object().shape({
	email: Yup.string().required('Email is Required').email('Invalid email'),
	password: Yup.string()
		.min(6, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});

export function Login() {
	const history = useHistory();

	const [user, setUser] = React.useState({ email: '', password: '' });

	const handleChangeLogin = (e) => {
		const value = e.currentTarget.value;
		const name = e.target.name;
		setUser({ ...user, [name]: value });
	};

	const handleSubmitUser = async () => {
		try {
			const result = await axios({
				method: 'post',
				url: 'http://localhost:3000/login',
				data: user,
			});

			if (result.status >= 200 <= 299) {
				localStorage.setItem('token', result.data.result);
				localStorage.setItem('user', result.data.user.name);
				history.push(COURSES_URL.urlTemplate);
			} else {
				history.push(REGISTRATION_URl.urlTemplate);
			}
		} catch (error) {
			alert('wrong password or email');
		}
	};

	return (
		<div className='auth-wrapper'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={LoginSchema}
				onSubmit={handleSubmitUser}
			>
				{({ errors }) => (
					<Form>
						<h1>Login</h1>
						<Form.Item name='email' style={{ width: '100%' }}>
							<FormInput
								name='email'
								value={user.email}
								label='Email'
								placeholder='Enter email'
								onChange={handleChangeLogin}
							/>
						</Form.Item>
						<Form.Item name='password' style={{ width: '100%' }}>
							<FormInput
								name='password'
								value={user.password}
								label='Password'
								placeholder='Enter password'
								onChange={handleChangeLogin}
							/>
						</Form.Item>

						<Button type='submit' title='Login' />
						<span>
							if you not have an account you can &nbsp;
							<Link to='/registration'>Registration</Link>
						</span>
					</Form>
				)}
			</Formik>
		</div>
	);
}

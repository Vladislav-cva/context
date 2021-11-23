import React from 'react';
import { useHistory } from 'react-router';

import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button/Button.jsx';

import { LOGIN_URL } from '../Login/urlsConstants.js';
import { REGISTRATION_URl } from '../Registration/urlsConstants.js';

import './Header.css';

function Header() {
	const history = useHistory();
	const [isUser, setIsUser] = React.useState();
	const [isRoute, setIsRoute] = React.useState();

	const user = localStorage.getItem('user');

	function logout() {
		const clearUser = localStorage.clear();
		setIsUser(clearUser);
		history.push(LOGIN_URL.urlTemplate);
	}

	React.useEffect(() => {
		const routes = [LOGIN_URL.urlTemplate, REGISTRATION_URl.urlTemplate].some(
			(item) => item === history.location.pathname
		);
		setIsRoute(routes);
	}, [history.location]);

	React.useEffect(() => {
		setIsUser(user);
	}, [isUser, user]);

	return (
		<header>
			<Logo />
			{isUser && !isRoute ? (
				<div className='user-block'>
					<span>{isUser}</span>
					<Button title='Logout' onClick={logout} />
				</div>
			) : null}
		</header>
	);
}

export default Header;

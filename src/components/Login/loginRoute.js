import { Route } from 'react-router';

import { LOGIN_URL } from './urlsConstants';

import { Login } from './Login';

export const LoginRoute = [
	<Route key='login-route' path={LOGIN_URL.urlTemplate} component={Login} />,
];

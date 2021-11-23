import { Route } from 'react-router';

import { REGISTRATION_URl } from './urlsConstants';

import { Registration } from './Registration';

export const RegistrationRoute = [
	<Route
		key='registration-route'
		path={REGISTRATION_URl.urlTemplate}
		component={Registration}
	/>,
];

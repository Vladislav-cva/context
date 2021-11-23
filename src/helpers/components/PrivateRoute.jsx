import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

// interface PrivateRouteProps extends RouteProps {
// 	// tslint:disable-next-line:no-any
// 	component: any;
// }

const PrivateRoute = (props) => {
	const { component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={(routeProps) =>
				localStorage.token ? (
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: routeProps.location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;

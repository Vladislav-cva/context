import PrivateRoute from '../../helpers/components/PrivateRoute';

import { COURSES_URL } from './urlsConstants';

import Courses from './Courses.jsx';

export const CoursesRoutes = [
	<PrivateRoute
		key='courses-route'
		exact
		path={COURSES_URL.urlTemplate}
		component={Courses}
	/>,
];

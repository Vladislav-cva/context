import PrivateRoute from '../../helpers/components/PrivateRoute';

import { CREATE_COURSE_URL } from './urlsConstants';

import { CreateCourse } from './CreateCourse.jsx';

export const CreateCourseRoute = [
	<PrivateRoute
		key='create-course-route'
		path={CREATE_COURSE_URL.urlTemplate}
		component={CreateCourse}
	/>,
];

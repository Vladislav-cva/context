import { Route } from 'react-router';

import { CourseInfo } from './CourseInfo';

import { COURSE_INFO_URl } from './urlsConstants';

export const CourseInfoRoutes = [
	<Route
		key='course-info'
		path={COURSE_INFO_URl.urlTemplate}
		children={<CourseInfo />}
	/>,
];

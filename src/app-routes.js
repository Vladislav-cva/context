import { Redirect } from 'react-router';

import { LoginRoute } from './components/Login/loginRoute';
import { RegistrationRoute } from './components/Registration/registrationRoute';
import { CoursesRoutes } from './components/Courses/coursesRoutes';
import { CreateCourseRoute } from './components/CreateCourse/createCourseRoutes';
import { CourseInfoRoutes } from './components/CourseInfo/courseInfoRoutes';

export const AppRoutes = [
	...LoginRoute,
	...RegistrationRoute,
	...CoursesRoutes,
	...CreateCourseRoute,
	...CourseInfoRoutes,

	<Redirect key='main-page' from='/' to='/login' />,
];

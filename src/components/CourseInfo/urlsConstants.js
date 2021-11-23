import { COURSES_URL } from '../Courses/urlsConstants';

// export const COURSE_INFO_URl = createPath();
export const COURSE_INFO_URl = COURSES_URL.createChildPath(':id');

import React from 'react';

import { useHistory } from 'react-router';
import { CREATE_COURSE_URL } from '../CreateCourse/urlsConstants';

import Button from '../../common/Button/Button.jsx';
import CourseCard from './components/CourseCard/CourseCard.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

import { MainContext } from '../../context/MainContext.jsx';

import * as mockedData from '../../helpers/constants';

import './Courses.css';

function Courses() {
	const history = useHistory();

	const { setCourses, courses } = React.useContext(MainContext);
	const { setAuthors, authors } = React.useContext(MainContext);
	const { setFinishData } = React.useContext(MainContext);

	const [data, setData] = React.useState([]);

	const parsedata = courses.reduce((acc, item) => {
		const users = authors.filter((el) =>
			item.authors.some((id) => id === el.id)
		);
		const formattedNames = users.map((el) => el.name);
		return [...acc, { ...item, names: formattedNames }];
	}, []);

	const handleAddNewCourse = () => {
		history.push(CREATE_COURSE_URL.urlTemplate);
	};

	React.useEffect(() => {
		if (courses.length < 3) {
			setCourses(mockedData.mockedCoursesList);
			setAuthors(mockedData.mockedAuthorsList);
		}
	}, []);

	React.useEffect(() => {
		if (data.length < 1) setData(parsedata);
	}, [parsedata, data]);

	React.useEffect(() => {
		if (data.length > 1) setFinishData(data);
	}, [data, setFinishData]);

	return (
		<div className='courses-wrapper'>
			<div className='search-block'>
				<SearchBar data={data} setData={setData} />
				<Button title='add new course' onClick={handleAddNewCourse} />
			</div>
			{data.map((item) => {
				return (
					<React.Fragment key={item.id}>
						<CourseCard
							id={item.id}
							title={item.title}
							description={item.description}
							authors={item.names.join(', ')}
							duration={item.duration}
							created={item.creationDate}
						/>
					</React.Fragment>
				);
			})}
		</div>
	);
}

export default Courses;

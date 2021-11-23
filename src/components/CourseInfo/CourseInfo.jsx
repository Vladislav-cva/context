import React from 'react';

import { useHistory, useParams } from 'react-router';
import { COURSES_URL } from '../Courses/urlsConstants';

import { MainContext } from '../../context/MainContext.jsx';

import './CourseInfo.css';

export function CourseInfo() {
	const history = useHistory();
	let { id } = useParams();

	const { finishData } = React.useContext(MainContext);

	const data = finishData.find((item) => item.id === id);

	return (
		<div className='course-info-wrapper'>
			<button
				className='close-btn'
				onClick={() => history.push(COURSES_URL.urlTemplate)}
			>
				{'<'} back to courses
			</button>
			<h1>{data.title}</h1>
			<div className='course-info-content'>
				<div className='description-wrapper'>
					<span>{data.description}description</span>
				</div>
				<div className='description-wrapper-info'>
					<span>
						<b>id:</b> {data.id}
					</span>
					<span>
						<b>duration: </b> {data.duration} hourse
					</span>
					<span>
						<b>created: </b>
						{data.creationDate}
					</span>
					<span>
						<b>authors:</b>
					</span>
					<span>{data.names.join(' ')}</span>
				</div>
			</div>
		</div>
	);
}

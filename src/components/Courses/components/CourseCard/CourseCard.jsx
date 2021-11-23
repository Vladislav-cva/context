import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router';

import Button from '../../../../common/Button/Button.jsx';

import './CourseCard.css';

function CourseCard({ id, title, description, authors, duration, created }) {
	const history = useHistory();

	return (
		<div className='card-wrapper' key={id}>
			<div className='card-title'>
				<h1>{title}</h1>
				<span className='card-description'>{description}</span>
			</div>
			<div className='course-info'>
				<span>
					<b>Authors: </b>
					{authors}
				</span>
				<span>
					<b>Duration: </b>
					{duration}
				</span>
				<span>
					<b>Created: </b>
					{created}
				</span>
				<Button
					title='Show course'
					onClick={() => history.push(`${'/courses'}/${id}`)}
				/>
			</div>
		</div>
	);
}

CourseCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	authors: PropTypes.string,
	duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	created: PropTypes.string,
};

export default CourseCard;

import React from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import Input from '../../common/Input/Input.jsx';
import Button from '../../common/Button/Button.jsx';

import * as formatSecondInMitutes from '../../helpers/fmtDate';
import * as mockedData from '../../helpers/constants';

import { MainContext } from '../../context/MainContext.jsx';

import { COURSES_URL } from '../Courses/urlsConstants';

import { useHistory } from 'react-router';

import './CreateCourse.css';

export function CreateCourse() {
	const history = useHistory();
	const { courses, setCourses, authors, setAuthors } =
		React.useContext(MainContext);

	const [authorsList, setAutorsList] = React.useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});
	const [authorName, setAuthorName] = React.useState({ id: '', name: '' });
	const [newAuthors, setNewAuthors] = React.useState(
		mockedData.mockedAuthorsList
	);
	const [chooseAuthor, setChooseAuthor] = React.useState([]);

	const handleAddAuthor = (item) => {
		setChooseAuthor([item]);
	};

	const handleSetAuthor = (e) => {
		const value = e.target.value;
		setAuthorName({ id: uuidv4(), name: value });
	};

	const handleCreateAuthor = () => {
		setNewAuthors([...newAuthors, authorName]);
	};

	const handleChangeDuration = (e) => {
		setAutorsList({
			...authorsList,
			duration: formatSecondInMitutes.formatSecondInMitutes(
				parseInt(e.target.value)
			),
		});
	};

	const handleCreateTitle = (e) => {
		setAutorsList({
			...authorsList,
			title: e.target.value,
			id: uuidv4(),
			creationDate: dayjs(new Date()).format('DD/MM/YY'),
		});
	};

	const handleDescription = (e) => {
		if (e.target.value.length < 3) {
			alert('text length should be at least 2 characters');
		} else {
			setAutorsList({ ...authorsList, description: e.target.value });
		}
	};

	const handleCreateCourse = () => {
		if (
			authorsList.title === ' ' ||
			authorsList.description === ' ' ||
			chooseAuthor[0]?.name === ' ' ||
			chooseAuthor.length === 0 ||
			authorsList.duration === ''
		) {
			alert('fill in all fields');
		} else {
			setCourses([...courses, authorsList]);
			setAuthors([...authors, authorName]);
			history.push(COURSES_URL.urlTemplate);
		}
	};

	React.useEffect(() => {
		if (chooseAuthor[0]) {
			setAutorsList({
				...authorsList,
				authors: [chooseAuthor[0].id],
			});
		}
	}, [chooseAuthor]);

	return (
		<div className='create-course-wrapper'>
			<div className='course-name-wrapper'>
				<div className='title-wrapper'>
					<Input
						label='Title'
						placeholder='Enter title...'
						onBlur={handleCreateTitle}
					/>
					<Button
						title='Create course'
						type='submit'
						onClick={handleCreateCourse}
					/>
				</div>
				<label htmlFor='description'>Description</label>
				<textarea
					id='description'
					placeholder='Enter description'
					onBlur={handleDescription}
				></textarea>
			</div>
			<div className='author-wrapper'>
				<div className='add-authors'>
					<div className='add-authors-content'>
						<h3>Add authors</h3>
						<Input
							label='Author name'
							placeholder='Enter author name...'
							onChange={handleSetAuthor}
						/>
						<Button
							type='button'
							title='Create author'
							onClick={handleCreateAuthor}
						/>
					</div>
					<div className='add-authors-content'>
						<h3>Duration</h3>
						<Input
							label='Duration'
							placeholder='Enter duration in minutes...'
							onChange={handleChangeDuration}
						/>
						<span>
							<b>DURATION: {authorsList.duration}</b>
						</span>
					</div>
				</div>
				<div className='choose-authors'>
					<h3>Authors</h3>

					{newAuthors.map((item) => {
						return (
							<div key={item.id} className='authors-block'>
								<span>{item.name}</span>
								<Button
									title='Add author'
									onClick={() => handleAddAuthor(item)}
									type='button'
								/>
							</div>
						);
					})}
					<h3>Course authors</h3>
					<div className='authors-block'>
						{chooseAuthor.length >= 1 ? (
							<>
								{chooseAuthor[0].name}
								<Button
									title='Delete author'
									onClick={() => setChooseAuthor([])}
								/>
							</>
						) : (
							<span>authors list is empty</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

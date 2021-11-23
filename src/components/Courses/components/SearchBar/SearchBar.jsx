import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../common/Input/Input.jsx';
import Button from '../../../../common/Button/Button.jsx';

import './SearchBar.css';

function SearchBar({ data, setData }) {
	const [value, setValue] = React.useState('');
	const [searchData, setSearchData] = React.useState(data);

	const handleChangeValue = (e) => {
		let value = e.target.value;
		setValue(value);
		if (!value) setData(searchData);
	};

	const handleSearch = () => {
		const regexp = new RegExp(value, 'i');
		const result = searchData.filter((elem) =>
			regexp.test(elem.title + elem.id)
		);
		setData(result);
	};

	React.useEffect(() => {
		if (searchData.length < 1) setSearchData(data);
	}, [data]);

	return (
		<div className='search-bar-wrapper'>
			<Input
				placeholder='enter course name or id'
				onChange={handleChangeValue}
				labelOff
			/>
			<Button title='Search' onClick={handleSearch} />
		</div>
	);
}

SearchBar.propTypes = {
	data: PropTypes.array,
	setData: PropTypes.func,
};

export default SearchBar;

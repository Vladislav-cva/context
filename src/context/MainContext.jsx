import React from 'react';

import Header from '../components/Header/Header.jsx';

export const MainContext = React.createContext({
	courses: [],
	authors: [],
});

function MainContextProvider({ children }) {
	const [courses, setCourses] = React.useState([]);
	const [authors, setAuthors] = React.useState([]);
	const [finishData, setFinishData] = React.useState([]);

	const value = {
		courses,
		authors,
		setCourses,
		setAuthors,
		finishData,
		setFinishData,
	};

	return (
		<MainContext.Provider value={value}>
			<Header />
			{children}
		</MainContext.Provider>
	);
}

export default MainContextProvider;

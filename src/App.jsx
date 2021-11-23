import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import { AppRoutes } from './app-routes';
import { history } from './history-instance';

import MainContextProvider from './context/MainContext';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter history={history}>
				<MainContextProvider>
					<Switch>{AppRoutes}</Switch>
				</MainContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

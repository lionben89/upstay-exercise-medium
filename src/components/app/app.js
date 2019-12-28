import ReservationsListCont from './reservations/reservations-list-container';
import React from 'react';
import AppTitleComp from './app-title-component.jsx';
import './app.scss';

const App = () => {
	return (
		<div className="app-container">
			<AppTitleComp />
			<ReservationsListCont />
		</div>
	);
};

export default App;

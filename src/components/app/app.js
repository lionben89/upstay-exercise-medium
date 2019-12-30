import ReservationsListCont from './reservations/reservations-list-container';
import React from 'react';
import AppTitleComp from './app-title-component.jsx';
import AppHeaderComp from './header/app-header-component.jsx';
import './app.scss';

const App = () => {
	return (
		<div className="app-container">
			<AppTitleComp />
			<AppHeaderComp />
			<ReservationsListCont />
		</div>
	);
};

export default App;

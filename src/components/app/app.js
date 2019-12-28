import ReservationsListCont from './reservations/reservations-list-container';
import React from 'react';
import SVGUpsay from './svg-upstay';
import { startSocketConnection } from '../../socket-subscriptions.js';

startSocketConnection();
const App = () => {
	return (
		<div>
			<SVGUpsay />
			<ReservationsListCont />
		</div>
	);
};

export default App;

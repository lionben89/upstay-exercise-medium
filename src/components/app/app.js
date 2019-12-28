import ReservationsListCont from './reservations/reservations-list-container';
import React from 'react';
import SVGUpsay from './svg-upstay';
import { Container } from './app.style';

const App = () => {
	return (
		<Container>
			<SVGUpsay />
			<ReservationsListCont />
		</Container>
	);
};

export default App;

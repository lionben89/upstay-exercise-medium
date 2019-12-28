import React from 'react';
import ReservationComp from './reservation-component.jsx';

const ReservationsListComp = props => {
	if (props && props.reservations) {
		return Object.values(props.reservations).map((reservation, index) => {
			return <ReservationComp key={index} reservation={reservation}></ReservationComp>;
		});
	} else return <div />;
};

export default ReservationsListComp;

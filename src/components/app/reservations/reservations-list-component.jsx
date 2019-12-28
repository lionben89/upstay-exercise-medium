import React from 'react';
import ReservationLargeComp from './reservation-large-component.jsx';

const ReservationsListComp = props => {
	if (props && props.reservations) {
		let ReservationComp = ReservationLargeComp;
		return Object.values(props.reservations).map((reservation, index) => {
			return <ReservationComp key={index} reservation={reservation}></ReservationComp>;
		});
	} else return <div>No Reservtions Yet!</div>;
};

export default ReservationsListComp;

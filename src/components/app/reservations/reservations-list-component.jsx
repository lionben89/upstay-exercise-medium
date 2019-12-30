import React from 'react';
import ReservationLargeComp from './reservation-large-component.jsx';

const ReservationsListComp = props => {
	if (props && props.reservations) {
		let ReservationComp = ReservationLargeComp;
		return props.reservations.map(reservation => {
			return (
				<ReservationComp key={reservation.id} reservation={reservation}></ReservationComp>
			);
		});
	} else return <div>No Reservtions Yet!</div>;
};
export default ReservationsListComp;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReservationLabelComp from './reservation-label-component.jsx';
import './reservation-large-component.scss';

const ReservationLargeComp = props => {
	let { price, currencySymbol, checkIn, checkOut, uuid, hotel, room } = props.reservation;
	return (
		<div className="reservation-card-container">
			<div className="reservation-price">
				{price}
				{currencySymbol}
			</div>
			<div className="reservation-body">
				<ReservationLabelComp label="Check-In" value={checkIn} />
				<ReservationLabelComp label="Check-Out" value={checkOut} />
				<ReservationLabelComp label="Hotel" value={hotel} />
				<ReservationLabelComp label="Room" value={room} />
			</div>
			<div className="reservation-uuid">{uuid}</div>
		</div>
	);
};
export default ReservationLargeComp;

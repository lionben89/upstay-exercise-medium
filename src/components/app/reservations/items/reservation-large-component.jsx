/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import ReservationLabelComp from './reservation-label-component.jsx';
import './reservation-large-component.scss';

const ReservationLargeComp = props => {
	let { id, price, currencySymbol, checkIn, checkOut, uuid, hotel, room } = props.reservation;
	//check rendering is ok - console.log(id);
	return (
		<div className="reservation-card-container-large">
			<div className="reservation-price">
				{price.toFixed(2)}
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
const areEqual = (prevProps, nextProps) => {
	return prevProps === nextProps;
};
export default memo(ReservationLargeComp, areEqual);

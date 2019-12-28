/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './reservation-label-component.scss';

const ReservationLabelComp = props => {
	return (
		<div className="reservation-label-container">
			<div className="label">{props.label}</div>
			<div className="value">{props.value}</div>
		</div>
	);
};

export default ReservationLabelComp;

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReservationLargeComp from './items/reservation-large-component.jsx';
import ReservationSmallComp from './items/reservation-small-component.jsx';
import '../app.scss';
const virtualPageSize = 100;

const ReservationsListComp = props => {
	const [currentVirtualPage, setCurrentVirtualPage] = useState(1);
	let lastVirtualPage = Math.ceil(props.reservations.length / (virtualPageSize / 2));
	useEffect(() => {
		const onScroll = event => {
			let viewPerecnt =
				document.documentElement.scrollTop / document.documentElement.offsetHeight;
			let lastVirtualPage = Math.ceil(props.reservations.length / (virtualPageSize / 2));
			if (viewPerecnt > 0.95 && currentVirtualPage < lastVirtualPage) {
				let nextVirtualPage = Math.min(currentVirtualPage + 1, lastVirtualPage);
				//setTakeChange(false);
				setCurrentVirtualPage(nextVirtualPage);
				window.scrollTo(0, document.documentElement.offsetHeight * 0.48);
			} else if (viewPerecnt < 0.02 && currentVirtualPage > 1) {
				//setTakeChange(false);
				setCurrentVirtualPage(Math.max(currentVirtualPage - 1, 1));
				window.scrollTo(0, document.documentElement.offsetHeight * 0.54);
			}
		};
		document.addEventListener('scroll', onScroll);
		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	});
	if (props && props.reservations && props.reservations.length) {
		let ReservationComp = props.size === 'Small' ? ReservationSmallComp : ReservationLargeComp;
		let fromVIndex = Math.max(
			(currentVirtualPage - 1) * virtualPageSize -
				virtualPageSize * (0.5 * (currentVirtualPage - 1)),
			0
		);
		let toVIndex = Math.min(
			currentVirtualPage * virtualPageSize - 0.5 * (currentVirtualPage - 1) * virtualPageSize,
			lastVirtualPage * virtualPageSize
		);
		let fromIndex =
			toVIndex < lastVirtualPage * virtualPageSize
				? fromVIndex
				: (currentVirtualPage - 1) * virtualPageSize;
		let toIndex = fromVIndex > 0 ? toVIndex : currentVirtualPage * virtualPageSize;
		let virtualReservations = props.reservations.slice(fromIndex, toIndex);
		return virtualReservations.map(reservation => {
			return (
				<ReservationComp key={reservation.id} reservation={reservation}></ReservationComp>
			);
		});
	} else return <div className="no-reservations">No Reservtions To Show!</div>;
};
export default ReservationsListComp;

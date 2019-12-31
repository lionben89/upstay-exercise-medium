import React, { useState, useEffect } from 'react';
import ReservationLargeComp from './reservation-large-component.jsx';
const virtualPageSize = 400;

const ReservationsListComp = props => {
	const [currentVirtualPage, setCurrentVirtualPage] = useState(1);
	//const [takeChange, setTakeChange] = useState(false);
	let lastVirtualPage = Math.ceil(props.reservations.length / (virtualPageSize / 2));
	useEffect(() => {
		const onScroll = () => {
			let viewPerecnt =
				document.documentElement.scrollTop / document.documentElement.offsetHeight;
			let lastVirtualPage = Math.ceil(props.reservations.length / (virtualPageSize / 2));
			if (viewPerecnt > 0.96 && currentVirtualPage < lastVirtualPage) {
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
	if (props && props.reservations) {
		let ReservationComp = ReservationLargeComp;
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
	} else return <div>No Reservtions Yet!</div>;
};
export default ReservationsListComp;

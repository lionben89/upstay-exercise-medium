/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import ReservationsListComp from './reservations-list-component.jsx';

const mapStateToProps = (state, ownProps) => {
	let filteredReservations = Object.values(state.reservationsReducer.reservations);
	filteredReservations = filteredReservations.reverse();
	filteredReservations = filteredReservations.filter(reservation => {
		return (
			reservation &&
			reservation.uuid &&
			reservation.uuid.startsWith(state.reservationsReducer.uuidFilter)
		);
	});
	return { reservations: filteredReservations, size: ownProps.size };
};

const ReservationsListCont = connect(mapStateToProps)(ReservationsListComp);
export default ReservationsListCont;

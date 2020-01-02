/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import ReservationsListComp from './reservations-list-component.jsx';

const mapStateToProps = (state, ownProps) => {
	//change object to array to fit to component props
	let filteredReservations = Object.values(state.reservationsReducer.reservations);

	//reverse to show current reservations first
	filteredReservations = filteredReservations.reverse();

	//filter if needed
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

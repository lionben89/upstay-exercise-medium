/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import ReservationsListComp from './reservations-list-component.jsx';

const mapStateToProps = (state, ownProps) => {
	return { reservations: state.reservationsReducer.reservations };
};

const ReservationsListCont = connect(mapStateToProps)(ReservationsListComp);
export default ReservationsListCont;

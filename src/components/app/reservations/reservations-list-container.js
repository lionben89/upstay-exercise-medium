/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import ReservationsListComp from './reservations-list-component.jsx';

const mapStateToProps = (state, ownProps) => {
	return { reservations: state.reservations };
};

const mapDispatchToProps = {};

const ReservationsListCont = connect(mapStateToProps, mapDispatchToProps)(ReservationsListComp);
export default ReservationsListCont;

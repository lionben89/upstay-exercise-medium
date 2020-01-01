/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import UuidFilterComp from './uuid-filter-component.jsx';
import { filterReservationsByUuid } from '../../../actions/reservations-actions';

const mapStateToProps = (state, ownProps) => {
	return {
		uuidFilter: state.reservationsReducer.uuidFilter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		filterByUuid: text => {
			dispatch(filterReservationsByUuid(text));
		}
	};
};

const UuidFilterCont = connect(mapStateToProps, mapDispatchToProps)(UuidFilterComp);
export default UuidFilterCont;

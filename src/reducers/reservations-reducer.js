import actionTypes from '../actions/actionTypes.js';
const initialState = {
	reservations: {}
};

const reservationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RESERVATION: {
			let reservation = action.payload;
			let newReservations = { ...state.reservations };
			newReservations[reservation.uuid] = reservation;
			return { ...state, reservations: newReservations };
		}
		default:
			return state;
	}
};

export default reservationsReducer;

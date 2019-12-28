import getSymbolFromCurrency from 'currency-symbol-map';
import actionTypes from '../actions/actionTypes.js';
const initialState = {
	reservations: {}
};

const reservationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RESERVATION: {
            let reservation = action.payload;
			let newReservations = { ...state.reservations };
			newReservations[reservation.uuid] = modifyReservation(reservation);
			return { ...state, reservations: newReservations };
		}
		default:
			return state;
	}
};

const modifyReservation = (reservation)=>{
    let checkInDate = new Date(reservation.arrival_date);
    let checkOutDate = new Date(reservation.arrival_date);
    checkOutDate.setDate(checkInDate.getDate() + reservation.nights),
    let modifiedReservation = {
		price: reservation.price,
		currencySymbol: getSymbolFromCurrency(reservation.currency.toUpperCase()),
		uuid: reservation.uuid,
		checkIn: checkInDate.toDateString(),
        checkOut: checkOutDate.toDateString(),
        room: reservation.room_name,

    };
    return modifyReservation;
}

export default reservationsReducer;

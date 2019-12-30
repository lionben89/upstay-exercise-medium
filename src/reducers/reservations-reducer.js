import getSymbolFromCurrency from 'currency-symbol-map';
import actionTypes from '../actions/actionTypes.js';
import * as hotelsManager from '../managers/hotels-manager.js';
const initialState = {
	reservations: {},
	uuidFilter: ''
};

export const reservationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RESERVATION: {
			let reservation = action.payload;
			let newReservations = { ...state.reservations };
			newReservations[reservation.uuid] = modifyReservation(reservation);
			return { ...state, reservations: newReservations };
		}
		case actionTypes.LOAD_RESERVATIONS: {
			let reservations = action.payload;
			let modifiedReservations = {};
			Object.values(reservations).forEach(reservation => {
				modifiedReservations[reservation.uuid] = modifyReservation(reservation);
			});
			let newReservations = { ...state.reservations, ...modifiedReservations };
			return { ...state, reservations: newReservations };
		}
		case actionTypes.FILTER_RESERVATIONS_BY_UUID: {
			let uuidFilter = action.payload;
			return { ...state, uuidFilter };
		}
		default:
			return state;
	}
};

const modifyReservation = reservation => {
	let modifiedReservation;
	let hotels = hotelsManager.getHotelsSync();
	let checkInDate = new Date(reservation.arrival_date);
	let checkOutDate = new Date(reservation.arrival_date);
	checkOutDate.setDate(checkInDate.getDate() + reservation.nights);
	modifiedReservation = {
		price: reservation.price,
		currencySymbol: getSymbolFromCurrency(reservation.currency.toUpperCase()),
		uuid: reservation.uuid,
		checkIn: checkInDate.toDateString(),
		checkOut: checkOutDate.toDateString(),
		room: reservation.room_name,
		hotel: hotels[reservation.hotel_id],
		id: reservation.id
	};
	return modifiedReservation;
};

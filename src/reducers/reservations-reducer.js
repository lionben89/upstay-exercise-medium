import getSymbolFromCurrency from 'currency-symbol-map';
import actionTypes from '../actions/actionTypes.js';
import * as hotelsManager from '../managers/hotels-manager.js';
import * as currencyManager from '../managers/currency-manager.js';

const initialState = {
	reservations: {},
	uuidFilter: '',
	selectedCurrency: null,
	convertionData: {}
};

export const reservationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_RESERVATION: {
			let reservation = action.payload;
			let newReservations = { ...state.reservations };
			newReservations[reservation.uuid] = modifyReservation(reservation, state);
			return { ...state, reservations: newReservations };
		}
		case actionTypes.LOAD_RESERVATIONS: {
			let reservations = action.payload;
			let modifiedReservations = {};
			Object.values(reservations).forEach(reservation => {
				modifiedReservations[reservation.uuid] = modifyReservation(reservation, state);
			});
			let newReservations = { ...state.reservations, ...modifiedReservations };
			return { ...state, reservations: newReservations };
		}
		case actionTypes.FILTER_RESERVATIONS_BY_UUID: {
			let uuidFilter = action.payload;
			return { ...state, uuidFilter };
		}
		case actionTypes.CHANGE_CURRENCY: {
			let currencyData = action.payload;
			let currencySymbol = getSymbolFromCurrency(currencyData.selectedCurrency);
			if (currencyData.convertionData && currencyData.selectedCurrency) {
				let modifiedReservations = {};
				Object.values(state.reservations).forEach(reservation => {
					modifiedReservations[reservation.uuid] = {
						...reservation,
						currencyName: currencyData.selectedCurrency,
						price: currencyManager.convertCurrency(
							currencyData.convertionData,
							reservation.currencyName,
							currencyData.selectedCurrency,
							reservation.price
						),
						currencySymbol
					};
				});
				return {
					...state,
					selectedCurrency: currencyData.selectedCurrency,
					convertionData: currencyData.convertionData,
					reservations: modifiedReservations
				};
			} else {
				return {
					...state,
					selectedCurrency: currencyData.selectedCurrency
				};
			}
		}
		default:
			return state;
	}
};

const modifyReservation = (reservation, state) => {
	let modifiedReservation;
	let checkInDate = new Date(reservation.arrival_date);
	let checkOutDate = new Date(reservation.arrival_date);
	checkOutDate.setDate(checkInDate.getDate() + reservation.nights);
	let currencyName = state.selectedCurrency.toUpperCase();
	modifiedReservation = {
		price: currencyManager.convertCurrency(
			state.convertionData,
			reservation.currency.toUpperCase(),
			currencyName,
			reservation.price
		),
		currencyName,
		currencySymbol: getSymbolFromCurrency(currencyName),
		uuid: reservation.uuid,
		checkIn: checkInDate.toDateString(),
		checkOut: checkOutDate.toDateString(),
		room: reservation.room_name,
		hotel: hotelsManager.hotelIdToHotelName(reservation.hotel_id),
		id: reservation.id
	};
	return modifiedReservation;
};

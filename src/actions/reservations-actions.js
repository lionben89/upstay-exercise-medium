import actionTypes from './actionTypes.js';

export const addReservation = payload => ({
	type: actionTypes.ADD_RESERVATION,
	payload
});

export const loadReservations = payload => ({
	type: actionTypes.LOAD_RESERVATIONS,
	payload
});

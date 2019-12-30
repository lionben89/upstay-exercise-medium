import actionTypes from './actionTypes.js';

export const addReservation = payload => ({
	type: actionTypes.ADD_RESERVATION,
	payload
});

export const loadReservations = payload => ({
	type: actionTypes.LOAD_RESERVATIONS,
	payload
});

export const filterReservationsByUuid = payload => ({
	type: actionTypes.FILTER_RESERVATIONS_BY_UUID,
	payload
});

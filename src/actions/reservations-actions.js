/* eslint-disable no-unused-vars */
import actionTypes from './actionTypes.js';
import * as currencyManager from '../managers/currency-manager.js';

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

export const changeCurrency = payload => {
	return {
		type: actionTypes.CHANGE_CURRENCY,
		payload
	};
};

export const getCurrencyExchangeAndChangeCurrency = payload => {
	return dispatch => {
		currencyManager.getCurrencyExchange(payload).then(convertionData => {
			dispatch(changeCurrency({ convertionData, selectedCurrency: payload }));
		});
	};
};

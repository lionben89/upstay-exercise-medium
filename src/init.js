import store from './store.js';
import { startSocketConnection } from './socket-subscriptions.js';
import * as hotelsManager from './managers/hotels-manager.js';
import * as currencyManager from './managers/currency-manager.js';
import { changeCurrency } from './actions/reservations-actions';

const defaultCurrency = 'USD';

export const init = async () => {
	await initHttp();
	await initSocket();
};

const initHttp = async () => {
	await hotelsManager.getHotels();
	let convertionData = await currencyManager.getCurrencyExchange(defaultCurrency);
	store.dispatch(changeCurrency({ convertionData, selectedCurrency: defaultCurrency }));
};

const initSocket = async () => {
	startSocketConnection();
};

import { startSocketConnection } from './socket-subscriptions.js';
import * as hotelsManager from './managers/hotels-manager.js';

export const init = async () => {
	await initHttp();
	await initSocket();
};

const initHttp = async () => {
	await hotelsManager.getHotels();
};

const initSocket = async () => {
	startSocketConnection();
};

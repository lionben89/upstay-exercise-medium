/* eslint-disable no-unused-vars */
import io from 'socket.io-client';
import store from './store.js';
import { addReservation } from './actions/reservations-actions.js';
export const startSocketConnection = () => {
	const socket = io();
	socket.on('newReservation', onNewReservation);
};

const onNewReservation = reservation => {
	store.dispatch(addReservation(reservation));
};

/* eslint-disable no-unused-vars */
import io from 'socket.io-client';
import store from './store.js';
import { addReservation, loadReservations } from './actions/reservations-actions.js';
export const startSocketConnection = () => {
	const socket = io();
	socket.on('newReservation', onNewReservation);
	socket.on('loadedReservations', onLoadedReservations);
};

const onNewReservation = reservation => {
	store.dispatch(addReservation(reservation));
};

const onLoadedReservations = reservations => {
	store.dispatch(loadReservations(reservations));
};

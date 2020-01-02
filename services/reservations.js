import EventEmitter from 'events';
import faker from 'faker';
import * as reservationsTable from '@upstay/db/reservations';

const emitter = new EventEmitter();
const NEW_RESERVATION_EVENT = 'newReservation';

let timeoutId;
let reservationsCache = null;

const generate = () => {
	const reservation = {
		uuid: faker.random.uuid(),
		hotel_id: faker.random.number({ min: 1, max: 5 }),
		currency: ['usd', 'ils', 'eur'][faker.random.number({ min: 0, max: 2 })],
		price: parseFloat(faker.random.number({ min: 100, max: 500, precision: 0.01 }).toFixed(2)),
		guest_name: faker.name.findName(),
		room_name: faker.lorem.words(),
		arrival_date: faker.date.future(),
		nights: faker.random.number({ min: 1, max: 5 })
	};

	emitter.emit(NEW_RESERVATION_EVENT, reservation);

	timeoutId = setTimeout(
		generate,
		faker.random.number({ min: 1000, max: 10000, precision: 1000 })
	);
};

let running = false;
export const start = newReservationCallback => {
	if (running) {
		return;
	}

	running = true;
	emitter.on(NEW_RESERVATION_EVENT, newReservationCallback);
	generate();
};

export const stop = () => {
	clearTimeout(timeoutId);
	running = false;
	emitter.removeAllListeners(NEW_RESERVATION_EVENT);
};

export const getAllReservationsFromDB = async () => {
	let reservations;
	if (reservationsCache) {
		reservations = reservationsCache;
	} else {
		let res = await reservationsTable.getAllReservations();

		//save cache in object
		reservationsCache = {};
		res &&
			res.forEach(reservation => {
				reservationsCache[reservation.id] = reservation;
			});
		reservations = reservationsCache;
	}
	return reservations;
};

export const addNewReservationToDB = async reservation => {
	let res;
	if (!reservationsCache) {
		//get reservations from DB to prevent duplicates
		await getAllReservationsFromDB();
	}
	res = await reservationsTable.addReservation(reservation);
	reservationsCache[res.id] = res;
	return res;
};

import { query } from './pg';
const TABLE_NAME = 'public.reservations';

export const addReservation = async reservation => {
	let keys = Object.keys(reservation);
	let values = Object.values(reservation);
	let res = await query(
		`INSERT INTO ${TABLE_NAME} (id,${keys.toString()}) VALUES (nextval('reservations_id_seq'),${values.toString()})`
	);
	return res;
};
export const getAllReservations = async () => {
	let res = await query(`SELECT * FROM ${TABLE_NAME}`);
	return res && res.rows;
};

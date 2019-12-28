import { query } from './pg';
import * as pgHelper from './pg-helper.js';
const TABLE_NAME = 'public.reservations';

export const addReservation = async reservation => {
	let keys = Object.keys(reservation);
	let values = Object.values(reservation);
	let queryString = `INSERT INTO ${TABLE_NAME} (id,${keys.toString()}) VALUES (nextval('reservations_id_seq'),${pgHelper.createChainVarString(
		values.length
	)}) RETURNING ${keys.toString()}`;
	let res = await query(queryString, values);
	return res && res.rows && res.rows[0];
};
export const getAllReservations = async () => {
	let res = await query(`SELECT * FROM ${TABLE_NAME}`);
	return res && res.rows;
};

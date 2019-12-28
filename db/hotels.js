import { query } from './pg';
const TABLE_NAME = 'public.hotels';

export const getAllHotels = async () => {
	let res = await query(`SELECT * FROM ${TABLE_NAME}`);
	return res && res.rows;
};

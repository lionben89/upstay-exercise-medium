const { Pool } = require('pg');

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: false //do not forget to change to true
});

export const query = (text, params) => pool.query(text, params);

import mysql from 'mysql2/promise'


async function connect() {
	const connection = await mysql.createConnection({host:'127.0.0.1', user: 'root', password: '', database: 'employees'});
	return connection
}

const conn = await connect();

export {conn};
import express from 'express';
import open from 'open';
import routes from '@upstay/routes';
import * as reservationsService from '@upstay/services/reservations';
import serverDev from './server.dev';
import serverIO from './server.io';

const app = express();
const port = process.env.PORT || 9999;
const appURL = `http://localhost:${port}`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(routes);

serverDev(app);

// socket.io server
const server = serverIO(app, socket => {
	//on socket connection (new client)
	reservationsService.getAllReservationsFromDB().then(reservations => {
		//send him all the reservation till now
		socket.emit('loadedReservations', reservations);
		reservationsService.start(reservation => {
			//happend only once on the server, broadcast new reservations to all open sockets
			reservationsService.addNewReservationToDB(reservation).then(result => {
				socket.broadcast.emit('newReservation', result);
			});
		});
	});
});

server.listen(port, () => {
	console.log(`Server started ${appURL}`);
	open(appURL);
});

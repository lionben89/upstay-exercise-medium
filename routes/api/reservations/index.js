import express from 'express';
import * as reservationsService from '@upstay/services/reservations.js';

const router = express.Router();

router.get('/getAllReservations', function(req, res) {
	reservationsService.getAllReservationsFromDB().then(result => {
		res.send(JSON.stringify(result));
	});
});
export default router;

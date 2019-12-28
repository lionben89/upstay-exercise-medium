import express from 'express';
import * as hotelsService from '@upstay/services/hotels';

const router = express.Router();

router.get('/getAllHotels', function(req, res) {
	hotelsService.getAllHotelsFromDB().then(result => {
		res.send(JSON.stringify(result));
	});
});
export default router;

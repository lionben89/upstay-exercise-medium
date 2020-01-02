import express from 'express';
import reservations from './reservations';
import hotels from './hotels';
import currencies from './currencies';

const router = express.Router();

router.use('/reservations', reservations);
router.use('/hotels', hotels);
router.use('/currencies', currencies);

export default router;

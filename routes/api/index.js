import express from 'express';
import reservations from './reservations';
import hotels from './hotels';

const router = express.Router();

router.use('/reservations', reservations);
router.use('/hotels', hotels);

export default router;

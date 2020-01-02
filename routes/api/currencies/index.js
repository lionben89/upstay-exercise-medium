import express from 'express';
import * as currencyExchangeService from '@upstay/services/currency-exchange';

const router = express.Router();

router.get('/getCurrencyRate', function(req, res) {
	currencyExchangeService.getCurrencyExchange(req.params.base).then(result => {
		res.send(JSON.stringify(result));
	});
});
export default router;

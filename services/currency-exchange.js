import axios from 'axios';
const apiToken = 'C41luFcBi53uUpoaX5m27g6N9nUOvrMYXZEQyuJmHkAyjVbospJeIuxMgbJb';
const expirationPeriod = 300000; //the currency rate is updated every 5 min
const fake = {
	ILS: 3,
	EUR: 1,
	USD: 2
}; //for development
let currencyExchangeCache = {};

export const getCurrencyExchange = async currency => {
	let isError = false;
	let res;
	if (!isCurrencyRateValid(currency)) {
		res = await axios
			.get(
				`https://api.worldtradingdata.com/api/v1/forex?base=${currency}&api_token=${apiToken}`
			)
			.catch(function(error) {
				isError = true;
				console.log(error);
			});
		if (!isError && res && res.data && res.data.data) {
			currencyExchangeCache[currency] = {
				data: res.data.data,
				expirationTime: Date.now() + expirationPeriod
			};
		} else if (fake && !currencyExchangeCache[currency]) {
			console.log(res && res.data && res.data.message);
			currencyExchangeCache[currency] = {
				data: fake,
				expirationTime: Date.now() + expirationPeriod
			};
		}
	}
	return currencyExchangeCache[currency] && currencyExchangeCache[currency].data;
};

const isCurrencyRateValid = currency => {
	let isValid = false;
	if (currencyExchangeCache && currencyExchangeCache[currency]) {
		isValid = currencyExchangeCache[currency].expirationTime < Date.now() ? false : true;
	}
	return isValid;
};

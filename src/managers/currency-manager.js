import axios from 'axios';

export const getCurrencyExchange = async currency => {
	let res = await axios
		.get(`/api/currencies/getCurrencyRate?base=${currency}`)
		.catch(function(error) {
			console.log(error);
		});
	return res && res.data;
};

export const convertCurrency = (convertionData, from, to, amount) => {
	if (from === to) {
		return amount;
	} else {
		if (convertionData) {
			let rate = convertionData[to];
			return amount * rate;
		}
	}
};

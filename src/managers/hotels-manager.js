import axios from 'axios';
let hotelsCache = null;

export const getHotels = async () => {
	if (!hotelsCache) {
		let res = await axios.get('/api/hotels/getAllHotels').catch(function(error) {
			console.log(error);
		});
		hotelsCache = res.data;
	}
	return hotelsCache;
};

export const getHotelsSync = () => {
	return hotelsCache;
};

export const hotelIdToHotelName = hotelId => {
	const hotels = getHotelsSync();
	return hotels[hotelId];
};

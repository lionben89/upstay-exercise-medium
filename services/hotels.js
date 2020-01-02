import * as hotelsTable from '@upstay/db/hotels';
let hotelsCache = null;
export const getAllHotelsFromDB = async () => {
	let hotels;
	if (hotelsCache) {
		hotels = hotelsCache;
	} else {
		let res = await hotelsTable.getAllHotels();
		hotelsCache = {};

		//save cache in object
		res &&
			res.forEach(hotel => {
				hotelsCache[hotel.id] = hotel.name;
			});
		hotels = hotelsCache;
	}
	return hotels;
};

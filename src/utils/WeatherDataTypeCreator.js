const CITY_NAME_TYPE = 'CITY_NAME';
const LOCATION_TYPE = 'LOCATION';

export const byCityNameCreator = (cityName) => ({type: CITY_NAME_TYPE, cityName});
export const byLocationCreator = (lat, lon) => ({type: LOCATION_TYPE, lat, lon});
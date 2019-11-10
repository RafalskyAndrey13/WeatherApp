import {createSelector} from 'reselect';
import {getWeatherImageUrl} from "../../utils/UrlUtils";

export const getLocation = createSelector(state => state.current.cityName, state => state.current.countryName,
    (city, country) => {
        if (city && country){
            return `${city}, ${country}`;
        }
    });
export const getTemperature = createSelector(state => state.current.main.temp, temp => temp !== null && Math.round(temp));
export const getImageUrl = createSelector(state => state.current.main.icon,
        icon => getWeatherImageUrl(icon));
export const getMainInfo = state => state.current.main.type;
export const getWeatherDescription = state => state.current.main.description;
export const getWindSpeed = (state) => state.current.details.windSpeed;
export const getPressure = (state) => state.current.details.pressure;
export const getHumidity = (state) => state.current.details.humidity;
export const getClouds = (state) => state.current.details.clouds;

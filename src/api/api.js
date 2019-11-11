import * as axios from 'axios';

const API_KEY = 'cae9d19a3769a35e12c7e24e5368f14b';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
/*    headers: {
        'API-KEY': 'fb0753bd9b8c0057703f71e59a586f33',
        'Access-Control-Allow-Origin': 'https://api.openweathermap.org'
    }*/
});

export const currentWeatherOneLocAPI = {
    getWeatherByCityName(cityName) {
        return instance.get(`weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            .then(response => response.data);
    },
    getWeatherByCoords(latitude, longitude) {
        return instance.get(`weather?appid=${API_KEY}&units=metric&lat=${latitude}&lon=${longitude}`)
            .then(response => response.data);
    }
};

export const forecastAPI = {
    getForecastByCityName(cityName) {
        return instance.get(`forecast/?q=${cityName}&units=metric&appid=${API_KEY}`)
            .then(response => response.data);
    },
    getForecastByCoords(latitude, longitude) {
        return instance.get(`forecast/?lat=${latitude}&units=metric&lon=${longitude}&appid=${API_KEY}`)
            .then(response => response.data);
    }
};
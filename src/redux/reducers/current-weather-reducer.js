import {currentWeatherOneLocAPI, forecastAPI} from '../../api/api';
import {requestForecast} from "./forecast-reducer";

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    countryName: '',
    cityName: '',
    main: {
        type: '',
        description: '',
        icon: '',
        temp: null
    },
    details: {
        windSpeed: null,
        pressure: null,
        humidity: null,
        clouds: null
    },
    isFetching: false
};

export const currentWeatherReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                cityName: action.data.name,
                countryName: action.data.sys.country,
                main: {
                    type: action.data.weather[0].main,
                    description: action.data.weather[0].description,
                    icon: action.data.weather[0].icon,
                    temp: action.data.main.temp
                },
                details: {
                    windSpeed: action.data.wind.speed,
                    pressure: action.data.main.pressure,
                    humidity: action.data.main.humidity,
                    clouds: action.data.clouds.all
                }
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            };
        default:
            return state;
    }
};

const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const setCurrentWeather = (data) => ({type: SET_CURRENT_WEATHER, data});

export const requestCurrentWeatherByCity = (cityName) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching());
        const data = await currentWeatherOneLocAPI.getWeatherByCityName(cityName);
        dispatch(requestForecast(cityName));
        dispatch(setCurrentWeather(data));
        dispatch(toggleIsFetching());
    }
};
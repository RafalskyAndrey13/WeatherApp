import {currentWeatherOneLocAPI, forecastAPI} from '../../api/api';
import {setCurrentWeather} from './current-weather-reducer';
import {setForecast} from "./forecast-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};

export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = (latitude, longitude) => async (dispatch) => {
    const data = await currentWeatherOneLocAPI.getWeatherByCoords(latitude, longitude);
    const forecast = await forecastAPI.getForecastByCoords(latitude, longitude);
    dispatch(setCurrentWeather(data));
    dispatch(setForecast(forecast.list));
    dispatch(setInitializedSuccess());
};
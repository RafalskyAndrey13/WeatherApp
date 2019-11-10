import {forecastAPI} from '../../api/api';

const SET_FORECAST = 'SET_FORECAST';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    forecast: [],
    isFetching: false
};

export const forecastReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            console.log(action.forecast);
            return {
                ...state,
                forecast: action.forecast
            };
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            };
        default:
            return state;
    }
}


export const setForecast = (forecast) => ({type: SET_FORECAST, forecast});
const toggleFetching = () => ({type: TOGGLE_FETCHING});

export const requestForecast = (cityName) => {
    return async (dispatch) => {
        dispatch(toggleFetching());
        const data = await forecastAPI.getForecastByCityName(cityName);
        dispatch(setForecast(data.list));
        dispatch(toggleFetching());
    }
};



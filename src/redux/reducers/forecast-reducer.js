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

export const requestForecast = (info) => {
    return async (dispatch) => {
        dispatch(toggleFetching());
        let resp;
        switch(info.type){
            case 'CITY_NAME':
                resp = await forecastAPI.getForecastByCityName(info.cityName);
                break;
            case 'LOCATION':
                resp = await forecastAPI.getForecastByCoords(info.lat, info.lon);
                break;
        }
        dispatch(setForecast(resp.list));
        dispatch(toggleFetching());
    }
};



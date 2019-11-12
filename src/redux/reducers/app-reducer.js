import {requestCurrentWeather} from './current-weather-reducer';
import {byLocationCreator} from "../../utils/WeatherDataTypeCreator";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
};

export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: !state.initialized
            };
        default:
            return state;
    }
};

const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = (latitude, longitude) => (dispatch) => {
    dispatch(requestCurrentWeather(byLocationCreator(latitude, longitude)));
    dispatch(setInitializedSuccess());
};
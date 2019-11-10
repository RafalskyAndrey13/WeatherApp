import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {currentWeatherReducer} from './redux/reducers/current-weather-reducer';
import {appReducer} from "./redux/reducers/app-reducer";
import {forecastReducer} from './redux/reducers/forecast-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    current: currentWeatherReducer,
    app: appReducer,
    form: formReducer,
    forecast: forecastReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
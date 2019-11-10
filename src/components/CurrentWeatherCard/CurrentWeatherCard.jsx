import React from 'react';
import styles from './CurrentWeatherCard.module.css';
import {connect} from 'react-redux';
import * as selector from '../../redux/selectors/weather-selectors';
import Preloader from "../common/Preloader/Preloader";
import AdditionalWeatherInfo from "../AdditionalWeatherInfo/AdditionalWeatherInfo";

const CurrentWeatherCard = (props) => {
    if (props.isFetching)
        return <Preloader/>;

    return <div className={styles.wrapper}>
        {props.location && <h1>{props.location}</h1>}
        <section className={styles.main}>
            {props.temperature && <p>{props.temperature} degrees</p>}
            {props.weatherIcon && <img src={props.weatherIcon} alt='Weather icon'/>}
            <p>{props.weatherMain}</p>
            {props.weatherDescription.toLowerCase() !== props.weatherMain.toLowerCase() &&
            <p className={styles.description}>{props.weatherDescription}</p>}
        </section>
        <AdditionalWeatherInfo pressure={props.pressure} windSpeed={props.windSpeed}
                               clouds={props.clouds} humidity={props.humidity}/>
    </div>
};

const mapStateToProps = (state) => ({
    location: selector.getLocation(state),
    temperature: selector.getTemperature(state),
    weatherMain: selector.getMainInfo(state),
    weatherIcon: selector.getImageUrl(state),
    weatherDescription: selector.getWeatherDescription(state),
    pressure: selector.getPressure(state),
    humidity: selector.getHumidity(state),
    windSpeed: selector.getWindSpeed(state),
    clouds: selector.getClouds(state),
    isFetching: state.current.isFetching
});

export default connect(mapStateToProps, null)(CurrentWeatherCard);
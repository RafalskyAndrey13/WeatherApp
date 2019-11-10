import React from 'react';
import styles from './AdditionalWeatherInfo.module.css';

const AdditionalWeatherInfo = (props) => (
    <section className={styles.additional}>
        {props.windSpeed && <p>Wind: {props.windSpeed} m/s</p>}
        {props.pressure && <p>Pressure: {props.pressure} hPa</p>}
        {props.humidity && <p>Humidity: {props.humidity} %</p>}
        {props.clouds !== null && <p>Cloudiness: {props.clouds} %</p>}
    </section>);

export default AdditionalWeatherInfo;
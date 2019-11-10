import React from 'react';
import styles from './ForecastItem.module.css';
import {getStringDate, getStringTime, getWeatherImageUrl} from "../../utils/UrlUtils";
import AdditionalWeatherInfo from "../AdditionalWeatherInfo/AdditionalWeatherInfo";

export const ForecastItem = (props) => (
    <div className={styles.wrapper}>
        <section className={styles.date}>
            <p className={styles.date_info}>{getStringDate(props.date)}</p>
            <p>{getStringTime(props.date)}</p>
        </section>
        <section className={styles.main}>
            <div>
                <p className={styles.main_info}>{props.main.main}</p>
                <p>{props.main.description}</p>
            </div>
            <div>
                <img src={getWeatherImageUrl(props.main.icon)} alt='Weather icon'/>
            </div>
            <div className={styles.temp_info}>
                <p>Min: {props.weather.temp_min} °C</p>
                <p className={styles.current_temp}>{props.weather.temp} °C</p>
                <p>Max: {props.weather.temp_max} °C</p>
            </div>

        </section>
        <AdditionalWeatherInfo pressure={props.weather.pressure} windSpeed={props.wind.speed}
                               clouds={props.clouds.all} humidity={props.weather.humidity}/>
    </div>
);


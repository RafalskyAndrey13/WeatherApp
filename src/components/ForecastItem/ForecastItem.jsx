import React from 'react';
import styles from './ForecastItem.module.css';
import {getDateForUrl, getStringDateWithTimestamp, getStringTime, getWeatherImageUrl} from "../../utils/UrlUtils";
import AdditionalWeatherInfo from "../AdditionalWeatherInfo/AdditionalWeatherInfo";
import {NavLink} from "react-router-dom";

export const ForecastItem = (props) => {
    const {year, month, day} = getDateForUrl(props.date);
    const url = `/statistics/${year}/${month}/${day}`;
    return (
        <NavLink to={url}>
            <div className={styles.wrapper}>
                <section className={styles.date}>
                    <p className={styles.date_info}>{getStringDateWithTimestamp(props.date)}</p>
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
        </NavLink>
    );
}


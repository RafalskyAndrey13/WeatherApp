import React from 'react';
import styles from './Statistics.module.css';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {getForecast} from "../../redux/selectors/forecast-selectors";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import StatisticItem from "../StatisticItem/StatisticItem";
import {getDateForUrl, getStringDate, getTime} from "../../utils/UrlUtils";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Statistics extends React.Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.forecast !== nextProps.forecast ||
            this.props.initialized !== nextProps.initialized;
    }


    render() {
        if (this.props.forecast.length === 0) {
            return <Preloader/>
        }

        const settings = {
            dots: true,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        };

        if (!this.props.initialized) {
            return <Preloader/>
        }

        const getStatisticValues = (data) => ({
            tempData: data.map(item => ({time: getTime(item.dt), value: item.main.temp})),
            pressureData: data.map(item => ({time: getTime(item.dt), value: item.main.pressure})),
            humidityData: data.map(item => ({time: getTime(item.dt), value: item.main.humidity})),
            windData: data.map(item => ({time: getTime(item.dt), value: item.wind.speed})),
            cloudsData: data.map(item => ({time: getTime(item.dt), value: item.clouds.all}))
        });

        const {day, month, year} = this.props.match.params.length === 0
            ? getDateForUrl(this.props.forecast[0].dt)
            : this.props.match.params;

        const dateProp = `${day}_${month}_${year}`;

        const data = this.props.forecast
            .filter(item => item.dt_txt.match(/\d{4}-\d{2}-\d{2}/)[0] === `${year}-${month}-${day}`);
        const statistics = getStatisticValues(data);

        return (
            <div>
                <header className={styles.header}>
                    <h1>{getStringDate(year, month, day)}</h1>
                </header>
                <div className={styles.stat_container}>
                    <Slider {...settings}>
                        <StatisticItem date={dateProp} label='Temperature Statistics' axisY='Temperature' metric='°C'
                                       data={statistics.tempData}/>
                        <StatisticItem date={dateProp} label='Pressure Statistics' axisY='Pressure' metric='hPa'
                                       data={statistics.pressureData}/>
                        <StatisticItem date={dateProp} label='Humidity Statistics' axisY='Humidity' metric='%'
                                       data={statistics.humidityData}/>
                        <StatisticItem date={dateProp} label='Wind Statistics' axisY='Wind Speed' metric='m/s'
                                       data={statistics.windData}/>
                        <StatisticItem date={dateProp} label='Cloudness Statistics' axisY='Clouds' metric='%'
                                       data={statistics.cloudsData}/>
                    </Slider>
                </div>
            </div>
        )


    }
}

const mapStateToProps = (state) => {
    return {
        forecast: getForecast(state)
    }
};

export default compose(connect(mapStateToProps, null), withRouter)(Statistics);
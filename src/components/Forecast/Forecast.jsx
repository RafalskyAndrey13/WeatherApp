import React from 'react';
import {connect} from 'react-redux';
import styles from './Forecast.module.css';
import {getForecast} from "../../redux/selectors/forecast-selectors";
import {ForecastItem} from "../ForecastItem/ForecastItem";
import Preloader from "../common/Preloader/Preloader";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Forecast = (props) => {

    if (props.isFetching)
        return <Preloader/>;

    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return <div className={styles.wrapper}>
        <Slider {...settings}>
            {
                props.forecast.map(item => {
                    return <ForecastItem
                        key={item.dt}
                        date={item.dt}
                        main={item.weather[0]}
                        wind={item.wind}
                        clouds={item.clouds}
                        weather={item.main}
                    />
                })
            }
        </Slider>

    </div>
};

const mapStateToProps = (state) => ({
    forecast: getForecast(state),
    isFetching: state.forecast.isFetching
});

export default connect(mapStateToProps, null)(Forecast);
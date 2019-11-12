import React from 'react';
import styles from './Search.module.css';
import {reduxForm} from 'redux-form';
import {requiredField} from '../../utils/validators/basic-validators';
import {firstLetterUpper} from '../../utils/validators/search-validators';
import {Input, createField} from "../common/FormControls";
import {connect} from 'react-redux';
import {requestCurrentWeather} from '../../redux/reducers/current-weather-reducer';
import {byCityNameCreator} from "../../utils/WeatherDataTypeCreator";

const SearchForm = ({handleSubmit, error}) => (
    <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.search_form}>
            {createField('search_city', [requiredField, firstLetterUpper], Input,
                {placeholder: 'Enter the name of the city', type: 'search'})}
            <button type="submit">Search</button>
        </form>
        {error && <div className={styles.error_container}>
            <p>{error}. Please, try again</p>
        </div>}
    </div>
);

const ReduxSearchForm = reduxForm({form: 'search_by_city_form'})(SearchForm);

const Search = (props) => {
    const handleSubmit = (formData) => {
        props.requestCurrentWeather(byCityNameCreator(formData.search_city));
    };

    return (<>
        <h1 className={styles.search_header}>Enter the name of the city</h1>
        <ReduxSearchForm onSubmit={handleSubmit}/>
    </>)
};

export default connect(null, {requestCurrentWeather})(Search);
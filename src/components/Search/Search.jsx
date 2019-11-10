import React from 'react';
import styles from './Search.module.css';
import {reduxForm} from 'redux-form';
import {requiredField} from '../../utils/validators/basic-validators';
import {firstLetterUpper} from '../../utils/validators/search-validators';
import {Input, createField} from "../common/FormControls";
import {connect} from 'react-redux';
import {requestCurrentWeatherByCity} from '../../redux/reducers/current-weather-reducer';

const SearchForm = ({handleSubmit, error}) => (
    <>
        <form onSubmit={handleSubmit} className={styles.search_form}>
            {createField('search_city', [requiredField, firstLetterUpper], Input,
                {placeholder: 'Enter the name of the city', type: 'search'})}
            <button type="submit">Search</button>
        </form>
    </>
);

const ReduxSearchForm = reduxForm({form: 'search_by_city_form'})(SearchForm);

const Search = (props) => {
    const handleSubmit = (formData) => {
        props.requestCurrentWeatherByCity(formData.search_city);
    };

    return (<>
        <h1 className={styles.search_header}>Enter the name of the city</h1>
        <ReduxSearchForm onSubmit={handleSubmit}/>
    </>)
};

export default connect(null, {requestCurrentWeatherByCity})(Search);
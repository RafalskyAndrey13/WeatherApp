import React from 'react';
import styles from './FormControls.module.css';
import {Field} from 'redux-form';

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return <div className={styles.wrapper}>
        <div className={styles.input}>
            <input {...input} {...props}/>
        </div>
        <div className={styles.error_container}>
            {hasError && <span>{error}</span>}
        </div>
    </div>
};

export const createField = (name, validators, component, props={}) => (
    <Field name={name}
    validate={validators}
    component={component} {...props}/>
)
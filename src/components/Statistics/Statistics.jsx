import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {getForecast} from "../../redux/selectors/forecast-selectors";
import {connect} from "react-redux";

const Statistics = (props) => {
    const {day, month, year} = props.match.params;
    console.log('render');
    return <div>
        {

        }
    </div>
};

const mapStateToProps = (state) => {
    console.log('mapState');
    return {
        forecast: getForecast(state)
    }
};

export default compose(withRouter, connect(mapStateToProps, null))(Statistics);
import React from 'react';
import Helmet from 'react-helmet';
import Search from "./components/Search/Search";
import './App.css';
import withProvider from "./hoc/withProvider";
import {compose} from 'redux';
import {initializeApp} from "./redux/reducers/app-reducer";
import {connect} from 'react-redux';
import Preloader from "./components/common/Preloader/Preloader";
import withLocation from "./hoc/withLocation";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

const App = (props) => (
    <div className="App">
        <Helmet bodyAttributes={{
            style: 'background: linear-gradient(to right, #0b0b5d 0%, #37247d 100%); ' +
                'height: 100vh'
        }}/>
        <Search/>
        {props.initialized ? <WeatherInfo/> : <Preloader/>}
    </div>
)


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

// const withLocationInfo = connect(null, {onLocationChanged: initializeApp})(withLocation(App));

/*export default compose(withProvider,
    connect(mapStateToProps, null),
    connect(null, {onLocationChanged: initializeApp}),
    withLocation)(App);*/

export default compose(withProvider,
    connect(mapStateToProps, {onLocationChanged: initializeApp}),
    withLocation)(App);
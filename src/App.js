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
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import Statistics from "./components/Statistics/Statistics";

const App = (props) => (
    <div>
        <BrowserRouter basename='https://rafalskyandrey13.github.io/WeatherApp/'>
            <Route exact path='/' render={() => <div className="App">
                <Search/>
                {props.initialized ? <WeatherInfo/> : <Preloader/>}
            </div>}/>
            <Route exact path='/statistics/:year/:month/:day' render={() => <Statistics initialized={props.initialized}/>}/>
        </BrowserRouter>
    </div>
);


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});


export default compose(withProvider,
    connect(mapStateToProps, {onLocationChanged: initializeApp}),
    withLocation)(App);

// const withLocationInfo = connect(null, {onLocationChanged: initializeApp})(withLocation(App));

/*export default compose(withProvider,
    connect(mapStateToProps, null),
    connect(null, {onLocationChanged: initializeApp}),
    withLocation)(App);*/

{/*<Helmet bodyAttributes={{*/
}
{/*    style: 'background: linear-gradient(to right, #0b0b5d 0%, #37247d 100%); ' +*/
}
{/*        'height: 100vh'*/
}
{/*}}/>*/
}
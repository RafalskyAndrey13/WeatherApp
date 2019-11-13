import React, {useEffect} from 'react';
import {usePosition} from "use-position";


const withLocation = (Component) => {
    return (props) => {
        const {latitude, longitude} = usePosition();

        if (props.onLocationChanged){
            useEffect(() => {
                if (latitude) props.onLocationChanged(latitude, longitude);
            }, [latitude, longitude]);
        }

        return (
            <Component {...props}/>
        )
    }
};

export default withLocation;
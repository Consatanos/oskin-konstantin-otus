import React from 'react';
import { locationsMock } from '../mocks/weather.mock';
import { LocationModel } from '../models/weather.model';
import LocationList from './location-list';

const Weathet = () => {
    let locations: LocationModel[] = locationsMock;

    return (
        <>
            <header>Weather list</header>
            <LocationList
                locations={locations} />
        </>
    )
}

export default Weathet;
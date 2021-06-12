import React from 'react';
import { LocationModel } from '../models/weather.model';
import Location from './location';

const LocationList = ({ locations }) => (
    <ul>
        {locations.map((location: LocationModel) => (
            <Location
                location={location} />
        ))}

    </ul>
);

export default LocationList;
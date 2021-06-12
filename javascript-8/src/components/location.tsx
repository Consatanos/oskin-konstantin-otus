import React from 'react';
import { getTemperatureUnits, getWindDirection } from '../helpers/weather.helper';

const Location = ({ location }) => (
    <li>
        Местоположение: {location.location}<br />
        Температура: {location.temperature} {getTemperatureUnits(location.temperatureUnits)}<br />
        Направление ветра: {getWindDirection(location.windDirection)}<br />
        Скорость ветра: {location.windSpeed} м/c<br />
        Осадки: {location.precipitation}
    </li>
);

export default Location;

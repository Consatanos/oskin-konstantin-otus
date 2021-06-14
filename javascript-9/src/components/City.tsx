import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getTemperatureUnits, getWindDirection } from '../helpers/weather.helper';
import { CityModel, CityState } from '../models/city.model';

const City = ({ cities }: { cities: CityModel[] }) => {
    // @ts-ignore
    const { id } = useParams();
    const [city] = cities.filter(x => x.name === id);

    return (
        <>
            <Link to="/">Назад</Link><br />
            Местоположение: {city.name}<br />
            Температура: {city.weather.temperature} {getTemperatureUnits(city.weather.temperatureUnits)}<br />
            Направление ветра: {getWindDirection(city.weather.windDirection)}<br />
            Скорость ветра: {city.weather.windSpeed} м/c<br />
            Осадки: {city.weather.precipitation}
        </>
    )
};

const mapStateToProps = (state: CityState) => ({
    cities: state.cities
});

export default connect(mapStateToProps)(City);
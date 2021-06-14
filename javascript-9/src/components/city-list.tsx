import React from 'react';
import { connect } from 'react-redux';
import { CityModel, CityState } from '../models/city.model';

const CityList = ({ cities }: { cities: CityModel[] }) => {
    return (
        <ul>
            {cities.map((city) => (
                <li key={city.id}>{city.name}</li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state: CityState) => ({
    cities: state.cities
});

export default connect(mapStateToProps)(CityList);

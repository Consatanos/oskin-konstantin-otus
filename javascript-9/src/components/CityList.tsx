import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CityModel, CityState } from '../models/city.model';
import { Link } from 'react-router-dom';

const CityList = ({ cities }: { cities: CityModel[] }) => {
    const cityList: CityModel[] = cities;
    const [filter, setFilter] = useState('');

    return (
        <>
            <input
                type="text"
                name="filter"
                id="filter"
                value={filter}
                onChange={event => setFilter(event.target.value)} />
            <ul>
                {cityList
                    .filter(c => c.name.includes(filter) || filter === '')
                    .map((city) => (
                        <li
                            key={city.id}>
                            <Link to={`/${city.name}`}>{city.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

const mapStateToProps = (state: CityState) => ({
    cities: state.cities
});

export default connect(mapStateToProps)(CityList);

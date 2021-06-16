import { CitiesMock } from '../mocks/cities.mock';
import { CityAction, CityModel, CityState } from '../models/city.model';
import * as actionTypes from './actionTypes';

const initialState: CityState = {
    cities: CitiesMock
}

const reducer = (
    state: CityState = initialState,
    action: CityAction
): CityState => {
    switch (action.type) {
        case actionTypes.REMOVE_CITY:
            const updateCities: CityModel[] = state.cities.filter(
                city => city.id !== action.city.id
            )
            return {
                ...state,
                cities: updateCities
            }
    }

    return state;
}

export default reducer;
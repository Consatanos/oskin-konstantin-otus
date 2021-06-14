import { CityAction, CityModel } from '../models/city.model';
import * as actionTypes from './actionTypes';

export function removeCity(city: CityModel) {
    const action: CityAction = {
        type: actionTypes.REMOVE_CITY,
        city
    }

    return action;
}
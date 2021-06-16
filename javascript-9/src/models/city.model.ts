import { WeatherModel } from "./weather.model";

export interface CityModel {
    id: number;
    name: string;
    country: string;
    weather: WeatherModel;
}

export type CityState = {
    cities: CityModel[]
}

export type CityAction = {
    type: string,
    city: CityModel
}

export type DispatchType = (args: CityAction) => CityAction;
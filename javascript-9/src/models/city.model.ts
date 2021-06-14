import { WeatherModel } from "./weather.model";

export interface CityModel {
    id: number;
    name: string;
    country: string;
    weather: WeatherModel;
}
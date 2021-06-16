import { CityModel } from "../models/city.model";
import { TemperatureUnits, WindDirection } from "../models/weather.model";

export const CitiesMock: CityModel[] = [
    {
        id: 1,
        name: 'Moscow',
        country: 'Russia',
        weather: {
            temperature: 25,
            temperatureUnits: TemperatureUnits.C,
            windDirection: WindDirection.North,
            windSpeed: 2,
            precipitation: 'none'
        }
    },
    {
        id: 2,
        name: 'Saint-Petersburg',
        country: 'Russia',
        weather: {
            temperature: 49,
            temperatureUnits: TemperatureUnits.F,
            windDirection: WindDirection.SouthEast,
            windSpeed: 10,
            precipitation: 'rain'
        }
    }
]
import { LocationModel, TemperatureUnits, WindDirection } from "../models/weather.model";

export const locationsMock: LocationModel[] = [
    {
        id: 1,
        location: 'Moscow',
        temperature: 25,
        temperatureUnits: TemperatureUnits.C,
        windDirection: WindDirection.North,
        windSpeed: 2,
        precipitation: 'none'
    },
    {
        id: 2,
        location: 'Saint-Petersburg',
        temperature: 49,
        temperatureUnits: TemperatureUnits.F,
        windDirection: WindDirection.SouthEast,
        windSpeed: 10,
        precipitation: 'rain'
    }
]
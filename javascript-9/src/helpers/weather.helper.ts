import { TemperatureUnits, WindDirection } from "../models/weather.model";

export function getTemperatureUnits(temperatureUnits: TemperatureUnits): string {
    switch (temperatureUnits) {
        case TemperatureUnits.C:
            return 'C';
        case TemperatureUnits.F:
            return 'F';
    }
}

export function getWindDirection(windDirection: WindDirection): string {
    switch (windDirection) {
        case WindDirection.East:
            return 'восток';
        case WindDirection.North:
            return 'север';
        case WindDirection.NorthEast:
            return 'северо-восток';
        case WindDirection.NorthWest:
            return 'северо-запад';
        case WindDirection.South:
            return 'юг';
        case WindDirection.SouthEast:
            return 'юго-восток';
        case WindDirection.SouthWest:
            return 'юго-запад';
        case WindDirection.West:
            return 'восток';
    }
}
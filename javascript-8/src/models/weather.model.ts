export interface LocationModel {
    id: number;
    location: string;
    temperature: number;
    temperatureUnits: TemperatureUnits;
    windDirection: WindDirection;
    windSpeed: number;
    precipitation: string;
}

export enum WindDirection {
    North = 1,
    NorthWest = 2,
    NorthEast = 3,
    South = 4,
    SouthWest = 5,
    SouthEast = 6,
    West = 7,
    East = 8
}

export enum TemperatureUnits {
    C = 1,
    F = 2
}

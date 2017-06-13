export interface IForecast {
  latitude: number;
  longitude: number;
  timezone: string;
  offset: number;
  currently: IDataPoint;
  // minutely: IDataBlock[];
  hourly: IDataBlock;
  daily: IDataBlock;
  // alerts: any[];
  flags: IFlagsObject;
}

export interface IDataPoint {
  time: number;
  summary: string;
  icon: string;
  sunriseTime?: number;
  sunsetTime?: number;
  moonPhase?: number;
  precipIntensity?: number;
  precipProbability?: number;
  temperatureMin?: number;
  temperatureMax?: number;
  temperature?: number;
  apparentTemperature?: number;
  dewPoint?: number;
  humidity?: number;
  windSpeed?: number;
  windBearing?: number;
  cloudCover?: number;
  pressure?: number;
  ozone?: number;
}

export interface IDataBlock {
  data: IDataPoint[];
  summary: string;
  icon: string;
}

export interface IFlagsObject {
  'sources': string[];
  'isd-stations': string[];
  'madis-stations': string[];
  units: string;
}

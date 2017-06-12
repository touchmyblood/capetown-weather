import { Injectable } from '@angular/core';
import { IForecast } from './forecast.model';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WeatherService {
  apiRoot: string = 'http://ec-weather-proxy.appspot.com/forecast/';
  apikey: string  = "API KEY SHOULD BE PASTED HERE";
  coordinates: string = "-33.9249,18.4241";
  delay: number = 0;
  chaos: number = 0.5;

  constructor(private http: Http, private jsonp: Jsonp) { }

  getWeatherX(): Observable<IForecast> {

    let apiURL = `${this.apiRoot}/${this.apikey}/${this.coordinates}?delay=${this.delay}&chaos=${this.chaos}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL).map((response: Response) => {
      return <IForecast>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.status);
  }
}

@Injectable()
export class MockWeatherService {
  getWeather() {
    return <IForecast>WEATHER;
  }
}

const WEATHER = { "latitude": -33.9249, "longitude": 18.4241, "timezone": "Africa/Johannesburg", "offset": 2, "currently": { "time": 1496659404, "summary": "Mostly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 64.72, "apparentTemperature": 64.72, "dewPoint": 48.24, "humidity": 0.55, "windSpeed": 3.28, "windBearing": 129, "cloudCover": 0.6, "pressure": 1018.59, "ozone": 256.4 }, "hourly": { "summary": "Partly cloudy later this afternoon.", "icon": "partly-cloudy-day", "data": [{ "time": 1496656800, "summary": "Mostly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 63.19, "apparentTemperature": 63.19, "dewPoint": 46.88, "humidity": 0.55, "windSpeed": 3.85, "windBearing": 121, "cloudCover": 0.66, "pressure": 1019.13, "ozone": 256.44 }, { "time": 1496660400, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 65.31, "apparentTemperature": 65.31, "dewPoint": 48.77, "humidity": 0.55, "windSpeed": 3.08, "windBearing": 133, "cloudCover": 0.58, "pressure": 1018.38, "ozone": 256.39 }, { "time": 1496664000, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 67.42, "apparentTemperature": 67.42, "dewPoint": 50.53, "humidity": 0.55, "windSpeed": 2.74, "windBearing": 149, "cloudCover": 0.47, "pressure": 1017.68, "ozone": 256.43 }, { "time": 1496667600, "summary": "Partly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 67.76, "apparentTemperature": 67.76, "dewPoint": 50.62, "humidity": 0.54, "windSpeed": 3.04, "windBearing": 162, "cloudCover": 0.32, "pressure": 1017.05, "ozone": 256.51 }, { "time": 1496671200, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 66.44, "apparentTemperature": 66.44, "dewPoint": 49.55, "humidity": 0.55, "windSpeed": 3.62, "windBearing": 169, "cloudCover": 0.13, "pressure": 1016.46, "ozone": 256.69 }, { "time": 1496674800, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 64.07, "apparentTemperature": 64.07, "dewPoint": 48.26, "humidity": 0.56, "windSpeed": 4.01, "windBearing": 170, "cloudCover": 0, "pressure": 1015.96, "ozone": 256.99 }, { "time": 1496678400, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 61.12, "apparentTemperature": 61.12, "dewPoint": 48.12, "humidity": 0.62, "windSpeed": 4.1, "windBearing": 162, "cloudCover": 0, "pressure": 1015.6, "ozone": 257.44 }, { "time": 1496682000, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 58.3, "apparentTemperature": 58.3, "dewPoint": 47.66, "humidity": 0.68, "windSpeed": 4.11, "windBearing": 150, "cloudCover": 0, "pressure": 1015.31, "ozone": 258.02 }, { "time": 1496685600, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 56.45, "apparentTemperature": 56.45, "dewPoint": 47.45, "humidity": 0.72, "windSpeed": 3.83, "windBearing": 140, "cloudCover": 0, "pressure": 1014.99, "ozone": 258.71 }, { "time": 1496689200, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 55.73, "apparentTemperature": 55.73, "dewPoint": 47.43, "humidity": 0.74, "windSpeed": 2.87, "windBearing": 135, "cloudCover": 0, "pressure": 1014.56, "ozone": 259.61 }, { "time": 1496692800, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 55.46, "apparentTemperature": 55.46, "dewPoint": 47.38, "humidity": 0.74, "windSpeed": 1.46, "windBearing": 126, "cloudCover": 0, "pressure": 1014.09, "ozone": 260.63 }, { "time": 1496696400, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 55.25, "apparentTemperature": 55.25, "dewPoint": 47.14, "humidity": 0.74, "windSpeed": 0.44, "windBearing": 41, "cloudCover": 0, "pressure": 1013.59, "ozone": 261.52 }, { "time": 1496700000, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 55.11, "apparentTemperature": 55.11, "dewPoint": 46.7, "humidity": 0.73, "windSpeed": 1.59, "windBearing": 340, "cloudCover": 0, "pressure": 1013.07, "ozone": 262.21 }, { "time": 1496703600, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 55.6, "apparentTemperature": 55.6, "dewPoint": 46.65, "humidity": 0.72, "windSpeed": 3, "windBearing": 332, "cloudCover": 0, "pressure": 1012.52, "ozone": 262.77 }, { "time": 1496707200, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 56.01, "apparentTemperature": 56.01, "dewPoint": 46.59, "humidity": 0.71, "windSpeed": 4.3, "windBearing": 330, "cloudCover": 0, "pressure": 1011.99, "ozone": 263.21 }, { "time": 1496710800, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 56.29, "apparentTemperature": 56.29, "dewPoint": 46.44, "humidity": 0.7, "windSpeed": 5.41, "windBearing": 328, "cloudCover": 0, "pressure": 1011.49, "ozone": 263.48 }, { "time": 1496714400, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 56.45, "apparentTemperature": 56.45, "dewPoint": 46.27, "humidity": 0.69, "windSpeed": 6.39, "windBearing": 328, "cloudCover": 0, "pressure": 1011.03, "ozone": 263.63 }, { "time": 1496718000, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 56.34, "apparentTemperature": 56.34, "dewPoint": 46.28, "humidity": 0.69, "windSpeed": 7.22, "windBearing": 330, "cloudCover": 0, "pressure": 1010.63, "ozone": 263.78 }, { "time": 1496721600, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 55.62, "apparentTemperature": 55.62, "dewPoint": 46.63, "humidity": 0.72, "windSpeed": 7.78, "windBearing": 335, "cloudCover": 0.01, "pressure": 1010.25, "ozone": 263.97 }, { "time": 1496725200, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 54.86, "apparentTemperature": 54.86, "dewPoint": 47.25, "humidity": 0.75, "windSpeed": 8.32, "windBearing": 341, "cloudCover": 0.03, "pressure": 1009.91, "ozone": 264.16 }, { "time": 1496728800, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 55.32, "apparentTemperature": 55.32, "dewPoint": 48.17, "humidity": 0.77, "windSpeed": 9.29, "windBearing": 345, "cloudCover": 0.04, "pressure": 1009.55, "ozone": 264.42 }, { "time": 1496732400, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 57.91, "apparentTemperature": 57.91, "dewPoint": 49.5, "humidity": 0.74, "windSpeed": 10.88, "windBearing": 345, "cloudCover": 0.05, "pressure": 1009.24, "ozone": 264.79 }, { "time": 1496736000, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 61.78, "apparentTemperature": 61.78, "dewPoint": 51.01, "humidity": 0.68, "windSpeed": 12.79, "windBearing": 343, "cloudCover": 0.06, "pressure": 1009.02, "ozone": 265.21 }, { "time": 1496739600, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 65.51, "apparentTemperature": 65.51, "dewPoint": 52.31, "humidity": 0.62, "windSpeed": 14.61, "windBearing": 342, "cloudCover": 0.07, "pressure": 1008.54, "ozone": 265.61 }, { "time": 1496743200, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 68.62, "apparentTemperature": 68.62, "dewPoint": 53.38, "humidity": 0.58, "windSpeed": 16.33, "windBearing": 342, "cloudCover": 0.06, "pressure": 1007.6, "ozone": 265.98 }, { "time": 1496746800, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 71.16, "apparentTemperature": 71.16, "dewPoint": 54.13, "humidity": 0.55, "windSpeed": 17.97, "windBearing": 341, "cloudCover": 0.05, "pressure": 1006.39, "ozone": 266.31 }, { "time": 1496750400, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 72.53, "apparentTemperature": 72.53, "dewPoint": 54.48, "humidity": 0.53, "windSpeed": 19.05, "windBearing": 340, "cloudCover": 0.03, "pressure": 1005.38, "ozone": 266.57 }, { "time": 1496754000, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 72.02, "apparentTemperature": 72.02, "dewPoint": 54.01, "humidity": 0.53, "windSpeed": 19.15, "windBearing": 338, "cloudCover": 0.02, "pressure": 1004.75, "ozone": 266.69 }, { "time": 1496757600, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 70.06, "apparentTemperature": 70.06, "dewPoint": 52.95, "humidity": 0.55, "windSpeed": 18.77, "windBearing": 335, "cloudCover": 0.01, "pressure": 1004.31, "ozone": 266.73 }, { "time": 1496761200, "summary": "Clear", "icon": "clear-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 67.46, "apparentTemperature": 67.46, "dewPoint": 52.03, "humidity": 0.58, "windSpeed": 18.84, "windBearing": 335, "cloudCover": 0, "pressure": 1003.98, "ozone": 266.86 }, { "time": 1496764800, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 64.5, "apparentTemperature": 64.5, "dewPoint": 51.78, "humidity": 0.63, "windSpeed": 19.64, "windBearing": 339, "cloudCover": 0, "pressure": 1003.78, "ozone": 267.2 }, { "time": 1496768400, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 61.73, "apparentTemperature": 61.73, "dewPoint": 52.06, "humidity": 0.71, "windSpeed": 21.04, "windBearing": 346, "cloudCover": 0, "pressure": 1003.65, "ozone": 267.63 }, { "time": 1496772000, "summary": "Breezy", "icon": "wind", "precipIntensity": 0, "precipProbability": 0, "temperature": 60.33, "apparentTemperature": 60.33, "dewPoint": 52.88, "humidity": 0.76, "windSpeed": 22.95, "windBearing": 350, "cloudCover": 0, "pressure": 1003.45, "ozone": 267.99 }, { "time": 1496775600, "summary": "Drizzle and Windy", "icon": "rain", "precipIntensity": 0.0088, "precipProbability": 0.47, "precipType": "rain", "temperature": 60.69, "apparentTemperature": 60.69, "dewPoint": 54.51, "humidity": 0.8, "windSpeed": 25.58, "windBearing": 352, "cloudCover": 0.18, "pressure": 1003.1, "ozone": 268.04 }, { "time": 1496779200, "summary": "Light Rain and Windy", "icon": "rain", "precipIntensity": 0.0214, "precipProbability": 0.62, "precipType": "rain", "temperature": 61.92, "apparentTemperature": 61.92, "dewPoint": 56.58, "humidity": 0.83, "windSpeed": 28.53, "windBearing": 353, "cloudCover": 0.41, "pressure": 1002.7, "ozone": 268.02 }, { "time": 1496782800, "summary": "Light Rain and Windy", "icon": "rain", "precipIntensity": 0.0355, "precipProbability": 0.68, "precipType": "rain", "temperature": 62.98, "apparentTemperature": 62.98, "dewPoint": 58.15, "humidity": 0.84, "windSpeed": 30.53, "windBearing": 350, "cloudCover": 0.59, "pressure": 1002.26, "ozone": 268.53 }, { "time": 1496786400, "summary": "Rain and Windy", "icon": "rain", "precipIntensity": 0.0539, "precipProbability": 0.73, "precipType": "rain", "temperature": 63.36, "apparentTemperature": 63.36, "dewPoint": 58.63, "humidity": 0.85, "windSpeed": 31.46, "windBearing": 342, "cloudCover": 0.68, "pressure": 1001.81, "ozone": 270.11 }, { "time": 1496790000, "summary": "Rain and Windy", "icon": "rain", "precipIntensity": 0.0733, "precipProbability": 0.77, "precipType": "rain", "temperature": 63.16, "apparentTemperature": 63.16, "dewPoint": 58.16, "humidity": 0.84, "windSpeed": 32.71, "windBearing": 331, "cloudCover": 0.7, "pressure": 1001.38, "ozone": 272.21 }, { "time": 1496793600, "summary": "Rain and Windy", "icon": "rain", "precipIntensity": 0.0828, "precipProbability": 0.78, "precipType": "rain", "temperature": 62.66, "apparentTemperature": 62.66, "dewPoint": 57.24, "humidity": 0.82, "windSpeed": 34.1, "windBearing": 323, "cloudCover": 0.66, "pressure": 1001.08, "ozone": 273.81 }, { "time": 1496797200, "summary": "Rain and Windy", "icon": "rain", "precipIntensity": 0.0741, "precipProbability": 0.77, "precipType": "rain", "temperature": 61.73, "apparentTemperature": 61.73, "dewPoint": 55.77, "humidity": 0.81, "windSpeed": 34.23, "windBearing": 318, "cloudCover": 0.48, "pressure": 1000.96, "ozone": 273.81 }, { "time": 1496800800, "summary": "Rain and Windy", "icon": "rain", "precipIntensity": 0.0556, "precipProbability": 0.74, "precipType": "rain", "temperature": 60.57, "apparentTemperature": 60.57, "dewPoint": 53.92, "humidity": 0.79, "windSpeed": 33.52, "windBearing": 315, "cloudCover": 0.24, "pressure": 1000.98, "ozone": 273.31 }, { "time": 1496804400, "summary": "Light Rain and Windy", "icon": "rain", "precipIntensity": 0.0411, "precipProbability": 0.7, "precipType": "rain", "temperature": 59.48, "apparentTemperature": 59.48, "dewPoint": 52.12, "humidity": 0.77, "windSpeed": 33.24, "windBearing": 313, "cloudCover": 0.09, "pressure": 1001.07, "ozone": 274.52 }, { "time": 1496808000, "summary": "Light Rain and Windy", "icon": "rain", "precipIntensity": 0.0377, "precipProbability": 0.69, "precipType": "rain", "temperature": 58.51, "apparentTemperature": 58.51, "dewPoint": 50.51, "humidity": 0.75, "windSpeed": 33.8, "windBearing": 312, "cloudCover": 0.15, "pressure": 1001.22, "ozone": 279.36 }, { "time": 1496811600, "summary": "Light Rain and Windy", "icon": "rain", "precipIntensity": 0.0385, "precipProbability": 0.69, "precipType": "rain", "temperature": 57.68, "apparentTemperature": 57.68, "dewPoint": 49.05, "humidity": 0.73, "windSpeed": 34.67, "windBearing": 312, "cloudCover": 0.32, "pressure": 1001.41, "ozone": 285.92 }, { "time": 1496815200, "summary": "Light Rain and Windy", "icon": "rain", "precipIntensity": 0.0368, "precipProbability": 0.69, "precipType": "rain", "temperature": 57.24, "apparentTemperature": 57.24, "dewPoint": 47.9, "humidity": 0.71, "windSpeed": 35.77, "windBearing": 313, "cloudCover": 0.44, "pressure": 1001.61, "ozone": 290.72 }, { "time": 1496818800, "summary": "Light Rain and Windy", "icon": "rain", "precipIntensity": 0.0278, "precipProbability": 0.65, "precipType": "rain", "temperature": 57.53, "apparentTemperature": 57.53, "dewPoint": 47.1, "humidity": 0.68, "windSpeed": 37.34, "windBearing": 315, "cloudCover": 0.43, "pressure": 1001.84, "ozone": 291.94 }, { "time": 1496822400, "summary": "Light Rain and Dangerously Windy", "icon": "rain", "precipIntensity": 0.016, "precipProbability": 0.57, "precipType": "rain", "temperature": 58.25, "apparentTemperature": 58.25, "dewPoint": 46.58, "humidity": 0.65, "windSpeed": 39.27, "windBearing": 318, "cloudCover": 0.38, "pressure": 1002.08, "ozone": 291.4 }, { "time": 1496826000, "summary": "Drizzle and Dangerously Windy", "icon": "rain", "precipIntensity": 0.0078, "precipProbability": 0.39, "precipType": "rain", "temperature": 58.7, "apparentTemperature": 58.7, "dewPoint": 46.35, "humidity": 0.64, "windSpeed": 40.75, "windBearing": 320, "cloudCover": 0.37, "pressure": 1002.17, "ozone": 291.05 }, { "time": 1496829600, "summary": "Drizzle and Dangerously Windy", "icon": "rain", "precipIntensity": 0.0055, "precipProbability": 0.24, "precipType": "rain", "temperature": 58.5, "apparentTemperature": 58.5, "dewPoint": 46.58, "humidity": 0.65, "windSpeed": 41.69, "windBearing": 320, "cloudCover": 0.43, "pressure": 1001.93, "ozone": 291.49 }] }, "daily": { "summary": "Rain tomorrow through Thursday, with temperatures falling to 58Â°F on Thursday.", "icon": "rain", "data": [{ "time": 1496613600, "summary": "Partly cloudy until afternoon.", "icon": "partly-cloudy-day", "sunriseTime": 1496641598, "sunsetTime": 1496677552, "moonPhase": 0.37, "precipIntensity": 0, "precipIntensityMax": 0, "precipProbability": 0, "temperatureMin": 44.59, "temperatureMinTime": 1496635200, "temperatureMax": 67.76, "temperatureMaxTime": 1496667600, "apparentTemperatureMin": 41.59, "apparentTemperatureMinTime": 1496635200, "apparentTemperatureMax": 67.76, "apparentTemperatureMaxTime": 1496667600, "dewPoint": 46.87, "humidity": 0.72, "windSpeed": 3.82, "windBearing": 136, "cloudCover": 0.15, "pressure": 1018.96, "ozone": 261.16 }, { "time": 1496700000, "summary": "Rain and windy starting in the evening.", "icon": "rain", "sunriseTime": 1496728029, "sunsetTime": 1496763941, "moonPhase": 0.41, "precipIntensity": 0.0025, "precipIntensityMax": 0.0355, "precipIntensityMaxTime": 1496782800, "precipProbability": 0.68, "precipType": "rain", "temperatureMin": 54.86, "temperatureMinTime": 1496725200, "temperatureMax": 72.53, "temperatureMaxTime": 1496750400, "apparentTemperatureMin": 54.86, "apparentTemperatureMinTime": 1496725200, "apparentTemperatureMax": 72.53, "apparentTemperatureMaxTime": 1496750400, "dewPoint": 50.86, "humidity": 0.68, "windSpeed": 14.48, "windBearing": 343, "cloudCover": 0.06, "pressure": 1007.44, "ozone": 265.57 }, { "time": 1496786400, "summary": "Rain and windy throughout the day.", "icon": "rain", "sunriseTime": 1496814459, "sunsetTime": 1496850333, "moonPhase": 0.43, "precipIntensity": 0.0411, "precipIntensityMax": 0.0828, "precipIntensityMaxTime": 1496793600, "precipProbability": 0.78, "precipType": "rain", "temperatureMin": 53.25, "temperatureMinTime": 1496869200, "temperatureMax": 63.36, "temperatureMaxTime": 1496786400, "apparentTemperatureMin": 53.25, "apparentTemperatureMinTime": 1496869200, "apparentTemperatureMax": 63.36, "apparentTemperatureMaxTime": 1496786400, "dewPoint": 49.72, "humidity": 0.74, "windSpeed": 32.39, "windBearing": 306, "cloudCover": 0.62, "pressure": 1002.83, "ozone": 291.65 }, { "time": 1496872800, "summary": "Light rain until evening and breezy in the morning.", "icon": "rain", "sunriseTime": 1496900888, "sunsetTime": 1496936726, "moonPhase": 0.46, "precipIntensity": 0.0246, "precipIntensityMax": 0.0531, "precipIntensityMaxTime": 1496876400, "precipProbability": 0.73, "precipType": "rain", "temperatureMin": 51.48, "temperatureMinTime": 1496898000, "temperatureMax": 58.08, "temperatureMaxTime": 1496923200, "apparentTemperatureMin": 51.48, "apparentTemperatureMinTime": 1496898000, "apparentTemperatureMax": 58.08, "apparentTemperatureMaxTime": 1496923200, "dewPoint": 43.01, "humidity": 0.67, "windSpeed": 14.7, "windBearing": 244, "cloudCover": 0.74, "pressure": 1020.92, "ozone": 322.96 }, { "time": 1496959200, "summary": "Mostly cloudy throughout the day.", "icon": "partly-cloudy-day", "sunriseTime": 1496987316, "sunsetTime": 1497023120, "moonPhase": 0.49, "precipIntensity": 0.0004, "precipIntensityMax": 0.0011, "precipIntensityMaxTime": 1497031200, "precipProbability": 0.02, "precipType": "rain", "temperatureMin": 45.82, "temperatureMinTime": 1496984400, "temperatureMax": 59.67, "temperatureMaxTime": 1497009600, "apparentTemperatureMin": 44.04, "apparentTemperatureMinTime": 1496984400, "apparentTemperatureMax": 59.67, "apparentTemperatureMaxTime": 1497009600, "dewPoint": 41.14, "humidity": 0.67, "windSpeed": 2.5, "windBearing": 55, "cloudCover": 0.75, "pressure": 1023.79, "ozone": 305.4 }, { "time": 1497045600, "summary": "Mostly cloudy until evening.", "icon": "partly-cloudy-day", "sunriseTime": 1497073742, "sunsetTime": 1497109516, "moonPhase": 0.53, "precipIntensity": 0.001, "precipIntensityMax": 0.0015, "precipIntensityMaxTime": 1497092400, "precipProbability": 0.03, "precipType": "rain", "temperatureMin": 52.59, "temperatureMinTime": 1497052800, "temperatureMax": 64, "temperatureMaxTime": 1497096000, "apparentTemperatureMin": 52.59, "apparentTemperatureMinTime": 1497052800, "apparentTemperatureMax": 64, "apparentTemperatureMaxTime": 1497096000, "dewPoint": 44.8, "humidity": 0.63, "windSpeed": 3.7, "windBearing": 159, "cloudCover": 0.78, "pressure": 1022.78, "ozone": 316.72 }, { "time": 1497132000, "summary": "Clear throughout the day.", "icon": "clear-day", "sunriseTime": 1497160168, "sunsetTime": 1497195913, "moonPhase": 0.56, "precipIntensity": 0, "precipIntensityMax": 0, "precipProbability": 0, "temperatureMin": 53.08, "temperatureMinTime": 1497153600, "temperatureMax": 65.86, "temperatureMaxTime": 1497178800, "apparentTemperatureMin": 53.08, "apparentTemperatureMinTime": 1497153600, "apparentTemperatureMax": 65.86, "apparentTemperatureMaxTime": 1497178800, "dewPoint": 47.91, "humidity": 0.7, "windSpeed": 4.55, "windBearing": 163, "cloudCover": 0, "pressure": 1025.25, "ozone": 303.8 }, { "time": 1497218400, "summary": "Partly cloudy starting in the evening.", "icon": "partly-cloudy-night", "sunriseTime": 1497246592, "sunsetTime": 1497282312, "moonPhase": 0.59, "precipIntensity": 0, "precipIntensityMax": 0, "precipProbability": 0, "temperatureMin": 53.99, "temperatureMinTime": 1497243600, "temperatureMax": 70.28, "temperatureMaxTime": 1497268800, "apparentTemperatureMin": 53.99, "apparentTemperatureMinTime": 1497243600, "apparentTemperatureMax": 70.28, "apparentTemperatureMaxTime": 1497268800, "dewPoint": 49.34, "humidity": 0.69, "windSpeed": 2.73, "windBearing": 175, "cloudCover": 0.15, "pressure": 1024.82, "ozone": 292.45 }] }, "flags": { "sources": ["gfs", "cmc", "fnmoc", "isd", "madis"], "isd-stations": ["687130-99999", "687150-99999", "688110-99999", "688130-99999", "688140-99999", "688150-99999", "688160-99999", "688170-99999", "688210-99999", "688270-99999", "689110-99999", "689120-99999", "689160-99999", "689180-99999", "689250-99999", "689990-99999"], "madis-stations": ["AU121", "AU296", "AU389", "D0904", "E3102", "E5490", "E7561", "FACT"], "units": "us" } };

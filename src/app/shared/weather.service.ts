import { Injectable } from '@angular/core';
import { IForecast } from './forecast.model';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  apiRoot = 'http://ec-weather-proxy.appspot.com/forecast/';
  apikey  = '29e4a4ce0ec0068b03fe203fa81d457f';
  coordinates = '-33.9249,18.4241';
  delay = 0;
  chaos = 0;

  constructor(private jsonp: Jsonp) { }

  getWeather(): Observable<IForecast> {

    const apiURL = `${this.apiRoot}/${this.apikey}/${this.coordinates}?delay=${this.delay}&chaos=${this.chaos}&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL).map((response: Response) => {
      return <IForecast>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.status);
  }
}

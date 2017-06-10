import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather/shared/weather.service'
import { IForecast } from './shared/weather.model'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  weather: IForecast;
  convertedDate:Date;

  scale: number;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.scale = 1;
    this.weather = this.weatherService.getWeather();

// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
  this.convertedDate = new Date(this.weather.currently.time*1000);

  }

}

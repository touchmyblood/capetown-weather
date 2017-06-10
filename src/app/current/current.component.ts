import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service'
import { IForecast } from '../shared/weather.model'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  forecast: IForecast;
  scale: number;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.scale = 1;
    this.forecast = this.weatherService.getWeather();
  }

}

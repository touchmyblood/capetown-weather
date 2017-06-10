import { Component, OnInit } from '@angular/core';
import { WeatherService } from './shared/weather.service'
import { IForecast } from './shared/forecast.model'
import { CurrentModel } from './shared/current.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  current: CurrentModel = new CurrentModel();

  forecast: IForecast;
  scale: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.scale = 'F';
    this.forecast = this.weatherService.getWeather();
    // console.log(this.forecast.currently);
    this.current.scale = this.scale;
    this.current.currently = this.forecast.currently;
    this.current.hourlySummary = this.forecast.hourly.summary;
  }

  handleScaleChanged($event){
    // console.log("handling scale changing to " + $event);
    this.scale = $event;
    this.current.scale = this.scale;
  }
}

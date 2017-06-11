import { Component, OnInit } from '@angular/core';
import { WeatherService } from './shared/weather.service'
import { IForecast, IDataBlock } from './shared/forecast.model'
import { CurrentModel } from './shared/current.model';
import { HourlyModel } from './shared/hourly.model';
import { DailyModel } from './shared/daily.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  current: CurrentModel = new CurrentModel();
  hourly: HourlyModel = new HourlyModel();
  daily: DailyModel = new DailyModel();
  forecast: IForecast;
  scale: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.scale = 'F';
    this.forecast = this.weatherService.getWeather();
    // console.log(this.forecast.currently);
    this.current.scale = this.scale;
    this.current.data = this.forecast.currently;
    this.current.hourlySummary = this.forecast.hourly.summary;

    this.hourly.scale = this.scale;
    this.hourly.data = this.forecast.hourly;

    this.daily.scale = this.scale;
    this.daily.data = this.forecast.daily;
  }

  handleScaleChanged($event) {
    // console.log("handling scale changing to " + $event);
    this.scale = $event;
    this.current.scale = this.scale;
    this.hourly.scale = this.scale;
    this.daily.scale = this.scale;
  }
}

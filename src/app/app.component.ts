import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WeatherService } from './shared/weather.service'
import { IForecast, IDataBlock } from './shared/forecast.model'
import { CurrentModel } from './shared/current.model';
import { HourlyModel } from './shared/hourly.model';
import { DailyModel } from './shared/daily.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

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
  previousCurrentTemp: number = 0;

  loading:boolean = true;

  constructor(private weatherService: WeatherService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    this.scale = 'F';
    //DO I NEED A RESOLVER FOR THIS?
    // this.weatherService.getWeatherX().subscribe((forecast: IForecast) => {
    //   this.forecast = forecast;

    //     // Skip first run
    // if (this.previousCurrentTemp !== 0) {
    //   // Only check if previous temp was within 'safe' range
    //   if (this.previousCurrentTemp <= 77 && this.previousCurrentTemp >= 59) {
    //     //Display warning if too hot
    //     if (this.forecast.currently.temperature > 77){
    //       this.toastr.error('The current temperature is now above than 77F | 25C', 'Now It\'s Hot', { toastLife: 10000, showCloseButton: true });
    //     }
    //     //Display warning if too cold
    //     if(this.forecast.currently.temperature < 59) {
    //       this.toastr.warning('The current temperature is now below than 59F | 15C', 'Now It\'s Cold', { toastLife: 10000, showCloseButton: true });
    //     }
    //   }
    // }

    // this.previousCurrentTemp = this.forecast.currently.temperature;

    // console.log(this.forecast.currently);
    // this.current.scale = this.scale;
    // this.current.data = this.forecast.currently;
    // this.current.hourlySummary = this.forecast.hourly.summary;

    // this.hourly.scale = this.scale;
    // this.hourly.data = this.forecast.hourly;

    // this.daily.scale = this.scale;
    // this.daily.data = this.forecast.daily;
    // });

    if(this.forecast !== undefined){


    }
  }

  handleScaleChanged($event) {
    this.scale = $event;
    this.current.scale = this.scale;
    this.hourly.scale = this.scale;
    this.daily.scale = this.scale;
  }
}

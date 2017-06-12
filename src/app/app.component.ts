import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WeatherService } from './shared/weather.service'
import { IForecast } from './shared/forecast.model'
import { CurrentModel } from './shared/current.model';
import { HourlyModel } from './shared/hourly.model';
import { DailyModel } from './shared/daily.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Models fot the current, hourly & daily components.
  current: CurrentModel = new CurrentModel();
  hourly: HourlyModel = new HourlyModel();
  daily: DailyModel = new DailyModel();

  // Default scale to value of 'F'
  scale: string = 'F';
  previousCurrentTemp: number = 0;

  // Loading flag will be set to false until the first valid data is returned from api
  loading: boolean = true;

  // Properties used for the interval timer and weather subscription
  defaultWait: number = 1;
  timer: number = 60000 * this.defaultWait;
  observer: Observable<number> = Observable.interval(this.timer);
  timerSubscription: Subscription;

  constructor(private weatherService: WeatherService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    // Do the first call to the api and then setup a hard coded 20 minute timer for the next call
    this.getWeather();
    this.setupSubscriptions()

    //DO I NEED A RESOLVER FOR THIS?
    // this.observer = Observable.interval(this.timer);
    // this.timerSubscription = this.observer.subscribe(x => {
    //     this.weatherSubscription = this.weatherService.getWeatherX()
    //         .catch(error => this.handleError(error))
    //         .subscribe((forecast: IForecast) => {
    //             this.forecast = forecast;
    //         });
    //     this.toastr.success('refreshed feed', 'done', { toastLife: 10000, showCloseButton: true });
    // });

    // this.weatherService.getWeatherX().subscribe((forecast: IForecast) => {


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

    // });
  }

  private handleScaleChanged($event) {
    this.scale = $event;
    this.current.scale = this.scale;
    this.hourly.scale = this.scale;
    this.daily.scale = this.scale;
  }

  private handleRefreshClicked(){
    this.getWeather();
  }

  private handleError(error: Response) {
    if (this.timer == 60000 * this.defaultWait) {
      this.timer = 60000;
    }
    this.timer *= 0.5; // Should be 2
    this.setupSubscriptions();

    this.toastr.error('Error retrieving the latest weather information. We will try again in ' + (this.timer / 60000) + ' minutes.', null, { toastLife: 15000,  "progressBar": true });

    this.current.visibilityRefreshButton = "visible";
    return Observable.throw(error.status);
  }
  private getWeather() {
    // console.log("Get Weather Execute");
    this.weatherService.getWeatherX()
      .catch(error => this.handleError(error))
      .subscribe((forecast: IForecast) => {
        this.populateComponentData(forecast);
        this.timer = 60000 * this.defaultWait;
        this.setupSubscriptions();
      });
  }

  private setupSubscriptions() {
    // We need to unsubscribe because the timer value will change on error.
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.observer = Observable.interval(this.timer);
    this.timerSubscription = this.observer.subscribe(x => {

      this.getWeather();
    });
  }

  private populateComponentData(forecast: IForecast) {
    if (forecast !== undefined) {
      this.current.scale = this.scale;
      this.current.data = forecast.currently;
      this.current.hourlySummary = forecast.hourly.summary;
      this.current.visibilityRefreshButton = "hidden";

      this.hourly.scale = this.scale;
      this.hourly.data = forecast.hourly;

      this.daily.scale = this.scale;
      this.daily.data = forecast.daily;

      this.loading = false;
    }
  }
}

import './rxjs-extensions';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { WeatherService } from './shared/weather.service'
import { IForecast } from './shared/forecast.model'
import { CurrentModel } from './shared/current.model';
import { HourlyModel } from './shared/hourly.model';
import { DailyModel } from './shared/daily.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


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

  // Default scale to value of 'C'
  scale = 'C';
  previousCurrentTemp = 0;

  // Loading flag will be set to false until the first valid data is returned from api
  loading = true;

  // Properties used for the interval timer and weather subscription
  defaultWait = 20;
  timer: number = 60000 * this.defaultWait;
  observer: Observable<number> = Observable.interval(this.timer);
  timerSubscription: Subscription;

  constructor(private weatherService: WeatherService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    // Do the first call to the api and then setup a hard coded 20 minute timer for the next call
    this.getWeather();
  }

  public handleScaleChanged($event) {
    this.scale = $event;
    this.current.scale = this.scale;
    this.hourly.scale = this.scale;
    this.daily.scale = this.scale;
  }

  public handleRefreshClicked() {
    this.getWeather();
  }

  private handleError(error: Response) {
    if (this.timer === 60000 * this.defaultWait) {
      this.timer = 60000;
    }
    this.timer *= 2;
    this.setupSubscriptions();

    this.toastr.error('Error retrieving the latest weather information. We will try again in '
      + (this.timer / 60000) + ' minutes.', null, { toastLife: 15000,  'progressBar': true });

    this.current.visibilityRefreshButton = 'visible';
    return Observable.throw(error.status);
  }
  private getWeather() {
    // DO I NEED A RESOLVER FOR THIS?

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
      this.current.visibilityRefreshButton = 'hidden';

      this.hourly.scale = this.scale;
      this.hourly.data = forecast.hourly;

      this.daily.scale = this.scale;
      this.daily.data = forecast.daily;

      this.loading = false;

      this.displayWarning();

    }
  }

  private displayWarning() {

    // If current temp was in the 'safe' zone or this is the first time we are checking this
    if ((this.previousCurrentTemp <= 77 && this.previousCurrentTemp >= 59) || (this.previousCurrentTemp === 0)) {
      // Display warning if too hot
      if (this.current.data.temperature > 77) {
        this.toastr.warning('The current temperature is now above 25°C | 77°F', 'Now It\'s Hot',
          { toastLife: 10000, showCloseButton: true });
      }
      // Display warning if too cold
      if (this.current.data.temperature < 59) {
        this.toastr.info('The current temperature is now below 15°C | 59°F', 'Now It\'s Cold', { toastLife: 10000, showCloseButton: true });
      }
    }

    this.previousCurrentTemp = this.current.data.temperature;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CurrentWeatherComponent } from './current-weather.component';
// import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
// import { WeeklyWeatherComponent } from './weekly-weather/weekly-weather.component';
import { WeatherService } from './shared/weather.service';
import { NavComponent } from './nav/nav/nav.component';
import { CurrentComponent } from './current/current.component';

@NgModule({
  declarations: [
    AppComponent,
    // CurrentWeatherComponent,
    NavComponent,
    CurrentComponent,
    // HourlyWeatherComponent,
    // WeeklyWeatherComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

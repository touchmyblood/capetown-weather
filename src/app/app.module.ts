import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherService } from './shared/weather.service';
import { NavComponent } from './nav/nav.component';
import { CurrentComponent } from './current/current.component';

import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HourlyComponent } from './hourly/hourly.component';
import { WeeklyComponent } from './weekly/weekly.component';

import {TemperatureConverterPipe} from './shared/temperature.converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CurrentComponent,
    HourlyComponent,
    WeeklyComponent,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

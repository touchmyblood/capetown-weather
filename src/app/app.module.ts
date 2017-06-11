import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherService } from './shared/weather.service';
import { NavComponent } from './nav/nav.component';
import { CurrentComponent } from './current/current.component';

import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HourlyComponent } from './hourly/hourly.component';
import { DailyComponent } from './daily/daily.component';

import {TemperatureConverterPipe} from './shared/temperature.converter.pipe';
import { WebapiComponent } from './webapi/webapi.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CurrentComponent,
    HourlyComponent,
    TemperatureConverterPipe,
    DailyComponent,
    WebapiComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,  BrowserAnimationsModule, ToastModule.forRoot()
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

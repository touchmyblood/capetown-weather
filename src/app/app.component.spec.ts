import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { DailyComponent } from './daily/daily.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response } from '@angular/http';

import { WeatherService } from './shared/weather.service';
import { WEATHER } from './shared/fake.weather.data';
import { TemperatureConverterPipe } from './shared/temperature.converter.pipe';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable } from 'rxjs/Rx';
import { IForecast } from './shared/forecast.model';

describe('AppComponent', () => {
  let mockedWeatherService: WeatherService, mockJsonp: any;

  beforeEach(async(() => {

    mockJsonp = jasmine.createSpyObj('mockJsonp', ['request']);
    mockJsonp.request.and.returnValue(Observable.of(WEATHER));

    mockedWeatherService = new WeatherService(mockJsonp);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavComponent, LoadingComponent, CurrentComponent, DailyComponent, HourlyComponent,
        FooterComponent, TemperatureConverterPipe
      ],
      imports: [
        BrowserModule, FormsModule, BrowserAnimationsModule, ToastModule.forRoot(), HttpModule, JsonpModule
      ],
      providers: [{
        provide: WeatherService,
        useValue: mockedWeatherService
      }],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`scale should default to C`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.scale).toEqual('C');
  }));

  it(`previousCurrentTemp should default to 0`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.previousCurrentTemp).toEqual(0);
  }));

  it(`loading should default to true`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.loading).toEqual(true);
  }));

  // it('loading component should load when loading flag is true', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('span').textContent).toContain('Loading...');
  // }));
});

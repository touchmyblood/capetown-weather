import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyComponent } from './hourly.component';
import { HourlyModel } from '../shared/hourly.model';
import { TemperatureConverterPipe } from '../shared/temperature.converter.pipe';

describe('HourlyComponent', () => {
  let component: HourlyComponent;
  let fixture: ComponentFixture<HourlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyComponent, TemperatureConverterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyComponent);
    component = fixture.componentInstance;
    component.hourly = new HourlyModel;
    // tslint:disable-next-line:max-line-length
    component.hourly.data = { 'summary': 'Partly cloudy later this afternoon.', 'icon': 'partly-cloudy-day', 'data': [{ 'time': 1496656800, 'summary': 'Mostly Cloudy', 'icon': 'partly-cloudy-day', 'precipIntensity': 0, 'precipProbability': 0, 'temperature': 63.19, 'apparentTemperature': 63.19, 'dewPoint': 46.88, 'humidity': 0.55, 'windSpeed': 3.85, 'windBearing': 121, 'cloudCover': 0.66, 'pressure': 1019.13, 'ozone': 256.44 }]};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

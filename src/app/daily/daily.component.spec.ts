import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureConverterPipe } from '../shared/temperature.converter.pipe';
import { DailyModel } from '../shared/daily.model';
import { IDataBlock } from '../shared/forecast.model';
import { DailyComponent } from './daily.component';

describe('DailyComponent', () => {
  let component: DailyComponent;
  let fixture: ComponentFixture<DailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyComponent, TemperatureConverterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyComponent);
    component = fixture.componentInstance;
    component.daily = new DailyModel;
    // tslint:disable-next-line:max-line-length
    component.daily.data =  {'summary': 'Rain tomorrow through Thursday, with temperatures falling to 58Â°F on Thursday.', 'icon': 'rain', 'data': [{ 'time': 1496613600, 'summary': 'Partly cloudy until afternoon.', 'icon': 'partly-cloudy-day', 'sunriseTime': 1496641598, 'sunsetTime': 1496677552, 'moonPhase': 0.37, 'precipIntensity': 0, 'precipProbability': 0, 'temperatureMin': 44.59, 'temperatureMax': 67.76, 'dewPoint': 46.87, 'humidity': 0.72, 'windSpeed': 3.82, 'windBearing': 136, 'cloudCover': 0.15, 'pressure': 1018.96, 'ozone': 261.16 } ] };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

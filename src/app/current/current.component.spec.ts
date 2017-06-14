import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureConverterPipe } from '../shared/temperature.converter.pipe';
import { CurrentComponent } from './current.component';
import { CurrentModel } from '../shared/current.model';

describe('CurrentComponent', () => {
  let component: CurrentComponent;
  let fixture: ComponentFixture<CurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentComponent, TemperatureConverterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentComponent);
    component = fixture.componentInstance;
    component.current = new CurrentModel;
    // tslint:disable-next-line:max-line-length
    component.current.data = {'time': 1496659404, 'summary': 'Mostly Cloudy', 'icon': 'partly-cloudy-day', 'precipIntensity': 0, 'precipProbability': 0, 'temperature': 64.72, 'apparentTemperature': 64.72, 'dewPoint': 48.24, 'humidity': 0.55, 'windSpeed': 3.28, 'windBearing': 129, 'cloudCover': 0.6, 'pressure': 1018.59, 'ozone': 256.4};
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

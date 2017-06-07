import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyWeatherComponent } from './weekly-weather.component';

describe('WeeklyWeatherComponent', () => {
  let component: WeeklyWeatherComponent;
  let fixture: ComponentFixture<WeeklyWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

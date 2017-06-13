import { Component, Input, Output, OnInit, OnChanges, Inject, EventEmitter } from '@angular/core';
import { WeatherService } from '../shared/weather.service'
import { IDataPoint } from '../shared/forecast.model'
import { CurrentModel } from '../shared/current.model';

declare let Skycons: any;

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  @Input() current: CurrentModel;
  @Output() refreshClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

    // Display & animate the skycon icons
    if (this.current.data !== undefined) {
      const skycons = new Skycons({ 'color': 'white' });
      skycons.add('weather-icon', this.current.data.icon);
      skycons.play();
    }
  }

  public handleRefreshClick() {
    this.refreshClicked.emit();
  }

}

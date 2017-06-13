import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HourlyModel } from '../shared/hourly.model';
import { IForecast, IDataBlock, IDataPoint } from '../shared/forecast.model'

declare let Skycons: any;

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit, AfterViewInit {
  @Input() hourly: HourlyModel;

  hours: IDataPoint[];

  constructor() { }

  ngOnInit() {
    // Only grab the first 10 hours from the array.
    this.hours = this.hourly.data.data.slice(0, 10);
  }

  ngAfterViewInit() {
    const icons = document.getElementsByClassName('icons-hourly');
    const skycons = new Skycons({ 'color': 'white' });

    for (let i = 0, len = icons.length; i < len; i++) {
      skycons.add(icons[i], icons[i].innerHTML);
    }
    skycons.play();
  }
}

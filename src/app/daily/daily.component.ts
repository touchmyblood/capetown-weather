import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { DailyModel } from '../shared/daily.model';
import { IForecast, IDataBlock, IDataPoint } from '../shared/forecast.model'

declare let Skycons: any;

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit, AfterViewInit {
  @Input() daily: DailyModel;

  days: IDataPoint[];

  constructor() { }

  ngOnInit() {
    // Only grab the first 6 days from the data
    this.days = this.daily.data.data.slice(0, 6);
  }

  ngAfterViewInit() {
    const icons = document.getElementsByClassName('icons-daily');
    const skycons = new Skycons({ 'color': 'white' });

    for (let i = 0, len = icons.length; i < len; i++) {
      skycons.add(icons[i], icons[i].innerHTML);
    }
    skycons.play();
  }
}

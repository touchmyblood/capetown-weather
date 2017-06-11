import { Component, Input, OnInit, OnChanges, Inject } from '@angular/core';
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

  constructor() { }

  // TODO DONT NEED ALL THESE METHODS
  ngOnInit() {
    if(this.current.data !== undefined){
    // Display & animate the skycon icons
    var skycons = new Skycons({ "color": "white" });
    skycons.add("icon1", this.current.data.icon);
    skycons.play();
    }
  }

  ngOnChanges(){
    if(this.current.data !== undefined){
        // Display & animate the skycon icons
    var skycons = new Skycons({ "color": "white" });
    skycons.add("icon1", this.current.data.icon);
    skycons.play();
    }
  }

  ngAfterViewInit() {
if(this.current.data !== undefined){
    // Display & animate the skycon icons
    var skycons = new Skycons({ "color": "white" });
    skycons.add("icon1", this.current.data.icon);
    skycons.play();
    }
  }
}

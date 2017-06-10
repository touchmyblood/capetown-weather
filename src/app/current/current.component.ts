import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { WeatherService } from '../shared/weather.service'
import { IDataPoint } from '../shared/forecast.model'
import { CurrentModel } from '../shared/current.model';

declare let Skycons:any;

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  @Input() current: CurrentModel;

  convertedDate: Date;

  // celsiusTemperature: Number;
  // fahrenheitTemperature: Number;
  // celsiusFeelsLikeTemperature: Number;
  // fahrenheitFeelsLikeTemperature: Number;

  constructor() { }

  ngOnInit() {
    // console.log('current' + this.current);

    this.convertedDate = new Date(this.current.currently.time * 1000);

    // this.fahrenheitTemperature = Math.round(this.current.currently.temperature);
    // this.celsiusTemperature = Math.round(((this.current.currently.temperature -32) *5/9) );

    // this.fahrenheitFeelsLikeTemperature = Math.round(this.current.currently.temperature);
    // this.celsiusFeelsLikeTemperature = Math.round(((this.current.currently.temperature -32) *5/9) );

    // Display & animate the skycon icons
    var skycons = new Skycons({"color": "white"});
    skycons.add("icon1", this.current.currently.icon);
    skycons.play();

    // Rotate the wind direction arrow
    var element = document.getElementById("direction");
    element.style.webkitTransform = "rotate("+this.current.currently.windBearing+"deg)";
  }

  ngOnChanges(){
    // console.log("scale has changed " + this.scale);
  }

}

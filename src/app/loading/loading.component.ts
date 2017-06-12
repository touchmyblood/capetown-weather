import { Component, OnInit } from '@angular/core';

declare let Sonic: any;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var loader =
      {
        width: 120,
        height: 120,

        stepsPerFrame: 10,
        trailLength: .9,
        pointDistance: .01,
        padding: 10,

        fillColor: '#D4FF00',
        strokeColor: '#FFF',

        setup: function () {
          this._.lineWidth = 1200;
        },

        path: [
          ['line', 0, 0, 120, 0],
          ['line', 120, 0, 120, 120],
          ['line', 120, 120, 0, 120],
          ['line', 0, 120, 0, 0]
        ]
      };

    var d, a, container = document.getElementById('loader-canvas');

    d = document.createElement('div');
    d.className = 'l';

    a = new Sonic(loader);

    d.appendChild(a.canvas);
    container.appendChild(d);

    a.play();
  }

}

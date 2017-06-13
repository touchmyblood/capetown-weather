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
        width: 220,
        height: 220,

        stepsPerFrame: 10,
        trailLength: .9,
        pointDistance: .01,
        padding: 10,

        fillColor: '#D4FF00',
        strokeColor: '#FFF',

        path: [
          ['line', 0, 0, 180, 0],
          ['line', 180, 0, 180, 180],
          ['line', 180, 180, 0, 180],
          ['line', 0, 180, 0, 0]
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

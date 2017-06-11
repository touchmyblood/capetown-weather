import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule  }   from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() scale: string
  @Output() scaleChanged: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log('scale is: ' + this.scale);
  }

  changeScale() {
    // console.log('Clicked the radio button to change to:' + this.scale);
    this.scaleChanged.emit(this.scale);
  }
}

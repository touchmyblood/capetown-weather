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
  }

  changeScale() {
    this.scaleChanged.emit(this.scale);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent implements OnInit {

  @Input()
  os: OsTypes;

  @Output()
  osChange = new EventEmitter<OsTypes>();

  @Input()
  autoOs: boolean;

  @Output()
  autoOsChange = new EventEmitter<boolean>();

  color = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn() {
    alert('click button');
  }

}

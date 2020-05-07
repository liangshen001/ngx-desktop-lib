import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent implements OnInit {

  @Input()
  os: OsTypes;

  @Output()
  osChange = new EventEmitter<OsTypes>();

  @Input()
  autoOs: boolean;

  @Output()
  autoOsChange = new EventEmitter<boolean>();

  placeholder: string = '';
  label: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.css']
})
export class CheckboxDemoComponent implements OnInit {

  @Input()
  os: OsTypes;

  @Output()
  osChange = new EventEmitter<OsTypes>();

  @Input()
  autoOs: boolean;

  @Output()
  autoOsChange = new EventEmitter<boolean>();
  label: string;
  checked: boolean = false;
  disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

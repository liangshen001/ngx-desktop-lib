import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css']
})
export class ProgressCircleComponent implements OnInit {

  @Input()
  os: OsTypes;

  @Output()
  osChange = new EventEmitter<OsTypes>();

  @Input()
  autoOs: boolean;

  @Output()
  autoOsChange = new EventEmitter<boolean>();
  size: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

}

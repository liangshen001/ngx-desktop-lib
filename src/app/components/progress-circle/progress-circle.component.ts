import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css']
})
export class ProgressCircleComponent extends OsSwitchable implements OnInit {
  size: number = 50;
  color: string;


  ngOnInit(): void {
  }

}

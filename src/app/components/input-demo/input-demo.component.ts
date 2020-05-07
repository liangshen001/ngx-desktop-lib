import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.css']
})
export class InputDemoComponent extends OsSwitchable implements OnInit {

  placeholder: string = '';
  label: string;

  ngOnInit(): void {
  }

}

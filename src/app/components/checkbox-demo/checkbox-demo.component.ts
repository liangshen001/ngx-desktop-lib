import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.css']
})
export class CheckboxDemoComponent extends OsSwitchable implements OnInit {

  label: string;
  checked: boolean = false;
  disabled: boolean;

  ngOnInit(): void {
  }

}

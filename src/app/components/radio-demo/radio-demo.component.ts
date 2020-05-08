import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.css']
})
export class RadioDemoComponent extends OsSwitchable implements OnInit {

  value: string;
  checked: boolean = false;

  ngOnInit(): void {
  }

}

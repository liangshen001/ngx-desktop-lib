import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsSwitchable} from "../os-switchable";
import {StyleValueTypes} from "ngx-desktop";

@Component({
  selector: 'app-window-demo',
  templateUrl: './window-demo.component.html',
  styleUrls: ['./window-demo.component.css']
})
export class WindowDemoComponent extends OsSwitchable implements OnInit {
  width: StyleValueTypes = '100%';
  height: StyleValueTypes = '500px';

  ngOnInit(): void {
  }

}

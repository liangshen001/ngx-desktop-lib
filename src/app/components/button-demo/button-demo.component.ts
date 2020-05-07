import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent extends OsSwitchable implements OnInit {

  color = 'default';

  ngOnInit(): void {
  }

  clickBtn() {
    alert('click button');
  }

}

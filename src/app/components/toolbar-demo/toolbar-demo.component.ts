import { Component, OnInit } from '@angular/core';
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-toolbar-demo',
  templateUrl: './toolbar-demo.component.html',
  styleUrls: ['./toolbar-demo.component.css']
})
export class ToolbarDemoComponent extends OsSwitchable implements OnInit {

  ngOnInit(): void {
  }

}

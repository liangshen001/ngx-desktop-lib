import { Component, OnInit } from '@angular/core';
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-toolbar-nav-demo',
  templateUrl: './toolbar-nav-demo.component.html',
  styleUrls: ['./toolbar-nav-demo.component.css']
})
export class ToolbarNavDemoComponent extends OsSwitchable implements OnInit {

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-segmented-control-demo',
  templateUrl: './segmented-control-demo.component.html',
  styleUrls: ['./segmented-control-demo.component.css']
})
export class SegmentedControlDemoComponent extends OsSwitchable implements OnInit {

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-text-demo',
  templateUrl: './text-demo.component.html',
  styleUrls: ['./text-demo.component.css']
})
export class TextDemoComponent extends OsSwitchable implements OnInit {

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent extends OsSwitchable implements OnInit {

  ngOnInit(): void {
  }

}

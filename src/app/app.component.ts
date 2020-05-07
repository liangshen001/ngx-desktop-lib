import { Component } from '@angular/core';
import {OsTypes} from "../../projects/ngx-desktop/src/lib/types/types";
import {NgxDesktopService} from "../../projects/ngx-desktop/src/lib/ngx-desktop.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autoOs: boolean = true;
  os: OsTypes = 'auto';
  title = 'ngx-desktop-lib';

  constructor() {}
}

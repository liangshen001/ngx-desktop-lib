import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgxDesktopService} from "ngx-desktop";
import {OsSwitchable} from "../os-switchable";

@Component({
  selector: 'app-os-switch',
  templateUrl: './os-switch.component.html',
  styleUrls: ['./os-switch.component.css']
})
export class OsSwitchComponent extends OsSwitchable implements OnInit {

  constructor(private ngxDesktopService: NgxDesktopService) {
    super();
  }

  ngOnInit(): void {
  }

  change($event: any) {
    this.autoOsChange.emit($event);
    if ($event) {
      this.os = 'auto';
    } else {
      this.os = this.ngxDesktopService.getSystemOs();
    }
    this.osChange.emit(this.os);
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../../../projects/ngx-desktop/src/lib/types/types";
import {NgxDesktopService} from "../../../../projects/ngx-desktop/src/lib/ngx-desktop.service";

@Component({
  selector: 'app-os-switch',
  templateUrl: './os-switch.component.html',
  styleUrls: ['./os-switch.component.css']
})
export class OsSwitchComponent implements OnInit {

  @Input()
  os: OsTypes;

  @Output()
  osChange = new EventEmitter<OsTypes>();

  @Input()
  autoOs: boolean;

  @Output()
  autoOsChange = new EventEmitter<boolean>();

  constructor(private ngxDesktopService: NgxDesktopService) { }

  ngOnInit(): void {
  }

  change($event: any) {
    this.autoOsChange.emit($event);
    if ($event) {
      this.os = 'auto';
    } else {
      this.os = this.ngxDesktopService.getSystemOs();
    }
  }

}

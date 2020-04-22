import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";

@Component({
  selector: 'ngx-desktop-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }
  @Input()
  color: string;
  @Input()
  height: string | number;
  @Input()
  width: string | number;
  @Input()
  horizontalAlignment: 'left' | 'center' | 'right';
  @Input()
  verticalAlignment: 'top' | 'center' | 'bottom';
  @Input()
  marginBottom: string | number;
  @Input()
  marginLeft: string | number;
  @Input()
  marginRight: string | number;
  @Input()
  marginTop: string | number;
  @Input()
  paddingBottom: string | number;
  @Input()
  paddingLeft: string | number;
  @Input()
  paddingRight: string | number;
  @Input()
  paddingTop: string | number;

  @Input()
  padding: string | number;
  @Input()
  margin: string | number;

  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }
}

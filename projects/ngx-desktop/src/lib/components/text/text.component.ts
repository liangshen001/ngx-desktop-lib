import {
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {OsTypes} from "../../types/types";

@Component({
  selector: 'ngx-desktop-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }
  @Input()
  size: string | number = 13;
  @Input()
  color: string = '#000000';
  @Input()
  background: string;
  @Input()
  textAlign: 'left' | 'center' | 'right';
  @Input()
  height: string | number;
  @Input()
  width: string | number;
  @Input()
  bold: number | string | boolean;
  @Input()
  margin: number | string;
  @Input()
  marginTop: number | string;
  @Input()
  marginLeft: number | string;
  @Input()
  marginRight: number | string;
  @Input()
  marginBottom: number | string;
  @Input()
  padding: number | string;
  @Input()
  paddingTop: number | string;
  @Input()
  paddingLeft: number | string;
  @Input()
  paddingRight: number | string;
  @Input()
  paddingBottom: number | string;

  constructor(private ngxDesktopService: NgxDesktopService) {
  }
  ngOnInit(): void {
  }
}

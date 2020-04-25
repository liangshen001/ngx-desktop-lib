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
import {StyleValueTypes} from "../../pipes/style-value.pipe";
import {VerticalAlignmentTypes} from "../../directives/ngx-desktop-vertical-alignment.directive";
import {HorizontalAlignmentTypes} from "../../directives/ngx-desktop-horizontal-alignment.directive";
import {OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";



@Component({
  selector: 'ngx-desktop-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }
  @Input()
  label: string;
  @Input()
  disabled: boolean;
  @Input()
  background: string;
  @Input()
  color: string;
  @Input()
  height: StyleValueTypes;
  @Input()
  width: StyleValueTypes;
  @Input()
  verticalAlignment: VerticalAlignmentTypes = 'center';
  @Input()
  horizontalAlignment: HorizontalAlignmentTypes = 'center';
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

  windowBlur: boolean;


  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }
}

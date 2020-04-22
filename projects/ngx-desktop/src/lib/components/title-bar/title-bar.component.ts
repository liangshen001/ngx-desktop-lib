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
import {OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";

@Component({
  selector: 'ngx-desktop-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }
  @Input()
  title: string;
  @Input()
  controls: boolean = false;
  @Input()
  inset: boolean = false;
  @Input()
  isFullscreen: boolean = false;
  @Input()
  transparent: boolean = false;
  @Output()
  onCloseClick = new EventEmitter();
  @Output()
  onMaximizeClick = new EventEmitter();
  @Output()
  onMinimizeClick = new EventEmitter();
  @Output()
  onResizeClick = new EventEmitter();


  @Input()
  horizontalAlignment: 'left' | 'center' | 'right';
  @Input()
  verticalAlignment: 'top' | 'center' | 'bottom';
  @Input()
  height: string | number;
  @Input()
  width: string | number;
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
  @Input()
  background: string | boolean = false;

  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }
}

import {
  Component, ContentChild,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'ngx-desktop-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  @ContentChild(ToolbarComponent)
  toolbarComponent: ToolbarComponent;

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

  windowBlur: boolean;
  mouseover: boolean;
  closeMousedown: boolean;
  minimizeMousedown: boolean;
  maximizeMousedown: boolean;
  minimizeMouseover: boolean;
  closeMouseover: boolean;
  maximizeMouseover: boolean;

  @Input()
  maximized: boolean;

  @Output()
  maximizedChange = new EventEmitter<boolean>();

  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }

  triggerMaximize() {
    this.maximized = !this.maximized;
    this.maximizedChange.emit(this.maximized);
    if (this.maximized) {
      this.onMaximizeClick.emit();
    } else {
      this.onResizeClick.emit();
    }
  }
}

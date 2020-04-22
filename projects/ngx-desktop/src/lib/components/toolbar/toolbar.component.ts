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
import {VerticalAlignmentTypes} from "../../directives/ngx-desktop-vertical-alignment.directive";
import {HorizontalAlignmentTypes} from "../../directives/ngx-desktop-horizontal-alignment.directive";
import {StyleValueTypes} from "../../pipes/style-value.pipe";

@Component({
  selector: 'ngx-desktop-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  height: StyleValueTypes;
  @Input()
  width: StyleValueTypes;
  @Input()
  verticalAlignment: VerticalAlignmentTypes = 'center';
  @Input()
  horizontalAlignment: HorizontalAlignmentTypes = 'center';

  constructor() {
  }

  ngOnInit(): void {
  }

}

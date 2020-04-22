import {
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output, TemplateRef,
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
  selector: 'ngx-desktop-toolbar-nav-item',
  templateUrl: './toolbar-nav-item.component.html',
  styleUrls: ['./toolbar-nav-item.component.css']
})
export class ToolbarNavItemComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  icon: TemplateRef<SVGElement>;

  constructor() {
  }

  ngOnInit(): void {
  }

}

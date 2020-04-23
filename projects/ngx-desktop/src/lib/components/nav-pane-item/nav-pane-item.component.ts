import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnInit, Output, TemplateRef,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {OsUtils} from "../../utils/os.utils";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {HorizontalAlignmentTypes} from "../../directives/ngx-desktop-horizontal-alignment.directive";
import {VerticalAlignmentTypes} from "../../directives/ngx-desktop-vertical-alignment.directive";
import {StyleValueTypes} from "../../pipes/style-value.pipe";

@Component({
  selector: 'ngx-desktop-nav-pane-item',
  templateUrl: './nav-pane-item.component.html',
  styleUrls: ['./nav-pane-item.component.css']
})
export class NavPaneItemComponent implements OnInit {

  @Input()
  background: string;
  @Input()
  color: string;
  @Input()
  horizontalAlignment: HorizontalAlignmentTypes;
  @Input()
  verticalAlignment: VerticalAlignmentTypes;
  @Input()
  title: string;
  @Input()
  icon: TemplateRef<any>;
  @Input()
  margin: StyleValueTypes;
  @Input()
  padding: StyleValueTypes;
  @Input()
  selected: boolean;
  @Output()
  onSelect = new EventEmitter();


  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }
}

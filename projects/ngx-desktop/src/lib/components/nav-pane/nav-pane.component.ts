import {
  AfterViewInit,
  Component, ContentChildren,
  ElementRef, EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnInit, Output, QueryList,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {OsUtils} from "../../utils/os.utils";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {StyleValueTypes} from "../../pipes/style-value.pipe";
import {NavPaneItemComponent} from "../nav-pane-item/nav-pane-item.component";
import {ToolbarNavItemComponent} from "../toolbar-nav-item/toolbar-nav-item.component";

@Component({
  selector: 'ngx-desktop-nav-pane',
  templateUrl: './nav-pane.component.html',
  styleUrls: ['./nav-pane.component.css']
})
export class NavPaneComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  expanded: boolean;

  @Output()
  expandedChange = new EventEmitter<boolean>();

  @Input()
  canPaneToggle: boolean;

  @Input()
  paneCompactedLength: StyleValueTypes = '48px';
  @Input()
  paneExpandedLength: StyleValueTypes = '200px';

  @ContentChildren(NavPaneItemComponent)
  navPaneItems: QueryList<NavPaneItemComponent>;

  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }
}

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

@Component({
  selector: 'ngx-desktop-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit(): void {
  }
}

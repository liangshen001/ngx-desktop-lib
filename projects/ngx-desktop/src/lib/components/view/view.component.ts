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
  label: string;
  @Input()
  disabled: boolean;

  labelMousedown: boolean;

  show: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:mouseup')
  windowMouseupListener() {
    this.labelMousedown = false;
  }
}

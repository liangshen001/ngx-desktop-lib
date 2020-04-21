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
  selector: 'ngx-desktop-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

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

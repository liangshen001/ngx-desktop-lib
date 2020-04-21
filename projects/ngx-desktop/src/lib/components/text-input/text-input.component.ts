import {Component, forwardRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";

@Component({
  selector: 'ngx-desktop-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
  }]
})
export class TextInputComponent extends ControlValueAccessorAbstractComponent implements OnInit, ControlValueAccessor {

  @Input()
  label: string;
  @Input()
  placeholder: string = '';
  @Input()
  os: OsTypes;
  @Input()
  color: string;
  @Input()
  width: string = 'auto';

  marginBottom: string = '0';
  marginLeft: string = '0';
  marginRight: string = '0';
  marginTop: string = '0';

  @Input('marginBottom')
  set marginBottomS(marginBottom: string | number) {
    this.marginBottom = TextInputComponent.getValue(marginBottom);
  }

  @Input('marginLeft')
  set marginLeftS(marginLeft: string | number) {
    this.marginLeft = TextInputComponent.getValue(marginLeft);
  }

  @Input('marginRight')
  set marginRightS(marginRight: string | number) {
    this.marginRight = TextInputComponent.getValue(marginRight);
  }

  @Input('marginTop')
  set marginTopS(marginTop: string | number) {
    this.marginTop = TextInputComponent.getValue(marginTop);
  }
  @Input()
  margin: string;

  focus: boolean;


  static getValue(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  }
  get style() {
    if (this.os === 'windows') {
      return {
        ...this.mouseover ? {
          'border-color': 'rgb(100, 100, 100)',
          background: 'rgba(255, 255, 255, 0.5)'
        } : {},
        ...this.focus ? {
          'border-color': this.color,
          background: '#FFFFFF'
        } : {},
      };
    }
    return {};
  }

  constructor(@Inject(OS_TOKEN) private osConfig: OsTypes) {
    super();
  }

  ngOnInit(): void {
    if (!this.os) {
      this.os = this.osConfig;
    }
    if (!this.color) {
      if (this.os === 'mac') {
        this.color = 'default';
      } else {
        this.color = '#0063AE';
      }
    }
  }
}

import {Component, forwardRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";

@Component({
  selector: 'ngx-desktop-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent extends ControlValueAccessorAbstractComponent implements OnInit, ControlValueAccessor {

  @Input()
  os: OsTypes;
  @Input()
  label: string;
  @Input()
  color: string;

  get style() {
    if (this.os === 'mac') {
      return {

      };
    } else if (this.os === 'windows') {
      return {
        ...this.model ? {
          'border-color': this.color,
          'background-color': this.color
        } : {
          'border-color': 'rgba(0, 0, 0, 0.8)'
        },
        ...this.mouseover ? {
          'border-color': '#000000'
        } : {},
        ...this.mousedown ? {
          'border-color': 'rgba(0, 0, 0, 0)',
          'background-color': 'rgba(0, 0, 0, 0.57)'
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
      if (this.os === 'windows') {
        this.color = '#0063AE';
      } else {
        this.color = 'default';
      }
    }
  }
}

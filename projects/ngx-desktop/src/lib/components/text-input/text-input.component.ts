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
  width: string | number;
  @Input()
  marginBottom: string | number;
  @Input()
  marginLeft: string | number;
  @Input()
  marginRight: string | number;
  @Input()
  marginTop: string | number;
  @Input()
  margin: string | number;

  focus: boolean;
  mouseover: boolean;
  currentOs: OsTypes;

  get style() {
    if (this.currentOs === 'windows') {
      return {
        ...this.mouseover ? {
          'border-color': '#646464',
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

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  osChange($event: "mac" | "windows" | "auto") {
    this.currentOs = $event;
    if (this.os === 'mac') {
      if (!this.color) {
        this.color = 'default';
      }
    } else {
      if (!this.color) {
        this.color = '#0063AE';
      }
    }
  }
}

import {Component, forwardRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {noop} from "rxjs";

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
export class TextInputComponent implements OnInit, ControlValueAccessor {

  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }
  @Input()
  label: string;
  @Input()
  placeholder: string = '';
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
  @Input()
  disabled: boolean;

  focus: boolean;
  mouseover: boolean;

  get style() {
    if (this.os === 'windows') {
      return {
        'border-color': 'rgba(0, 0, 0, 0.6)',
        ...this.mouseover ? {
          'border-color': 'rgba(0, 0, 0)',
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

  value: string;
  onTouchedCallback: () => void = noop;
  onChangeCallback: (_: any) => void = noop;

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }

}

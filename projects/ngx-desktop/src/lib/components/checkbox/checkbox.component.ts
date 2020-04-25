import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {ColorUtils} from "../../utils/color.utils";
import {MacColor, WindowsColor} from "../button/button.component";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {EventEmitter} from "events";
import {noop} from "rxjs";

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
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  windowBlur: boolean;
  mouseover: boolean;
  mousedown: boolean;

  @Output()
  onChange = new EventEmitter();

  @Input()
  checked: boolean;

  @Input()
  disabled: boolean;

  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
    if (this.os === 'windows' && !this.color) {
      this.color = '#0063AE';
    }
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }
  @Input()
  label: string;

  private _color: MacColor | WindowsColor;
  darkenColor: string;
  isDarkColor: boolean;

  @Input()
  set color(color: MacColor | WindowsColor) {
    if (this._color !== color) {
      this._color = color;
      this.darkenColor = ColorUtils.darkenColor(color, .35);
      this.isDarkColor = ColorUtils.isDarkColor(this.darkenColor);
    }
  }
  get color() {
    return this._color;
  }

  get style() {
    if (this.os === 'windows') {
      return {
        ...this.disabled ? {
          'border-color': '#B8B8B8',
        } : {
          ...this.checked ? {
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
          } : {}
        },
      };
    }
    return {};
  }
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(private ngxDesktopService: NgxDesktopService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if (this.os === 'windows' && !this.color) {
      this.color = '#0063AE';
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  changeValue() {
    this.checked = !this.checked;
    this.onChangeCallback(this.checked);
  }

  writeValue(obj: any): void {
    this.checked = obj;
    this.changeDetectorRef.markForCheck();
  }
}

import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ColorUtils} from "../../utils/color.utils";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";


export type MacColor = 'default' | 'blue';
export type WindowsColor = string;

@Component({
  selector: 'ngx-desktop-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  mousedown: boolean;
  windowBlur: boolean;
  mouseover: boolean;
  currentOs: OsTypes;

  @Input()
  os: OsTypes;
  @Input()
  disabled: boolean;
  @Output()
  btnClick = new EventEmitter<MouseEvent>();
  @Input()
  theme: 'light' | 'dark';
  @Input()
  type: 'button' | 'submit' = 'button';
  @Input()
  size: string | number = 13;
  @Input()
  marginBottom: string | number;
  @Input()
  marginLeft: string | number;
  @Input()
  marginRight: string | number;
  @Input()
  marginTop: string | number;
  @Input()
  paddingBottom: string | number;
  @Input()
  paddingLeft: string | number;
  @Input()
  paddingRight: string | number;
  @Input()
  paddingTop: string | number;
  @Input()
  padding: string | number;
  @Input()
  margin: string | number;

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
    if (this.currentOs === 'mac') {
      if (this.disabled) {
      debugger;

      }
      return {
        ...this.color === 'default' ? {
          'border-color': '#C8C8C8 #C2C2C2 #ACACAC',
          'background-image': 'none',
          color: 'initial'
        } : {
          'border-color': '#4CA2F9 #267FFC #015CFF',
          'background-image': '-webkit-linear-gradient(top, #6CB3FA 0%, #087EFF 100%)',
          color: 'rgba(255, 255, 255, .9)'
        },
        ...this.windowBlur ? {
          'border-color': '#C8C8C8 #C2C2C2 #ACACAC',
          'background-image': 'none',
          color: 'initial'
        } : {},
        ...this.mousedown ? {
          'border-color': '#4C98FE #125EED #0010DB',
          'background-image': '-webkit-linear-gradient(top, #6CB3FA 0%, #0564E3 100%)',
          color: 'rgba(255, 255, 255, 0.9)'
        } : {},
        ...this.disabled ? {
          color: '#bababa',
          background: '#f6f6f6',
          'border-color': '#dadada'
        } : {}
      };
    } else if (this.currentOs === 'windows') {
      return {
        'background-color': this.color,
        'border-color': this.color,
        color: this.isDarkColor ? '#ffffff' : '#000000',
        ...this.mouseover ? {
          'border-color': this.darkenColor
        } : {},
        ...this.mousedown ? {
          'background-color': this.darkenColor,
          'border-color': this.darkenColor,
          transform: 'scale(0.97)',
          transition: 'transform .1s ease-in'
        } : {}
      };
    }
    return {};
  }

  static getValue(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
  }

  osChange($event: "mac" | "windows") {
    this.currentOs = $event;
    if ($event === 'mac') {
      if (this.color === undefined) {
        this.color = 'default';
      }
      if (this.paddingLeft === undefined) {
        this.paddingLeft = '13px';
      }
      if (this.paddingRight === undefined) {
        this.paddingRight = '13px';
      }
    } else {
      if (this.color === undefined) {
        this.color = '#cccccc';
      }
      if (this.paddingLeft === undefined) {
        this.paddingLeft = '32px';
      }
      if (this.paddingRight === undefined) {
        this.paddingRight = '32px';
      }
    }
  }
}

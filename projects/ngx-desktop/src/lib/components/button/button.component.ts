import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorUtils} from "../../utils/color.utils";
import {OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {macStyle} from "./mac-style";


export type MacColor = 'default' | 'blue' | 'pink';
export type WindowsColor = string;

@Component({
  selector: 'ngx-desktop-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  mousedown: boolean;
  windowBlur: boolean;
  mouseover: boolean;

  @Input()
  disabled: boolean;
  @Output()
  onClick = new EventEmitter<MouseEvent>();
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

  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
    this.init();
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }
  private _color: MacColor | WindowsColor;
  darkenColor: string;
  isDarkColor: boolean;

  @Input()
  set color(color: MacColor | WindowsColor) {
    if (this._color !== color) {
      if (this.os === 'windows' && this.color === 'default') {
        this._color = '#cccccc';
      } else {
        this._color = color;
      }
      this.darkenColor = ColorUtils.darkenColor(color, .35);
      this.isDarkColor = ColorUtils.isDarkColor(this.darkenColor);
    }
  }
  get color() {
    return this._color;
  }

  get style() {
    if (this.os === 'mac') {
      const colorStyle = macStyle[this.color] || macStyle.default;
      return {
        ...colorStyle.normal,
        ...this.mousedown ? colorStyle.mousedown : {},
        ...this.windowBlur ? {
          'border-color': '#C8C8C8 #C2C2C2 #ACACAC',
          'background-image': 'none',
          color: 'initial'
        } : {},
        ...this.disabled ? {
          color: '#bababa',
          background: '#f6f6f6',
          'border-color': '#dadada'
        } : {}
      };
    } else {
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
  }

  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
    this.init();
  }
  init() {
    if (this.os === 'windows' && (!this.color || this.color === 'default')) {
      this.color = '#cccccc';
    }
  }
}

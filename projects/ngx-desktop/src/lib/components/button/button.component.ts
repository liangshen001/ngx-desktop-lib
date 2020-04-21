import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from "../base.component";
import {ColorUtils} from "../../utils/color.utils";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {OsUtils} from "../../utils/os.utils";


export type MacColor = 'default' | 'blue';
export type WindowsColor = string;

@Component({
  selector: 'ngx-desktop-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends BaseComponent implements OnInit {

  private _os: OsTypes;

  @Input()
  set os(os: OsTypes) {
    this._os = os;
    if (os === 'mac') {
      this.paddingLeft = '13px';
      this.paddingRight = '13px';
    } else {
      this.paddingLeft = '32px';
      this.paddingRight = '32px';
    }
    this.padding = `${this.paddingTop} ${this.paddingLeft} ${this.paddingRight} ${this.paddingBottom}`;
    this.margin = `${this.marginTop} ${this.marginLeft} ${this.marginRight} ${this.marginBottom}`;
  }

  get os() {
    return this._os;
  }

  @Input()
  disabled: boolean;

  @Output()
  btnClick = new EventEmitter<MouseEvent>();


  @Input()
  theme: 'light' | 'dark';

  @Input()
  type: 'button' | 'submit' = 'button';

  size: string = '13px';

  @Input('size')
  set sizeS(size: string | number) {
    this.size = ButtonComponent.getValue(size);
  }

  marginBottom: string = '0';
  marginLeft: string = '0';
  marginRight: string = '0';
  marginTop: string = '0';
  paddingBottom: string = '0';
  paddingLeft: string = '0';
  paddingRight: string = '0';
  paddingTop: string = '0';

  @Input('marginBottom')
  set marginBottomS(marginBottom: string | number) {
    this.marginBottom = ButtonComponent.getValue(marginBottom);
  }

  @Input('marginLeft')
  set marginLeftS(marginLeft: string | number) {
    this.marginLeft = ButtonComponent.getValue(marginLeft);
  }

  @Input('marginRight')
  set marginRightS(marginRight: string | number) {
    this.marginRight = ButtonComponent.getValue(marginRight);
  }

  @Input('marginTop')
  set marginTopS(marginTop: string | number) {
    this.marginTop = ButtonComponent.getValue(marginTop);
  }

  @Input('paddingBottom')
  set paddingBottomS(paddingBottom: string | number) {
    this.paddingBottom = ButtonComponent.getValue(paddingBottom);
  }

  @Input('paddingLeft')
  set paddingLeftS(paddingLeft: string | number) {
    this.paddingLeft = ButtonComponent.getValue(paddingLeft);
  }

  @Input('paddingRight')
  set paddingRightS(paddingRight: string | number) {
    this.paddingRight = ButtonComponent.getValue(paddingRight);
  }

  @Input('paddingTop')
  set paddingTopS(paddingTop: string | number) {
    this.paddingTop = ButtonComponent.getValue(paddingTop);
  }

  @Input()
  padding: string;
  @Input()
  margin: string;

  get style() {
    if (this.os === 'windows') {
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
    } else if (this.os === 'mac') {
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
    }
    return {};
  }

  static getValue(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
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
        this.color = '#cccccc';
      }
    }
  }
}

import {HostListener, Input} from "@angular/core";
import {ColorUtils} from "../utils/color.utils";
import {MacColor, WindowsColor} from "./button/button.component";

export abstract class BaseComponent {

  private _color: MacColor | WindowsColor;
  darkenColor: string;
  isDarkColor: boolean;

  @Input()
  set color(color: MacColor | WindowsColor) {
    this._color = color;
    this.darkenColor = ColorUtils.darkenColor(color, .35);
    this.isDarkColor = ColorUtils.isDarkColor(this.darkenColor);
  }

  get color() {
    return this._color;
  }

  windowBlur: boolean;

  mousedown: boolean;

  mouseover: boolean;

  @HostListener('window:blur')
  windowBlurListener() {
    this.windowBlur = true;
  }

  @HostListener('window:focus')
  windowFocusListener() {
    this.windowBlur = false;
  }
  @HostListener('window:mouseup')
  windowMouseupListener() {
    this.mousedown = false;
  }

  @HostListener('mousedown')
  mousedownListener() {
    this.mousedown = true;
  }

  @HostListener('mouseout')
  mouseoutListener() {
    this.mouseover = false;
  }

  @HostListener('mouseover')
  mouseoverListener() {
    this.mouseover = true;
  }
}

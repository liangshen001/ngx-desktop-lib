import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopMargin]',
})
export class NgxDesktopMarginDirective {

  private value: string;
  @Input()
  set ngxDesktopMargin(height: number | string) {
    this.value = this.ngxDesktopService.getPxValue(height, '');
  }
  private _marginBottom: string;
  @Input()
  set marginBottom(marginBottom: number | string) {
    this._marginBottom = this.ngxDesktopService.getPxValue(marginBottom);
  }
  private _marginLeft: string;
  @Input()
  set marginLeft(marginLeft: number | string) {
    this._marginLeft = this.ngxDesktopService.getPxValue(marginLeft);
  }
  private _marginRight: string;
  @Input()
  set marginRight(marginRight: number | string) {
    this._marginRight = this.ngxDesktopService.getPxValue(marginRight);
  }
  private _marginTop: string;
  @Input()
  set marginTop(marginTop: number | string) {
    this._marginTop = this.ngxDesktopService.getPxValue(marginTop);
  }

  @HostBinding('style.margin')
  get style() {
    if (this.value) {
      return this.value;
    }
    return `${this._marginTop} ${this._marginRight} ${this._marginBottom} ${this._marginLeft}`;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

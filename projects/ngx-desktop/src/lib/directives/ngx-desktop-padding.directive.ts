import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopPadding]'
})
export class NgxDesktopPaddingDirective {

  private value: string;
  @Input()
  set ngxDesktopPadding(height: number | string) {
    this.value = this.ngxDesktopService.getPxValue(height, '');
  }
  private _paddingBottom: string;
  @Input()
  set paddingBottom(paddingBottom: number | string) {
    this._paddingBottom = this.ngxDesktopService.getPxValue(paddingBottom);
  }
  private _paddingLeft: string;
  @Input()
  set paddingLeft(paddingLeft: number | string) {
    this._paddingLeft = this.ngxDesktopService.getPxValue(paddingLeft);
  }
  private _paddingRight: string;
  @Input()
  set paddingRight(paddingRight: number | string) {
    this._paddingRight = this.ngxDesktopService.getPxValue(paddingRight);
  }
  private _paddingTop: string;
  @Input()
  set paddingTop(paddingTop: number | string) {
    this._paddingTop = this.ngxDesktopService.getPxValue(paddingTop);
  }

  @HostBinding('style.padding')
  get style() {
    if (this.value) {
      return this.value;
    }
    return `${this._paddingTop} ${this._paddingRight} ${this._paddingBottom} ${this._paddingLeft}`;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

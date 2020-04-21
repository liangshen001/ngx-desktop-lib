import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopWidth]'
})
export class NgxDesktopWidthDirective {
  private width: string;
  @Input()
  set ngxDesktopWidth(size: number | string) {
    this.width = this.ngxDesktopService.getPxValue(size, 'auto');
  }

  @HostBinding('style.width')
  get style() {
    return this.width;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

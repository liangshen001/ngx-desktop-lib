import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopHeight]'
})
export class NgxDesktopHeightDirective {

  private height: string;
  @Input()
  set ngxDesktopHeight(height: number | string) {
    this.height = this.ngxDesktopService.getPxValue(height, 'auto');
  }

  @HostBinding('style.height')
  get style() {
    return this.height;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

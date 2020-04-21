import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopSize]'
})
export class NgxDesktopSizeDirective {
  private size: string;
  @Input()
  set ngxDesktopSize(size: number | string) {
    this.size = this.ngxDesktopService.getPxValue(size);
  }

  @HostBinding('style.font-size')
  get style() {
    return this.size;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

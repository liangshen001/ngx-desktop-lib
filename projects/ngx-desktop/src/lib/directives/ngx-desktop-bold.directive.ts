import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopBold]'
})
export class NgxDesktopBoldDirective {

  private value: string;
  @Input()
  set ngxDesktopBold(bold: number | string | boolean) {
    if (typeof bold === 'boolean') {
      this.value = bold ? 'bold' : 'normal';
    } else if (typeof bold === 'number') {
      this.value = `${bold}`;
    } else {
      this.value = bold;
    }
  }

  @HostBinding('style.font-weight')
  get style() {
    return this.value;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

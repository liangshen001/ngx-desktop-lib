import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopHorizontalAlignment]'
})
export class NgxDesktopHorizontalAlignmentDirective {

  private value: string;

  @Input()
  set ngxDesktopHorizontalAlignment(horizontalAlignment: 'left' | 'center' | 'right') {
    if (horizontalAlignment === 'left') {
      this.value = 'flex-start';
    } else if (horizontalAlignment === 'right') {
      this.value = 'flex-end';
    } else if (horizontalAlignment === 'center') {
      this.value = 'center';
    }
    this.value = 'normal';
  }

  @HostBinding('style.justify-content')
  get style() {
    return this.value;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

import {Directive, HostBinding, Input} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopVerticalAlignment]'
})
export class NgxDesktopVerticalAlignmentDirective {

  private value: string;

  @Input()
  set ngxDesktopVerticalAlignment(verticalAlignment: VerticalAlignmentTypes) {
    if (verticalAlignment === 'top') {
      this.value = 'flex-start';
    } else if (verticalAlignment === 'center') {
      this.value = 'center';
    } else if (verticalAlignment === 'bottom') {
      this.value = 'flex-end';
    } else {
      this.value = 'normal';
    }
  }

  @HostBinding('style.vertical-content')
  get style() {
    return this.value;
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

export type VerticalAlignmentTypes = 'top' | 'center' | 'bottom';

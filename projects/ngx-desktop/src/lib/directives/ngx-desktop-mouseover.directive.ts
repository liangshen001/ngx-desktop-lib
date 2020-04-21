import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopMouseover]'
})
export class NgxDesktopMouseoverDirective {
  @Output()
  ngxDesktopMouseover = new EventEmitter<boolean>();

  @HostListener('mouseover')
  mouseoverListener() {
    this.ngxDesktopMouseover.emit(true);
  }
  @HostListener('mouseout')
  mouseoutListener() {
    this.ngxDesktopMouseover.emit(false);
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

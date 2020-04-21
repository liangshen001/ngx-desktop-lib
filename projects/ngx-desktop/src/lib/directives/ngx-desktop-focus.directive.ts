import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopFocus]'
})
export class NgxDesktopFocusDirective {
  @Output()
  ngxDesktopFocus = new EventEmitter<boolean>();

  @HostListener('focus')
  focusListener() {
    this.ngxDesktopFocus.emit(true);
  }
  @HostListener('blur')
  blurListener() {
    this.ngxDesktopFocus.emit(false);
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopMousedown]'
})
export class NgxDesktopMousedownDirective {
  @Output()
  ngxDesktopMousedown = new EventEmitter<boolean>();

  @HostListener('mousedown')
  mousedownListener() {
    this.ngxDesktopMousedown.emit(true);
  }
  @HostListener('window:mouseup')
  windowMouseupListener() {
    this.ngxDesktopMousedown.emit(false);
  }

  constructor() {}

}

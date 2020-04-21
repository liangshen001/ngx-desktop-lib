import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Directive({
  selector: '[ngxDesktopWindowBlur]'
})
export class NgxDesktopWindowBlurDirective {
  @Output()
  ngxDesktopWindowBlur = new EventEmitter<boolean>();

  @HostListener('window:blur')
  mouseoverListener() {
    this.ngxDesktopWindowBlur.emit(true);
  }
  @HostListener('window:focus')
  mouseoutListener() {
    this.ngxDesktopWindowBlur.emit(false);
  }

  constructor(private ngxDesktopService: NgxDesktopService) {}

}

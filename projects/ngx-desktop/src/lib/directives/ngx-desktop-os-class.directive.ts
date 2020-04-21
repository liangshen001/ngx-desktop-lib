import {Directive, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Renderer2} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";
import {OsTypes} from "../types/types";

@Directive({
  selector: '[ngxDesktopOsClass]',
  exportAs: 'ngxDeskTopOs'
})
export class NgxDesktopOsClassDirective {

  @Output()
  osChange = new EventEmitter<OsTypes>();

  public os: OsTypes;

  @Input()
  set ngxDesktopOsClass(ngxDesktopOsClass: OsTypes) {
    const os = this.ngxDesktopService.getOs(ngxDesktopOsClass);
    if (this.os !== os) {
      this.os = os;
      this.osChange.emit(os);
    }
  }

  @HostBinding('class.windows')
  get windowsClass() {
    return this.os === 'windows';
  }

  @HostBinding('class.mac')
  get osClass() {
    return this.os === 'mac';
  }

  isMac() {
    return this.os === 'mac';
  }
  styleDefaultValue(macStyle: any, windowsStyle: any) {
    return this.isMac() ? macStyle : windowsStyle;
  }
  constructor(private ngxDesktopService: NgxDesktopService,
              private elementRef: ElementRef,
              private renderer2: Renderer2) {
  }

}

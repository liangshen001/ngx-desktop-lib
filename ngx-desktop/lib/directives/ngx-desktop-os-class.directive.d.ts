import { ElementRef, EventEmitter, Renderer2 } from "@angular/core";
import { NgxDesktopService } from "../ngx-desktop.service";
import { OsTypes } from "../types/types";
import * as i0 from "@angular/core";
export declare class NgxDesktopOsClassDirective {
    private ngxDesktopService;
    private elementRef;
    private renderer2;
    osChange: EventEmitter<OsTypes>;
    os: OsTypes;
    set ngxDesktopOsClass(ngxDesktopOsClass: OsTypes);
    get windowsClass(): boolean;
    get osClass(): boolean;
    isMac(): boolean;
    styleDefaultValue(macStyle: any, windowsStyle: any): any;
    constructor(ngxDesktopService: NgxDesktopService, elementRef: ElementRef, renderer2: Renderer2);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopOsClassDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopOsClassDirective, "[ngxDesktopOsClass]", ["ngxDeskTopOs"], { "ngxDesktopOsClass": "ngxDesktopOsClass"; }, { "osChange": "osChange"; }, never>;
}

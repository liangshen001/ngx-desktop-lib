import { EventEmitter } from "@angular/core";
import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopFocusDirective {
    private ngxDesktopService;
    ngxDesktopFocus: EventEmitter<boolean>;
    focusListener(): void;
    blurListener(): void;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopFocusDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopFocusDirective, "[ngxDesktopFocus]", never, {}, { "ngxDesktopFocus": "ngxDesktopFocus"; }, never>;
}

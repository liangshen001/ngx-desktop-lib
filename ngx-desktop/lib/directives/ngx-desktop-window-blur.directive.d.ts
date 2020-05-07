import { EventEmitter } from "@angular/core";
import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopWindowBlurDirective {
    private ngxDesktopService;
    ngxDesktopWindowBlur: EventEmitter<boolean>;
    mouseoverListener(): void;
    mouseoutListener(): void;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopWindowBlurDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopWindowBlurDirective, "[ngxDesktopWindowBlur]", never, {}, { "ngxDesktopWindowBlur": "ngxDesktopWindowBlur"; }, never>;
}

import { EventEmitter } from "@angular/core";
import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopMouseoverDirective {
    private ngxDesktopService;
    ngxDesktopMouseover: EventEmitter<boolean>;
    mouseoverListener(): void;
    mouseoutListener(): void;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopMouseoverDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopMouseoverDirective, "[ngxDesktopMouseover]", never, {}, { "ngxDesktopMouseover": "ngxDesktopMouseover"; }, never>;
}

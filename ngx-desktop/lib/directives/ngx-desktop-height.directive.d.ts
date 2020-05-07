import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopHeightDirective {
    private ngxDesktopService;
    private height;
    set ngxDesktopHeight(height: number | string);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopHeightDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopHeightDirective, "[ngxDesktopHeight]", never, { "ngxDesktopHeight": "ngxDesktopHeight"; }, {}, never>;
}

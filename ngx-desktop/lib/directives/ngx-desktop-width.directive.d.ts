import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopWidthDirective {
    private ngxDesktopService;
    private width;
    set ngxDesktopWidth(size: number | string);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopWidthDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopWidthDirective, "[ngxDesktopWidth]", never, { "ngxDesktopWidth": "ngxDesktopWidth"; }, {}, never>;
}

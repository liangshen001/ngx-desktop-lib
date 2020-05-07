import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopBoldDirective {
    private ngxDesktopService;
    private value;
    set ngxDesktopBold(bold: number | string | boolean);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopBoldDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopBoldDirective, "[ngxDesktopBold]", never, { "ngxDesktopBold": "ngxDesktopBold"; }, {}, never>;
}

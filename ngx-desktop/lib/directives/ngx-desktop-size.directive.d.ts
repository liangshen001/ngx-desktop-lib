import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopSizeDirective {
    private ngxDesktopService;
    private size;
    set ngxDesktopSize(size: number | string);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopSizeDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopSizeDirective, "[ngxDesktopSize]", never, { "ngxDesktopSize": "ngxDesktopSize"; }, {}, never>;
}

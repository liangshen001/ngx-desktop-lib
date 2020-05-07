import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopVerticalAlignmentDirective {
    private ngxDesktopService;
    private value;
    set ngxDesktopVerticalAlignment(verticalAlignment: VerticalAlignmentTypes);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopVerticalAlignmentDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopVerticalAlignmentDirective, "[ngxDesktopVerticalAlignment]", never, { "ngxDesktopVerticalAlignment": "ngxDesktopVerticalAlignment"; }, {}, never>;
}
export declare type VerticalAlignmentTypes = 'top' | 'center' | 'bottom';

import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopHorizontalAlignmentDirective {
    private ngxDesktopService;
    private value;
    set ngxDesktopHorizontalAlignment(horizontalAlignment: HorizontalAlignmentTypes);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopHorizontalAlignmentDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopHorizontalAlignmentDirective, "[ngxDesktopHorizontalAlignment]", never, { "ngxDesktopHorizontalAlignment": "ngxDesktopHorizontalAlignment"; }, {}, never>;
}
export declare type HorizontalAlignmentTypes = 'left' | 'center' | 'right';

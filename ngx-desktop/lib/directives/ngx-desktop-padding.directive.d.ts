import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopPaddingDirective {
    private ngxDesktopService;
    private value;
    set ngxDesktopPadding(height: number | string);
    private _paddingBottom;
    set paddingBottom(paddingBottom: number | string);
    private _paddingLeft;
    set paddingLeft(paddingLeft: number | string);
    private _paddingRight;
    set paddingRight(paddingRight: number | string);
    private _paddingTop;
    set paddingTop(paddingTop: number | string);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopPaddingDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopPaddingDirective, "[ngxDesktopPadding]", never, { "ngxDesktopPadding": "ngxDesktopPadding"; "paddingBottom": "paddingBottom"; "paddingLeft": "paddingLeft"; "paddingRight": "paddingRight"; "paddingTop": "paddingTop"; }, {}, never>;
}

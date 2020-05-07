import { NgxDesktopService } from "../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class NgxDesktopMarginDirective {
    private ngxDesktopService;
    private value;
    set ngxDesktopMargin(height: number | string);
    private _marginBottom;
    set marginBottom(marginBottom: number | string);
    private _marginLeft;
    set marginLeft(marginLeft: number | string);
    private _marginRight;
    set marginRight(marginRight: number | string);
    private _marginTop;
    set marginTop(marginTop: number | string);
    get style(): string;
    constructor(ngxDesktopService: NgxDesktopService);
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopMarginDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgxDesktopMarginDirective, "[ngxDesktopMargin]", never, { "ngxDesktopMargin": "ngxDesktopMargin"; "marginBottom": "marginBottom"; "marginLeft": "marginLeft"; "marginRight": "marginRight"; "marginTop": "marginTop"; }, {}, never>;
}

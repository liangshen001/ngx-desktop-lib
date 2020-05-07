import { OnInit } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class NgxDesktopComponent implements OnInit, ControlValueAccessor {
    blur: boolean;
    constructor();
    ngOnInit(): void;
    windowBlurListener(): void;
    windowFocusListener(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: any): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxDesktopComponent, "lib-ngx-desktop", never, {}, {}, never>;
}

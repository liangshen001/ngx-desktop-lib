import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import { ControlValueAccessorAbstractComponent } from "../control-value-accessor-abstract.component";
import { OsTypes } from "../../types/types";
import { NgxDesktopService } from "../../ngx-desktop.service";
import { WindowsColor } from "../button/button.component";
import * as i0 from "@angular/core";
export declare class RadioComponent extends ControlValueAccessorAbstractComponent implements OnInit, ControlValueAccessor {
    private ngxDesktopService;
    private changeDetectorRef;
    private _os;
    set os(os: OsTypes);
    get os(): OsTypes;
    color: WindowsColor;
    windowBlur: boolean;
    label: string;
    name: string;
    value: string;
    disabled: boolean;
    inputElement: ElementRef<HTMLInputElement>;
    checked: boolean;
    get borderColor(): string;
    constructor(ngxDesktopService: NgxDesktopService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    writeValue(obj: any): void;
    static ɵfac: i0.ɵɵFactoryDef<RadioComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RadioComponent, "ngx-desktop-radio", never, { "os": "os"; "color": "color"; "label": "label"; "name": "name"; "value": "value"; "disabled": "disabled"; "checked": "checked"; }, {}, never>;
}

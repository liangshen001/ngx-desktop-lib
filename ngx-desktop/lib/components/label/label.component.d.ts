import { OnInit } from '@angular/core';
import { OsTypes } from "../../types/types";
import { NgxDesktopService } from "../../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class LabelComponent implements OnInit {
    private ngxDesktopService;
    private _os;
    set os(os: OsTypes);
    get os(): OsTypes;
    color: string;
    height: string | number;
    width: string | number;
    horizontalAlignment: 'left' | 'center' | 'right';
    verticalAlignment: 'top' | 'center' | 'bottom';
    marginBottom: string | number;
    marginLeft: string | number;
    marginRight: string | number;
    marginTop: string | number;
    paddingBottom: string | number;
    paddingLeft: string | number;
    paddingRight: string | number;
    paddingTop: string | number;
    padding: string | number;
    margin: string | number;
    constructor(ngxDesktopService: NgxDesktopService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<LabelComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LabelComponent, "ngx-desktop-label", never, { "os": "os"; "color": "color"; "height": "height"; "width": "width"; "horizontalAlignment": "horizontalAlignment"; "verticalAlignment": "verticalAlignment"; "marginBottom": "marginBottom"; "marginLeft": "marginLeft"; "marginRight": "marginRight"; "marginTop": "marginTop"; "paddingBottom": "paddingBottom"; "paddingLeft": "paddingLeft"; "paddingRight": "paddingRight"; "paddingTop": "paddingTop"; "padding": "padding"; "margin": "margin"; }, {}, never>;
}

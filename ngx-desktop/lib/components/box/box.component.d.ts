import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BoxComponent implements OnInit {
    label: string;
    background: string;
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
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<BoxComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BoxComponent, "ngx-desktop-box", never, { "label": "label"; "background": "background"; "color": "color"; "height": "height"; "width": "width"; "horizontalAlignment": "horizontalAlignment"; "verticalAlignment": "verticalAlignment"; "marginBottom": "marginBottom"; "marginLeft": "marginLeft"; "marginRight": "marginRight"; "marginTop": "marginTop"; "paddingBottom": "paddingBottom"; "paddingLeft": "paddingLeft"; "paddingRight": "paddingRight"; "paddingTop": "paddingTop"; "padding": "padding"; "margin": "margin"; }, {}, never>;
}

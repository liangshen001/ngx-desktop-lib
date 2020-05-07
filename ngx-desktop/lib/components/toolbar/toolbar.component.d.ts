import { OnInit } from '@angular/core';
import { VerticalAlignmentTypes } from "../../directives/ngx-desktop-vertical-alignment.directive";
import { HorizontalAlignmentTypes } from "../../directives/ngx-desktop-horizontal-alignment.directive";
import { StyleValueTypes } from "../../pipes/style-value.pipe";
import * as i0 from "@angular/core";
export declare class ToolbarComponent implements OnInit {
    height: StyleValueTypes;
    width: StyleValueTypes;
    verticalAlignment: VerticalAlignmentTypes;
    horizontalAlignment: HorizontalAlignmentTypes;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ToolbarComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ToolbarComponent, "ngx-desktop-toolbar", never, { "height": "height"; "width": "width"; "verticalAlignment": "verticalAlignment"; "horizontalAlignment": "horizontalAlignment"; }, {}, never>;
}

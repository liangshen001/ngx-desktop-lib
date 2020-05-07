import { EventEmitter, OnInit, QueryList } from '@angular/core';
import { VerticalAlignmentTypes } from "../../directives/ngx-desktop-vertical-alignment.directive";
import { HorizontalAlignmentTypes } from "../../directives/ngx-desktop-horizontal-alignment.directive";
import { StyleValueTypes } from "../../pipes/style-value.pipe";
import { ToolbarNavItemComponent } from "../toolbar-nav-item/toolbar-nav-item.component";
import * as i0 from "@angular/core";
export declare class ToolbarNavComponent implements OnInit {
    toolbarNavItemComponents: QueryList<ToolbarNavItemComponent>;
    selectedIndex: number;
    selectedIndexChange: EventEmitter<any>;
    height: StyleValueTypes;
    width: StyleValueTypes;
    verticalAlignment: VerticalAlignmentTypes;
    horizontalAlignment: HorizontalAlignmentTypes;
    windowBlur: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<ToolbarNavComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ToolbarNavComponent, "ngx-desktop-toolbar-nav", never, { "selectedIndex": "selectedIndex"; "height": "height"; "width": "width"; "verticalAlignment": "verticalAlignment"; "horizontalAlignment": "horizontalAlignment"; }, { "selectedIndexChange": "selectedIndexChange"; }, ["toolbarNavItemComponents"]>;
}

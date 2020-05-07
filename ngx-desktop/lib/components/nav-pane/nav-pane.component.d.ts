import { EventEmitter, OnInit, QueryList } from '@angular/core';
import { NgxDesktopService } from "../../ngx-desktop.service";
import { StyleValueTypes } from "../../pipes/style-value.pipe";
import { NavPaneItemComponent } from "../nav-pane-item/nav-pane-item.component";
import * as i0 from "@angular/core";
export declare class NavPaneComponent implements OnInit {
    private ngxDesktopService;
    color: string;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    canPaneToggle: boolean;
    paneCompactedLength: StyleValueTypes;
    paneExpandedLength: StyleValueTypes;
    navPaneItems: QueryList<NavPaneItemComponent>;
    changePaneState: string;
    constructor(ngxDesktopService: NgxDesktopService);
    ngOnInit(): void;
    a(): void;
    static ɵfac: i0.ɵɵFactoryDef<NavPaneComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NavPaneComponent, "ngx-desktop-nav-pane", never, { "color": "color"; "expanded": "expanded"; "canPaneToggle": "canPaneToggle"; "paneCompactedLength": "paneCompactedLength"; "paneExpandedLength": "paneExpandedLength"; }, { "expandedChange": "expandedChange"; }, ["navPaneItems"]>;
}

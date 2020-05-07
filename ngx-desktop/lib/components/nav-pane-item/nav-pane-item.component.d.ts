import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { NgxDesktopService } from "../../ngx-desktop.service";
import { HorizontalAlignmentTypes } from "../../directives/ngx-desktop-horizontal-alignment.directive";
import { VerticalAlignmentTypes } from "../../directives/ngx-desktop-vertical-alignment.directive";
import { StyleValueTypes } from "../../pipes/style-value.pipe";
import * as i0 from "@angular/core";
export declare class NavPaneItemComponent implements OnInit {
    private ngxDesktopService;
    background: string;
    color: string;
    horizontalAlignment: HorizontalAlignmentTypes;
    verticalAlignment: VerticalAlignmentTypes;
    title: string;
    icon: TemplateRef<any>;
    margin: StyleValueTypes;
    padding: StyleValueTypes;
    selected: boolean;
    onSelect: EventEmitter<any>;
    constructor(ngxDesktopService: NgxDesktopService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<NavPaneItemComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NavPaneItemComponent, "ngx-desktop-nav-pane-item", never, { "background": "background"; "color": "color"; "horizontalAlignment": "horizontalAlignment"; "verticalAlignment": "verticalAlignment"; "title": "title"; "icon": "icon"; "margin": "margin"; "padding": "padding"; "selected": "selected"; }, { "onSelect": "onSelect"; }, never>;
}

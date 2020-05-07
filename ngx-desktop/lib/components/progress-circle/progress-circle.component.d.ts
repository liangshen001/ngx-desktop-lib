import { AfterViewInit, ElementRef, OnInit, QueryList } from '@angular/core';
import { OsTypes } from "../../types/types";
import { NgxDesktopService } from "../../ngx-desktop.service";
import * as i0 from "@angular/core";
export declare class ProgressCircleComponent implements OnInit, AfterViewInit {
    private ngxDesktopService;
    private _os;
    set os(os: OsTypes);
    get os(): OsTypes;
    size: string | number;
    color: string;
    circles: QueryList<ElementRef<SVGCircleElement | SVGPathElement>>;
    constructor(ngxDesktopService: NgxDesktopService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initColor(): void;
    static ɵfac: i0.ɵɵFactoryDef<ProgressCircleComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProgressCircleComponent, "ngx-desktop-progress-circle", never, { "os": "os"; "size": "size"; "color": "color"; }, {}, never>;
}

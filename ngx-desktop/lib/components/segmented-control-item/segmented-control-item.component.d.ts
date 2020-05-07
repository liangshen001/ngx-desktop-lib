import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SegmentedControlItemComponent implements OnInit {
    label: string;
    disabled: boolean;
    labelMousedown: boolean;
    show: boolean;
    constructor();
    ngOnInit(): void;
    windowMouseupListener(): void;
    static ɵfac: i0.ɵɵFactoryDef<SegmentedControlItemComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SegmentedControlItemComponent, "ngx-desktop-segmented-control-item", never, { "label": "label"; "disabled": "disabled"; }, {}, never>;
}

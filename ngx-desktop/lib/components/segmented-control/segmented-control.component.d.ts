import { OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import { ControlValueAccessorAbstractComponent } from "../control-value-accessor-abstract.component";
import { SegmentedControlItemComponent } from "../segmented-control-item/segmented-control-item.component";
import * as i0 from "@angular/core";
export declare class SegmentedControlComponent extends ControlValueAccessorAbstractComponent implements OnInit, ControlValueAccessor {
    segmentedList: QueryList<SegmentedControlItemComponent>;
    height: string | number;
    width: string | number;
    backgroundColor: string;
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
    windowBlur: boolean;
    constructor();
    ngOnInit(): void;
    writeValue(obj: any): void;
    selectTab(index: number, segmented?: SegmentedControlItemComponent): void;
    static ɵfac: i0.ɵɵFactoryDef<SegmentedControlComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SegmentedControlComponent, "ngx-desktop-segmented-control", never, { "height": "height"; "width": "width"; "backgroundColor": "backgroundColor"; "marginBottom": "marginBottom"; "marginLeft": "marginLeft"; "marginRight": "marginRight"; "marginTop": "marginTop"; "paddingBottom": "paddingBottom"; "paddingLeft": "paddingLeft"; "paddingRight": "paddingRight"; "paddingTop": "paddingTop"; "padding": "padding"; "margin": "margin"; }, {}, ["segmentedList"]>;
}

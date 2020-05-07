import { PipeTransform } from "@angular/core";
import * as i0 from "@angular/core";
export declare class StyleValuePipe implements PipeTransform {
    constructor();
    transform(value: StyleValueTypes | boolean, ...args: any[]): any;
    static ɵfac: i0.ɵɵFactoryDef<StyleValuePipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<StyleValuePipe, "styleValue">;
    static ɵprov: i0.ɵɵInjectableDef<StyleValuePipe>;
}
export declare type StyleValueTypes = string | number;

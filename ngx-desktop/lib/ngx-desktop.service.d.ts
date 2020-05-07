import { OsTypes } from "./types/types";
import * as i0 from "@angular/core";
export declare class NgxDesktopService {
    private osConfig;
    private _systemOs;
    constructor(osConfig: OsTypes);
    getPxValue(value: string | number, defaultValue?: '0' | 'auto' | ''): string;
    isMac(os: OsTypes): boolean;
    getOs(os: OsTypes): OsTypes;
    getSystemOs(): OsTypes;
    static ɵfac: i0.ɵɵFactoryDef<NgxDesktopService>;
    static ɵprov: i0.ɵɵInjectableDef<NgxDesktopService>;
}

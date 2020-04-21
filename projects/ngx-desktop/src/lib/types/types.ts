import {InjectionToken} from "@angular/core";

export type OsTypes = 'mac' | 'windows';


export const OS_TOKEN = new InjectionToken("os");

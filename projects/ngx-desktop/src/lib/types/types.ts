import {InjectionToken} from "@angular/core";

export type OsTypes = 'mac' | 'windows' | 'auto';


export const OS_TOKEN = new InjectionToken("os");

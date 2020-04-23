import {InjectionToken} from "@angular/core";

export type OsTypes = 'mac' | 'windows' | 'auto';

export type LayoutTypes = 'vertical' | 'horizontal';


export const OS_TOKEN = new InjectionToken("os");

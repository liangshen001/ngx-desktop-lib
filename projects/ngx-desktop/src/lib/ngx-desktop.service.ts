import {Inject, Injectable} from '@angular/core';
import {MACOS, WINDOWS} from "./utils/os.utils";
import {OS_TOKEN, OsTypes} from "./types/types";

declare const window;

@Injectable({
  providedIn: 'root'
})
export class NgxDesktopService {

  private _systemOs: 'windows' | 'mac';

  constructor(@Inject(OS_TOKEN) private osConfig: OsTypes) { }

  getPxValue(value: string | number, defaultValue: '0' | 'auto' | '' = '0'): string {
    if (typeof value === 'number') {
      return `${value}px`;
    } else if (value) {
      return value;
    }
    return defaultValue;
  }

  isMac(os: OsTypes) {
    return this.getOs(os) === 'mac';
  }

  getOs(os: OsTypes) {
    if (os) {
      if (os === 'auto') {
        return this.getSystemOs();
      }
      return os;
    }
    if (this.osConfig === 'auto') {
      return this.getSystemOs();
    }
    return this.osConfig;
  }

  getSystemOs(): OsTypes {
    if (this._systemOs) {
      return this._systemOs;
    }
    // explicitly set these to avoid issues
    const w = window || null;
    const n = navigator || null;
    const p = (w && w.process) || null;

    // via node
    if (p && p.platform) {
      if (p.platform === 'darwin') {
        this._systemOs = MACOS;
        return MACOS;
      }
      if (p.platform.includes('win')) {
        this._systemOs = WINDOWS;
        return WINDOWS;
      }
    }

    // via user agent
    if (n && n.userAgent) {
      if (n.userAgent.includes('Macintosh')) {
        this._systemOs = MACOS;
        return MACOS;
      }
      if (n.userAgent.includes('Windows')) {
        this._systemOs = WINDOWS;
        return WINDOWS;
      }
    }
    this._systemOs = MACOS;
    // default to macOs
    return MACOS;
  }
}

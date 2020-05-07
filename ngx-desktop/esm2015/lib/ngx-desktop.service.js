import { Inject, Injectable } from '@angular/core';
import { MACOS, WINDOWS } from "./utils/os.utils";
import { OS_TOKEN } from "./types/types";
import * as i0 from "@angular/core";
export class NgxDesktopService {
    constructor(osConfig) {
        this.osConfig = osConfig;
    }
    getPxValue(value, defaultValue = '0') {
        if (typeof value === 'number') {
            return `${value}px`;
        }
        else if (value) {
            return value;
        }
        return defaultValue;
    }
    isMac(os) {
        return this.getOs(os) === 'mac';
    }
    getOs(os) {
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
    getSystemOs() {
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
NgxDesktopService.ɵfac = function NgxDesktopService_Factory(t) { return new (t || NgxDesktopService)(i0.ɵɵinject(OS_TOKEN)); };
NgxDesktopService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxDesktopService, factory: NgxDesktopService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [OS_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL25neC1kZXNrdG9wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQU9oRCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQXNDLFFBQWlCO1FBQWpCLGFBQVEsR0FBUixRQUFRLENBQVM7SUFBSSxDQUFDO0lBRTVELFVBQVUsQ0FBQyxLQUFzQixFQUFFLGVBQWtDLEdBQUc7UUFDdEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxHQUFHLEtBQUssSUFBSSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxLQUFLLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUMsRUFBVztRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELEtBQUssQ0FBQyxFQUFXO1FBQ2YsSUFBSSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCO1FBQ0QsdUNBQXVDO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUM7UUFDekIsTUFBTSxDQUFDLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQztRQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO1FBRW5DLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1NBQ0Y7UUFFRCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNwQixJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUN6QixPQUFPLE9BQU8sQ0FBQzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsbUJBQW1CO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7a0ZBbkVVLGlCQUFpQixjQUlSLFFBQVE7eURBSmpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmhCLE1BQU07a0RBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBS2MsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01BQ09TLCBXSU5ET1dTfSBmcm9tIFwiLi91dGlscy9vcy51dGlsc1wiO1xyXG5pbXBvcnQge09TX1RPS0VOLCBPc1R5cGVzfSBmcm9tIFwiLi90eXBlcy90eXBlc1wiO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX3N5c3RlbU9zOiAnd2luZG93cycgfCAnbWFjJztcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChPU19UT0tFTikgcHJpdmF0ZSBvc0NvbmZpZzogT3NUeXBlcykgeyB9XHJcblxyXG4gIGdldFB4VmFsdWUodmFsdWU6IHN0cmluZyB8IG51bWJlciwgZGVmYXVsdFZhbHVlOiAnMCcgfCAnYXV0bycgfCAnJyA9ICcwJyk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgaXNNYWMob3M6IE9zVHlwZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmdldE9zKG9zKSA9PT0gJ21hYyc7XHJcbiAgfVxyXG5cclxuICBnZXRPcyhvczogT3NUeXBlcykge1xyXG4gICAgaWYgKG9zKSB7XHJcbiAgICAgIGlmIChvcyA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3lzdGVtT3MoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3M7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vc0NvbmZpZyA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFN5c3RlbU9zKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5vc0NvbmZpZztcclxuICB9XHJcblxyXG4gIGdldFN5c3RlbU9zKCk6IE9zVHlwZXMge1xyXG4gICAgaWYgKHRoaXMuX3N5c3RlbU9zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zeXN0ZW1PcztcclxuICAgIH1cclxuICAgIC8vIGV4cGxpY2l0bHkgc2V0IHRoZXNlIHRvIGF2b2lkIGlzc3Vlc1xyXG4gICAgY29uc3QgdyA9IHdpbmRvdyB8fCBudWxsO1xyXG4gICAgY29uc3QgbiA9IG5hdmlnYXRvciB8fCBudWxsO1xyXG4gICAgY29uc3QgcCA9ICh3ICYmIHcucHJvY2VzcykgfHwgbnVsbDtcclxuXHJcbiAgICAvLyB2aWEgbm9kZVxyXG4gICAgaWYgKHAgJiYgcC5wbGF0Zm9ybSkge1xyXG4gICAgICBpZiAocC5wbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcclxuICAgICAgICB0aGlzLl9zeXN0ZW1PcyA9IE1BQ09TO1xyXG4gICAgICAgIHJldHVybiBNQUNPUztcclxuICAgICAgfVxyXG4gICAgICBpZiAocC5wbGF0Zm9ybS5pbmNsdWRlcygnd2luJykpIHtcclxuICAgICAgICB0aGlzLl9zeXN0ZW1PcyA9IFdJTkRPV1M7XHJcbiAgICAgICAgcmV0dXJuIFdJTkRPV1M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB2aWEgdXNlciBhZ2VudFxyXG4gICAgaWYgKG4gJiYgbi51c2VyQWdlbnQpIHtcclxuICAgICAgaWYgKG4udXNlckFnZW50LmluY2x1ZGVzKCdNYWNpbnRvc2gnKSkge1xyXG4gICAgICAgIHRoaXMuX3N5c3RlbU9zID0gTUFDT1M7XHJcbiAgICAgICAgcmV0dXJuIE1BQ09TO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuLnVzZXJBZ2VudC5pbmNsdWRlcygnV2luZG93cycpKSB7XHJcbiAgICAgICAgdGhpcy5fc3lzdGVtT3MgPSBXSU5ET1dTO1xyXG4gICAgICAgIHJldHVybiBXSU5ET1dTO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zeXN0ZW1PcyA9IE1BQ09TO1xyXG4gICAgLy8gZGVmYXVsdCB0byBtYWNPc1xyXG4gICAgcmV0dXJuIE1BQ09TO1xyXG4gIH1cclxufVxyXG4iXX0=
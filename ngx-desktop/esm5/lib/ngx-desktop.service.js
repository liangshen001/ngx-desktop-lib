import { Inject, Injectable } from '@angular/core';
import { MACOS, WINDOWS } from "./utils/os.utils";
import { OS_TOKEN } from "./types/types";
import * as i0 from "@angular/core";
var NgxDesktopService = /** @class */ (function () {
    function NgxDesktopService(osConfig) {
        this.osConfig = osConfig;
    }
    NgxDesktopService.prototype.getPxValue = function (value, defaultValue) {
        if (defaultValue === void 0) { defaultValue = '0'; }
        if (typeof value === 'number') {
            return value + "px";
        }
        else if (value) {
            return value;
        }
        return defaultValue;
    };
    NgxDesktopService.prototype.isMac = function (os) {
        return this.getOs(os) === 'mac';
    };
    NgxDesktopService.prototype.getOs = function (os) {
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
    };
    NgxDesktopService.prototype.getSystemOs = function () {
        if (this._systemOs) {
            return this._systemOs;
        }
        // explicitly set these to avoid issues
        var w = window || null;
        var n = navigator || null;
        var p = (w && w.process) || null;
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
    };
    NgxDesktopService.ɵfac = function NgxDesktopService_Factory(t) { return new (t || NgxDesktopService)(i0.ɵɵinject(OS_TOKEN)); };
    NgxDesktopService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxDesktopService, factory: NgxDesktopService.ɵfac, providedIn: 'root' });
    return NgxDesktopService;
}());
export { NgxDesktopService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [OS_TOKEN]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL25neC1kZXNrdG9wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUloRDtJQU9FLDJCQUFzQyxRQUFpQjtRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFTO0lBQUksQ0FBQztJQUU1RCxzQ0FBVSxHQUFWLFVBQVcsS0FBc0IsRUFBRSxZQUFxQztRQUFyQyw2QkFBQSxFQUFBLGtCQUFxQztRQUN0RSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFVLEtBQUssT0FBSSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxLQUFLLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBSyxHQUFMLFVBQU0sRUFBVztRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxFQUFXO1FBQ2YsSUFBSSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCO1FBQ0QsdUNBQXVDO1FBQ3ZDLElBQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUM7UUFDekIsSUFBTSxDQUFDLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQztRQUM1QixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO1FBRW5DLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1NBQ0Y7UUFFRCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNwQixJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2dCQUN6QixPQUFPLE9BQU8sQ0FBQzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsbUJBQW1CO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztzRkFuRVUsaUJBQWlCLGNBSVIsUUFBUTs2REFKakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs0QkFQcEI7Q0E2RUMsQUF2RUQsSUF1RUM7U0FwRVksaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFLYyxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TUFDT1MsIFdJTkRPV1N9IGZyb20gXCIuL3V0aWxzL29zLnV0aWxzXCI7XHJcbmltcG9ydCB7T1NfVE9LRU4sIE9zVHlwZXN9IGZyb20gXCIuL3R5cGVzL3R5cGVzXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfc3lzdGVtT3M6ICd3aW5kb3dzJyB8ICdtYWMnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE9TX1RPS0VOKSBwcml2YXRlIG9zQ29uZmlnOiBPc1R5cGVzKSB7IH1cclxuXHJcbiAgZ2V0UHhWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU6ICcwJyB8ICdhdXRvJyB8ICcnID0gJzAnKTogc3RyaW5nIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBpc01hYyhvczogT3NUeXBlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0T3Mob3MpID09PSAnbWFjJztcclxuICB9XHJcblxyXG4gIGdldE9zKG9zOiBPc1R5cGVzKSB7XHJcbiAgICBpZiAob3MpIHtcclxuICAgICAgaWYgKG9zID09PSAnYXV0bycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTeXN0ZW1PcygpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9zQ29uZmlnID09PSAnYXV0bycpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3lzdGVtT3MoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm9zQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3lzdGVtT3MoKTogT3NUeXBlcyB7XHJcbiAgICBpZiAodGhpcy5fc3lzdGVtT3MpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N5c3RlbU9zO1xyXG4gICAgfVxyXG4gICAgLy8gZXhwbGljaXRseSBzZXQgdGhlc2UgdG8gYXZvaWQgaXNzdWVzXHJcbiAgICBjb25zdCB3ID0gd2luZG93IHx8IG51bGw7XHJcbiAgICBjb25zdCBuID0gbmF2aWdhdG9yIHx8IG51bGw7XHJcbiAgICBjb25zdCBwID0gKHcgJiYgdy5wcm9jZXNzKSB8fCBudWxsO1xyXG5cclxuICAgIC8vIHZpYSBub2RlXHJcbiAgICBpZiAocCAmJiBwLnBsYXRmb3JtKSB7XHJcbiAgICAgIGlmIChwLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xyXG4gICAgICAgIHRoaXMuX3N5c3RlbU9zID0gTUFDT1M7XHJcbiAgICAgICAgcmV0dXJuIE1BQ09TO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwLnBsYXRmb3JtLmluY2x1ZGVzKCd3aW4nKSkge1xyXG4gICAgICAgIHRoaXMuX3N5c3RlbU9zID0gV0lORE9XUztcclxuICAgICAgICByZXR1cm4gV0lORE9XUztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZpYSB1c2VyIGFnZW50XHJcbiAgICBpZiAobiAmJiBuLnVzZXJBZ2VudCkge1xyXG4gICAgICBpZiAobi51c2VyQWdlbnQuaW5jbHVkZXMoJ01hY2ludG9zaCcpKSB7XHJcbiAgICAgICAgdGhpcy5fc3lzdGVtT3MgPSBNQUNPUztcclxuICAgICAgICByZXR1cm4gTUFDT1M7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG4udXNlckFnZW50LmluY2x1ZGVzKCdXaW5kb3dzJykpIHtcclxuICAgICAgICB0aGlzLl9zeXN0ZW1PcyA9IFdJTkRPV1M7XHJcbiAgICAgICAgcmV0dXJuIFdJTkRPV1M7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX3N5c3RlbU9zID0gTUFDT1M7XHJcbiAgICAvLyBkZWZhdWx0IHRvIG1hY09zXHJcbiAgICByZXR1cm4gTUFDT1M7XHJcbiAgfVxyXG59XHJcbiJdfQ==
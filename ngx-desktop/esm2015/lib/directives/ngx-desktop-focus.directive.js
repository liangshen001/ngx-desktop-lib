import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopFocusDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopFocus = new EventEmitter();
    }
    focusListener() {
        this.ngxDesktopFocus.emit(true);
    }
    blurListener() {
        this.ngxDesktopFocus.emit(false);
    }
}
NgxDesktopFocusDirective.ɵfac = function NgxDesktopFocusDirective_Factory(t) { return new (t || NgxDesktopFocusDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopFocusDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopFocusDirective, selectors: [["", "ngxDesktopFocus", ""]], hostBindings: function NgxDesktopFocusDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focus", function NgxDesktopFocusDirective_focus_HostBindingHandler() { return ctx.focusListener(); })("blur", function NgxDesktopFocusDirective_blur_HostBindingHandler() { return ctx.blurListener(); });
    } }, outputs: { ngxDesktopFocus: "ngxDesktopFocus" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopFocusDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopFocus]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopFocus: [{
            type: Output
        }], focusListener: [{
            type: HostListener,
            args: ['focus']
        }], blurListener: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQWUsWUFBWSxFQUFTLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBTWhHLE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFYeEQsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBV2EsQ0FBQztJQVI1RCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnR0FYVSx3QkFBd0I7NkRBQXhCLHdCQUF3Qjs7O2tEQUF4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7O2tCQUVFLE1BQU07O2tCQUdOLFlBQVk7bUJBQUMsT0FBTzs7a0JBSXBCLFlBQVk7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wRm9jdXNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcEZvY3VzRGlyZWN0aXZlIHtcclxuICBAT3V0cHV0KClcclxuICBuZ3hEZXNrdG9wRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcclxuICBmb2N1c0xpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5uZ3hEZXNrdG9wRm9jdXMuZW1pdCh0cnVlKTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgYmx1ckxpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5uZ3hEZXNrdG9wRm9jdXMuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge31cclxuXHJcbn1cclxuIl19
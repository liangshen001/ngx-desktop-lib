import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopWindowBlurDirective = /** @class */ (function () {
    function NgxDesktopWindowBlurDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopWindowBlur = new EventEmitter();
    }
    NgxDesktopWindowBlurDirective.prototype.mouseoverListener = function () {
        this.ngxDesktopWindowBlur.emit(true);
    };
    NgxDesktopWindowBlurDirective.prototype.mouseoutListener = function () {
        this.ngxDesktopWindowBlur.emit(false);
    };
    NgxDesktopWindowBlurDirective.ɵfac = function NgxDesktopWindowBlurDirective_Factory(t) { return new (t || NgxDesktopWindowBlurDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopWindowBlurDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopWindowBlurDirective, selectors: [["", "ngxDesktopWindowBlur", ""]], hostBindings: function NgxDesktopWindowBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function NgxDesktopWindowBlurDirective_blur_HostBindingHandler() { return ctx.mouseoverListener(); }, false, i0.ɵɵresolveWindow)("focus", function NgxDesktopWindowBlurDirective_focus_HostBindingHandler() { return ctx.mouseoutListener(); }, false, i0.ɵɵresolveWindow);
        } }, outputs: { ngxDesktopWindowBlur: "ngxDesktopWindowBlur" } });
    return NgxDesktopWindowBlurDirective;
}());
export { NgxDesktopWindowBlurDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopWindowBlurDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopWindowBlur]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopWindowBlur: [{
            type: Output
        }], mouseoverListener: [{
            type: HostListener,
            args: ['window:blur']
        }], mouseoutListener: [{
            type: HostListener,
            args: ['window:focus']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atd2luZG93LWJsdXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC13aW5kb3ctYmx1ci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQWUsWUFBWSxFQUFTLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBR2hHO0lBZ0JFLHVDQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVh4RCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBV1EsQ0FBQztJQVI1RCx5REFBaUIsR0FEakI7UUFFRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3REFBZ0IsR0FEaEI7UUFFRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OEdBWFUsNkJBQTZCO3NFQUE3Qiw2QkFBNkI7Ozt3Q0FOMUM7Q0FxQkMsQUFsQkQsSUFrQkM7U0FmWSw2QkFBNkI7a0RBQTdCLDZCQUE2QjtjQUh6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7a0JBRUUsTUFBTTs7a0JBR04sWUFBWTttQkFBQyxhQUFhOztrQkFJMUIsWUFBWTttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BXaW5kb3dCbHVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BXaW5kb3dCbHVyRGlyZWN0aXZlIHtcclxuICBAT3V0cHV0KClcclxuICBuZ3hEZXNrdG9wV2luZG93Qmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJsdXInKVxyXG4gIG1vdXNlb3Zlckxpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5uZ3hEZXNrdG9wV2luZG93Qmx1ci5lbWl0KHRydWUpO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Zm9jdXMnKVxyXG4gIG1vdXNlb3V0TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm5neERlc2t0b3BXaW5kb3dCbHVyLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcbiJdfQ==
import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopFocusDirective = /** @class */ (function () {
    function NgxDesktopFocusDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopFocus = new EventEmitter();
    }
    NgxDesktopFocusDirective.prototype.focusListener = function () {
        this.ngxDesktopFocus.emit(true);
    };
    NgxDesktopFocusDirective.prototype.blurListener = function () {
        this.ngxDesktopFocus.emit(false);
    };
    NgxDesktopFocusDirective.ɵfac = function NgxDesktopFocusDirective_Factory(t) { return new (t || NgxDesktopFocusDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopFocusDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopFocusDirective, selectors: [["", "ngxDesktopFocus", ""]], hostBindings: function NgxDesktopFocusDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focus", function NgxDesktopFocusDirective_focus_HostBindingHandler() { return ctx.focusListener(); })("blur", function NgxDesktopFocusDirective_blur_HostBindingHandler() { return ctx.blurListener(); });
        } }, outputs: { ngxDesktopFocus: "ngxDesktopFocus" } });
    return NgxDesktopFocusDirective;
}());
export { NgxDesktopFocusDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1mb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQWUsWUFBWSxFQUFTLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBR2hHO0lBZ0JFLGtDQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVh4RCxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFXYSxDQUFDO0lBUjVELGdEQUFhLEdBRGI7UUFFRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0NBQVksR0FEWjtRQUVFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7b0dBWFUsd0JBQXdCO2lFQUF4Qix3QkFBd0I7OzttQ0FOckM7Q0FxQkMsQUFsQkQsSUFrQkM7U0FmWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7a0JBRUUsTUFBTTs7a0JBR04sWUFBWTttQkFBQyxPQUFPOztrQkFJcEIsWUFBWTttQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BGb2N1c10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wRm9jdXNEaXJlY3RpdmUge1xyXG4gIEBPdXRwdXQoKVxyXG4gIG5neERlc2t0b3BGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxyXG4gIGZvY3VzTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm5neERlc2t0b3BGb2N1cy5lbWl0KHRydWUpO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBibHVyTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm5neERlc2t0b3BGb2N1cy5lbWl0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7fVxyXG5cclxufVxyXG4iXX0=
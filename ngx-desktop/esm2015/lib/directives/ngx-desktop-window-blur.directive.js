import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopWindowBlurDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopWindowBlur = new EventEmitter();
    }
    mouseoverListener() {
        this.ngxDesktopWindowBlur.emit(true);
    }
    mouseoutListener() {
        this.ngxDesktopWindowBlur.emit(false);
    }
}
NgxDesktopWindowBlurDirective.ɵfac = function NgxDesktopWindowBlurDirective_Factory(t) { return new (t || NgxDesktopWindowBlurDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopWindowBlurDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopWindowBlurDirective, selectors: [["", "ngxDesktopWindowBlur", ""]], hostBindings: function NgxDesktopWindowBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("blur", function NgxDesktopWindowBlurDirective_blur_HostBindingHandler() { return ctx.mouseoverListener(); }, false, i0.ɵɵresolveWindow)("focus", function NgxDesktopWindowBlurDirective_focus_HostBindingHandler() { return ctx.mouseoutListener(); }, false, i0.ɵɵresolveWindow);
    } }, outputs: { ngxDesktopWindowBlur: "ngxDesktopWindowBlur" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atd2luZG93LWJsdXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC13aW5kb3ctYmx1ci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQWUsWUFBWSxFQUFTLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBTWhHLE1BQU0sT0FBTyw2QkFBNkI7SUFheEMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFYeEQseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVdRLENBQUM7SUFSNUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDOzswR0FYVSw2QkFBNkI7a0VBQTdCLDZCQUE2Qjs7O2tEQUE3Qiw2QkFBNkI7Y0FIekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7O2tCQUVFLE1BQU07O2tCQUdOLFlBQVk7bUJBQUMsYUFBYTs7a0JBSTFCLFlBQVk7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wV2luZG93Qmx1cl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wV2luZG93Qmx1ckRpcmVjdGl2ZSB7XHJcbiAgQE91dHB1dCgpXHJcbiAgbmd4RGVza3RvcFdpbmRvd0JsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpibHVyJylcclxuICBtb3VzZW92ZXJMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMubmd4RGVza3RvcFdpbmRvd0JsdXIuZW1pdCh0cnVlKTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmZvY3VzJylcclxuICBtb3VzZW91dExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5uZ3hEZXNrdG9wV2luZG93Qmx1ci5lbWl0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7fVxyXG5cclxufVxyXG4iXX0=
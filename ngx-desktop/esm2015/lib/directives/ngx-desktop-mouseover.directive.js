import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopMouseoverDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopMouseover = new EventEmitter();
    }
    mouseoverListener() {
        this.ngxDesktopMouseover.emit(true);
    }
    mouseoutListener() {
        this.ngxDesktopMouseover.emit(false);
    }
}
NgxDesktopMouseoverDirective.ɵfac = function NgxDesktopMouseoverDirective_Factory(t) { return new (t || NgxDesktopMouseoverDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopMouseoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopMouseoverDirective, selectors: [["", "ngxDesktopMouseover", ""]], hostBindings: function NgxDesktopMouseoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseover", function NgxDesktopMouseoverDirective_mouseover_HostBindingHandler() { return ctx.mouseoverListener(); })("mouseout", function NgxDesktopMouseoverDirective_mouseout_HostBindingHandler() { return ctx.mouseoutListener(); });
    } }, outputs: { ngxDesktopMouseover: "ngxDesktopMouseover" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopMouseoverDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopMouseover]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopMouseover: [{
            type: Output
        }], mouseoverListener: [{
            type: HostListener,
            args: ['mouseover']
        }], mouseoutListener: [{
            type: HostListener,
            args: ['mouseout']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtbW91c2VvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbW91c2VvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBZSxZQUFZLEVBQVMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFNaEcsTUFBTSxPQUFPLDRCQUE0QjtJQWF2QyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVh4RCx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBV1MsQ0FBQztJQVI1RCxpQkFBaUI7UUFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O3dHQVhVLDRCQUE0QjtpRUFBNUIsNEJBQTRCOzs7a0RBQTVCLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7a0JBRUUsTUFBTTs7a0JBR04sWUFBWTttQkFBQyxXQUFXOztrQkFJeEIsWUFBWTttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BNb3VzZW92ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcE1vdXNlb3ZlckRpcmVjdGl2ZSB7XHJcbiAgQE91dHB1dCgpXHJcbiAgbmd4RGVza3RvcE1vdXNlb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJylcclxuICBtb3VzZW92ZXJMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMubmd4RGVza3RvcE1vdXNlb3Zlci5lbWl0KHRydWUpO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZW91dCcpXHJcbiAgbW91c2VvdXRMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMubmd4RGVza3RvcE1vdXNlb3Zlci5lbWl0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7fVxyXG5cclxufVxyXG4iXX0=
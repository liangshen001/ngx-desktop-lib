import { Directive, EventEmitter, HostBinding, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopOsClassDirective {
    constructor(ngxDesktopService, elementRef, renderer2) {
        this.ngxDesktopService = ngxDesktopService;
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.osChange = new EventEmitter();
    }
    set ngxDesktopOsClass(ngxDesktopOsClass) {
        const os = this.ngxDesktopService.getOs(ngxDesktopOsClass);
        if (this.os !== os) {
            this.os = os;
            this.osChange.emit(os);
        }
    }
    get windowsClass() {
        return this.os === 'windows';
    }
    get osClass() {
        return this.os === 'mac';
    }
    isMac() {
        return this.os === 'mac';
    }
    styleDefaultValue(macStyle, windowsStyle) {
        return this.isMac() ? macStyle : windowsStyle;
    }
}
NgxDesktopOsClassDirective.ɵfac = function NgxDesktopOsClassDirective_Factory(t) { return new (t || NgxDesktopOsClassDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
NgxDesktopOsClassDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopOsClassDirective, selectors: [["", "ngxDesktopOsClass", ""]], hostVars: 4, hostBindings: function NgxDesktopOsClassDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("windows", ctx.windowsClass)("mac", ctx.osClass);
    } }, inputs: { ngxDesktopOsClass: "ngxDesktopOsClass" }, outputs: { osChange: "osChange" }, exportAs: ["ngxDeskTopOs"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopOsClassDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopOsClass]',
                exportAs: 'ngxDeskTopOs'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { osChange: [{
            type: Output
        }], ngxDesktopOsClass: [{
            type: Input
        }], windowsClass: [{
            type: HostBinding,
            args: ['class.windows']
        }], osClass: [{
            type: HostBinding,
            args: ['class.mac']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atb3MtY2xhc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1vcy1jbGFzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7OztBQVFqSCxNQUFNLE9BQU8sMEJBQTBCO0lBZ0NyQyxZQUFvQixpQkFBb0MsRUFDcEMsVUFBc0IsRUFDdEIsU0FBb0I7UUFGcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUEvQnhDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBZ0N2QyxDQUFDO0lBNUJELElBQ0ksaUJBQWlCLENBQUMsaUJBQTBCO1FBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELGlCQUFpQixDQUFDLFFBQWEsRUFBRSxZQUFpQjtRQUNoRCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDaEQsQ0FBQzs7b0dBL0JVLDBCQUEwQjsrREFBMUIsMEJBQTBCOzs7a0RBQTFCLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLGNBQWM7YUFDekI7O2tCQUdFLE1BQU07O2tCQUtOLEtBQUs7O2tCQVNMLFdBQVc7bUJBQUMsZUFBZTs7a0JBSzNCLFdBQVc7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPc1R5cGVzfSBmcm9tIFwiLi4vdHlwZXMvdHlwZXNcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BPc0NsYXNzXScsXHJcbiAgZXhwb3J0QXM6ICduZ3hEZXNrVG9wT3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wT3NDbGFzc0RpcmVjdGl2ZSB7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9zQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxPc1R5cGVzPigpO1xyXG5cclxuICBwdWJsaWMgb3M6IE9zVHlwZXM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5neERlc2t0b3BPc0NsYXNzKG5neERlc2t0b3BPc0NsYXNzOiBPc1R5cGVzKSB7XHJcbiAgICBjb25zdCBvcyA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0T3Mobmd4RGVza3RvcE9zQ2xhc3MpO1xyXG4gICAgaWYgKHRoaXMub3MgIT09IG9zKSB7XHJcbiAgICAgIHRoaXMub3MgPSBvcztcclxuICAgICAgdGhpcy5vc0NoYW5nZS5lbWl0KG9zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3Mud2luZG93cycpXHJcbiAgZ2V0IHdpbmRvd3NDbGFzcygpIHtcclxuICAgIHJldHVybiB0aGlzLm9zID09PSAnd2luZG93cyc7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hYycpXHJcbiAgZ2V0IG9zQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcyA9PT0gJ21hYyc7XHJcbiAgfVxyXG5cclxuICBpc01hYygpIHtcclxuICAgIHJldHVybiB0aGlzLm9zID09PSAnbWFjJztcclxuICB9XHJcbiAgc3R5bGVEZWZhdWx0VmFsdWUobWFjU3R5bGU6IGFueSwgd2luZG93c1N0eWxlOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmlzTWFjKCkgPyBtYWNTdHlsZSA6IHdpbmRvd3NTdHlsZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
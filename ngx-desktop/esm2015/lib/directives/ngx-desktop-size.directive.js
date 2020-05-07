import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopSizeDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set ngxDesktopSize(size) {
        this.size = this.ngxDesktopService.getPxValue(size);
    }
    get style() {
        return this.size;
    }
}
NgxDesktopSizeDirective.ɵfac = function NgxDesktopSizeDirective_Factory(t) { return new (t || NgxDesktopSizeDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopSizeDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopSizeDirective, selectors: [["", "ngxDesktopSize", ""]], hostVars: 2, hostBindings: function NgxDesktopSizeDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("font-size", ctx.style);
    } }, inputs: { ngxDesktopSize: "ngxDesktopSize" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopSizeDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopSize]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopSize: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.font-size']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBTTVELE1BQU0sT0FBTyx1QkFBdUI7SUFZbEMsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBVjVELElBQ0ksY0FBYyxDQUFDLElBQXFCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7OzhGQVZVLHVCQUF1Qjs0REFBdkIsdUJBQXVCOzs7a0RBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7a0JBR0UsS0FBSzs7a0JBS0wsV0FBVzttQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcFNpemVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcFNpemVEaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgc2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5neERlc2t0b3BTaXplKHNpemU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5zaXplID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKHNpemUpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mb250LXNpemUnKVxyXG4gIGdldCBzdHlsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge31cclxuXHJcbn1cclxuIl19
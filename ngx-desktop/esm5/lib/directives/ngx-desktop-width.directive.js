import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopWidthDirective = /** @class */ (function () {
    function NgxDesktopWidthDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopWidthDirective.prototype, "ngxDesktopWidth", {
        set: function (size) {
            this.width = this.ngxDesktopService.getPxValue(size, 'auto');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopWidthDirective.prototype, "style", {
        get: function () {
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopWidthDirective.ɵfac = function NgxDesktopWidthDirective_Factory(t) { return new (t || NgxDesktopWidthDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopWidthDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopWidthDirective, selectors: [["", "ngxDesktopWidth", ""]], hostVars: 2, hostBindings: function NgxDesktopWidthDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.style);
        } }, inputs: { ngxDesktopWidth: "ngxDesktopWidth" } });
    return NgxDesktopWidthDirective;
}());
export { NgxDesktopWidthDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopWidthDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopWidth]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopWidth: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.width']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atd2lkdGguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC13aWR0aC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFHNUQ7SUFlRSxrQ0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBVjVELHNCQUNJLHFEQUFlO2FBRG5CLFVBQ29CLElBQXFCO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSwyQ0FBSzthQURUO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO29HQVZVLHdCQUF3QjtpRUFBeEIsd0JBQXdCOzs7bUNBTnJDO0NBb0JDLEFBakJELElBaUJDO1NBZFksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FIcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7O2tCQUdFLEtBQUs7O2tCQUtMLFdBQVc7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wV2lkdGhdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcFdpZHRoRGlyZWN0aXZlIHtcclxuICBwcml2YXRlIHdpZHRoOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgbmd4RGVza3RvcFdpZHRoKHNpemU6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShzaXplLCAnYXV0bycpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXHJcbiAgZ2V0IHN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge31cclxuXHJcbn1cclxuIl19
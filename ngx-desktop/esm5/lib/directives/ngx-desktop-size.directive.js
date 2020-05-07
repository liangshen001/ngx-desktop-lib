import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopSizeDirective = /** @class */ (function () {
    function NgxDesktopSizeDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopSizeDirective.prototype, "ngxDesktopSize", {
        set: function (size) {
            this.size = this.ngxDesktopService.getPxValue(size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopSizeDirective.prototype, "style", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopSizeDirective.ɵfac = function NgxDesktopSizeDirective_Factory(t) { return new (t || NgxDesktopSizeDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopSizeDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopSizeDirective, selectors: [["", "ngxDesktopSize", ""]], hostVars: 2, hostBindings: function NgxDesktopSizeDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("font-size", ctx.style);
        } }, inputs: { ngxDesktopSize: "ngxDesktopSize" } });
    return NgxDesktopSizeDirective;
}());
export { NgxDesktopSizeDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRzVEO0lBZUUsaUNBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQVY1RCxzQkFDSSxtREFBYzthQURsQixVQUNtQixJQUFxQjtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSwwQ0FBSzthQURUO1lBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7OztPQUFBO2tHQVZVLHVCQUF1QjtnRUFBdkIsdUJBQXVCOzs7a0NBTnBDO0NBb0JDLEFBakJELElBaUJDO1NBZFksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7O2tCQUdFLEtBQUs7O2tCQUtMLFdBQVc7bUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BTaXplXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BTaXplRGlyZWN0aXZlIHtcclxuICBwcml2YXRlIHNpemU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wU2l6ZShzaXplOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2l6ZSA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShzaXplKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZm9udC1zaXplJylcclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcbiJdfQ==
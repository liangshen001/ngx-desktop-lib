import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
var NgxDesktopLayoutDirective = /** @class */ (function () {
    function NgxDesktopLayoutDirective() {
    }
    Object.defineProperty(NgxDesktopLayoutDirective.prototype, "ngxDesktopLayout", {
        set: function (layout) {
            if (layout === 'horizontal') {
                this.value = 'row';
            }
            else {
                this.value = 'column';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopLayoutDirective.prototype, "style", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopLayoutDirective.ɵfac = function NgxDesktopLayoutDirective_Factory(t) { return new (t || NgxDesktopLayoutDirective)(); };
    NgxDesktopLayoutDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopLayoutDirective, selectors: [["", "ngxDesktopLayout", ""]], hostVars: 2, hostBindings: function NgxDesktopLayoutDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("flex-direction", ctx.style);
        } }, inputs: { ngxDesktopLayout: "ngxDesktopLayout" } });
    return NgxDesktopLayoutDirective;
}());
export { NgxDesktopLayoutDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopLayoutDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopLayout]'
            }]
    }], function () { return []; }, { ngxDesktopLayout: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.flexDirection']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtbGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbGF5b3V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRzVEO0lBcUJFO0lBQWUsQ0FBQztJQWRoQixzQkFDSSx1REFBZ0I7YUFEcEIsVUFDcUIsTUFBbUI7WUFDdEMsSUFBSSxNQUFNLEtBQUssWUFBWSxFQUFFO2dCQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksNENBQUs7YUFEVDtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtzR0FoQlUseUJBQXlCO2tFQUF6Qix5QkFBeUI7OztvQ0FOdEM7Q0EwQkMsQUF2QkQsSUF1QkM7U0FwQlkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7O2tCQUtFLEtBQUs7O2tCQVNMLFdBQVc7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMYXlvdXRUeXBlc30gZnJvbSBcIi4uL3R5cGVzL3R5cGVzXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wTGF5b3V0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BMYXlvdXREaXJlY3RpdmUge1xyXG5cclxuICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5neERlc2t0b3BMYXlvdXQobGF5b3V0OiBMYXlvdXRUeXBlcykge1xyXG4gICAgaWYgKGxheW91dCA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAncm93JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnY29sdW1uJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZmxleERpcmVjdGlvbicpXHJcbiAgZ2V0IHN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG59XHJcbiJdfQ==
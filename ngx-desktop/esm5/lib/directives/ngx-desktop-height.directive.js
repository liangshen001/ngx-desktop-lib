import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopHeightDirective = /** @class */ (function () {
    function NgxDesktopHeightDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopHeightDirective.prototype, "ngxDesktopHeight", {
        set: function (height) {
            this.height = this.ngxDesktopService.getPxValue(height, 'auto');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopHeightDirective.prototype, "style", {
        get: function () {
            return this.height;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopHeightDirective.ɵfac = function NgxDesktopHeightDirective_Factory(t) { return new (t || NgxDesktopHeightDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopHeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopHeightDirective, selectors: [["", "ngxDesktopHeight", ""]], hostVars: 2, hostBindings: function NgxDesktopHeightDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("height", ctx.style);
        } }, inputs: { ngxDesktopHeight: "ngxDesktopHeight" } });
    return NgxDesktopHeightDirective;
}());
export { NgxDesktopHeightDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopHeight]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopHeight: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.height']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUc1RDtJQWdCRSxtQ0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBVjVELHNCQUNJLHVEQUFnQjthQURwQixVQUNxQixNQUF1QjtZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksNENBQUs7YUFEVDtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtzR0FYVSx5QkFBeUI7a0VBQXpCLHlCQUF5Qjs7O29DQU50QztDQXFCQyxBQWxCRCxJQWtCQztTQWZZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBSHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztrQkFJRSxLQUFLOztrQkFLTCxXQUFXO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcEhlaWdodF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wSGVpZ2h0RGlyZWN0aXZlIHtcclxuXHJcbiAgcHJpdmF0ZSBoZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wSGVpZ2h0KGhlaWdodDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShoZWlnaHQsICdhdXRvJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXHJcbiAgZ2V0IHN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcbiJdfQ==
import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopHeightDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set ngxDesktopHeight(height) {
        this.height = this.ngxDesktopService.getPxValue(height, 'auto');
    }
    get style() {
        return this.height;
    }
}
NgxDesktopHeightDirective.ɵfac = function NgxDesktopHeightDirective_Factory(t) { return new (t || NgxDesktopHeightDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopHeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopHeightDirective, selectors: [["", "ngxDesktopHeight", ""]], hostVars: 2, hostBindings: function NgxDesktopHeightDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("height", ctx.style);
    } }, inputs: { ngxDesktopHeight: "ngxDesktopHeight" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQU01RCxNQUFNLE9BQU8seUJBQXlCO0lBYXBDLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQVY1RCxJQUNJLGdCQUFnQixDQUFDLE1BQXVCO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOztrR0FYVSx5QkFBeUI7OERBQXpCLHlCQUF5Qjs7O2tEQUF6Qix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7O2tCQUlFLEtBQUs7O2tCQUtMLFdBQVc7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wSGVpZ2h0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BIZWlnaHREaXJlY3RpdmUge1xyXG5cclxuICBwcml2YXRlIGhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5neERlc2t0b3BIZWlnaHQoaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKGhlaWdodCwgJ2F1dG8nKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge31cclxuXHJcbn1cclxuIl19
import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopBoldDirective = /** @class */ (function () {
    function NgxDesktopBoldDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopBoldDirective.prototype, "ngxDesktopBold", {
        set: function (bold) {
            if (typeof bold === 'boolean') {
                this.value = bold ? 'bold' : 'normal';
            }
            else if (typeof bold === 'number') {
                this.value = "" + bold;
            }
            else {
                this.value = bold;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopBoldDirective.prototype, "style", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopBoldDirective.ɵfac = function NgxDesktopBoldDirective_Factory(t) { return new (t || NgxDesktopBoldDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopBoldDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopBoldDirective, selectors: [["", "ngxDesktopBold", ""]], hostVars: 2, hostBindings: function NgxDesktopBoldDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("font-weight", ctx.style);
        } }, inputs: { ngxDesktopBold: "ngxDesktopBold" } });
    return NgxDesktopBoldDirective;
}());
export { NgxDesktopBoldDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopBoldDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopBold]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopBold: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.font-weight']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtYm9sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLWJvbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRzVEO0lBc0JFLGlDQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFoQjVELHNCQUNJLG1EQUFjO2FBRGxCLFVBQ21CLElBQStCO1lBQ2hELElBQUksT0FBTyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7YUFDdkM7aUJBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBRyxJQUFNLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLDBDQUFLO2FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7a0dBakJVLHVCQUF1QjtnRUFBdkIsdUJBQXVCOzs7a0NBTnBDO0NBMkJDLEFBeEJELElBd0JDO1NBckJZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBSG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOztrQkFJRSxLQUFLOztrQkFXTCxXQUFXO21CQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wQm9sZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wQm9sZERpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wQm9sZChib2xkOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuKSB7XHJcbiAgICBpZiAodHlwZW9mIGJvbGQgPT09ICdib29sZWFuJykge1xyXG4gICAgICB0aGlzLnZhbHVlID0gYm9sZCA/ICdib2xkJyA6ICdub3JtYWwnO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9sZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGAke2JvbGR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mb250LXdlaWdodCcpXHJcbiAgZ2V0IHN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge31cclxuXHJcbn1cclxuIl19
import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopPaddingDirective = /** @class */ (function () {
    function NgxDesktopPaddingDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this._paddingBottom = '0';
        this._paddingLeft = '0';
        this._paddingRight = '0';
        this._paddingTop = '0';
    }
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "ngxDesktopPadding", {
        set: function (height) {
            this.value = this.ngxDesktopService.getPxValue(height, '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingBottom", {
        set: function (paddingBottom) {
            this._paddingBottom = this.ngxDesktopService.getPxValue(paddingBottom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingLeft", {
        set: function (paddingLeft) {
            this._paddingLeft = this.ngxDesktopService.getPxValue(paddingLeft);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingRight", {
        set: function (paddingRight) {
            this._paddingRight = this.ngxDesktopService.getPxValue(paddingRight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingTop", {
        set: function (paddingTop) {
            this._paddingTop = this.ngxDesktopService.getPxValue(paddingTop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "style", {
        get: function () {
            if (this.value) {
                return this.value;
            }
            return this._paddingTop + " " + this._paddingRight + " " + this._paddingBottom + " " + this._paddingLeft;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopPaddingDirective.ɵfac = function NgxDesktopPaddingDirective_Factory(t) { return new (t || NgxDesktopPaddingDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopPaddingDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopPaddingDirective, selectors: [["", "ngxDesktopPadding", ""]], hostVars: 2, hostBindings: function NgxDesktopPaddingDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("padding", ctx.style);
        } }, inputs: { ngxDesktopPadding: "ngxDesktopPadding", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop" } });
    return NgxDesktopPaddingDirective;
}());
export { NgxDesktopPaddingDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopPaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopPadding]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopPadding: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.padding']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtcGFkZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXBhZGRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRzVEO0lBdUNFLG9DQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTdCaEQsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFLN0IsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFLM0Isa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFLNUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7SUFjeUIsQ0FBQztJQWpDNUQsc0JBQ0kseURBQWlCO2FBRHJCLFVBQ3NCLE1BQXVCO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxxREFBYTthQURqQixVQUNrQixhQUE4QjtZQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekUsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxtREFBVzthQURmLFVBQ2dCLFdBQTRCO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLG9EQUFZO2FBRGhCLFVBQ2lCLFlBQTZCO1lBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RSxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGtEQUFVO2FBRGQsVUFDZSxVQUEyQjtZQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw2Q0FBSzthQURUO1lBRUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQjtZQUNELE9BQVUsSUFBSSxDQUFDLFdBQVcsU0FBSSxJQUFJLENBQUMsYUFBYSxTQUFJLElBQUksQ0FBQyxjQUFjLFNBQUksSUFBSSxDQUFDLFlBQWMsQ0FBQztRQUNqRyxDQUFDOzs7T0FBQTt3R0FsQ1UsMEJBQTBCO21FQUExQiwwQkFBMEI7OztxQ0FOdkM7Q0E0Q0MsQUF6Q0QsSUF5Q0M7U0F0Q1ksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FIdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7O2tCQUlFLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUtMLFdBQVc7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wUGFkZGluZ10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wUGFkZGluZ0RpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wUGFkZGluZyhoZWlnaHQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShoZWlnaHQsICcnKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGFkZGluZ0JvdHRvbTogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBhZGRpbmdCb3R0b20ocGFkZGluZ0JvdHRvbTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wYWRkaW5nQm90dG9tID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKHBhZGRpbmdCb3R0b20pO1xyXG4gIH1cclxuICBwcml2YXRlIF9wYWRkaW5nTGVmdDogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBhZGRpbmdMZWZ0KHBhZGRpbmdMZWZ0OiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3BhZGRpbmdMZWZ0ID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKHBhZGRpbmdMZWZ0KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGFkZGluZ1JpZ2h0OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KClcclxuICBzZXQgcGFkZGluZ1JpZ2h0KHBhZGRpbmdSaWdodDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldFB4VmFsdWUocGFkZGluZ1JpZ2h0KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGFkZGluZ1RvcDogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBhZGRpbmdUb3AocGFkZGluZ1RvcDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wYWRkaW5nVG9wID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKHBhZGRpbmdUb3ApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nJylcclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBgJHt0aGlzLl9wYWRkaW5nVG9wfSAke3RoaXMuX3BhZGRpbmdSaWdodH0gJHt0aGlzLl9wYWRkaW5nQm90dG9tfSAke3RoaXMuX3BhZGRpbmdMZWZ0fWA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge31cclxuXHJcbn1cclxuIl19
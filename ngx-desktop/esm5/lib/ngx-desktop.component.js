import { Component, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
var NgxDesktopComponent = /** @class */ (function () {
    function NgxDesktopComponent() {
    }
    NgxDesktopComponent.prototype.ngOnInit = function () {
    };
    NgxDesktopComponent.prototype.windowBlurListener = function () {
        this.blur = true;
    };
    NgxDesktopComponent.prototype.windowFocusListener = function () {
        this.blur = false;
    };
    NgxDesktopComponent.prototype.registerOnChange = function (fn) {
    };
    NgxDesktopComponent.prototype.registerOnTouched = function (fn) {
    };
    NgxDesktopComponent.prototype.setDisabledState = function (isDisabled) {
    };
    NgxDesktopComponent.prototype.writeValue = function (obj) {
    };
    NgxDesktopComponent.ɵfac = function NgxDesktopComponent_Factory(t) { return new (t || NgxDesktopComponent)(); };
    NgxDesktopComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxDesktopComponent, selectors: [["lib-ngx-desktop"]], hostBindings: function NgxDesktopComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function NgxDesktopComponent_blur_HostBindingHandler() { return ctx.windowBlurListener(); }, false, i0.ɵɵresolveWindow)("focus", function NgxDesktopComponent_focus_HostBindingHandler() { return ctx.windowFocusListener(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 0, vars: 0, template: function NgxDesktopComponent_Template(rf, ctx) { }, styles: [""] });
    return NgxDesktopComponent;
}());
export { NgxDesktopComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ngx-desktop',
                template: "\n",
                styles: ["\n  "]
            }]
    }], function () { return []; }, { windowBlurListener: [{
            type: HostListener,
            args: ['window:blur']
        }], windowFocusListener: [{
            type: HostListener,
            args: ['window:focus']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvbmd4LWRlc2t0b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDOztBQUc5RDtJQVdFO0lBQ0EsQ0FBQztJQUVELHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBR0QsZ0RBQWtCLEdBRGxCO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUdELGlEQUFtQixHQURuQjtRQUVFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBTztJQUN4QixDQUFDO0lBRUQsK0NBQWlCLEdBQWpCLFVBQWtCLEVBQU87SUFDekIsQ0FBQztJQUVELDhDQUFnQixHQUFoQixVQUFpQixVQUFtQjtJQUNwQyxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEdBQVE7SUFDbkIsQ0FBQzswRkE5QlUsbUJBQW1COzREQUFuQixtQkFBbUI7Ozs4QkFWaEM7Q0F5Q0MsQUF0Q0QsSUFzQ0M7U0EvQlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FQL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxJQUNYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLE1BQ1IsQ0FBQzthQUNIOztrQkFXRSxZQUFZO21CQUFDLGFBQWE7O2tCQUsxQixZQUFZO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5neC1kZXNrdG9wJyxcclxuICB0ZW1wbGF0ZTogYFxyXG5gLFxyXG4gIHN0eWxlczogW2BcclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBibHVyOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJsdXInKVxyXG4gIHdpbmRvd0JsdXJMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMuYmx1ciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Zm9jdXMnKVxyXG4gIHdpbmRvd0ZvY3VzTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLmJsdXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgfVxyXG59XHJcbiJdfQ==
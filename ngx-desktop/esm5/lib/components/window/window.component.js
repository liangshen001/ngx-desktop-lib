import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-window-blur.directive";
import * as i3 from "../view/view.component";
import * as i4 from "../../pipes/style-value.pipe";
var _c0 = [[["ngx-desktop-title-bar"]], "*"];
var _c1 = ["ngx-desktop-title-bar", "*"];
var WindowComponent = /** @class */ (function () {
    function WindowComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.verticalAlignment = 'top';
        this.horizontalAlignment = 'left';
        this.padding = '24px 20px 20px';
        this.layout = 'horizontal';
    }
    Object.defineProperty(WindowComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    WindowComponent.prototype.ngOnInit = function () {
    };
    WindowComponent.ɵfac = function WindowComponent_Factory(t) { return new (t || WindowComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    WindowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WindowComponent, selectors: [["ngx-desktop-window"]], inputs: { os: "os", label: "label", disabled: "disabled", background: "background", color: "color", height: "height", width: "width", verticalAlignment: "verticalAlignment", horizontalAlignment: "horizontalAlignment", padding: "padding", paddingTop: "paddingTop", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingBottom: "paddingBottom", layout: "layout" }, ngContentSelectors: _c1, decls: 8, vars: 35, consts: [[1, "window-container", 3, "ngxDesktopWindowBlur"], [1, "window-content-container", 3, "os", "layout", "padding", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "horizontalAlignment", "verticalAlignment", "height", "width"]], template: function WindowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("ngxDesktopWindowBlur", function WindowComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
            i0.ɵɵpipe(1, "styleValue");
            i0.ɵɵpipe(2, "styleValue");
            i0.ɵɵpipe(3, "styleValue");
            i0.ɵɵpipe(4, "styleValue");
            i0.ɵɵprojection(5);
            i0.ɵɵelementStart(6, "ngx-desktop-view", 1);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.os);
            i0.ɵɵstyleProp("background", i0.ɵɵpipeBind2(1, 23, ctx.background, ctx.os === "mac" ? "#ECECEC" : "#FFFFFF"), i0.ɵɵdefaultStyleSanitizer)("height", i0.ɵɵpipeBind2(2, 26, ctx.height, "100vh"))("width", i0.ɵɵpipeBind2(3, 29, ctx.width, "100vw"))("border-color", ctx.os === "windows" ? ctx.windowBlur ? "#AAAAAA" : i0.ɵɵpipeBind2(4, 32, ctx.color, "#0063AE") : "");
            i0.ɵɵclassProp("windowBlur", ctx.windowBlur);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("os", ctx.os)("layout", ctx.layout)("padding", ctx.padding)("paddingTop", ctx.paddingTop)("paddingLeft", ctx.paddingLeft)("paddingBottom", ctx.paddingBottom)("paddingRight", ctx.paddingRight)("horizontalAlignment", ctx.horizontalAlignment)("verticalAlignment", ctx.verticalAlignment)("height", "100%")("width", "100%");
        } }, directives: [i2.NgxDesktopWindowBlurDirective, i3.ViewComponent], pipes: [i4.StyleValuePipe], styles: [".window-container[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;display:flex;flex-direction:column;box-sizing:border-box}.mac.window-container[_ngcontent-%COMP%]{border-radius:4px;box-shadow:rgba(0,0,0,.26) 0 0 1px,rgba(0,0,0,.16) 0 0 5px,rgba(0,0,0,.06) 0 8px 10px,rgba(0,0,0,.48) 0 25px 65px}.mac.windowBlur.window-container[_ngcontent-%COMP%]{box-shadow:rgba(0,0,0,.31) 0 0 1px,rgba(0,0,0,.18) 0 0 5px,rgba(0,0,0,.3) 0 8px 50px}.window-container[_ngcontent-%COMP%]   .window-content-container[_ngcontent-%COMP%]{flex:1 1 0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.windows.window-container[_ngcontent-%COMP%]{border-width:1px;border-style:solid;box-shadow:rgba(0,0,0,.2) 0 2px 11px 3px}"] });
    return WindowComponent;
}());
export { WindowComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WindowComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-window',
                templateUrl: './window.component.html',
                styleUrls: ['./window.component.css']
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { os: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], background: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], padding: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], layout: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvd2luZG93L3dpbmRvdy5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy93aW5kb3cvd2luZG93LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVd2QjtJQThDRSx5QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFuQnhELHNCQUFpQixHQUEyQixLQUFLLENBQUM7UUFFbEQsd0JBQW1CLEdBQTZCLE1BQU0sQ0FBQztRQUV2RCxZQUFPLEdBQW9CLGdCQUFnQixDQUFDO1FBVTVDLFdBQU0sR0FBZ0IsWUFBWSxDQUFDO0lBTW5DLENBQUM7SUF4Q0Qsc0JBQ0ksK0JBQUU7YUFHTjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQU5ELFVBQ08sRUFBVztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQXVDRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztrRkE3Q1UsZUFBZTt3REFBZixlQUFlOztZQ3pCNUIsOEJBUUU7WUFORyx3SkFBNEM7Ozs7O1lBTS9DLGtCQUEyQztZQUN6QywyQ0FZRTtZQUFBLHFCQUFZO1lBQ2QsaUJBQW1CO1lBQ3ZCLGlCQUFNOztZQXRCRCxxQkFBWTtZQUdaLHlJQUFtRixzREFBQSxvREFBQSxzSEFBQTtZQURuRiw0Q0FBK0I7WUFPZCxlQUFTO1lBQVQsMkJBQVMsc0JBQUEsd0JBQUEsOEJBQUEsZ0NBQUEsb0NBQUEsa0NBQUEsZ0RBQUEsNENBQUEsa0JBQUEsaUJBQUE7OzBCRFYvQjtDQXVFQyxBQW5ERCxJQW1EQztTQTlDWSxlQUFlO2tEQUFmLGVBQWU7Y0FMM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFHRSxLQUFLOztrQkFPTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3ItYWJzdHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3R5bGVWYWx1ZVR5cGVzfSBmcm9tIFwiLi4vLi4vcGlwZXMvc3R5bGUtdmFsdWUucGlwZVwiO1xyXG5pbXBvcnQge1ZlcnRpY2FsQWxpZ25tZW50VHlwZXN9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXZlcnRpY2FsLWFsaWdubWVudC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtIb3Jpem9udGFsQWxpZ25tZW50VHlwZXN9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLWhvcml6b250YWwtYWxpZ25tZW50LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge0xheW91dFR5cGVzLCBPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC13aW5kb3cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93aW5kb3cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3dpbmRvdy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpbmRvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfb3M6IE9zVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZXQgb3Mob3M6IE9zVHlwZXMpIHtcclxuICAgIHRoaXMuX29zID0gb3M7XHJcbiAgfVxyXG4gIGdldCBvcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldE9zKHRoaXMuX29zKTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0OiBTdHlsZVZhbHVlVHlwZXM7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogU3R5bGVWYWx1ZVR5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmVydGljYWxBbGlnbm1lbnQ6IFZlcnRpY2FsQWxpZ25tZW50VHlwZXMgPSAndG9wJztcclxuICBASW5wdXQoKVxyXG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnRUeXBlcyA9ICdsZWZ0JztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmc6IG51bWJlciB8IHN0cmluZyA9ICcyNHB4IDIwcHggMjBweCc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nVG9wOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nTGVmdDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1JpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nQm90dG9tOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBsYXlvdXQ6IExheW91dFR5cGVzID0gJ2hvcml6b250YWwnO1xyXG5cclxuICB3aW5kb3dCbHVyOiBib29sZWFuO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwid2luZG93LWNvbnRhaW5lclwiXHJcbiAgICAgW2NsYXNzXT1cIm9zXCJcclxuICAgICAobmd4RGVza3RvcFdpbmRvd0JsdXIpPVwid2luZG93Qmx1ciA9ICRldmVudFwiXHJcbiAgICAgW2NsYXNzLndpbmRvd0JsdXJdPVwid2luZG93Qmx1clwiXHJcbiAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZCB8IHN0eWxlVmFsdWUgOiBvcyA9PT0gJ21hYycgPyAnI0VDRUNFQycgOiAnI0ZGRkZGRidcIlxyXG4gICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0IHwgc3R5bGVWYWx1ZSA6ICcxMDB2aCdcIlxyXG4gICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IHN0eWxlVmFsdWUgOiAnMTAwdncnXCJcclxuICAgICBbc3R5bGUuYm9yZGVyQ29sb3JdPVwib3MgPT09ICd3aW5kb3dzJyA/ICh3aW5kb3dCbHVyID8gJyNBQUFBQUEnIDogKGNvbG9yIHwgc3R5bGVWYWx1ZTogJyMwMDYzQUUnKSkgOiAnJ1wiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kZXNrdG9wLXRpdGxlLWJhclwiPjwvbmctY29udGVudD5cclxuICAgIDxuZ3gtZGVza3RvcC12aWV3IGNsYXNzPVwid2luZG93LWNvbnRlbnQtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtvc109XCJvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbGF5b3V0XT1cImxheW91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFkZGluZ109XCJwYWRkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtwYWRkaW5nVG9wXT1cInBhZGRpbmdUb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhZGRpbmdMZWZ0XT1cInBhZGRpbmdMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtwYWRkaW5nQm90dG9tXT1cInBhZGRpbmdCb3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhZGRpbmdSaWdodF09XCJwYWRkaW5nUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2hvcml6b250YWxBbGlnbm1lbnRdPVwiaG9yaXpvbnRhbEFsaWdubWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbdmVydGljYWxBbGlnbm1lbnRdPVwidmVydGljYWxBbGlnbm1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2hlaWdodF09XCInMTAwJSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3dpZHRoXT1cIicxMDAlJ1wiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25neC1kZXNrdG9wLXZpZXc+XHJcbjwvZGl2PlxyXG4iXX0=
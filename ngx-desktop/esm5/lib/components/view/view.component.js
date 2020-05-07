import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../pipes/style-value.pipe";
import * as i3 from "../../directives/ngx-desktop-horizontal-alignment.directive";
import * as i4 from "../../directives/ngx-desktop-vertical-alignment.directive";
import * as i5 from "../../directives/ngx-desktop-layout.directive";
var _c0 = ["*"];
var ViewComponent = /** @class */ (function () {
    function ViewComponent(ngxDesktopService, styleValuePipe) {
        this.ngxDesktopService = ngxDesktopService;
        this.styleValuePipe = styleValuePipe;
        this.background = false;
        this.layout = 'horizontal';
    }
    Object.defineProperty(ViewComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    ViewComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ViewComponent.prototype, "styleWidth", {
        get: function () {
            return this.styleValuePipe.transform(this.width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewComponent.prototype, "styleHeight", {
        get: function () {
            return this.styleValuePipe.transform(this.height);
        },
        enumerable: true,
        configurable: true
    });
    ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService), i0.ɵɵdirectiveInject(i2.StyleValuePipe)); };
    ViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["ngx-desktop-view"]], hostVars: 4, hostBindings: function ViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.styleWidth)("height", ctx.styleHeight);
        } }, inputs: { os: "os", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", height: "height", width: "width", margin: "margin", marginTop: "marginTop", marginLeft: "marginLeft", marginRight: "marginRight", marginBottom: "marginBottom", padding: "padding", paddingTop: "paddingTop", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingBottom: "paddingBottom", background: "background", layout: "layout" }, ngContentSelectors: _c0, decls: 13, vars: 48, consts: [[1, "view-wrap", 3, "ngxDesktopHorizontalAlignment", "ngxDesktopVerticalAlignment", "ngxDesktopLayout"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵpipe(1, "styleValue");
            i0.ɵɵpipe(2, "styleValue");
            i0.ɵɵpipe(3, "styleValue");
            i0.ɵɵpipe(4, "styleValue");
            i0.ɵɵpipe(5, "styleValue");
            i0.ɵɵpipe(6, "styleValue");
            i0.ɵɵpipe(7, "styleValue");
            i0.ɵɵpipe(8, "styleValue");
            i0.ɵɵpipe(9, "styleValue");
            i0.ɵɵpipe(10, "styleValue");
            i0.ɵɵpipe(11, "styleValue");
            i0.ɵɵprojection(12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("margin", i0.ɵɵpipeBind1(1, 25, ctx.margin))("margin-bottom", i0.ɵɵpipeBind1(2, 27, ctx.marginBottom))("margin-right", i0.ɵɵpipeBind1(3, 29, ctx.marginRight))("margin-top", i0.ɵɵpipeBind1(4, 31, ctx.marginTop))("margin-left", i0.ɵɵpipeBind1(5, 33, ctx.marginLeft))("padding", i0.ɵɵpipeBind1(6, 35, ctx.padding))("padding-top", i0.ɵɵpipeBind1(7, 37, ctx.paddingTop))("padding-bottom", i0.ɵɵpipeBind1(8, 39, ctx.paddingBottom))("padding-left", i0.ɵɵpipeBind1(9, 41, ctx.paddingLeft))("padding-right", i0.ɵɵpipeBind1(10, 43, ctx.paddingRight))("background", i0.ɵɵpipeBind2(11, 45, ctx.background, ctx.os === "windows" && "#0063AE"), i0.ɵɵdefaultStyleSanitizer);
            i0.ɵɵproperty("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment)("ngxDesktopVerticalAlignment", ctx.verticalAlignment)("ngxDesktopLayout", ctx.layout);
        } }, directives: [i3.NgxDesktopHorizontalAlignmentDirective, i4.NgxDesktopVerticalAlignmentDirective, i5.NgxDesktopLayoutDirective], pipes: [i2.StyleValuePipe], styles: [".view-wrap[_ngcontent-%COMP%]{display:flex;position:relative;box-sizing:border-box;width:100%;height:100%}"] });
    return ViewComponent;
}());
export { ViewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-view',
                templateUrl: './view.component.html',
                styleUrls: ['./view.component.css']
            }]
    }], function () { return [{ type: i1.NgxDesktopService }, { type: i2.StyleValuePipe }]; }, { os: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], margin: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginBottom: [{
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
        }], background: [{
            type: Input
        }], layout: [{
            type: Input
        }], styleWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], styleHeight: [{
            type: HostBinding,
            args: ['style.height']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3ZpZXcvdmlldy5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFRyxXQUFXLEVBRXZCLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFTdkI7SUFnREUsdUJBQW9CLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxsRCxlQUFVLEdBQXFCLEtBQUssQ0FBQztRQUVyQyxXQUFNLEdBQWdCLFlBQVksQ0FBQztJQUluQyxDQUFDO0lBMUNELHNCQUNJLDZCQUFFO2FBR047WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELENBQUM7YUFORCxVQUNPLEVBQVc7WUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUF5Q0QsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQkFDSSxxQ0FBVTthQURkO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxzQ0FBVzthQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7OEVBMURVLGFBQWE7c0RBQWIsYUFBYTs7OztZQ3ZCMUIsOEJBZUU7Ozs7Ozs7Ozs7OztZQUFBLG1CQUFZO1lBQ2QsaUJBQU07O1lBYkQsMkRBQW9DLDBEQUFBLHdEQUFBLG9EQUFBLHNEQUFBLCtDQUFBLHNEQUFBLDREQUFBLHdEQUFBLDJEQUFBLHFIQUFBO1lBRnBDLHVFQUFxRCxzREFBQSxnQ0FBQTs7d0JERDFEO0NBa0ZDLEFBaEVELElBZ0VDO1NBM0RZLGFBQWE7a0RBQWIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7O2tCQUlFLEtBQUs7O2tCQU9MLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQVVMLFdBQVc7bUJBQUMsYUFBYTs7a0JBS3pCLFdBQVc7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLCBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMYXlvdXRUeXBlcywgT3NUeXBlc30gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3R5bGVWYWx1ZVBpcGV9IGZyb20gXCIuLi8uLi9waXBlcy9zdHlsZS12YWx1ZS5waXBlXCI7XHJcbmltcG9ydCB7SG9yaXpvbnRhbEFsaWdubWVudFR5cGVzfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1ob3Jpem9udGFsLWFsaWdubWVudC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtWZXJ0aWNhbEFsaWdubWVudFR5cGVzfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC12ZXJ0aWNhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi92aWV3LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgX29zOiBPc1R5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG9zKG9zOiBPc1R5cGVzKSB7XHJcbiAgICB0aGlzLl9vcyA9IG9zO1xyXG4gIH1cclxuICBnZXQgb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRPcyh0aGlzLl9vcyk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudFR5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmVydGljYWxBbGlnbm1lbnQ6IFZlcnRpY2FsQWxpZ25tZW50VHlwZXM7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpblRvcDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luTGVmdDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luUmlnaHQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbkJvdHRvbTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1RvcDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0xlZnQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdSaWdodDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0JvdHRvbTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgYmFja2dyb3VuZDogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgbGF5b3V0OiBMYXlvdXRUeXBlcyA9ICdob3Jpem9udGFsJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdHlsZVZhbHVlUGlwZTogU3R5bGVWYWx1ZVBpcGUpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXHJcbiAgZ2V0IHN0eWxlV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHlsZVZhbHVlUGlwZS50cmFuc2Zvcm0odGhpcy53aWR0aCk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXHJcbiAgZ2V0IHN0eWxlSGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3R5bGVWYWx1ZVBpcGUudHJhbnNmb3JtKHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInZpZXctd3JhcFwiXHJcbiAgICAgW25neERlc2t0b3BIb3Jpem9udGFsQWxpZ25tZW50XT1cImhvcml6b250YWxBbGlnbm1lbnRcIlxyXG4gICAgIFtuZ3hEZXNrdG9wVmVydGljYWxBbGlnbm1lbnRdPVwidmVydGljYWxBbGlnbm1lbnRcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5dPVwibWFyZ2luIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpbkJvdHRvbV09XCJtYXJnaW5Cb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luUmlnaHRdPVwibWFyZ2luUmlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luVG9wXT1cIm1hcmdpblRvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5MZWZ0XT1cIm1hcmdpbkxlZnQgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUucGFkZGluZ109XCJwYWRkaW5nIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLnBhZGRpbmdUb3BdPVwicGFkZGluZ1RvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5wYWRkaW5nQm90dG9tXT1cInBhZGRpbmdCb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUucGFkZGluZ0xlZnRdPVwicGFkZGluZ0xlZnQgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUucGFkZGluZ1JpZ2h0XT1cInBhZGRpbmdSaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtuZ3hEZXNrdG9wTGF5b3V0XT1cImxheW91dFwiXHJcbiAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZCB8IHN0eWxlVmFsdWUgOiAob3MgPT09ICd3aW5kb3dzJyAmJiAnIzAwNjNBRScpXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19
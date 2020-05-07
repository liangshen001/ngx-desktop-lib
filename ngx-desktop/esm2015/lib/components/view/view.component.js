import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../pipes/style-value.pipe";
import * as i3 from "../../directives/ngx-desktop-horizontal-alignment.directive";
import * as i4 from "../../directives/ngx-desktop-vertical-alignment.directive";
import * as i5 from "../../directives/ngx-desktop-layout.directive";
const _c0 = ["*"];
export class ViewComponent {
    constructor(ngxDesktopService, styleValuePipe) {
        this.ngxDesktopService = ngxDesktopService;
        this.styleValuePipe = styleValuePipe;
        this.background = false;
        this.layout = 'horizontal';
    }
    set os(os) {
        this._os = os;
    }
    get os() {
        return this.ngxDesktopService.getOs(this._os);
    }
    ngOnInit() {
    }
    get styleWidth() {
        return this.styleValuePipe.transform(this.width);
    }
    get styleHeight() {
        return this.styleValuePipe.transform(this.height);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3ZpZXcvdmlldy5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFRyxXQUFXLEVBRXZCLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFjdkIsTUFBTSxPQUFPLGFBQWE7SUEyQ3hCLFlBQW9CLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxsRCxlQUFVLEdBQXFCLEtBQUssQ0FBQztRQUVyQyxXQUFNLEdBQWdCLFlBQVksQ0FBQztJQUluQyxDQUFDO0lBMUNELElBQ0ksRUFBRSxDQUFDLEVBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXNDRCxRQUFRO0lBQ1IsQ0FBQztJQUVELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDOzswRUExRFUsYUFBYTtrREFBYixhQUFhOzs7O1FDdkIxQiw4QkFlRTs7Ozs7Ozs7Ozs7O1FBQUEsbUJBQVk7UUFDZCxpQkFBTTs7UUFiRCwyREFBb0MsMERBQUEsd0RBQUEsb0RBQUEsc0RBQUEsK0NBQUEsc0RBQUEsNERBQUEsd0RBQUEsMkRBQUEscUhBQUE7UUFGcEMsdUVBQXFELHNEQUFBLGdDQUFBOztrRERzQjdDLGFBQWE7Y0FMekIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ3BDOztrQkFJRSxLQUFLOztrQkFPTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFVTCxXQUFXO21CQUFDLGFBQWE7O2tCQUt6QixXQUFXO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZiwgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3ItYWJzdHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TGF5b3V0VHlwZXMsIE9zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5pbXBvcnQge1N0eWxlVmFsdWVQaXBlfSBmcm9tIFwiLi4vLi4vcGlwZXMvc3R5bGUtdmFsdWUucGlwZVwiO1xyXG5pbXBvcnQge0hvcml6b250YWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaG9yaXpvbnRhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7VmVydGljYWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC12aWV3JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdmlldy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIF9vczogT3NUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNldCBvcyhvczogT3NUeXBlcykge1xyXG4gICAgdGhpcy5fb3MgPSBvcztcclxuICB9XHJcbiAgZ2V0IG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0T3ModGhpcy5fb3MpO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnRUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHZlcnRpY2FsQWxpZ25tZW50OiBWZXJ0aWNhbEFsaWdubWVudFR5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5Ub3A6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbkxlZnQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpblJpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5Cb3R0b206IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmc6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdUb3A6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdMZWZ0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nUmlnaHQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdCb3R0b206IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGxheW91dDogTGF5b3V0VHlwZXMgPSAnaG9yaXpvbnRhbCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgc3R5bGVWYWx1ZVBpcGU6IFN0eWxlVmFsdWVQaXBlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxyXG4gIGdldCBzdHlsZVdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3R5bGVWYWx1ZVBpcGUudHJhbnNmb3JtKHRoaXMud2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxyXG4gIGdldCBzdHlsZUhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0eWxlVmFsdWVQaXBlLnRyYW5zZm9ybSh0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ2aWV3LXdyYXBcIlxyXG4gICAgIFtuZ3hEZXNrdG9wSG9yaXpvbnRhbEFsaWdubWVudF09XCJob3Jpem9udGFsQWxpZ25tZW50XCJcclxuICAgICBbbmd4RGVza3RvcFZlcnRpY2FsQWxpZ25tZW50XT1cInZlcnRpY2FsQWxpZ25tZW50XCJcclxuICAgICBbc3R5bGUubWFyZ2luXT1cIm1hcmdpbiB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpblJpZ2h0XT1cIm1hcmdpblJpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpblRvcF09XCJtYXJnaW5Ub3AgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJtYXJnaW5MZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLnBhZGRpbmddPVwicGFkZGluZyB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5wYWRkaW5nVG9wXT1cInBhZGRpbmdUb3AgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUucGFkZGluZ0JvdHRvbV09XCJwYWRkaW5nQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLnBhZGRpbmdMZWZ0XT1cInBhZGRpbmdMZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLnBhZGRpbmdSaWdodF09XCJwYWRkaW5nUmlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbbmd4RGVza3RvcExheW91dF09XCJsYXlvdXRcIlxyXG4gICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImJhY2tncm91bmQgfCBzdHlsZVZhbHVlIDogKG9zID09PSAnd2luZG93cycgJiYgJyMwMDYzQUUnKVwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==
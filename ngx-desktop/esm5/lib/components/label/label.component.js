import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-vertical-alignment.directive";
import * as i3 from "../../directives/ngx-desktop-horizontal-alignment.directive";
import * as i4 from "../../pipes/style-value.pipe";
var _c0 = ["*"];
var LabelComponent = /** @class */ (function () {
    function LabelComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(LabelComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    LabelComponent.prototype.ngOnInit = function () {
    };
    LabelComponent.ɵfac = function LabelComponent_Factory(t) { return new (t || LabelComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    LabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LabelComponent, selectors: [["ngx-desktop-label"]], inputs: { os: "os", color: "color", height: "height", width: "width", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin" }, ngContentSelectors: _c0, decls: 15, vars: 57, consts: [[1, "label-wrap", 3, "ngxDesktopVerticalAlignment", "ngxDesktopHorizontalAlignment"]], template: function LabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
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
            i0.ɵɵpipe(12, "styleValue");
            i0.ɵɵpipe(13, "styleValue");
            i0.ɵɵprojection(14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.os);
            i0.ɵɵstyleProp("margin", i0.ɵɵpipeBind1(1, 30, ctx.margin))("margin-bottom", i0.ɵɵpipeBind1(2, 32, ctx.marginBottom))("margin-right", i0.ɵɵpipeBind1(3, 34, ctx.marginRight))("margin-top", i0.ɵɵpipeBind1(4, 36, ctx.marginTop))("margin-left", i0.ɵɵpipeBind1(5, 38, ctx.marginLeft))("padding", i0.ɵɵpipeBind1(6, 40, ctx.padding))("padding-top", i0.ɵɵpipeBind1(7, 42, ctx.paddingTop))("padding-bottom", i0.ɵɵpipeBind1(8, 44, ctx.paddingBottom))("padding-left", i0.ɵɵpipeBind1(9, 46, ctx.paddingLeft))("padding-right", i0.ɵɵpipeBind1(10, 48, ctx.paddingRight))("height", i0.ɵɵpipeBind1(11, 50, ctx.height))("width", i0.ɵɵpipeBind1(12, 52, ctx.width))("color", i0.ɵɵpipeBind2(13, 54, ctx.color, "#000000"));
            i0.ɵɵproperty("ngxDesktopVerticalAlignment", ctx.verticalAlignment)("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment);
        } }, directives: [i2.NgxDesktopVerticalAlignmentDirective, i3.NgxDesktopHorizontalAlignmentDirective], pipes: [i4.StyleValuePipe], styles: [".label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.windows.label-wrap[_ngcontent-%COMP%]{font-size:14px;display:flex;line-height:25.96px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif}.mac.label-wrap[_ngcontent-%COMP%]{display:block;font-size:13px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif}"] });
    return LabelComponent;
}());
export { LabelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LabelComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-label',
                templateUrl: './label.component.html',
                styleUrls: ['./label.component.css']
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { os: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], padding: [{
            type: Input
        }], margin: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFnQixLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBSTdFO0lBOENFLHdCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDO0lBeENELHNCQUNJLDhCQUFFO2FBR047WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELENBQUM7YUFORCxVQUNPLEVBQVc7WUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUF1Q0QsaUNBQVEsR0FBUjtJQUNBLENBQUM7Z0ZBN0NVLGNBQWM7dURBQWQsY0FBYzs7WUNUM0IsK0JBaUJFOzs7Ozs7Ozs7Ozs7OztZQUFBLG1CQUFZO1lBQ2QsaUJBQU87O1lBakJELHFCQUFZO1lBR1osMkRBQW9DLDBEQUFBLHdEQUFBLG9EQUFBLHNEQUFBLCtDQUFBLHNEQUFBLDREQUFBLHdEQUFBLDJEQUFBLDhDQUFBLDRDQUFBLHVEQUFBO1lBRnBDLG1FQUFpRCwwREFBQTs7eUJERnZEO0NBdURDLEFBbkRELElBbURDO1NBOUNZLGNBQWM7a0RBQWQsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7O2tCQUdFLEtBQUs7O2tCQU9MLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC1sYWJlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xhYmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sYWJlbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIF9vczogT3NUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNldCBvcyhvczogT3NUeXBlcykge1xyXG4gICAgdGhpcy5fb3MgPSBvcztcclxuICB9XHJcbiAgZ2V0IG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0T3ModGhpcy5fb3MpO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBob3Jpem9udGFsQWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XHJcbiAgQElucHV0KClcclxuICB2ZXJ0aWNhbEFsaWdubWVudDogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5SaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luOiBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJsYWJlbC13cmFwXCJcclxuICAgICAgW2NsYXNzXT1cIm9zXCJcclxuICAgICAgW25neERlc2t0b3BWZXJ0aWNhbEFsaWdubWVudF09XCJ2ZXJ0aWNhbEFsaWdubWVudFwiXHJcbiAgICAgIFtuZ3hEZXNrdG9wSG9yaXpvbnRhbEFsaWdubWVudF09XCJob3Jpem9udGFsQWxpZ25tZW50XCJcclxuICAgICAgW3N0eWxlLm1hcmdpbl09XCJtYXJnaW4gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLm1hcmdpbkJvdHRvbV09XCJtYXJnaW5Cb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLm1hcmdpblJpZ2h0XT1cIm1hcmdpblJpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5Ub3BdPVwibWFyZ2luVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0XT1cIm1hcmdpbkxlZnQgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLnBhZGRpbmddPVwicGFkZGluZyB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUucGFkZGluZ1RvcF09XCJwYWRkaW5nVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nQm90dG9tXT1cInBhZGRpbmdCb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLnBhZGRpbmdMZWZ0XT1cInBhZGRpbmdMZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nUmlnaHRdPVwicGFkZGluZ1JpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUuY29sb3JdPVwiY29sb3IgfCBzdHlsZVZhbHVlIDogJyMwMDAwMDAnXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3NwYW4+XHJcbiJdfQ==
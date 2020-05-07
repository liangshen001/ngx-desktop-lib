import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-vertical-alignment.directive";
import * as i3 from "../../directives/ngx-desktop-horizontal-alignment.directive";
import * as i4 from "../../pipes/style-value.pipe";
const _c0 = ["*"];
export class LabelComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set os(os) {
        this._os = os;
    }
    get os() {
        return this.ngxDesktopService.getOs(this._os);
    }
    ngOnInit() {
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFnQixLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBUzdFLE1BQU0sT0FBTyxjQUFjO0lBeUN6QixZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDO0lBeENELElBQ0ksRUFBRSxDQUFDLEVBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQW9DRCxRQUFRO0lBQ1IsQ0FBQzs7NEVBN0NVLGNBQWM7bURBQWQsY0FBYzs7UUNUM0IsK0JBaUJFOzs7Ozs7Ozs7Ozs7OztRQUFBLG1CQUFZO1FBQ2QsaUJBQU87O1FBakJELHFCQUFZO1FBR1osMkRBQW9DLDBEQUFBLHdEQUFBLG9EQUFBLHNEQUFBLCtDQUFBLHNEQUFBLDREQUFBLHdEQUFBLDJEQUFBLDhDQUFBLDRDQUFBLHVEQUFBO1FBRnBDLG1FQUFpRCwwREFBQTs7a0RETzFDLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOztrQkFHRSxLQUFLOztrQkFPTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGFiZWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfb3M6IE9zVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZXQgb3Mob3M6IE9zVHlwZXMpIHtcclxuICAgIHRoaXMuX29zID0gb3M7XHJcbiAgfVxyXG4gIGdldCBvcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldE9zKHRoaXMuX29zKTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgaG9yaXpvbnRhbEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmVydGljYWxBbGlnbm1lbnQ6ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbkJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpblRvcDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0JvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0xlZnQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdSaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmc6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbjogc3RyaW5nIHwgbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIGNsYXNzPVwibGFiZWwtd3JhcFwiXHJcbiAgICAgIFtjbGFzc109XCJvc1wiXHJcbiAgICAgIFtuZ3hEZXNrdG9wVmVydGljYWxBbGlnbm1lbnRdPVwidmVydGljYWxBbGlnbm1lbnRcIlxyXG4gICAgICBbbmd4RGVza3RvcEhvcml6b250YWxBbGlnbm1lbnRdPVwiaG9yaXpvbnRhbEFsaWdubWVudFwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5dPVwibWFyZ2luIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5SaWdodF09XCJtYXJnaW5SaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUubWFyZ2luVG9wXT1cIm1hcmdpblRvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJtYXJnaW5MZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nXT1cInBhZGRpbmcgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLnBhZGRpbmdUb3BdPVwicGFkZGluZ1RvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUucGFkZGluZ0JvdHRvbV09XCJwYWRkaW5nQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUucGFkZGluZ1JpZ2h0XT1cInBhZGRpbmdSaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGggfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLmNvbG9yXT1cImNvbG9yIHwgc3R5bGVWYWx1ZSA6ICcjMDAwMDAwJ1wiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9zcGFuPlxyXG4iXX0=
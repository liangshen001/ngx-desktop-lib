import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-bold.directive";
import * as i3 from "../../pipes/style-value.pipe";
var _c0 = ["*"];
var TextComponent = /** @class */ (function () {
    function TextComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.size = 13;
        this.color = '#000000';
    }
    Object.defineProperty(TextComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    TextComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextComponent, selectors: [["ngx-desktop-text"]], inputs: { os: "os", size: "size", color: "color", background: "background", textAlign: "textAlign", height: "height", width: "width", bold: "bold", margin: "margin", marginTop: "marginTop", marginLeft: "marginLeft", marginRight: "marginRight", marginBottom: "marginBottom", padding: "padding", paddingTop: "paddingTop", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingBottom: "paddingBottom" }, ngContentSelectors: _c0, decls: 15, vars: 60, consts: [[1, "text-wrap", 3, "ngxDesktopBold"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵstyleProp("margin", i0.ɵɵpipeBind1(1, 33, ctx.margin))("margin-bottom", i0.ɵɵpipeBind1(2, 35, ctx.marginBottom))("margin-right", i0.ɵɵpipeBind1(3, 37, ctx.marginRight))("margin-top", i0.ɵɵpipeBind1(4, 39, ctx.marginTop))("margin-left", i0.ɵɵpipeBind1(5, 41, ctx.marginLeft))("padding", i0.ɵɵpipeBind1(6, 43, ctx.padding))("padding-top", i0.ɵɵpipeBind1(7, 45, ctx.paddingTop))("padding-bottom", i0.ɵɵpipeBind1(8, 47, ctx.paddingBottom))("padding-left", i0.ɵɵpipeBind1(9, 49, ctx.paddingLeft))("padding-right", i0.ɵɵpipeBind1(10, 51, ctx.paddingRight))("font-size", i0.ɵɵpipeBind2(11, 53, ctx.size, "13px"))("height", i0.ɵɵpipeBind1(12, 56, ctx.height))("width", i0.ɵɵpipeBind1(13, 58, ctx.width))("color", ctx.color)("text-align", ctx.textAlign);
            i0.ɵɵproperty("ngxDesktopBold", ctx.bold);
        } }, directives: [i2.NgxDesktopBoldDirective], pipes: [i3.StyleValuePipe], styles: [".text-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.windows.text-wrap[_ngcontent-%COMP%]{line-height:25.96px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:14px;display:flex}.mac.text-wrap[_ngcontent-%COMP%]{display:block;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;color:#fff}"] });
    return TextComponent;
}());
export { TextComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-text',
                templateUrl: './text.component.html',
                styleUrls: ['./text.component.css']
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { os: [{
            type: Input
        }], size: [{
            type: Input
        }], color: [{
            type: Input
        }], background: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], bold: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7Ozs7OztBQU12QjtJQWtERSx1QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFsQ3hELFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBRTNCLFVBQUssR0FBVyxTQUFTLENBQUM7SUFpQzFCLENBQUM7SUEzQ0Qsc0JBQ0ksNkJBQUU7YUFHTjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQU5ELFVBQ08sRUFBVztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQXlDRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQzs4RUFoRFUsYUFBYTtzREFBYixhQUFhOztZQ3BCMUIsK0JBa0JFOzs7Ozs7Ozs7Ozs7OztZQUFBLG1CQUFZO1lBQ2QsaUJBQU87O1lBbEJELHFCQUFZO1lBRVosMkRBQW9DLDBEQUFBLHdEQUFBLG9EQUFBLHNEQUFBLCtDQUFBLHNEQUFBLDREQUFBLHdEQUFBLDJEQUFBLHVEQUFBLDhDQUFBLDRDQUFBLG9CQUFBLDZCQUFBO1lBRHBDLHlDQUF1Qjs7d0JERjdCO0NBcUVDLEFBdERELElBc0RDO1NBakRZLGFBQWE7a0RBQWIsYUFBYTtjQUx6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7O2tCQUlFLEtBQUs7O2tCQU9MLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtdGV4dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RleHQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBfb3M6IE9zVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZXQgb3Mob3M6IE9zVHlwZXMpIHtcclxuICAgIHRoaXMuX29zID0gb3M7XHJcbiAgfVxyXG4gIGdldCBvcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldE9zKHRoaXMuX29zKTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBzaXplOiBzdHJpbmcgfCBudW1iZXIgPSAxMztcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgQElucHV0KClcclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0ZXh0QWxpZ246ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcclxuICBASW5wdXQoKVxyXG4gIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGJvbGQ6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpblRvcDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luTGVmdDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luUmlnaHQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbkJvdHRvbTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1RvcDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0xlZnQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdSaWdodDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0JvdHRvbTogbnVtYmVyIHwgc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJ0ZXh0LXdyYXBcIlxyXG4gICAgICBbY2xhc3NdPVwib3NcIlxyXG4gICAgICBbbmd4RGVza3RvcEJvbGRdPVwiYm9sZFwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5dPVwibWFyZ2luIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5SaWdodF09XCJtYXJnaW5SaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUubWFyZ2luVG9wXT1cIm1hcmdpblRvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJtYXJnaW5MZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nXT1cInBhZGRpbmcgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLnBhZGRpbmdUb3BdPVwicGFkZGluZ1RvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUucGFkZGluZ0JvdHRvbV09XCJwYWRkaW5nQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUucGFkZGluZ1JpZ2h0XT1cInBhZGRpbmdSaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUuZm9udFNpemVdPVwic2l6ZSB8IHN0eWxlVmFsdWU6JzEzcHgnXCJcclxuICAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiXHJcbiAgICAgIFtzdHlsZS50ZXh0QWxpZ25dPVwidGV4dEFsaWduXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L3NwYW4+XHJcblxyXG48IS0tW25neERlc2t0b3BQYWRkaW5nXT1cInBhZGRpbmdcIi0tPlxyXG48IS0tW3BhZGRpbmdUb3BdPVwicGFkZGluZ1RvcFwiLS0+XHJcbjwhLS1bcGFkZGluZ0xlZnRdPVwicGFkZGluZ0xlZnRcIi0tPlxyXG48IS0tW3BhZGRpbmdSaWdodF09XCJwYWRkaW5nUmlnaHRcIi0tPlxyXG48IS0tW3BhZGRpbmdCb3R0b21dPVwicGFkZGluZ0JvdHRvbVwiLS0+XHJcbiJdfQ==
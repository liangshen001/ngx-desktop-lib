import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-bold.directive";
import * as i3 from "../../pipes/style-value.pipe";
const _c0 = ["*"];
export class TextComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.size = 13;
        this.color = '#000000';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7Ozs7OztBQVd2QixNQUFNLE9BQU8sYUFBYTtJQTZDeEIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFsQ3hELFNBQUksR0FBb0IsRUFBRSxDQUFDO1FBRTNCLFVBQUssR0FBVyxTQUFTLENBQUM7SUFpQzFCLENBQUM7SUEzQ0QsSUFDSSxFQUFFLENBQUMsRUFBVztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBc0NELFFBQVE7SUFDUixDQUFDOzswRUFoRFUsYUFBYTtrREFBYixhQUFhOztRQ3BCMUIsK0JBa0JFOzs7Ozs7Ozs7Ozs7OztRQUFBLG1CQUFZO1FBQ2QsaUJBQU87O1FBbEJELHFCQUFZO1FBRVosMkRBQW9DLDBEQUFBLHdEQUFBLG9EQUFBLHNEQUFBLCtDQUFBLHNEQUFBLDREQUFBLHdEQUFBLDJEQUFBLHVEQUFBLDhDQUFBLDRDQUFBLG9CQUFBLDZCQUFBO1FBRHBDLHlDQUF1Qjs7a0REa0JoQixhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQzs7a0JBSUUsS0FBSzs7a0JBT0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yQWJzdHJhY3RDb21wb25lbnR9IGZyb20gXCIuLi9jb250cm9sLXZhbHVlLWFjY2Vzc29yLWFic3RyYWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5pbXBvcnQge09zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC10ZXh0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIF9vczogT3NUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNldCBvcyhvczogT3NUeXBlcykge1xyXG4gICAgdGhpcy5fb3MgPSBvcztcclxuICB9XHJcbiAgZ2V0IG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0T3ModGhpcy5fb3MpO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHNpemU6IHN0cmluZyB8IG51bWJlciA9IDEzO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRleHRBbGlnbjogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgYm9sZDogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbjogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luVG9wOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5MZWZ0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5SaWdodDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luQm90dG9tOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nVG9wOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nTGVmdDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1JpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nQm90dG9tOiBudW1iZXIgfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cInRleHQtd3JhcFwiXHJcbiAgICAgIFtjbGFzc109XCJvc1wiXHJcbiAgICAgIFtuZ3hEZXNrdG9wQm9sZF09XCJib2xkXCJcclxuICAgICAgW3N0eWxlLm1hcmdpbl09XCJtYXJnaW4gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLm1hcmdpbkJvdHRvbV09XCJtYXJnaW5Cb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLm1hcmdpblJpZ2h0XT1cIm1hcmdpblJpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5Ub3BdPVwibWFyZ2luVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0XT1cIm1hcmdpbkxlZnQgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLnBhZGRpbmddPVwicGFkZGluZyB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUucGFkZGluZ1RvcF09XCJwYWRkaW5nVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nQm90dG9tXT1cInBhZGRpbmdCb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLnBhZGRpbmdMZWZ0XT1cInBhZGRpbmdMZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5wYWRkaW5nUmlnaHRdPVwicGFkZGluZ1JpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgIFtzdHlsZS5mb250U2l6ZV09XCJzaXplIHwgc3R5bGVWYWx1ZTonMTNweCdcIlxyXG4gICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGggfCBzdHlsZVZhbHVlXCJcclxuICAgICAgW3N0eWxlLmNvbG9yXT1cImNvbG9yXCJcclxuICAgICAgW3N0eWxlLnRleHRBbGlnbl09XCJ0ZXh0QWxpZ25cIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvc3Bhbj5cclxuXHJcbjwhLS1bbmd4RGVza3RvcFBhZGRpbmddPVwicGFkZGluZ1wiLS0+XHJcbjwhLS1bcGFkZGluZ1RvcF09XCJwYWRkaW5nVG9wXCItLT5cclxuPCEtLVtwYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdFwiLS0+XHJcbjwhLS1bcGFkZGluZ1JpZ2h0XT1cInBhZGRpbmdSaWdodFwiLS0+XHJcbjwhLS1bcGFkZGluZ0JvdHRvbV09XCJwYWRkaW5nQm90dG9tXCItLT5cclxuIl19
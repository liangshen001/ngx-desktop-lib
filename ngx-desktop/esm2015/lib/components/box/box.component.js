import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ngx-desktop-horizontal-alignment.directive";
import * as i2 from "../../directives/ngx-desktop-vertical-alignment.directive";
import * as i3 from "../../pipes/style-value.pipe";
const _c0 = ["*"];
export class BoxComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BoxComponent.ɵfac = function BoxComponent_Factory(t) { return new (t || BoxComponent)(); };
BoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BoxComponent, selectors: [["ngx-desktop-box"]], inputs: { label: "label", background: "background", color: "color", height: "height", width: "width", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin" }, ngContentSelectors: _c0, decls: 18, vars: 59, consts: [[1, "box-wrap"], [1, "lable"], [1, "content-wrap", 3, "ngxDesktopHorizontalAlignment", "ngxDesktopVerticalAlignment"]], template: function BoxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
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
        i0.ɵɵpipe(14, "styleValue");
        i0.ɵɵpipe(15, "styleValue");
        i0.ɵɵpipe(16, "styleValue");
        i0.ɵɵprojection(17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", i0.ɵɵpipeBind1(4, 31, ctx.height))("width", i0.ɵɵpipeBind1(5, 33, ctx.width))("margin", i0.ɵɵpipeBind1(6, 35, ctx.margin))("margin-bottom", i0.ɵɵpipeBind1(7, 37, ctx.marginBottom))("margin-right", i0.ɵɵpipeBind1(8, 39, ctx.marginRight))("margin-top", i0.ɵɵpipeBind1(9, 41, ctx.marginTop))("margin-left", i0.ɵɵpipeBind1(10, 43, ctx.marginLeft))("padding", i0.ɵɵpipeBind2(11, 45, ctx.padding, "23px 18px 22px"))("padding-top", i0.ɵɵpipeBind1(12, 48, ctx.paddingTop))("padding-bottom", i0.ɵɵpipeBind1(13, 50, ctx.paddingBottom))("padding-left", i0.ɵɵpipeBind1(14, 52, ctx.paddingLeft))("padding-right", i0.ɵɵpipeBind1(15, 54, ctx.paddingRight))("color", ctx.color)("background", i0.ɵɵpipeBind2(16, 56, ctx.background, "rgba(0, 0, 0, 0.04)"), i0.ɵɵdefaultStyleSanitizer);
        i0.ɵɵproperty("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment)("ngxDesktopVerticalAlignment", ctx.verticalAlignment);
    } }, directives: [i1.NgxDesktopHorizontalAlignmentDirective, i2.NgxDesktopVerticalAlignmentDirective], pipes: [i3.StyleValuePipe], styles: [".box-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;flex:1 1 0}.content-wrap[_ngcontent-%COMP%]{border-width:1px;border-style:solid;border-color:rgba(0,0,0,.07) rgba(0,0,0,.035) rgba(0,0,0,.027);border-radius:4px;position:relative}.lable[_ngcontent-%COMP%]{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:11px;color:#000;margin:0 0 1px 7px;line-height:13.2px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BoxComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-box',
                templateUrl: './box.component.html',
                styleUrls: ['./box.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], background: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYm94L2JveC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9ib3gvYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPdkQsTUFBTSxPQUFPLFlBQVk7SUFvQ3ZCO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzt3RUF4Q1UsWUFBWTtpREFBWixZQUFZOztRQ1B6Qiw4QkFDRTtRQUFBLCtCQUFvQjtRQUFBLFlBQVM7UUFBQSxpQkFBTztRQUNwQyw4QkFpQkU7Ozs7Ozs7Ozs7Ozs7O1FBQUEsbUJBQVk7UUFDZCxpQkFBTTtRQUNSLGlCQUFNOztRQXBCZ0IsZUFBUztRQUFULCtCQUFTO1FBSXhCLGVBQW9DO1FBQXBDLDJEQUFvQywyQ0FBQSw2Q0FBQSwwREFBQSx3REFBQSxvREFBQSx1REFBQSxrRUFBQSx1REFBQSw2REFBQSx5REFBQSwyREFBQSxvQkFBQSx5R0FBQTtRQUZwQyx1RUFBcUQsc0RBQUE7O2tEREkvQyxZQUFZO2NBTHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQzs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYm94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ib3guY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBob3Jpem9udGFsQWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XHJcbiAgQElucHV0KClcclxuICB2ZXJ0aWNhbEFsaWdubWVudDogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5SaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImJveC13cmFwXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJsYWJsZVwiPnt7bGFiZWx9fTwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwXCJcclxuICAgICAgIFtuZ3hEZXNrdG9wSG9yaXpvbnRhbEFsaWdubWVudF09XCJob3Jpem9udGFsQWxpZ25tZW50XCJcclxuICAgICAgIFtuZ3hEZXNrdG9wVmVydGljYWxBbGlnbm1lbnRdPVwidmVydGljYWxBbGlnbm1lbnRcIlxyXG4gICAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgW3N0eWxlLm1hcmdpbl09XCJtYXJnaW4gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICBbc3R5bGUubWFyZ2luUmlnaHRdPVwibWFyZ2luUmlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS5tYXJnaW5Ub3BdPVwibWFyZ2luVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJtYXJnaW5MZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICBbc3R5bGUucGFkZGluZ109XCJwYWRkaW5nIHwgc3R5bGVWYWx1ZTonMjNweCAxOHB4IDIycHgnXCJcclxuICAgICAgIFtzdHlsZS5wYWRkaW5nVG9wXT1cInBhZGRpbmdUb3AgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS5wYWRkaW5nQm90dG9tXT1cInBhZGRpbmdCb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgW3N0eWxlLnBhZGRpbmdSaWdodF09XCJwYWRkaW5nUmlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kIHwgc3R5bGVWYWx1ZToncmdiYSgwLCAwLCAwLCAwLjA0KSdcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
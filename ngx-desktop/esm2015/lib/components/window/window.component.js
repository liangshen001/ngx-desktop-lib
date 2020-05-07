import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-window-blur.directive";
import * as i3 from "../view/view.component";
import * as i4 from "../../pipes/style-value.pipe";
const _c0 = [[["ngx-desktop-title-bar"]], "*"];
const _c1 = ["ngx-desktop-title-bar", "*"];
export class WindowComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.verticalAlignment = 'top';
        this.horizontalAlignment = 'left';
        this.padding = '24px 20px 20px';
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvd2luZG93L3dpbmRvdy5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy93aW5kb3cvd2luZG93LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQWdCdkIsTUFBTSxPQUFPLGVBQWU7SUF5QzFCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBbkJ4RCxzQkFBaUIsR0FBMkIsS0FBSyxDQUFDO1FBRWxELHdCQUFtQixHQUE2QixNQUFNLENBQUM7UUFFdkQsWUFBTyxHQUFvQixnQkFBZ0IsQ0FBQztRQVU1QyxXQUFNLEdBQWdCLFlBQVksQ0FBQztJQU1uQyxDQUFDO0lBeENELElBQ0ksRUFBRSxDQUFDLEVBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQW9DRCxRQUFRO0lBQ1IsQ0FBQzs7OEVBN0NVLGVBQWU7b0RBQWYsZUFBZTs7UUN6QjVCLDhCQVFFO1FBTkcsd0pBQTRDOzs7OztRQU0vQyxrQkFBMkM7UUFDekMsMkNBWUU7UUFBQSxxQkFBWTtRQUNkLGlCQUFtQjtRQUN2QixpQkFBTTs7UUF0QkQscUJBQVk7UUFHWix5SUFBbUYsc0RBQUEsb0RBQUEsc0hBQUE7UUFEbkYsNENBQStCO1FBT2QsZUFBUztRQUFULDJCQUFTLHNCQUFBLHdCQUFBLDhCQUFBLGdDQUFBLG9DQUFBLGtDQUFBLGdEQUFBLDRDQUFBLGtCQUFBLGlCQUFBOztrRERlbEIsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7O2tCQUdFLEtBQUs7O2tCQU9MLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdHlsZVZhbHVlVHlwZXN9IGZyb20gXCIuLi8uLi9waXBlcy9zdHlsZS12YWx1ZS5waXBlXCI7XHJcbmltcG9ydCB7VmVydGljYWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge0hvcml6b250YWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaG9yaXpvbnRhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7TGF5b3V0VHlwZXMsIE9zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLXdpbmRvdycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dpbmRvdy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vd2luZG93LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2luZG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIF9vczogT3NUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNldCBvcyhvczogT3NUeXBlcykge1xyXG4gICAgdGhpcy5fb3MgPSBvcztcclxuICB9XHJcbiAgZ2V0IG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0T3ModGhpcy5fb3MpO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IFN0eWxlVmFsdWVUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBTdHlsZVZhbHVlVHlwZXM7XHJcbiAgQElucHV0KClcclxuICB2ZXJ0aWNhbEFsaWdubWVudDogVmVydGljYWxBbGlnbm1lbnRUeXBlcyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpXHJcbiAgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudFR5cGVzID0gJ2xlZnQnO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogbnVtYmVyIHwgc3RyaW5nID0gJzI0cHggMjBweCAyMHB4JztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdUb3A6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdMZWZ0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nUmlnaHQ6IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdCb3R0b206IG51bWJlciB8IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGxheW91dDogTGF5b3V0VHlwZXMgPSAnaG9yaXpvbnRhbCc7XHJcblxyXG4gIHdpbmRvd0JsdXI6IGJvb2xlYW47XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ3aW5kb3ctY29udGFpbmVyXCJcclxuICAgICBbY2xhc3NdPVwib3NcIlxyXG4gICAgIChuZ3hEZXNrdG9wV2luZG93Qmx1cik9XCJ3aW5kb3dCbHVyID0gJGV2ZW50XCJcclxuICAgICBbY2xhc3Mud2luZG93Qmx1cl09XCJ3aW5kb3dCbHVyXCJcclxuICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kIHwgc3R5bGVWYWx1ZSA6IG9zID09PSAnbWFjJyA/ICcjRUNFQ0VDJyA6ICcjRkZGRkZGJ1wiXHJcbiAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHQgfCBzdHlsZVZhbHVlIDogJzEwMHZoJ1wiXHJcbiAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoIHwgc3R5bGVWYWx1ZSA6ICcxMDB2dydcIlxyXG4gICAgIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJvcyA9PT0gJ3dpbmRvd3MnID8gKHdpbmRvd0JsdXIgPyAnI0FBQUFBQScgOiAoY29sb3IgfCBzdHlsZVZhbHVlOiAnIzAwNjNBRScpKSA6ICcnXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRlc2t0b3AtdGl0bGUtYmFyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPG5neC1kZXNrdG9wLXZpZXcgY2xhc3M9XCJ3aW5kb3ctY29udGVudC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW29zXT1cIm9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtsYXlvdXRdPVwibGF5b3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtwYWRkaW5nXT1cInBhZGRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhZGRpbmdUb3BdPVwicGFkZGluZ1RvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFkZGluZ0xlZnRdPVwicGFkZGluZ0xlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhZGRpbmdCb3R0b21dPVwicGFkZGluZ0JvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFkZGluZ1JpZ2h0XT1cInBhZGRpbmdSaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaG9yaXpvbnRhbEFsaWdubWVudF09XCJob3Jpem9udGFsQWxpZ25tZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt2ZXJ0aWNhbEFsaWdubWVudF09XCJ2ZXJ0aWNhbEFsaWdubWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaGVpZ2h0XT1cIicxMDAlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbd2lkdGhdPVwiJzEwMCUnXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvbmd4LWRlc2t0b3Atdmlldz5cclxuPC9kaXY+XHJcbiJdfQ==
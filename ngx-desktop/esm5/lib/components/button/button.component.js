import { __assign } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorUtils } from "../../utils/color.utils";
import { macStyle } from "./mac-style";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "@angular/common";
import * as i3 from "../../directives/ngx-desktop-mousedown.directive";
import * as i4 from "../../directives/ngx-desktop-window-blur.directive";
import * as i5 from "../../directives/ngx-desktop-mouseover.directive";
import * as i6 from "../../pipes/style-value.pipe";
var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.onClick = new EventEmitter();
        this.type = 'button';
        this.size = 13;
    }
    Object.defineProperty(ButtonComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
            if (os === 'windows' && !this.color) {
                this.color = '#cccccc';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                this.darkenColor = ColorUtils.darkenColor(color, .35);
                this.isDarkColor = ColorUtils.isDarkColor(this.darkenColor);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "style", {
        get: function () {
            if (this.os === 'mac') {
                var colorStyle = macStyle[this.color] || macStyle.default;
                return __assign(__assign(__assign(__assign({}, colorStyle.normal), this.mousedown ? colorStyle.mousedown : {}), this.windowBlur ? {
                    'border-color': '#C8C8C8 #C2C2C2 #ACACAC',
                    'background-image': 'none',
                    color: 'initial'
                } : {}), this.disabled ? {
                    color: '#bababa',
                    background: '#f6f6f6',
                    'border-color': '#dadada'
                } : {});
            }
            else {
                return __assign(__assign({ 'background-color': this.color, 'border-color': this.color, color: this.isDarkColor ? '#ffffff' : '#000000' }, this.mouseover ? {
                    'border-color': this.darkenColor
                } : {}), this.mousedown ? {
                    'background-color': this.darkenColor,
                    'border-color': this.darkenColor,
                    transform: 'scale(0.97)',
                    transition: 'transform .1s ease-in'
                } : {});
            }
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.ngOnInit = function () {
        if (this.os === 'windows' && !this.color) {
            this.color = '#cccccc';
        }
    };
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ngx-desktop-button"]], inputs: { disabled: "disabled", theme: "theme", type: "type", size: "size", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin", os: "os", color: "color" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c0, decls: 13, vars: 55, consts: [["data-radium", "true", 3, "disabled", "type", "ngStyle", "click", "ngxDesktopMousedown", "ngxDesktopWindowBlur", "ngxDesktopMouseover"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick.emit($event); })("ngxDesktopMousedown", function ButtonComponent_Template_button_ngxDesktopMousedown_0_listener($event) { return ctx.mousedown = $event; })("ngxDesktopWindowBlur", function ButtonComponent_Template_button_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; })("ngxDesktopMouseover", function ButtonComponent_Template_button_ngxDesktopMouseover_0_listener($event) { return ctx.mouseover = $event; });
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
            i0.ɵɵclassMap(ctx.os);
            i0.ɵɵstyleProp("margin", i0.ɵɵpipeBind1(1, 31, ctx.margin))("margin-bottom", i0.ɵɵpipeBind1(2, 33, ctx.marginBottom))("margin-right", i0.ɵɵpipeBind1(3, 35, ctx.marginRight))("margin-top", i0.ɵɵpipeBind1(4, 37, ctx.marginTop))("margin-left", i0.ɵɵpipeBind1(5, 39, ctx.marginLeft))("padding", i0.ɵɵpipeBind2(6, 41, ctx.padding, ctx.os === "mac" ? "0 13px" : "0 32px"))("padding-top", i0.ɵɵpipeBind1(7, 44, ctx.paddingTop))("padding-bottom", i0.ɵɵpipeBind1(8, 46, ctx.paddingBottom))("padding-left", i0.ɵɵpipeBind1(9, 48, ctx.paddingLeft))("padding-right", i0.ɵɵpipeBind1(10, 50, ctx.paddingRight))("font-size", i0.ɵɵpipeBind2(11, 52, ctx.size, "13px"));
            i0.ɵɵclassProp("mousedown", ctx.mousedown)("blur", ctx.windowBlur);
            i0.ɵɵproperty("disabled", ctx.disabled)("type", ctx.type)("ngStyle", ctx.style);
        } }, directives: [i2.NgStyle, i3.NgxDesktopMousedownDirective, i4.NgxDesktopWindowBlurDirective, i5.NgxDesktopMouseoverDirective], pipes: [i6.StyleValuePipe], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;outline:0;border-style:solid}button.windows[_ngcontent-%COMP%]{border-width:2px;line-height:28px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px}button.mac[_ngcontent-%COMP%]{background-color:#fff;border-width:1px;border-radius:5px;box-shadow:rgba(0,0,0,.04) 0 1px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif}"], changeDetection: 0 });
    return ButtonComponent;
}());
export { ButtonComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { disabled: [{
            type: Input
        }], onClick: [{
            type: Output
        }], theme: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
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
        }], os: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUduRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7QUFNckM7SUF5R0UseUJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBMUZ4RCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUl6QyxTQUFJLEdBQXdCLFFBQVEsQ0FBQztRQUVyQyxTQUFJLEdBQW9CLEVBQUUsQ0FBQztJQXFGM0IsQ0FBQztJQTlERCxzQkFDSSwrQkFBRTthQU1OO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDO2FBVEQsVUFDTyxFQUFXO1lBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBSSxFQUFFLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDeEI7UUFDSCxDQUFDOzs7T0FBQTtJQVFELHNCQUNJLGtDQUFLO2FBT1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQVZELFVBQ1UsS0FBOEI7WUFDdEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDN0Q7UUFDSCxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLGtDQUFLO2FBQVQ7WUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFO2dCQUNyQixJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQzVELCtDQUNLLFVBQVUsQ0FBQyxNQUFNLEdBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLGNBQWMsRUFBRSx5QkFBeUI7b0JBQ3pDLGtCQUFrQixFQUFFLE1BQU07b0JBQzFCLEtBQUssRUFBRSxTQUFTO2lCQUNqQixDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxTQUFTO29CQUNoQixVQUFVLEVBQUUsU0FBUztvQkFDckIsY0FBYyxFQUFFLFNBQVM7aUJBQzFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDTjthQUNIO2lCQUFNO2dCQUNMLDJCQUNFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLEVBQzlCLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNsQixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7aUJBQ2pDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDSCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQ3BDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDaEMsU0FBUyxFQUFFLGFBQWE7b0JBQ3hCLFVBQVUsRUFBRSx1QkFBdUI7aUJBQ3BDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDTjthQUNIO1FBQ0gsQ0FBQzs7O09BQUE7SUFLRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDeEI7SUFDSCxDQUFDO2tGQTFHVSxlQUFlO3dEQUFmLGVBQWU7O1lDaEI1QixpQ0FzQkU7WUFuQk0sa0dBQVMsd0JBQW9CLElBQUMsMklBQUEsOElBQUEsMklBQUE7Ozs7Ozs7Ozs7OztZQW1CcEMsbUJBQVk7WUFDZCxpQkFBUzs7WUFuQkQscUJBQVk7WUFPWiwyREFBb0MsMERBQUEsd0RBQUEsb0RBQUEsc0RBQUEsdUZBQUEsc0RBQUEsNERBQUEsd0RBQUEsMkRBQUEsdURBQUE7WUFGcEMsMENBQTZCLHdCQUFBO1lBUjdCLHVDQUFxQixrQkFBQSxzQkFBQTs7MEJERDdCO0NBMkhDLEFBakhELElBaUhDO1NBM0dZLGVBQWU7a0RBQWYsZUFBZTtjQU4zQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztrQkFPRSxLQUFLOztrQkFFTCxNQUFNOztrQkFFTixLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFJTCxLQUFLOztrQkFjTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29sb3JVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbG9yLnV0aWxzXCI7XHJcbmltcG9ydCB7T3NUeXBlc30gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7bWFjU3R5bGV9IGZyb20gXCIuL21hYy1zdHlsZVwiO1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIE1hY0NvbG9yID0gJ2RlZmF1bHQnIHwgJ2JsdWUnIHwgJ3BpbmsnO1xyXG5leHBvcnQgdHlwZSBXaW5kb3dzQ29sb3IgPSBzdHJpbmc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbW91c2Vkb3duOiBib29sZWFuO1xyXG4gIHdpbmRvd0JsdXI6IGJvb2xlYW47XHJcbiAgbW91c2VvdmVyOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQElucHV0KClcclxuICB0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJztcclxuICBASW5wdXQoKVxyXG4gIHR5cGU6ICdidXR0b24nIHwgJ3N1Ym1pdCcgPSAnYnV0dG9uJztcclxuICBASW5wdXQoKVxyXG4gIHNpemU6IHN0cmluZyB8IG51bWJlciA9IDEzO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5SaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBfb3M6IE9zVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZXQgb3Mob3M6IE9zVHlwZXMpIHtcclxuICAgIHRoaXMuX29zID0gb3M7XHJcbiAgICBpZiAob3MgPT09ICd3aW5kb3dzJyAmJiAhdGhpcy5jb2xvcikge1xyXG4gICAgICB0aGlzLmNvbG9yID0gJyNjY2NjY2MnO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRPcyh0aGlzLl9vcyk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2NvbG9yOiBNYWNDb2xvciB8IFdpbmRvd3NDb2xvcjtcclxuICBkYXJrZW5Db2xvcjogc3RyaW5nO1xyXG4gIGlzRGFya0NvbG9yOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2xvcihjb2xvcjogTWFjQ29sb3IgfCBXaW5kb3dzQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jb2xvciAhPT0gY29sb3IpIHtcclxuICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgICAgdGhpcy5kYXJrZW5Db2xvciA9IENvbG9yVXRpbHMuZGFya2VuQ29sb3IoY29sb3IsIC4zNSk7XHJcbiAgICAgIHRoaXMuaXNEYXJrQ29sb3IgPSBDb2xvclV0aWxzLmlzRGFya0NvbG9yKHRoaXMuZGFya2VuQ29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICBpZiAodGhpcy5vcyA9PT0gJ21hYycpIHtcclxuICAgICAgY29uc3QgY29sb3JTdHlsZSA9IG1hY1N0eWxlW3RoaXMuY29sb3JdIHx8IG1hY1N0eWxlLmRlZmF1bHQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY29sb3JTdHlsZS5ub3JtYWwsXHJcbiAgICAgICAgLi4udGhpcy5tb3VzZWRvd24gPyBjb2xvclN0eWxlLm1vdXNlZG93biA6IHt9LFxyXG4gICAgICAgIC4uLnRoaXMud2luZG93Qmx1ciA/IHtcclxuICAgICAgICAgICdib3JkZXItY29sb3InOiAnI0M4QzhDOCAjQzJDMkMyICNBQ0FDQUMnLFxyXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAnbm9uZScsXHJcbiAgICAgICAgICBjb2xvcjogJ2luaXRpYWwnXHJcbiAgICAgICAgfSA6IHt9LFxyXG4gICAgICAgIC4uLnRoaXMuZGlzYWJsZWQgPyB7XHJcbiAgICAgICAgICBjb2xvcjogJyNiYWJhYmEnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmNmY2ZjYnLFxyXG4gICAgICAgICAgJ2JvcmRlci1jb2xvcic6ICcjZGFkYWRhJ1xyXG4gICAgICAgIH0gOiB7fVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgY29sb3I6IHRoaXMuaXNEYXJrQ29sb3IgPyAnI2ZmZmZmZicgOiAnIzAwMDAwMCcsXHJcbiAgICAgICAgLi4udGhpcy5tb3VzZW92ZXIgPyB7XHJcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5kYXJrZW5Db2xvclxyXG4gICAgICAgIH0gOiB7fSxcclxuICAgICAgICAuLi50aGlzLm1vdXNlZG93biA/IHtcclxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5kYXJrZW5Db2xvcixcclxuICAgICAgICAgICdib3JkZXItY29sb3InOiB0aGlzLmRhcmtlbkNvbG9yLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC45NyknLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMXMgZWFzZS1pbidcclxuICAgICAgICB9IDoge31cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9zID09PSAnd2luZG93cycgJiYgIXRoaXMuY29sb3IpIHtcclxuICAgICAgdGhpcy5jb2xvciA9ICcjY2NjY2NjJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvbiBkYXRhLXJhZGl1bT1cInRydWVcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICBbY2xhc3NdPVwib3NcIlxyXG4gICAgICAgIChuZ3hEZXNrdG9wTW91c2Vkb3duKT1cIm1vdXNlZG93biA9ICRldmVudFwiXHJcbiAgICAgICAgKG5neERlc2t0b3BXaW5kb3dCbHVyKT1cIndpbmRvd0JsdXIgPSAkZXZlbnRcIlxyXG4gICAgICAgIChuZ3hEZXNrdG9wTW91c2VvdmVyKT1cIm1vdXNlb3ZlciA9ICRldmVudFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwic3R5bGVcIlxyXG4gICAgICAgIFtjbGFzcy5tb3VzZWRvd25dPVwibW91c2Vkb3duXCJcclxuICAgICAgICBbY2xhc3MuYmx1cl09XCJ3aW5kb3dCbHVyXCJcclxuICAgICAgICBbc3R5bGUubWFyZ2luXT1cIm1hcmdpbiB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICAgW3N0eWxlLm1hcmdpblJpZ2h0XT1cIm1hcmdpblJpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICAgW3N0eWxlLm1hcmdpblRvcF09XCJtYXJnaW5Ub3AgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJtYXJnaW5MZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICAgW3N0eWxlLnBhZGRpbmddPVwicGFkZGluZyB8IHN0eWxlVmFsdWUgOiBvcyA9PT0gJ21hYycgPyAnMCAxM3B4JyA6ICcwIDMycHgnXCJcclxuICAgICAgICBbc3R5bGUucGFkZGluZ1RvcF09XCJwYWRkaW5nVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICAgW3N0eWxlLnBhZGRpbmdCb3R0b21dPVwicGFkZGluZ0JvdHRvbSB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgIFtzdHlsZS5wYWRkaW5nUmlnaHRdPVwicGFkZGluZ1JpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICAgW3N0eWxlLmZvbnRTaXplXT1cInNpemUgfCBzdHlsZVZhbHVlOicxM3B4J1wiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9idXR0b24+XHJcblxyXG48IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1yYWRpdW09XCJ0cnVlXCIgPi0tPlxyXG48IS0tICBQcmVzcyBtZSEtLT5cclxuPCEtLTwvYnV0dG9uPi0tPlxyXG4iXX0=
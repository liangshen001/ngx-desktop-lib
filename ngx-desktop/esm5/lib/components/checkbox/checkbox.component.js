import { __assign } from "tslib";
import { Component, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ColorUtils } from "../../utils/color.utils";
import { EventEmitter } from "events";
import { noop } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-window-blur.directive";
import * as i3 from "../../directives/ngx-desktop-mouseover.directive";
import * as i4 from "../../directives/ngx-desktop-mousedown.directive";
import * as i5 from "@angular/common";
function CheckboxComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 8);
    i0.ɵɵelement(2, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "svg", 10);
    i0.ɵɵelement(4, "path", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r72 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r72.disabled ? "#8d8d8d" : ctx_r72.windowBlur ? "#404040" : "#FFFFFF");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r72.disabled ? "#ededed" : ctx_r72.checked ? ctx_r72.windowBlur ? "#FFFFFF" : "#0050a5" : "#0050a5");
} }
function CheckboxComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 11);
    i0.ɵɵelement(1, "polygon", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r73 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("fill", ctx_r73.disabled ? "#8d8d8d" : ctx_r73.isDarkColor ? "#000" : "#fff");
} }
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(ngxDesktopService, changeDetectorRef) {
        this.ngxDesktopService = ngxDesktopService;
        this.changeDetectorRef = changeDetectorRef;
        this.onChange = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(CheckboxComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
            if (this.os === 'windows' && !this.color) {
                this.color = '#0063AE';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "color", {
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
    Object.defineProperty(CheckboxComponent.prototype, "style", {
        get: function () {
            if (this.os === 'windows') {
                return __assign({}, this.disabled ? {
                    'border-color': '#999999',
                } : __assign(__assign(__assign({}, this.checked ? {
                    'border-color': this.color,
                    'background-color': this.color
                } : {
                    'border-color': 'rgba(0, 0, 0, 0.8)'
                }), this.mouseover ? {
                    'border-color': '#000000'
                } : {}), this.mousedown ? {
                    'border-color': 'rgba(0, 0, 0, 0)',
                    'background-color': 'rgba(0, 0, 0, 0.57)'
                } : {}));
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.ngOnInit = function () {
        if (this.os === 'windows' && !this.color) {
            this.color = '#0063AE';
        }
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxComponent.prototype.changeValue = function () {
        this.checked = !this.checked;
        this.onChangeCallback(this.checked);
    };
    CheckboxComponent.prototype.writeValue = function (obj) {
        this.checked = obj;
        this.changeDetectorRef.markForCheck();
    };
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    CheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["ngx-desktop-checkbox"]], inputs: { checked: "checked", disabled: "disabled", os: "os", label: "label", color: "color" }, outputs: { onChange: "onChange" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return CheckboxComponent; }),
                    multi: true
                }])], decls: 8, vars: 15, consts: [[2, "display", "inline-block"], ["data-radium", "true", 1, "checkbox-wrap", 3, "ngxDesktopWindowBlur", "ngxDesktopMouseover", "ngxDesktopMousedown"], ["data-radium", "true", 2, "position", "relative", "margin-right", "3px", "padding-top", "3px"], ["type", "checkbox", "data-radium", "true", 3, "checked", "disabled", "change"], ["data-radium", "true", "class", "checkbox-style", 4, "ngIf"], ["x", "0px", "y", "0px", "viewBox", "0 0 6.4 6.4", "data-radium", "true", "style", "position: absolute; top: 6px; left: 5px; color: rgb(255, 255, 255); height: 16px;", 4, "ngIf"], [1, "title"], ["data-radium", "true", 1, "checkbox-style"], ["viewBox", "0 0 285 283.4", "data-radium", "true", 1, "svg1"], ["d", "M101.2,215.7L227.5,20.6c0,0,20.7-31.9,44.4-16.2c25.4,16.8,6.1,41,6.1,41L134.5,271.9c0,0-8.8,11.5-23.9,11.5 s-29.2-13.3-29.2-13.3L2.7,175.4c0,0-9.4-17.3,6.8-27.4c19.7-12.3,34.6,2.8,34.6,2.8L101.2,215.7z"], ["viewBox", "0 0 285 283.4", "data-radium", "true", 1, "svg2"], ["x", "0px", "y", "0px", "viewBox", "0 0 6.4 6.4", "data-radium", "true", 2, "position", "absolute", "top", "6px", "left", "5px", "color", "rgb(255, 255, 255)", "height", "16px"], ["points", "0,3.3 2.2,5.5 6.4,1.23 6.1,0.9 2.2,4.8 0.3,2.9 "]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "label", 1);
            i0.ɵɵlistener("ngxDesktopWindowBlur", function CheckboxComponent_Template_label_ngxDesktopWindowBlur_1_listener($event) { return ctx.windowBlur = $event; })("ngxDesktopMouseover", function CheckboxComponent_Template_label_ngxDesktopMouseover_1_listener($event) { return ctx.mouseover = $event; })("ngxDesktopMousedown", function CheckboxComponent_Template_label_ngxDesktopMousedown_1_listener($event) { return ctx.mousedown = $event; });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "input", 3);
            i0.ɵɵlistener("change", function CheckboxComponent_Template_input_change_3_listener() { return ctx.changeValue(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CheckboxComponent_div_4_Template, 5, 2, "div", 4);
            i0.ɵɵtemplate(5, CheckboxComponent__svg_svg_5_Template, 2, 1, "svg", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx.os);
            i0.ɵɵclassProp("blur", ctx.windowBlur)("checked", ctx.checked)("disabled", ctx.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(ctx.style);
            i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.os === "mac");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.os === "windows" && ctx.checked);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
        } }, directives: [i2.NgxDesktopWindowBlurDirective, i3.NgxDesktopMouseoverDirective, i4.NgxDesktopMousedownDirective, i5.NgIf], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}.checkbox-wrap[_ngcontent-%COMP%]{display:flex;position:relative}input[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;outline:0;border-style:solid}.windows[_ngcontent-%COMP%]   .checkbox-wrap[_ngcontent-%COMP%]{align-items:center;margin-bottom:22px}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:2px;padding:8px;color:#fff;vertical-align:bottom;margin-right:6px;margin-top:0}.windows[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;margin-top:1px;color:#000}.windows.disabled[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#bbb}.mac.checkbox-wrap[_ngcontent-%COMP%]{height:20px;margin-right:1px}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:1px;border-radius:3px;padding:6px;margin:0 1px;box-shadow:rgba(224,224,224,.4) 0 1px 0 0 inset;transition:.4s;background-color:#fff;border-color:#b8b8b8}.mac.blur.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-color:#b8b8b8;background-color:#fff;transition:none}.mac.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-shadow:none!important;transition:.4s;background-color:#3b99fc;border-color:#2c91fc}.mac.checked[_ngcontent-%COMP%]   .checkbox-style[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.mac.disabled[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#a5a5a5}.mac.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#ececec!important;border-color:#bbb!important}.mac[_ngcontent-%COMP%]   .checkbox-style[_ngcontent-%COMP%]{position:absolute;top:6px;left:4px;width:8px;height:8px;opacity:0;transform:scale(0);transition:.5s}.mac[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:inline;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;color:#000}.mac[_ngcontent-%COMP%]   .svg1[_ngcontent-%COMP%]{z-index:2;position:absolute;top:0;left:0;height:8px}.mac[_ngcontent-%COMP%]   .svg2[_ngcontent-%COMP%]{z-index:1;position:absolute;top:1.5px;left:0;opacity:.37;height:8px;-webkit-filter:blur(.5px);filter:blur(.5px)}"] });
    return CheckboxComponent;
}());
export { CheckboxComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CheckboxComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: i1.NgxDesktopService }, { type: i0.ChangeDetectorRef }]; }, { onChange: [{
            type: Output
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], os: [{
            type: Input
        }], label: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBSVYsS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBR25ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDcEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7SUNEcEIsOEJBQ0U7SUFBQSxtQkFDRTtJQURGLDhCQUNFO0lBQUEsMEJBQzJOO0lBQzdOLGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFDMk47SUFDN04saUJBQU07SUFDUixpQkFBTTs7O0lBUEksZUFBeUU7SUFBekUsaUdBQXlFO0lBSXpFLGVBQWlHO0lBQWpHLCtIQUFpRzs7O0lBSTNHLG1CQUVFO0lBRkYsK0JBRUU7SUFBQSw4QkFBaUo7SUFDbkosaUJBQU07OztJQURLLGVBQW9FO0lBQXBFLDRGQUFvRTs7QURUckY7SUFrRkUsMkJBQW9CLGlCQUFvQyxFQUNwQyxpQkFBb0M7UUFEcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBbEV4RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQThEdEIsc0JBQWlCLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFxQixJQUFJLENBQUM7SUFJbEQsQ0FBQztJ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LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPU19UT0tFTiwgT3NUeXBlc30gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7Q29sb3JVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbG9yLnV0aWxzXCI7XHJcbmltcG9ydCB7TWFjQ29sb3IsIFdpbmRvd3NDb2xvcn0gZnJvbSBcIi4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiZXZlbnRzXCI7XHJcbmltcG9ydCB7bm9vcH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtY2hlY2tib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgd2luZG93Qmx1cjogYm9vbGVhbjtcclxuICBtb3VzZW92ZXI6IGJvb2xlYW47XHJcbiAgbW91c2Vkb3duOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBjaGVja2VkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9vczogT3NUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNldCBvcyhvczogT3NUeXBlcykge1xyXG4gICAgdGhpcy5fb3MgPSBvcztcclxuICAgIGlmICh0aGlzLm9zID09PSAnd2luZG93cycgJiYgIXRoaXMuY29sb3IpIHtcclxuICAgICAgdGhpcy5jb2xvciA9ICcjMDA2M0FFJztcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0T3ModGhpcy5fb3MpO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgX2NvbG9yOiBNYWNDb2xvciB8IFdpbmRvd3NDb2xvcjtcclxuICBkYXJrZW5Db2xvcjogc3RyaW5nO1xyXG4gIGlzRGFya0NvbG9yOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb2xvcihjb2xvcjogTWFjQ29sb3IgfCBXaW5kb3dzQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jb2xvciAhPT0gY29sb3IpIHtcclxuICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgICAgdGhpcy5kYXJrZW5Db2xvciA9IENvbG9yVXRpbHMuZGFya2VuQ29sb3IoY29sb3IsIC4zNSk7XHJcbiAgICAgIHRoaXMuaXNEYXJrQ29sb3IgPSBDb2xvclV0aWxzLmlzRGFya0NvbG9yKHRoaXMuZGFya2VuQ29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICBpZiAodGhpcy5vcyA9PT0gJ3dpbmRvd3MnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4udGhpcy5kaXNhYmxlZCA/IHtcclxuICAgICAgICAgICdib3JkZXItY29sb3InOiAnIzk5OTk5OScsXHJcbiAgICAgICAgfSA6IHtcclxuICAgICAgICAgIC4uLnRoaXMuY2hlY2tlZCA/IHtcclxuICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5jb2xvclxyXG4gICAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuOCknXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLi4udGhpcy5tb3VzZW92ZXIgPyB7XHJcbiAgICAgICAgICAgICdib3JkZXItY29sb3InOiAnIzAwMDAwMCdcclxuICAgICAgICAgIH0gOiB7fSxcclxuICAgICAgICAgIC4uLnRoaXMubW91c2Vkb3duID8ge1xyXG4gICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuNTcpJ1xyXG4gICAgICAgICAgfSA6IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3MgPT09ICd3aW5kb3dzJyAmJiAhdGhpcy5jb2xvcikge1xyXG4gICAgICB0aGlzLmNvbG9yID0gJyMwMDYzQUUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZSgpIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5jaGVja2VkKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IG9iajtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XHJcbiAgPGxhYmVsIGRhdGEtcmFkaXVtPVwidHJ1ZVwiXHJcbiAgICAgICAgIGNsYXNzPVwiY2hlY2tib3gtd3JhcFwiXHJcbiAgICAgICAgIFtjbGFzc109XCJvc1wiXHJcbiAgICAgICAgIChuZ3hEZXNrdG9wV2luZG93Qmx1cik9XCJ3aW5kb3dCbHVyID0gJGV2ZW50XCJcclxuICAgICAgICAgKG5neERlc2t0b3BNb3VzZW92ZXIpPVwibW91c2VvdmVyID0gJGV2ZW50XCJcclxuICAgICAgICAgKG5neERlc2t0b3BNb3VzZWRvd24pPVwibW91c2Vkb3duID0gJGV2ZW50XCJcclxuICAgICAgICAgW2NsYXNzLmJsdXJdPVwid2luZG93Qmx1clwiXHJcbiAgICAgICAgIFtjbGFzcy5jaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1yaWdodDogM3B4OyBwYWRkaW5nLXRvcDogM3B4O1wiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgIGRhdGEtcmFkaXVtPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICBbc3R5bGVdPVwic3R5bGVcIlxyXG4gICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZVZhbHVlKClcIlxyXG4gICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJjaGVja2JveC1zdHlsZVwiICpuZ0lmPVwib3MgPT09ICdtYWMnXCI+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI4NSAyODMuNFwiIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwic3ZnMVwiPlxyXG4gICAgICAgICAgPHBhdGggW2F0dHIuZmlsbF09XCJkaXNhYmxlZCA/ICcjOGQ4ZDhkJyA6ICh3aW5kb3dCbHVyID8gJyM0MDQwNDAnIDogJyNGRkZGRkYnKVwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEwMS4yLDIxNS43TDIyNy41LDIwLjZjMCwwLDIwLjctMzEuOSw0NC40LTE2LjJjMjUuNCwxNi44LDYuMSw0MSw2LjEsNDFMMTM0LjUsMjcxLjljMCwwLTguOCwxMS41LTIzLjksMTEuNSBzLTI5LjItMTMuMy0yOS4yLTEzLjNMMi43LDE3NS40YzAsMC05LjQtMTcuMyw2LjgtMjcuNGMxOS43LTEyLjMsMzQuNiwyLjgsMzQuNiwyLjhMMTAxLjIsMjE1Ljd6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyODUgMjgzLjRcIiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInN2ZzJcIj5cclxuICAgICAgICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiZGlzYWJsZWQgPyAnI2VkZWRlZCcgOiAoY2hlY2tlZCA/ICh3aW5kb3dCbHVyID8gJyNGRkZGRkYnIDogJyMwMDUwYTUnKSA6ICcjMDA1MGE1JylcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMDEuMiwyMTUuN0wyMjcuNSwyMC42YzAsMCwyMC43LTMxLjksNDQuNC0xNi4yYzI1LjQsMTYuOCw2LjEsNDEsNi4xLDQxTDEzNC41LDI3MS45YzAsMC04LjgsMTEuNS0yMy45LDExLjUgcy0yOS4yLTEzLjMtMjkuMi0xMy4zTDIuNywxNzUuNGMwLDAtOS40LTE3LjMsNi44LTI3LjRjMTkuNy0xMi4zLDM0LjYsMi44LDM0LjYsMi44TDEwMS4yLDIxNS43elwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDYuNCA2LjRcIiBkYXRhLXJhZGl1bT1cInRydWVcIiAqbmdJZj1cIm9zID09PSAnd2luZG93cycgJiYgY2hlY2tlZFwiXHJcbiAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNnB4OyBsZWZ0OiA1cHg7IGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IGhlaWdodDogMTZweDtcIj5cclxuICAgICAgICA8cG9seWdvbiBbYXR0ci5maWxsXT1cImRpc2FibGVkID8gJyM4ZDhkOGQnIDogKGlzRGFya0NvbG9yID8gJyMwMDAnIDogJyNmZmYnKVwiIHBvaW50cz1cIjAsMy4zIDIuMiw1LjUgNi40LDEuMjMgNi4xLDAuOSAyLjIsNC44IDAuMywyLjkgXCI+PC9wb2x5Z29uPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPnt7bGFiZWx9fTwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG48L2Rpdj5cclxuIl19
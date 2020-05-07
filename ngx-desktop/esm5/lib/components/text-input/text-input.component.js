import { __assign } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { noop } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "../../pipes/style-value.pipe";
var TextInputComponent = /** @class */ (function () {
    function TextInputComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.placeholder = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(TextInputComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputComponent.prototype, "style", {
        get: function () {
            if (this.os === 'windows') {
                return __assign(__assign({}, this.mouseover ? {
                    'border-color': '#646464',
                    background: 'rgba(255, 255, 255, 0.5)'
                } : {}), this.focus ? {
                    'border-color': this.color,
                    background: '#FFFFFF'
                } : {});
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    TextInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TextInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TextInputComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    TextInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    TextInputComponent.prototype.ngOnInit = function () {
    };
    TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    TextInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextInputComponent, selectors: [["ngx-desktop-text-input"]], inputs: { os: "os", label: "label", placeholder: "placeholder", color: "color", width: "width", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", margin: "margin", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TextInputComponent; }),
                    multi: true
                }])], decls: 14, vars: 34, consts: [["data-radium", "true", 1, "text-input-wrap"], [1, "label-wrap"], ["data-radium", "true", 2, "position", "relative"], ["data-radium", "true"], ["type", "text", "data-radium", "true", 3, "ngStyle", "placeholder", "ngModel", "focus", "blur", "mouseover", "mouseleave", "ngModelChange"]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵpipe(1, "styleValue");
            i0.ɵɵpipe(2, "styleValue");
            i0.ɵɵpipe(3, "styleValue");
            i0.ɵɵpipe(4, "styleValue");
            i0.ɵɵpipe(5, "styleValue");
            i0.ɵɵpipe(6, "styleValue");
            i0.ɵɵelementStart(7, "span", 1);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 2);
            i0.ɵɵelementStart(10, "div", 3);
            i0.ɵɵelement(11, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div");
            i0.ɵɵelementStart(13, "input", 4);
            i0.ɵɵlistener("focus", function TextInputComponent_Template_input_focus_13_listener() { return ctx.focus = true; })("blur", function TextInputComponent_Template_input_blur_13_listener() { return ctx.focus = false; })("mouseover", function TextInputComponent_Template_input_mouseover_13_listener() { return ctx.mouseover = true; })("mouseleave", function TextInputComponent_Template_input_mouseleave_13_listener() { return ctx.mouseover = false; })("ngModelChange", function TextInputComponent_Template_input_ngModelChange_13_listener($event) { return ctx.value = $event; })("ngModelChange", function TextInputComponent_Template_input_ngModelChange_13_listener($event) { return ctx.onChangeCallback($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.os);
            i0.ɵɵstyleProp("z-index", ctx.focus ? 3 : 2)("margin", i0.ɵɵpipeBind1(1, 22, ctx.margin))("margin-top", i0.ɵɵpipeBind1(2, 24, ctx.marginTop))("margin-right", i0.ɵɵpipeBind1(3, 26, ctx.marginRight))("margin-left", i0.ɵɵpipeBind1(4, 28, ctx.marginLeft))("margin-bottom", i0.ɵɵpipeBind1(5, 30, ctx.marginBottom))("width", i0.ɵɵpipeBind1(6, 32, ctx.width));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("border-div", ctx.focus);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngStyle", ctx.style)("placeholder", ctx.placeholder)("ngModel", ctx.value);
        } }, directives: [i2.DefaultValueAccessor, i3.NgStyle, i2.NgControlStatus, i2.NgModel], pipes: [i4.StyleValuePipe], styles: [".label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;color:#000}input[_ngcontent-%COMP%]{outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-input-wrap[_ngcontent-%COMP%]{position:relative}.windows[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{line-height:25.96px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:14px;display:flex}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:2px 10px 3px;line-height:23px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;font-weight:100;color:#000;margin-bottom:18px;background:rgba(255,255,255,.35);border:2px solid #949494}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{border-color:#646464;background:rgba(255,255,255,.5)}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#636363}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#636363}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#636363}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#636363}.windows.text-input-wrap[_ngcontent-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:#f0f0f0 0 0 0 1px inset;padding:4px 3.5px 3px;line-height:15px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;letter-spacing:.4px;width:100%;box-sizing:border-box;border:1px solid #bebfbf}.mac[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{display:block;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px}.mac[_ngcontent-%COMP%]   .border-div[_ngcontent-%COMP%]{position:absolute;z-index:1;width:100%;height:100%;top:-3px;left:-3px;background:#7dc3f2;border:3px solid #7dc3f2;opacity:0;border-radius:4px;-webkit-animation:.25s linear forwards text-input-focus-radium-animation;animation:.25s linear forwards text-input-focus-radium-animation}@-webkit-keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-3px;left:-3px;border-radius:4px;border-width:3px}}@keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-3px;left:-3px;border-radius:4px;border-width:3px}}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:silver}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:silver}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:silver}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:silver}"] });
    return TextInputComponent;
}());
export { TextInputComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-text-input',
                templateUrl: './text-input.component.html',
                styleUrls: ['./text-input.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TextInputComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { os: [{
            type: Input
        }], label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], color: [{
            type: Input
        }], width: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], margin: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUF3QixLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSXZFLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7OztBQUUxQjtJQStFRSw0QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUF4RHhELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBc0N6QixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztJQWtCMUMsQ0FBQztJQW5FRCxzQkFDSSxrQ0FBRTthQUdOO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDO2FBTkQsVUFDTyxFQUFXO1lBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBNEJELHNCQUFJLHFDQUFLO2FBQVQ7WUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO2dCQUN6Qiw2QkFDSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsY0FBYyxFQUFFLFNBQVM7b0JBQ3pCLFVBQVUsRUFBRSwwQkFBMEI7aUJBQ3ZDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDSCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDZCxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQzFCLFVBQVUsRUFBRSxTQUFTO2lCQUN0QixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQ047YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQzs7O09BQUE7SUFNRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCw4Q0FBaUIsR0FBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFJRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQzt3RkF6RVUsa0JBQWtCOzJEQUFsQixrQkFBa0Isa1VBTmxCLENBQUM7b0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7b0JBQ2pELEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUM7WUNmSiw4QkFVRTs7Ozs7OztZQUFBLCtCQUF5QjtZQUFBLFlBQVM7WUFBQSxpQkFBTztZQUN6Qyw4QkFDRTtZQUFBLCtCQUNFO1lBQUEsMEJBQXlEO1lBQzNELGlCQUFNO1lBQ04sNEJBQ0U7WUFBQSxpQ0FVRjtZQVBTLDJHQUFpQixJQUFJLElBQUMsNEZBQ04sS0FBSyxJQURDLDBHQUVHLElBQUksSUFGUCw0R0FHSSxLQUFLLElBSFQsOEhBQUEsd0dBS0wsNEJBQXdCLElBTG5CO1lBSDdCLGlCQVVGO1lBQUEsaUJBQU07WUFDUixpQkFBTTtZQUNSLGlCQUFNOztZQTFCRCxxQkFBWTtZQUNaLDRDQUE4Qiw2Q0FBQSxvREFBQSx3REFBQSxzREFBQSwwREFBQSwyQ0FBQTtZQU9SLGVBQVM7WUFBVCwrQkFBUztZQUdOLGVBQTBCO1lBQTFCLHVDQUEwQjtZQUkzQyxlQUFpQjtZQUFqQixtQ0FBaUIsZ0NBQUEsc0JBQUE7OzZCRGpCOUI7Q0E0RkMsQUFyRkQsSUFxRkM7U0EzRVksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FWOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQzt3QkFDakQsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQzthQUNIOztrQkFJRSxLQUFLOztrQkFPTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yQWJzdHJhY3RDb21wb25lbnR9IGZyb20gXCIuLi9jb250cm9sLXZhbHVlLWFjY2Vzc29yLWFic3RyYWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09TX1RPS0VOLCBPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC10ZXh0LWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1pbnB1dC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZXh0SW5wdXRDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIHByaXZhdGUgX29zOiBPc1R5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG9zKG9zOiBPc1R5cGVzKSB7XHJcbiAgICB0aGlzLl9vcyA9IG9zO1xyXG4gIH1cclxuICBnZXQgb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRPcyh0aGlzLl9vcyk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5SaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBmb2N1czogYm9vbGVhbjtcclxuICBtb3VzZW92ZXI6IGJvb2xlYW47XHJcblxyXG4gIGdldCBzdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLm9zID09PSAnd2luZG93cycpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi50aGlzLm1vdXNlb3ZlciA/IHtcclxuICAgICAgICAgICdib3JkZXItY29sb3InOiAnIzY0NjQ2NCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xyXG4gICAgICAgIH0gOiB7fSxcclxuICAgICAgICAuLi50aGlzLmZvY3VzID8ge1xyXG4gICAgICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRidcclxuICAgICAgICB9IDoge30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcclxuICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSBvYmo7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiXHJcbiAgICAgY2xhc3M9XCJ0ZXh0LWlucHV0LXdyYXBcIlxyXG4gICAgIFtjbGFzc109XCJvc1wiXHJcbiAgICAgW3N0eWxlLnpJbmRleF09XCJmb2N1cyA/IDMgOiAyXCJcclxuICAgICBbc3R5bGUubWFyZ2luXT1cIm1hcmdpbiB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5Ub3BdPVwibWFyZ2luVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpblJpZ2h0XT1cIm1hcmdpblJpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpbkxlZnRdPVwibWFyZ2luTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoIHwgc3R5bGVWYWx1ZVwiPlxyXG4gIDxzcGFuIGNsYXNzPVwibGFiZWwtd3JhcFwiPnt7bGFiZWx9fTwvc3Bhbj5cclxuICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG4gICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBbY2xhc3MuYm9yZGVyLWRpdl09XCJmb2N1c1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgW25nU3R5bGVdPVwic3R5bGVcIlxyXG4gICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgIChmb2N1cyk9XCJmb2N1cyA9IHRydWVcIlxyXG4gICAgICAgICAgICAgKGJsdXIpPVwiZm9jdXMgPSBmYWxzZVwiXHJcbiAgICAgICAgICAgICAobW91c2VvdmVyKT1cIm1vdXNlb3ZlciA9IHRydWVcIlxyXG4gICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwibW91c2VvdmVyID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZUNhbGxiYWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAgZGF0YS1yYWRpdW09XCJ0cnVlXCI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
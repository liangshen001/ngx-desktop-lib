import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { noop } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "../../pipes/style-value.pipe";
export class TextInputComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.placeholder = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    set os(os) {
        this._os = os;
    }
    get os() {
        return this.ngxDesktopService.getOs(this._os);
    }
    get style() {
        if (this.os === 'windows') {
            return Object.assign(Object.assign({}, this.mouseover ? {
                'border-color': '#646464',
                background: 'rgba(255, 255, 255, 0.5)'
            } : {}), this.focus ? {
                'border-color': this.color,
                background: '#FFFFFF'
            } : {});
        }
        return {};
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    writeValue(obj) {
        this.value = obj;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngOnInit() {
    }
}
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
TextInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextInputComponent, selectors: [["ngx-desktop-text-input"]], inputs: { os: "os", label: "label", placeholder: "placeholder", color: "color", width: "width", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", margin: "margin", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TextInputComponent),
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-text-input',
                templateUrl: './text-input.component.html',
                styleUrls: ['./text-input.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextInputComponent),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQXdCLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJdkUsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBWTFCLE1BQU0sT0FBTyxrQkFBa0I7SUFxRTdCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBeER4RCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQXNDekIsc0JBQWlCLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLHFCQUFnQixHQUFxQixJQUFJLENBQUM7SUFrQjFDLENBQUM7SUFuRUQsSUFDSSxFQUFFLENBQUMsRUFBVztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBeUJELElBQUksS0FBSztRQUNQLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDekIsdUNBQ0ssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLGNBQWMsRUFBRSxTQUFTO2dCQUN6QixVQUFVLEVBQUUsMEJBQTBCO2FBQ3ZDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDSCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZCxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxTQUFTO2FBQ3RCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDTjtTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBTUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBSUQsUUFBUTtJQUNSLENBQUM7O29GQXpFVSxrQkFBa0I7dURBQWxCLGtCQUFrQixrVUFObEIsQ0FBQztnQkFDVixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNqRCxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7UUNmSiw4QkFVRTs7Ozs7OztRQUFBLCtCQUF5QjtRQUFBLFlBQVM7UUFBQSxpQkFBTztRQUN6Qyw4QkFDRTtRQUFBLCtCQUNFO1FBQUEsMEJBQXlEO1FBQzNELGlCQUFNO1FBQ04sNEJBQ0U7UUFBQSxpQ0FVRjtRQVBTLDJHQUFpQixJQUFJLElBQUMsNEZBQ04sS0FBSyxJQURDLDBHQUVHLElBQUksSUFGUCw0R0FHSSxLQUFLLElBSFQsOEhBQUEsd0dBS0wsNEJBQXdCLElBTG5CO1FBSDdCLGlCQVVGO1FBQUEsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQTFCRCxxQkFBWTtRQUNaLDRDQUE4Qiw2Q0FBQSxvREFBQSx3REFBQSxzREFBQSwwREFBQSwyQ0FBQTtRQU9SLGVBQVM7UUFBVCwrQkFBUztRQUdOLGVBQTBCO1FBQTFCLHVDQUEwQjtRQUkzQyxlQUFpQjtRQUFqQixtQ0FBaUIsZ0NBQUEsc0JBQUE7O2tEREFqQixrQkFBa0I7Y0FWOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO3dCQUNqRCxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2FBQ0g7O2tCQUlFLEtBQUs7O2tCQU9MLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3ItYWJzdHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7T1NfVE9LRU4sIE9zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLXRleHQtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWlucHV0LmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRJbnB1dENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgcHJpdmF0ZSBfb3M6IE9zVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZXQgb3Mob3M6IE9zVHlwZXMpIHtcclxuICAgIHRoaXMuX29zID0gb3M7XHJcbiAgfVxyXG4gIGdldCBvcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldE9zKHRoaXMuX29zKTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5Cb3R0b206IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbkxlZnQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpblJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5Ub3A6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbjogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIGZvY3VzOiBib29sZWFuO1xyXG4gIG1vdXNlb3ZlcjogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IHN0eWxlKCkge1xyXG4gICAgaWYgKHRoaXMub3MgPT09ICd3aW5kb3dzJykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnRoaXMubW91c2VvdmVyID8ge1xyXG4gICAgICAgICAgJ2JvcmRlci1jb2xvcic6ICcjNjQ2NDY0JyxcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknXHJcbiAgICAgICAgfSA6IHt9LFxyXG4gICAgICAgIC4uLnRoaXMuZm9jdXMgPyB7XHJcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5jb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJ1xyXG4gICAgICAgIH0gOiB7fSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xyXG4gIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCJcclxuICAgICBjbGFzcz1cInRleHQtaW5wdXQtd3JhcFwiXHJcbiAgICAgW2NsYXNzXT1cIm9zXCJcclxuICAgICBbc3R5bGUuekluZGV4XT1cImZvY3VzID8gMyA6IDJcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5dPVwibWFyZ2luIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpblRvcF09XCJtYXJnaW5Ub3AgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luUmlnaHRdPVwibWFyZ2luUmlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJtYXJnaW5MZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpbkJvdHRvbV09XCJtYXJnaW5Cb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGggfCBzdHlsZVZhbHVlXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJsYWJlbC13cmFwXCI+e3tsYWJlbH19PC9zcGFuPlxyXG4gIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XHJcbiAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiPlxyXG4gICAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIFtjbGFzcy5ib3JkZXItZGl2XT1cImZvY3VzXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiXHJcbiAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgKGZvY3VzKT1cImZvY3VzID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAoYmx1cik9XCJmb2N1cyA9IGZhbHNlXCJcclxuICAgICAgICAgICAgIChtb3VzZW92ZXIpPVwibW91c2VvdmVyID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJtb3VzZW92ZXIgPSBmYWxzZVwiXHJcbiAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlQ2FsbGJhY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19
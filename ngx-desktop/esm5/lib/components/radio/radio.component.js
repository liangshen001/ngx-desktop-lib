import { __extends } from "tslib";
import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ControlValueAccessorAbstractComponent } from "../control-value-accessor-abstract.component";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-window-blur.directive";
import * as i3 from "@angular/common";
var _c0 = ["inputElement"];
function RadioComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 8);
} }
function RadioComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 10);
    i0.ɵɵelement(2, "circle", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "svg", 12);
    i0.ɵɵelement(4, "circle", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r96 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r96.disabled ? ctx_r96.checked ? "#919191" : "#FFFFFF" : ctx_r96.checked ? ctx_r96.windowBlur ? "#404040" : "#FFFFFF" : "#FFFFFF");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r96.disabled ? ctx_r96.checked ? "#ededed" : "#ffffff" : ctx_r96.checked ? ctx_r96.windowBlur ? "#FFFFFF" : "#0050a5" : "#FFFFFF");
} }
var RadioComponent = /** @class */ (function (_super) {
    __extends(RadioComponent, _super);
    function RadioComponent(ngxDesktopService, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.ngxDesktopService = ngxDesktopService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.color = '#0063AE';
        return _this;
    }
    Object.defineProperty(RadioComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioComponent.prototype, "borderColor", {
        get: function () {
            return this.os === 'mac' ?
                (this.windowBlur ? '#B8B8B8' : (this.checked ? '#2C91FC' : '#B8B8B8')) :
                this.disabled ? '#999999' : (this.checked ? this.color : '#333333');
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.writeValue = function (obj) {
        this.model = obj;
        this.checked = this.value === obj;
        this.changeDetectorRef.markForCheck();
    };
    RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    RadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RadioComponent, selectors: [["ngx-desktop-radio"]], viewQuery: function RadioComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, inputs: { os: "os", color: "color", label: "label", name: "name", value: "value", disabled: "disabled", checked: "checked" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return RadioComponent; }),
                    multi: true
                }]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 17, consts: [["data-radium", "true", 2, "display", "inline-block", 3, "ngxDesktopWindowBlur"], ["data-radium", "true", 1, "radio-wrap"], ["data-radium", "true", 1, "radio-input-wrap"], ["type", "radio", "data-radium", "true", 3, "value", "disabled", "checked", "change"], ["inputElement", ""], ["data-radium", "true", "class", "windows-radio-style", 4, "ngIf"], ["data-radium", "true", "style", "position: absolute; top: 7px; left: 5px; width: 6px; height: 6px; opacity: 1; transform: scale(1); transition: opacity 0s ease 0s, transform 0.2s ease 0s;", 4, "ngIf"], [1, "label-wrap"], ["data-radium", "true", 1, "windows-radio-style"], ["data-radium", "true", 2, "position", "absolute", "top", "7px", "left", "5px", "width", "6px", "height", "6px", "opacity", "1", "transform", "scale(1)", "transition", "opacity 0s ease 0s, transform 0.2s ease 0s"], ["viewBox", "0 0 285 285", "data-radium", "true", 2, "z-index", "2", "position", "absolute", "top", "0", "left", "1px", "height", "6px"], ["cx", "142.5", "cy", "142.5", "r", "142.5"], ["viewBox", "0 0 285 285", "data-radium", "true", 2, "z-index", "1", "position", "absolute", "top", "1.5px", "left", "1px", "opacity", "0.37", "height", "6px", "filter", "blur(0.5px)"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
            var _r97 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("ngxDesktopWindowBlur", function RadioComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
            i0.ɵɵelementStart(1, "label", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "input", 3, 4);
            i0.ɵɵlistener("change", function RadioComponent_Template_input_change_3_listener() { i0.ɵɵrestoreView(_r97); var _r94 = i0.ɵɵreference(4); _r94.checked = true; ctx.checked = true; return ctx.changeValue(ctx.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, RadioComponent_div_5_Template, 1, 0, "div", 5);
            i0.ɵɵtemplate(6, RadioComponent_div_6_Template, 5, 2, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span", 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.os);
            i0.ɵɵclassProp("blur", ctx.windowBlur)("checked", ctx.checked)("disabled", ctx.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵstyleProp("border-color", ctx.borderColor);
            i0.ɵɵproperty("value", ctx.value)("disabled", ctx.disabled)("checked", ctx.checked);
            i0.ɵɵattribute("name", ctx.name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.os === "windows" && ctx.checked);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.os === "mac");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
        } }, directives: [i2.NgxDesktopWindowBlurDirective, i3.NgIf], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}.radio-wrap[_ngcontent-%COMP%]{display:flex}.radio-input-wrap[_ngcontent-%COMP%]{position:relative;padding-top:2px}label[_ngcontent-%COMP%]{display:flex;position:relative}input[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;border-style:solid;border-radius:50%;margin:0;outline:0}.label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;color:#000}.windows-radio-style[_ngcontent-%COMP%]{position:absolute;top:7px;left:9px;width:10px;height:10px;border-radius:50%;background:#333}.windows.radio-wrap[_ngcontent-%COMP%]{margin-bottom:21px}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:2px;background-color:transparent;padding:8px;margin-left:4px;margin-right:9px}.windows[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;display:inline;margin-top:1px}.windows.disabled.checked[_ngcontent-%COMP%]   .windows-radio-style[_ngcontent-%COMP%]{background:#999}.windows.disabled[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{color:#bbb}.mac[_ngcontent-%COMP%]   .radio-input-wrap[_ngcontent-%COMP%]{margin-right:2px}.mac[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:20px;margin-right:1px}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:1px;background-color:#fff;padding:7px;box-shadow:rgba(224,224,224,.4) 0 1px 0 0 inset;transition:.4s;margin:0 1px}.mac.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#3b99fc;box-shadow:none;transition:none}.mac.mousedown.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#0080f6;box-shadow:rgba(19,68,119,.22) 0 0 0 1px inset;transition:.4s}.mac.blur.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#fff;transition:none}.mac[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{display:inline;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px}.mac.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f1f1f1}.mac.disabled[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{color:#b8b8b8}.mac.blur.checked.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f1f1f1}"] });
    return RadioComponent;
}(ControlValueAccessorAbstractComponent));
export { RadioComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-radio',
                templateUrl: './radio.component.html',
                styleUrls: ['./radio.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return RadioComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: i1.NgxDesktopService }, { type: i0.ChangeDetectorRef }]; }, { os: [{
            type: Input
        }], color: [{
            type: Input
        }], label: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ["inputElement", { static: true }]
        }], checked: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBR1YsS0FBSyxFQUVMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHFDQUFxQyxFQUFDLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7SUNPM0YseUJBQThGOzs7SUFDOUYsOEJBRUU7SUFBQSxtQkFFRTtJQUZGLCtCQUVFO0lBQUEsNkJBQzJDO0lBQzdDLGlCQUFNO0lBQ04sK0JBRUU7SUFBQSw2QkFDMkM7SUFDN0MsaUJBQU07SUFDUixpQkFBTTs7O0lBUk0sZUFBMkg7SUFBM0gsNkpBQTJIO0lBSzNILGVBQXlIO0lBQXpILDZKQUF5SDs7QURWN0k7SUFVb0Msa0NBQXFDO0lBc0N2RSx3QkFBb0IsaUJBQW9DLEVBQ3BDLGlCQUFvQztRQUR4RCxZQUVFLGlCQUFPLFNBQ1I7UUFIbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBM0J4RCxXQUFLLEdBQWlCLFNBQVMsQ0FBQzs7SUE2QmhDLENBQUM7SUF0Q0Qsc0JBQ0ksOEJBQUU7YUFHTjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQU5ELFVBQ08sRUFBVztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQTBCRCxzQkFBSSx1Q0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7OztPQUFBO0lBT0QsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFHRCxtQ0FBVSxHQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO2dGQW5EVSxjQUFjO3VEQUFkLGNBQWM7Ozs7OzRLQU5kLENBQUM7b0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsQ0FBQztvQkFDN0MsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQzs7WUMzQkYsOEJBT0U7WUFKRyx1SkFBNEM7WUFJL0MsZ0NBRUU7WUFBQSw4QkFDRTtZQUFBLG1DQVNBO1lBSE8sMEpBQWlDLElBQUksZ0JBQVcsSUFBSSxTQUFDLDBCQUFrQixJQUFFO1lBTmhGLGlCQVNBO1lBQUEsK0RBQXdGO1lBQ3hGLCtEQUVFO1lBV0osaUJBQU07WUFDTiwrQkFBeUI7WUFBQSxZQUFTO1lBQUEsaUJBQU87WUFDM0MsaUJBQVE7WUFDVixpQkFBTTs7WUFsQ0QscUJBQVk7WUFFWixzQ0FBeUIsd0JBQUEsMEJBQUE7WUFPakIsZUFBaUM7WUFBakMsK0NBQWlDO1lBRWpDLGlDQUFlLDBCQUFBLHdCQUFBO1lBRGYsZ0NBQWtCO1lBT0QsZUFBbUM7WUFBbkMsMERBQW1DO1lBQ25DLGVBQW9CO1lBQXBCLHVDQUFvQjtZQWNyQixlQUFTO1lBQVQsK0JBQVM7O3lCRGxDeEM7Q0FpRkMsQUE5REQsQ0FVb0MscUNBQXFDLEdBb0R4RTtTQXBEWSxjQUFjO2tEQUFkLGNBQWM7Y0FWMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxDQUFDO3dCQUM3QyxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2FBQ0g7O2tCQUlFLEtBQUs7O2tCQVFMLEtBQUs7O2tCQUtMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7a0JBR3hDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPU19UT0tFTiwgT3NUeXBlc30gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7T3NVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL29zLnV0aWxzXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TWFjQ29sb3IsIFdpbmRvd3NDb2xvcn0gZnJvbSBcIi4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29sb3JVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbG9yLnV0aWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLXJhZGlvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBwcml2YXRlIF9vczogT3NUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNldCBvcyhvczogT3NUeXBlcykge1xyXG4gICAgdGhpcy5fb3MgPSBvcztcclxuICB9XHJcbiAgZ2V0IG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0T3ModGhpcy5fb3MpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvcjogV2luZG93c0NvbG9yID0gJyMwMDYzQUUnO1xyXG5cclxuICB3aW5kb3dCbHVyOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKFwiaW5wdXRFbGVtZW50XCIsIHtzdGF0aWM6IHRydWV9KVxyXG4gIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KClcclxuICBjaGVja2VkOiBib29sZWFuO1xyXG5cclxuICBnZXQgYm9yZGVyQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcyA9PT0gJ21hYycgP1xyXG4gICAgICAodGhpcy53aW5kb3dCbHVyID8gJyNCOEI4QjgnIDogKHRoaXMuY2hlY2tlZCA/ICcjMkM5MUZDJyA6ICcjQjhCOEI4JykpIDpcclxuICAgICAgdGhpcy5kaXNhYmxlZCA/ICcjOTk5OTk5JyA6ICh0aGlzLmNoZWNrZWQgPyB0aGlzLmNvbG9yIDogJyMzMzMzMzMnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlbCA9IG9iajtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMudmFsdWUgPT09IG9iajtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIiAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIlxyXG4gICAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgW2NsYXNzXT1cIm9zXCJcclxuICAgICAgIChuZ3hEZXNrdG9wV2luZG93Qmx1cik9XCJ3aW5kb3dCbHVyID0gJGV2ZW50XCJcclxuICAgICAgIFtjbGFzcy5ibHVyXT1cIndpbmRvd0JsdXJcIlxyXG4gICAgICAgW2NsYXNzLmNoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgIDxsYWJlbCBkYXRhLXJhZGl1bT1cInRydWVcIlxyXG4gICAgICAgICAgIGNsYXNzPVwicmFkaW8td3JhcFwiPlxyXG4gICAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwicmFkaW8taW5wdXQtd3JhcFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICBbc3R5bGUuYm9yZGVyQ29sb3JdPVwiYm9yZGVyQ29sb3JcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJpbnB1dEVsZW1lbnQuY2hlY2tlZCA9IHRydWU7Y2hlY2tlZCA9IHRydWU7Y2hhbmdlVmFsdWUodmFsdWUpO1wiXHJcbiAgICAgICAgICAgICAgICNpbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgZGF0YS1yYWRpdW09XCJ0cnVlXCI+XHJcbiAgICAgICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiAqbmdJZj1cIm9zID09PSAnd2luZG93cycgJiYgY2hlY2tlZFwiIGNsYXNzPVwid2luZG93cy1yYWRpby1zdHlsZVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgKm5nSWY9XCJvcyA9PT0gJ21hYydcIlxyXG4gICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogN3B4OyBsZWZ0OiA1cHg7IHdpZHRoOiA2cHg7IGhlaWdodDogNnB4OyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDBzIGVhc2UgMHMsIHRyYW5zZm9ybSAwLjJzIGVhc2UgMHM7XCI+XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjg1IDI4NVwiIGRhdGEtcmFkaXVtPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIHN0eWxlPVwiei1pbmRleDogMjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDFweDsgaGVpZ2h0OiA2cHg7XCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgW2F0dHIuZmlsbF09XCJkaXNhYmxlZCA/IChjaGVja2VkID8gKCcjOTE5MTkxJykgOiAnI0ZGRkZGRicpIDogKGNoZWNrZWQgPyAod2luZG93Qmx1ciA/ICcjNDA0MDQwJyA6ICcjRkZGRkZGJykgOiAnI0ZGRkZGRicpXCJcclxuICAgICAgICAgICAgICBjeD1cIjE0Mi41XCIgY3k9XCIxNDIuNVwiIHI9XCIxNDIuNVwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjg1IDI4NVwiIGRhdGEtcmFkaXVtPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgIHN0eWxlPVwiei1pbmRleDogMTsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEuNXB4OyBsZWZ0OiAxcHg7IG9wYWNpdHk6IDAuMzc7IGhlaWdodDogNnB4OyBmaWx0ZXI6IGJsdXIoMC41cHgpO1wiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIFthdHRyLmZpbGxdPVwiZGlzYWJsZWQgPyAoY2hlY2tlZCA/ICcjZWRlZGVkJyA6ICcjZmZmZmZmJykgOiAoY2hlY2tlZCA/ICh3aW5kb3dCbHVyID8gJyNGRkZGRkYnIDogJyMwMDUwYTUnKSA6ICcjRkZGRkZGJylcIlxyXG4gICAgICAgICAgICAgIGN4PVwiMTQyLjVcIiBjeT1cIjE0Mi41XCIgcj1cIjE0Mi41XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtd3JhcFwiPnt7bGFiZWx9fTwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcblxyXG48IS0tICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiLS0+XHJcbjwhLS0gICAgICAgICAgICAgbmFtZT1cInJhZGlvMVwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgZGF0YS1yYWRpdW09XCJ0cnVlXCItLT5cclxuPCEtLSAgICAgICAgICAgICB2YWx1ZT1cIkkgZ290IGNoZWNrZWQhXCItLT5cclxuPCEtLSAgICAgICAgICAgICBjaGVja2VkPVwiXCItLT5cclxuPCEtLSAgICAgICAgICAgICBzdHlsZT1cInVzZXItc2VsZWN0OiBub25lOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGJvcmRlci13aWR0aDogMnB4OyBib3JkZXItc3R5bGU6IHNvbGlkOyBib3JkZXItY29sb3I6IHJnYigyMDQsIDEyNywgNDEpOyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyBwYWRkaW5nOiA4cHg7IG1hcmdpbjogMHB4O1wiPi0tPlxyXG48IS0tICAgICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIi0tPlxyXG48IS0tICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA3cHg7IGxlZnQ6IDVweDsgd2lkdGg6IDEwcHg7IGhlaWdodDogMTBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiByZ2IoNTEsIDUxLCA1MSk7XCI+PC9kaXY+LS0+XHJcbjwhLS0gICAgPC9kaXY+LS0+XHJcbjwhLS0gICAgPGRpdi0tPlxyXG48IS0tICAgICAgc3R5bGU9J3VzZXItc2VsZWN0OiBub25lOyBjdXJzb3I6IGRlZmF1bHQ7IGxpbmUtaGVpZ2h0OiAyNS45NnB4OyBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBGcnV0aWdlciwgXCJGcnV0aWdlciBMaW5vdHlwZVwiLCBcIkRlamF2dSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTVweDsgZGlzcGxheTogaW5saW5lOyBjb2xvcjogcmdiKDAsIDAsIDApOyc+LS0+XHJcbjwhLS0gICAgICBDaGVjayBtZSEtLT5cclxuIl19
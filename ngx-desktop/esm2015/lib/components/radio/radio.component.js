import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ControlValueAccessorAbstractComponent } from "../control-value-accessor-abstract.component";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-window-blur.directive";
import * as i3 from "@angular/common";
const _c0 = ["inputElement"];
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
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r24.disabled ? ctx_r24.checked ? "#919191" : "#FFFFFF" : ctx_r24.checked ? ctx_r24.windowBlur ? "#404040" : "#FFFFFF" : "#FFFFFF");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r24.disabled ? ctx_r24.checked ? "#ededed" : "#ffffff" : ctx_r24.checked ? ctx_r24.windowBlur ? "#FFFFFF" : "#0050a5" : "#FFFFFF");
} }
export class RadioComponent extends ControlValueAccessorAbstractComponent {
    constructor(ngxDesktopService, changeDetectorRef) {
        super();
        this.ngxDesktopService = ngxDesktopService;
        this.changeDetectorRef = changeDetectorRef;
        this.color = '#0063AE';
    }
    set os(os) {
        this._os = os;
    }
    get os() {
        return this.ngxDesktopService.getOs(this._os);
    }
    get borderColor() {
        return this.os === 'mac' ?
            (this.windowBlur ? '#B8B8B8' : (this.checked ? '#2C91FC' : '#B8B8B8')) :
            this.disabled ? '#999999' : (this.checked ? this.color : '#333333');
    }
    ngOnInit() {
    }
    writeValue(obj) {
        this.model = obj;
        this.checked = this.value === obj;
        this.changeDetectorRef.markForCheck();
    }
}
RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
RadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RadioComponent, selectors: [["ngx-desktop-radio"]], viewQuery: function RadioComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { os: "os", color: "color", label: "label", name: "name", value: "value", disabled: "disabled", checked: "checked" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioComponent),
                multi: true
            }]), i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 17, consts: [["data-radium", "true", 2, "display", "inline-block", 3, "ngxDesktopWindowBlur"], ["data-radium", "true", 1, "radio-wrap"], ["data-radium", "true", 1, "radio-input-wrap"], ["type", "radio", "data-radium", "true", 3, "value", "disabled", "checked", "change"], ["inputElement", ""], ["data-radium", "true", "class", "windows-radio-style", 4, "ngIf"], ["data-radium", "true", "style", "position: absolute; top: 7px; left: 5px; width: 6px; height: 6px; opacity: 1; transform: scale(1); transition: opacity 0s ease 0s, transform 0.2s ease 0s;", 4, "ngIf"], [1, "label-wrap"], ["data-radium", "true", 1, "windows-radio-style"], ["data-radium", "true", 2, "position", "absolute", "top", "7px", "left", "5px", "width", "6px", "height", "6px", "opacity", "1", "transform", "scale(1)", "transition", "opacity 0s ease 0s, transform 0.2s ease 0s"], ["viewBox", "0 0 285 285", "data-radium", "true", 2, "z-index", "2", "position", "absolute", "top", "0", "left", "1px", "height", "6px"], ["cx", "142.5", "cy", "142.5", "r", "142.5"], ["viewBox", "0 0 285 285", "data-radium", "true", 2, "z-index", "1", "position", "absolute", "top", "1.5px", "left", "1px", "opacity", "0.37", "height", "6px", "filter", "blur(0.5px)"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("ngxDesktopWindowBlur", function RadioComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("change", function RadioComponent_Template_input_change_3_listener() { i0.ɵɵrestoreView(_r25); const _r22 = i0.ɵɵreference(4); _r22.checked = true; ctx.checked = true; return ctx.changeValue(ctx.value); });
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-radio',
                templateUrl: './radio.component.html',
                styleUrls: ['./radio.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RadioComponent),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9yYWRpby9yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFVBQVUsRUFHVixLQUFLLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMscUNBQXFDLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7OztJQ08zRix5QkFBOEY7OztJQUM5Riw4QkFFRTtJQUFBLG1CQUVFO0lBRkYsK0JBRUU7SUFBQSw2QkFDMkM7SUFDN0MsaUJBQU07SUFDTiwrQkFFRTtJQUFBLDZCQUMyQztJQUM3QyxpQkFBTTtJQUNSLGlCQUFNOzs7SUFSTSxlQUEySDtJQUEzSCw2SkFBMkg7SUFLM0gsZUFBeUg7SUFBekgsNkpBQXlIOztBREE3SSxNQUFNLE9BQU8sY0FBZSxTQUFRLHFDQUFxQztJQXNDdkUsWUFBb0IsaUJBQW9DLEVBQ3BDLGlCQUFvQztRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQUZVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNCeEQsVUFBSyxHQUFpQixTQUFTLENBQUM7SUE2QmhDLENBQUM7SUF0Q0QsSUFDSSxFQUFFLENBQUMsRUFBVztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBdUJELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQztZQUN4QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQU9ELFFBQVE7SUFDUixDQUFDO0lBR0QsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7NEVBbkRVLGNBQWM7bURBQWQsY0FBYzs7Ozs7d0tBTmQsQ0FBQztnQkFDVixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDN0MsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDOztRQzNCRiw4QkFPRTtRQUpHLHVKQUE0QztRQUkvQyxnQ0FFRTtRQUFBLDhCQUNFO1FBQUEsbUNBU0E7UUFITyw0SkFBaUMsSUFBSSxnQkFBVyxJQUFJLFNBQUMsMEJBQWtCLElBQUU7UUFOaEYsaUJBU0E7UUFBQSwrREFBd0Y7UUFDeEYsK0RBRUU7UUFXSixpQkFBTTtRQUNOLCtCQUF5QjtRQUFBLFlBQVM7UUFBQSxpQkFBTztRQUMzQyxpQkFBUTtRQUNWLGlCQUFNOztRQWxDRCxxQkFBWTtRQUVaLHNDQUF5Qix3QkFBQSwwQkFBQTtRQU9qQixlQUFpQztRQUFqQywrQ0FBaUM7UUFFakMsaUNBQWUsMEJBQUEsd0JBQUE7UUFEZixnQ0FBa0I7UUFPRCxlQUFtQztRQUFuQywwREFBbUM7UUFDbkMsZUFBb0I7UUFBcEIsdUNBQW9CO1FBY3JCLGVBQVM7UUFBVCwrQkFBUzs7a0RETDNCLGNBQWM7Y0FWMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDN0MsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQzthQUNIOztrQkFJRSxLQUFLOztrQkFRTCxLQUFLOztrQkFLTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUd4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3ItYWJzdHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7T1NfVE9LRU4sIE9zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge09zVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy9vcy51dGlsc1wiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5pbXBvcnQge01hY0NvbG9yLCBXaW5kb3dzQ29sb3J9IGZyb20gXCIuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbG9yVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy9jb2xvci51dGlsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC1yYWRpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0NvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBleHRlbmRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgcHJpdmF0ZSBfb3M6IE9zVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZXQgb3Mob3M6IE9zVHlwZXMpIHtcclxuICAgIHRoaXMuX29zID0gb3M7XHJcbiAgfVxyXG4gIGdldCBvcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldE9zKHRoaXMuX29zKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IFdpbmRvd3NDb2xvciA9ICcjMDA2M0FFJztcclxuXHJcbiAgd2luZG93Qmx1cjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZChcImlucHV0RWxlbWVudFwiLCB7c3RhdGljOiB0cnVlfSlcclxuICBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2hlY2tlZDogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IGJvcmRlckNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3MgPT09ICdtYWMnID9cclxuICAgICAgKHRoaXMud2luZG93Qmx1ciA/ICcjQjhCOEI4JyA6ICh0aGlzLmNoZWNrZWQgPyAnIzJDOTFGQycgOiAnI0I4QjhCOCcpKSA6XHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPyAnIzk5OTk5OScgOiAodGhpcy5jaGVja2VkID8gdGhpcy5jb2xvciA6ICcjMzMzMzMzJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kZWwgPSBvYmo7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09PSBvYmo7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCIgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCJcclxuICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrXCJcclxuICAgICAgIFtjbGFzc109XCJvc1wiXHJcbiAgICAgICAobmd4RGVza3RvcFdpbmRvd0JsdXIpPVwid2luZG93Qmx1ciA9ICRldmVudFwiXHJcbiAgICAgICBbY2xhc3MuYmx1cl09XCJ3aW5kb3dCbHVyXCJcclxuICAgICAgIFtjbGFzcy5jaGVja2VkXT1cImNoZWNrZWRcIlxyXG4gICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICA8bGFiZWwgZGF0YS1yYWRpdW09XCJ0cnVlXCJcclxuICAgICAgICAgICBjbGFzcz1cInJhZGlvLXdyYXBcIj5cclxuICAgICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInJhZGlvLWlucHV0LXdyYXBcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cImJvcmRlckNvbG9yXCJcclxuICAgICAgICAgICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXHJcbiAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiaW5wdXRFbGVtZW50LmNoZWNrZWQgPSB0cnVlO2NoZWNrZWQgPSB0cnVlO2NoYW5nZVZhbHVlKHZhbHVlKTtcIlxyXG4gICAgICAgICAgICAgICAjaW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgICAgIGRhdGEtcmFkaXVtPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgKm5nSWY9XCJvcyA9PT0gJ3dpbmRvd3MnICYmIGNoZWNrZWRcIiBjbGFzcz1cIndpbmRvd3MtcmFkaW8tc3R5bGVcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiICpuZ0lmPVwib3MgPT09ICdtYWMnXCJcclxuICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDdweDsgbGVmdDogNXB4OyB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwcyBlYXNlIDBzLCB0cmFuc2Zvcm0gMC4ycyBlYXNlIDBzO1wiPlxyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI4NSAyODVcIiBkYXRhLXJhZGl1bT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICBzdHlsZT1cInotaW5kZXg6IDI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAxcHg7IGhlaWdodDogNnB4O1wiPlxyXG4gICAgICAgICAgICA8Y2lyY2xlIFthdHRyLmZpbGxdPVwiZGlzYWJsZWQgPyAoY2hlY2tlZCA/ICgnIzkxOTE5MScpIDogJyNGRkZGRkYnKSA6IChjaGVja2VkID8gKHdpbmRvd0JsdXIgPyAnIzQwNDA0MCcgOiAnI0ZGRkZGRicpIDogJyNGRkZGRkYnKVwiXHJcbiAgICAgICAgICAgICAgY3g9XCIxNDIuNVwiIGN5PVwiMTQyLjVcIiByPVwiMTQyLjVcIj48L2NpcmNsZT5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI4NSAyODVcIiBkYXRhLXJhZGl1bT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICBzdHlsZT1cInotaW5kZXg6IDE7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxLjVweDsgbGVmdDogMXB4OyBvcGFjaXR5OiAwLjM3OyBoZWlnaHQ6IDZweDsgZmlsdGVyOiBibHVyKDAuNXB4KTtcIj5cclxuICAgICAgICAgICAgPGNpcmNsZSBbYXR0ci5maWxsXT1cImRpc2FibGVkID8gKGNoZWNrZWQgPyAnI2VkZWRlZCcgOiAnI2ZmZmZmZicpIDogKGNoZWNrZWQgPyAod2luZG93Qmx1ciA/ICcjRkZGRkZGJyA6ICcjMDA1MGE1JykgOiAnI0ZGRkZGRicpXCJcclxuICAgICAgICAgICAgICBjeD1cIjE0Mi41XCIgY3k9XCIxNDIuNVwiIHI9XCIxNDIuNVwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLXdyYXBcIj57e2xhYmVsfX08L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG5cclxuPCEtLSAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIi0tPlxyXG48IS0tICAgICAgICAgICAgIG5hbWU9XCJyYWRpbzFcIi0tPlxyXG48IS0tICAgICAgICAgICAgIGRhdGEtcmFkaXVtPVwidHJ1ZVwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgdmFsdWU9XCJJIGdvdCBjaGVja2VkIVwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgY2hlY2tlZD1cIlwiLS0+XHJcbjwhLS0gICAgICAgICAgICAgc3R5bGU9XCJ1c2VyLXNlbGVjdDogbm9uZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBib3JkZXItd2lkdGg6IDJweDsgYm9yZGVyLXN0eWxlOiBzb2xpZDsgYm9yZGVyLWNvbG9yOiByZ2IoMjA0LCAxMjcsIDQxKTsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgcGFkZGluZzogOHB4OyBtYXJnaW46IDBweDtcIj4tLT5cclxuPCEtLSAgICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCItLT5cclxuPCEtLSAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogN3B4OyBsZWZ0OiA1cHg7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogcmdiKDUxLCA1MSwgNTEpO1wiPjwvZGl2Pi0tPlxyXG48IS0tICAgIDwvZGl2Pi0tPlxyXG48IS0tICAgIDxkaXYtLT5cclxuPCEtLSAgICAgIHN0eWxlPSd1c2VyLXNlbGVjdDogbm9uZTsgY3Vyc29yOiBkZWZhdWx0OyBsaW5lLWhlaWdodDogMjUuOTZweDsgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgRnJ1dGlnZXIsIFwiRnJ1dGlnZXIgTGlub3R5cGVcIiwgXCJEZWphdnUgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDE1cHg7IGRpc3BsYXk6IGlubGluZTsgY29sb3I6IHJnYigwLCAwLCAwKTsnPi0tPlxyXG48IS0tICAgICAgQ2hlY2sgbWUhLS0+XHJcbiJdfQ==
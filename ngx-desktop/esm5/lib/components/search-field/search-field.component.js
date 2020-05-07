import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { noop } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../pipes/style-value.pipe";
function SearchFieldComponent_ng_container_13_ng_template_1_Template(rf, ctx) { }
function SearchFieldComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SearchFieldComponent_ng_container_13_ng_template_1_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r98 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r98.icon);
} }
function SearchFieldComponent__svg_svg_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 12);
    i0.ɵɵelement(1, "path", 13);
    i0.ɵɵelement(2, "line", 14);
    i0.ɵɵelementEnd();
} }
var SearchFieldComponent = /** @class */ (function () {
    function SearchFieldComponent() {
        this.placeholder = 'Search';
        this.onCancel = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onEnter = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    SearchFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SearchFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SearchFieldComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    SearchFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SearchFieldComponent.prototype.ngOnInit = function () {
    };
    SearchFieldComponent.ɵfac = function SearchFieldComponent_Factory(t) { return new (t || SearchFieldComponent)(); };
    SearchFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchFieldComponent, selectors: [["ngx-desktop-search-field"]], inputs: { label: "label", placeholder: "placeholder", icon: "icon", color: "color", width: "width", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", margin: "margin" }, outputs: { onCancel: "onCancel", onChange: "onChange", onKeydown: "onKeydown", onEnter: "onEnter" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return SearchFieldComponent; }),
                    multi: true
                }])], decls: 18, vars: 28, consts: [[2, "position", "relative"], ["data-radium", "true", 2, "position", "relative", "z-index", "2"], ["data-radium", "true", 2, "position", "relative"], ["data-radium", "true"], ["data-radium", "true", 1, "icon-wrap"], ["data-radium", "true", 2, "display", "flex", "align-items", "center", "padding-top", "2px"], ["data-radium", "true", 2, "margin-left", "6px", "margin-right", "6px", "padding-top", "2px"], [4, "ngIf"], ["x", "0px", "y", "0px", "width", "12px", "height", "12px", "viewBox", "0 0 12 12", "data-radium", "true", 4, "ngIf"], [1, "placeholder"], ["type", "text", "data-radium", "true", 3, "ngModel", "ngModelChange", "focus", "blur", "change", "keydown", "keydown.enter"], [3, "ngTemplateOutlet"], ["x", "0px", "y", "0px", "width", "12px", "height", "12px", "viewBox", "0 0 12 12", "data-radium", "true"], ["fill", "none", "stroke", "#686868", "stroke-width", "1.1", "stroke-miterlimit", "10", "d", "M4.5,0.5c2.3,0,3.9,1.1,4.3,4.1C8.5,7.4,7.6,8.3,4.5,8.7c-2.8-0.3-4-2-4-4.3C0.5,1.6,2.6,0.5,4.5,0.5z"], ["fill", "none", "stroke", "#686868", "stroke-width", "1.1", "stroke-miterlimit", "10", "x1", "7.9", "y1", "7.9", "x2", "11.1", "y2", "11.1"]], template: function SearchFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵpipe(1, "styleValue");
            i0.ɵɵpipe(2, "styleValue");
            i0.ɵɵpipe(3, "styleValue");
            i0.ɵɵpipe(4, "styleValue");
            i0.ɵɵpipe(5, "styleValue");
            i0.ɵɵpipe(6, "styleValue");
            i0.ɵɵelementStart(7, "div", 1);
            i0.ɵɵelementStart(8, "div", 2);
            i0.ɵɵelement(9, "div", 3);
            i0.ɵɵelementStart(10, "div", 4);
            i0.ɵɵelementStart(11, "div", 5);
            i0.ɵɵelementStart(12, "div", 6);
            i0.ɵɵtemplate(13, SearchFieldComponent_ng_container_13_Template, 2, 1, "ng-container", 7);
            i0.ɵɵtemplate(14, SearchFieldComponent__svg_svg_14_Template, 3, 0, "svg", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span", 9);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "input", 10);
            i0.ɵɵlistener("ngModelChange", function SearchFieldComponent_Template_input_ngModelChange_17_listener($event) { return ctx.value = $event; })("focus", function SearchFieldComponent_Template_input_focus_17_listener() { return ctx.focus = true; })("blur", function SearchFieldComponent_Template_input_blur_17_listener() { return ctx.focus = false; })("change", function SearchFieldComponent_Template_input_change_17_listener($event) { return ctx.onChange.emit($event); })("keydown", function SearchFieldComponent_Template_input_keydown_17_listener($event) { return ctx.onKeydown.emit($event); })("keydown.enter", function SearchFieldComponent_Template_input_keydown_enter_17_listener($event) { return ctx.onEnter.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("margin", i0.ɵɵpipeBind1(1, 16, ctx.margin))("margin-bottom", i0.ɵɵpipeBind1(2, 18, ctx.marginBottom))("margin-left", i0.ɵɵpipeBind1(3, 20, ctx.marginLeft))("margin-right", i0.ɵɵpipeBind1(4, 22, ctx.marginRight))("margin-top", i0.ɵɵpipeBind1(5, 24, ctx.marginTop))("width", i0.ɵɵpipeBind1(6, 26, ctx.width));
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngIf", ctx.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.icon);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.placeholder);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.value);
        } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgTemplateOutlet], pipes: [i3.StyleValuePipe], styles: ["input[_ngcontent-%COMP%]{position:relative;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-width:1px;border-style:solid;border-color:#d0d0d0 #cacaca #afafaf;box-shadow:none;padding:4px 19px 3px 24px;line-height:15px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;letter-spacing:.4px;width:100%;box-sizing:border-box;outline:0;border-radius:4px;background-image:-webkit-linear-gradient(top,#fff 0,#f1f1f1 100%)}.placeholder[_ngcontent-%COMP%]{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:12px;color:silver;line-height:14.4px}.icon-wrap[_ngcontent-%COMP%]{position:absolute;z-index:4;display:flex;justify-content:center;align-items:center;width:100%;height:100%;padding-right:18px;box-sizing:border-box;pointer-events:none}@-webkit-keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-2px;left:-2px;border-radius:6px;border-width:2px;box-shadow:0 0 1px 0 rgba(125,195,242,.7)}}@keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-2px;left:-2px;border-radius:6px;border-width:2px;box-shadow:0 0 1px 0 rgba(125,195,242,.7)}}"] });
    return SearchFieldComponent;
}());
export { SearchFieldComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchFieldComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-search-field',
                templateUrl: './search-field.component.html',
                styleUrls: ['./search-field.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SearchFieldComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], icon: [{
            type: Input
        }], color: [{
            type: Input
        }], onCancel: [{
            type: Output
        }], onChange: [{
            type: Output
        }], onKeydown: [{
            type: Output
        }], onEnter: [{
            type: Output
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFHVixLQUFLLEVBRUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDQWQsNkJBQ0U7SUFBQSxzR0FBdUM7SUFDekMsMEJBQWU7OztJQURBLGVBQXlCO0lBQXpCLCtDQUF5Qjs7O0lBRXhDLG1CQUNFO0lBREYsK0JBQ0U7SUFBQSwyQkFDb0g7SUFDcEgsMkJBQ3VCO0lBQ3pCLGlCQUFNOztBRE5sQjtJQStERTtRQWhEQSxnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQU0vQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVwQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUVyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFOUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBa0I1QyxzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztJQWtCMUMsQ0FBQztJQWhCRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxnREFBaUIsR0FBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFJRCx1Q0FBUSxHQUFSO0lBQ0EsQ0FBQzs0RkF6RFUsb0JBQW9COzZEQUFwQixvQkFBb0IsdVpBTnBCLENBQUM7b0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7b0JBQ25ELEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUM7WUN4QkosOEJBT0U7Ozs7Ozs7WUFBQSw4QkFDRTtZQUFBLDhCQUNFO1lBQUEseUJBQ007WUFDTiwrQkFDRTtZQUFBLCtCQUNFO1lBQUEsK0JBQ0U7WUFBQSx5RkFDRTtZQUVGLDRFQUNFO1lBS0osaUJBQU07WUFDTixnQ0FBMEI7WUFBQSxhQUFlO1lBQUEsaUJBQU87WUFDbEQsaUJBQU07WUFDUixpQkFBTTtZQUNOLGtDQU9GO1lBTlMsNklBQW1CLGdHQUNGLElBQUksSUFERiw4RkFFSCxLQUFLLElBRkYsNEZBR1QseUJBQXFCLElBSFosOEZBSVIsMEJBQXNCLElBSmQsMEdBS0Ysd0JBQW9CLElBTGxCO1lBRDFCLGlCQU9GO1lBQUEsaUJBQU07WUFDUixpQkFBTTtZQUNSLGlCQUFNOztZQW5DRCwyREFBb0MsMERBQUEsc0RBQUEsd0RBQUEsb0RBQUEsMkNBQUE7WUFhZixnQkFBWTtZQUFaLCtCQUFZO1lBRzZELGVBQWE7WUFBYixnQ0FBYTtZQU81RSxlQUFlO1lBQWYscUNBQWU7WUFJdEMsZUFBbUI7WUFBbkIsbUNBQW1COzsrQkQ1QmhDO0NBb0ZDLEFBcEVELElBb0VDO1NBMURZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBVmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7d0JBQ25ELEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7YUFDSDs7a0JBR0UsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3ItYWJzdHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7T1NfVE9LRU4sIE9zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge25vb3B9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLXNlYXJjaC1maWVsZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFt7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlYXJjaEZpZWxkQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnU2VhcmNoJztcclxuICBASW5wdXQoKVxyXG4gIGljb246IFRlbXBsYXRlUmVmPFNWR0VsZW1lbnQ+O1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IHN0cmluZztcclxuICBAT3V0cHV0KClcclxuICBvbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25LZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5SaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbiAgZm9jdXM6IGJvb2xlYW47XHJcblxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xyXG4gIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCJcclxuICAgICBbc3R5bGUubWFyZ2luXT1cIm1hcmdpbiB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpbkxlZnRdPVwibWFyZ2luTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5SaWdodF09XCJtYXJnaW5SaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5Ub3BdPVwibWFyZ2luVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoIHwgc3R5bGVWYWx1ZVwiPlxyXG4gIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDI7XCI+XHJcbiAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG4gICAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cImljb24td3JhcFwiPlxyXG4gICAgICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nLXRvcDogMnB4O1wiPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7IG1hcmdpbi1yaWdodDogNnB4OyBwYWRkaW5nLXRvcDogMnB4O1wiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjEycHhcIiBoZWlnaHQ9XCIxMnB4XCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIGRhdGEtcmFkaXVtPVwidHJ1ZVwiICpuZ0lmPVwiIWljb25cIj5cclxuICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM2ODY4NjhcIiBzdHJva2Utd2lkdGg9XCIxLjFcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQuNSwwLjVjMi4zLDAsMy45LDEuMSw0LjMsNC4xQzguNSw3LjQsNy42LDguMyw0LjUsOC43Yy0yLjgtMC4zLTQtMi00LTQuM0MwLjUsMS42LDIuNiwwLjUsNC41LDAuNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPGxpbmUgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjNjg2ODY4XCIgc3Ryb2tlLXdpZHRoPVwiMS4xXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHgxPVwiNy45XCIgeTE9XCI3LjlcIiB4Mj1cIjExLjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHkyPVwiMTEuMVwiPjwvbGluZT5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGxhY2Vob2xkZXJcIj57e3BsYWNlaG9sZGVyfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkYXRhLXJhZGl1bT1cInRydWVcIlxyXG4gICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAoZm9jdXMpPVwiZm9jdXMgPSB0cnVlO1wiXHJcbiAgICAgICAgICAgICAoYmx1cik9XCJmb2N1cyA9IGZhbHNlO1wiXHJcbiAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleWRvd24uZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRW50ZXIuZW1pdCgkZXZlbnQpXCI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
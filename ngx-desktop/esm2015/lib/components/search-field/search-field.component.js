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
    const ctx_r26 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r26.icon);
} }
function SearchFieldComponent__svg_svg_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 12);
    i0.ɵɵelement(1, "path", 13);
    i0.ɵɵelement(2, "line", 14);
    i0.ɵɵelementEnd();
} }
export class SearchFieldComponent {
    constructor() {
        this.placeholder = 'Search';
        this.onCancel = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onEnter = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
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
SearchFieldComponent.ɵfac = function SearchFieldComponent_Factory(t) { return new (t || SearchFieldComponent)(); };
SearchFieldComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchFieldComponent, selectors: [["ngx-desktop-search-field"]], inputs: { label: "label", placeholder: "placeholder", icon: "icon", color: "color", width: "width", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", margin: "margin" }, outputs: { onCancel: "onCancel", onChange: "onChange", onKeydown: "onKeydown", onEnter: "onEnter" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SearchFieldComponent),
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchFieldComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-search-field',
                templateUrl: './search-field.component.html',
                styleUrls: ['./search-field.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SearchFieldComponent),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFHVixLQUFLLEVBRUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lDQWQsNkJBQ0U7SUFBQSxzR0FBdUM7SUFDekMsMEJBQWU7OztJQURBLGVBQXlCO0lBQXpCLCtDQUF5Qjs7O0lBRXhDLG1CQUNFO0lBREYsK0JBQ0U7SUFBQSwyQkFDb0g7SUFDcEgsMkJBQ3VCO0lBQ3pCLGlCQUFNOztBRElsQixNQUFNLE9BQU8sb0JBQW9CO0lBcUQvQjtRQWhEQSxnQkFBVyxHQUFXLFFBQVEsQ0FBQztRQU0vQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVwQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUVyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFOUMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBa0I1QyxzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztJQWtCMUMsQ0FBQztJQWhCRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFJRCxRQUFRO0lBQ1IsQ0FBQzs7d0ZBekRVLG9CQUFvQjt5REFBcEIsb0JBQW9CLHVaQU5wQixDQUFDO2dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQztRQ3hCSiw4QkFPRTs7Ozs7OztRQUFBLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSx5QkFDTTtRQUNOLCtCQUNFO1FBQUEsK0JBQ0U7UUFBQSwrQkFDRTtRQUFBLHlGQUNFO1FBRUYsNEVBQ0U7UUFLSixpQkFBTTtRQUNOLGdDQUEwQjtRQUFBLGFBQWU7UUFBQSxpQkFBTztRQUNsRCxpQkFBTTtRQUNSLGlCQUFNO1FBQ04sa0NBT0Y7UUFOUyw2SUFBbUIsZ0dBQ0YsSUFBSSxJQURGLDhGQUVILEtBQUssSUFGRiw0RkFHVCx5QkFBcUIsSUFIWiw4RkFJUiwwQkFBc0IsSUFKZCwwR0FLRix3QkFBb0IsSUFMbEI7UUFEMUIsaUJBT0Y7UUFBQSxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBbkNELDJEQUFvQywwREFBQSxzREFBQSx3REFBQSxvREFBQSwyQ0FBQTtRQWFmLGdCQUFZO1FBQVosK0JBQVk7UUFHNkQsZUFBYTtRQUFiLGdDQUFhO1FBTzVFLGVBQWU7UUFBZixxQ0FBZTtRQUl0QyxlQUFtQjtRQUFuQixtQ0FBbUI7O2tEREZuQixvQkFBb0I7Y0FWaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2FBQ0g7O2tCQUdFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yQWJzdHJhY3RDb21wb25lbnR9IGZyb20gXCIuLi9jb250cm9sLXZhbHVlLWFjY2Vzc29yLWFic3RyYWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09TX1RPS0VOLCBPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtub29wfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC1zZWFyY2gtZmllbGQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1maWVsZC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWFyY2hGaWVsZENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlYXJjaCc7XHJcbiAgQElucHV0KClcclxuICBpY29uOiBUZW1wbGF0ZVJlZjxTVkdFbGVtZW50PjtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uS2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuICBAT3V0cHV0KClcclxuICBvbkVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbkJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpblRvcDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luOiBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG4gIGZvY3VzOiBib29sZWFuO1xyXG5cclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcclxuICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSBvYmo7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXHJcbiAgICAgW3N0eWxlLm1hcmdpbl09XCJtYXJnaW4gfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luQm90dG9tXT1cIm1hcmdpbkJvdHRvbSB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5MZWZ0XT1cIm1hcmdpbkxlZnQgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luUmlnaHRdPVwibWFyZ2luUmlnaHQgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luVG9wXT1cIm1hcmdpblRvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IHN0eWxlVmFsdWVcIj5cclxuICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAyO1wiPlxyXG4gICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cclxuICAgICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJpY29uLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZy10b3A6IDJweDtcIj5cclxuICAgICAgICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNnB4OyBtYXJnaW4tcmlnaHQ6IDZweDsgcGFkZGluZy10b3A6IDJweDtcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImljb25cIj5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMnB4XCIgaGVpZ2h0PVwiMTJweFwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBkYXRhLXJhZGl1bT1cInRydWVcIiAqbmdJZj1cIiFpY29uXCI+XHJcbiAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjNjg2ODY4XCIgc3Ryb2tlLXdpZHRoPVwiMS4xXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk00LjUsMC41YzIuMywwLDMuOSwxLjEsNC4zLDQuMUM4LjUsNy40LDcuNiw4LjMsNC41LDguN2MtMi44LTAuMy00LTItNC00LjNDMC41LDEuNiwyLjYsMC41LDQuNSwwLjV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDxsaW5lIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzY4Njg2OFwiIHN0cm9rZS13aWR0aD1cIjEuMVwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiB4MT1cIjcuOVwiIHkxPVwiNy45XCIgeDI9XCIxMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICB5Mj1cIjExLjFcIj48L2xpbmU+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsYWNlaG9sZGVyXCI+e3twbGFjZWhvbGRlcn19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGF0YS1yYWRpdW09XCJ0cnVlXCJcclxuICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgKGZvY3VzKT1cImZvY3VzID0gdHJ1ZTtcIlxyXG4gICAgICAgICAgICAgKGJsdXIpPVwiZm9jdXMgPSBmYWxzZTtcIlxyXG4gICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlkb3duLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVudGVyLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=
import { Component, ContentChildren, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ControlValueAccessorAbstractComponent } from "../control-value-accessor-abstract.component";
import { SegmentedControlItemComponent } from "../segmented-control-item/segmented-control-item.component";
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ngx-desktop-window-blur.directive";
import * as i2 from "@angular/common";
import * as i3 from "../../pipes/style-value.pipe";
function SegmentedControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("mousedown", function SegmentedControlComponent_div_8_Template_div_mousedown_0_listener() { const segmented_r30 = ctx.$implicit; return segmented_r30.labelMousedown = true; })("click", function SegmentedControlComponent_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r34); const i_r31 = ctx.index; const segmented_r30 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.selectTab(i_r31, segmented_r30); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const segmented_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r29 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", segmented_r30.disabled)("selected", i_r31 === ctx_r29.model)("mousedown", segmented_r30.labelMousedown)("blur", ctx_r29.windowBlur);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", segmented_r30.label, " ");
} }
const _c0 = ["*"];
export class SegmentedControlComponent extends ControlValueAccessorAbstractComponent {
    constructor() {
        super();
        this.height = '100%';
        this.width = '100%';
        this.backgroundColor = 'rgba(0, 0, 0, 0.04)';
    }
    ngOnInit() {
        if (this.model === undefined) {
            setTimeout(() => this.selectTab(0));
        }
    }
    writeValue(obj) {
        this.model = obj;
        this.selectTab(this.model);
    }
    selectTab(index, segmented) {
        if (!this.segmentedList) {
            return;
        }
        const lastTab = this.segmentedList.find(i => i.show);
        if (lastTab) {
            lastTab.show = false;
        }
        if (!segmented) {
            segmented = this.segmentedList.find((s, i) => i === index);
        }
        if (segmented) {
            segmented.show = true;
            this.model = index;
            super.changeValue(index);
        }
    }
}
SegmentedControlComponent.ɵfac = function SegmentedControlComponent_Factory(t) { return new (t || SegmentedControlComponent)(); };
SegmentedControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SegmentedControlComponent, selectors: [["ngx-desktop-segmented-control"]], contentQueries: function SegmentedControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, SegmentedControlItemComponent, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.segmentedList = _t);
    } }, inputs: { height: "height", width: "width", backgroundColor: "backgroundColor", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SegmentedControlComponent),
                multi: true
            }]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 17, vars: 50, consts: [[2, "user-select", "none", "cursor", "default", "flex", "1 1 0", 3, "ngxDesktopWindowBlur"], [1, "tab-label-wrap"], ["data-radium", "true", 3, "disabled", "selected", "mousedown", "blur", "click", 4, "ngFor", "ngForOf"], [1, "content-wrap"], ["data-radium", "true", 3, "mousedown", "click"]], template: function SegmentedControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("ngxDesktopWindowBlur", function SegmentedControlComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
        i0.ɵɵpipe(1, "styleValue");
        i0.ɵɵpipe(2, "styleValue");
        i0.ɵɵpipe(3, "styleValue");
        i0.ɵɵpipe(4, "styleValue");
        i0.ɵɵpipe(5, "styleValue");
        i0.ɵɵpipe(6, "styleValue");
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵtemplate(8, SegmentedControlComponent_div_8_Template, 2, 9, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 3);
        i0.ɵɵpipe(10, "styleValue");
        i0.ɵɵpipe(11, "styleValue");
        i0.ɵɵpipe(12, "styleValue");
        i0.ɵɵpipe(13, "styleValue");
        i0.ɵɵpipe(14, "styleValue");
        i0.ɵɵpipe(15, "styleValue");
        i0.ɵɵprojection(16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("margin", i0.ɵɵpipeBind1(1, 25, ctx.margin))("margin-bottom", i0.ɵɵpipeBind1(2, 27, ctx.marginBottom))("margin-right", i0.ɵɵpipeBind1(3, 29, ctx.marginRight))("margin-top", i0.ɵɵpipeBind1(4, 31, ctx.marginTop))("margin-left", i0.ɵɵpipeBind1(5, 33, ctx.marginLeft))("width", i0.ɵɵpipeBind1(6, 35, ctx.width));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.segmentedList);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", i0.ɵɵpipeBind1(10, 37, ctx.height))("padding", i0.ɵɵpipeBind2(11, 39, ctx.padding, "23px 18px 22px 18px"))("padding-top", i0.ɵɵpipeBind1(12, 42, ctx.paddingTop))("padding-bottom", i0.ɵɵpipeBind1(13, 44, ctx.paddingBottom))("padding-left", i0.ɵɵpipeBind1(14, 46, ctx.paddingLeft))("padding-right", i0.ɵɵpipeBind1(15, 48, ctx.paddingRight));
    } }, directives: [i1.NgxDesktopWindowBlurDirective, i2.NgForOf], pipes: [i3.StyleValuePipe], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;width:100%}.tab-label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;width:100%;display:flex;justify-content:center;position:relative;z-index:1}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;background:#fff;border-top:1px solid #c7c7c7;border-bottom:1px solid #a6a6a6;border-right:1px solid #d8d8d8;padding:1px 12px 2px;line-height:16px;font-size:13px;box-shadow:rgba(0,0,0,.04) 0 1px,rgba(0,0,0,.1) 0 0 .5px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif}.tab-label-wrap[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#5ab2f6 0,#0082fa 100%);border-width:1px 0 1px 1px;border-style:solid;border-color:#30a0f5 #0080f7 #0060fa;color:#fff}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{border-width:1px;border-style:solid;border-top-left-radius:4px;border-bottom-left-radius:4px;border-color:#c7c7c7 #d8d8d8 #a6a6a6 #b8b8b8}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-right:1px solid #b8b8b8}.tab-label-wrap[_ngcontent-%COMP%]   div.selected.mousedown[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#3397f9 0,#0068df 100%);border-color:#0093f9 #0061e9 #0040d8}.tab-label-wrap[_ngcontent-%COMP%]   div.selected.blur[_ngcontent-%COMP%]{background:#e5e5e5;border-color:#c7c7c7 #b7b7b7 #a6a6a6;color:#000;border-left:none}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child.selected.blur{border-color:#c7c7c7 #b7b7b7 #b7b7b7 #a6a6a6;border-left:1px solid #b7b7b7}.tab-label-wrap[_ngcontent-%COMP%]   div.mousedown[_ngcontent-%COMP%]{background:#f0f0f0}.content-wrap[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;flex:1 1 0;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.07) rgba(0,0,0,.035) rgba(0,0,0,.027);border-radius:4px;position:relative;margin-top:-11px;z-index:0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SegmentedControlComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-segmented-control',
                templateUrl: './segmented-control.component.html',
                styleUrls: ['./segmented-control.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SegmentedControlComponent),
                        multi: true
                    }]
            }]
    }], function () { return []; }, { segmentedList: [{
            type: ContentChildren,
            args: [SegmentedControlItemComponent]
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], backgroundColor: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudGVkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBRVYsS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMscUNBQXFDLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRyxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQzs7Ozs7OztJQ0pyRyw4QkFRRTtJQUpHLHFMQUF3QyxJQUFJLElBQUMsaVFBQUE7SUFJaEQsWUFDRjtJQUFBLGlCQUFNOzs7OztJQVBELGtEQUFxQyxxQ0FBQSwyQ0FBQSw0QkFBQTtJQU14QyxlQUNGO0lBREUsb0RBQ0Y7OztBRE9KLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxxQ0FBcUM7SUFpQ2xGO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUE3QlYsV0FBTSxHQUFvQixNQUFNLENBQUM7UUFFakMsVUFBSyxHQUFvQixNQUFNLENBQUM7UUFFaEMsb0JBQWUsR0FBVyxxQkFBcUIsQ0FBQztJQTBCaEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsU0FBeUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOztrR0FoRVUseUJBQXlCOzhEQUF6Qix5QkFBeUI7b0NBRW5CLDZCQUE2Qjs7OztrWUFSbkMsQ0FBQztnQkFDVixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN4RCxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7O1FDdkJKLDhCQVFFO1FBREcsa0tBQTRDOzs7Ozs7O1FBQy9DLDhCQUNFO1FBQUEsMEVBUUU7UUFXSixpQkFBTTtRQUNOLDhCQU9JOzs7Ozs7O1FBQUEsbUJBQVk7UUFFaEIsaUJBQU07UUFDUixpQkFBTTs7UUF0Q0QsMkRBQW9DLDBEQUFBLHdEQUFBLG9EQUFBLHNEQUFBLDJDQUFBO1FBU2hDLGVBQTJEO1FBQTNELDJDQUEyRDtRQW9CN0QsZUFBb0M7UUFBcEMsNERBQW9DLHVFQUFBLHVEQUFBLDZEQUFBLHlEQUFBLDJEQUFBOztrRERMOUIseUJBQXlCO2NBVnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1osQ0FBQzthQUNIOztrQkFHRSxlQUFlO21CQUFDLDZCQUE2Qjs7a0JBRTdDLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTZWdtZW50ZWRDb250cm9sSXRlbUNvbXBvbmVudH0gZnJvbSBcIi4uL3NlZ21lbnRlZC1jb250cm9sLWl0ZW0vc2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3Atc2VnbWVudGVkLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VnbWVudGVkLWNvbnRyb2wuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VnbWVudGVkQ29udHJvbENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWdtZW50ZWRDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFNlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50KVxyXG4gIHNlZ21lbnRlZExpc3Q6IFF1ZXJ5TGlzdDxTZWdtZW50ZWRDb250cm9sSXRlbUNvbXBvbmVudD47XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICcxMDAlJztcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAnMTAwJSc7XHJcbiAgQElucHV0KClcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJztcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpbkJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luUmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIG1hcmdpblRvcDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0JvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ0xlZnQ6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmdSaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1RvcDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luOiBzdHJpbmcgfCBudW1iZXI7XHJcblxyXG4gIHdpbmRvd0JsdXI6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VsZWN0VGFiKDApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kZWwgPSBvYmo7XHJcbiAgICB0aGlzLnNlbGVjdFRhYih0aGlzLm1vZGVsKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRhYihpbmRleDogbnVtYmVyLCBzZWdtZW50ZWQ/OiBTZWdtZW50ZWRDb250cm9sSXRlbUNvbXBvbmVudCkge1xyXG4gICAgaWYgKCF0aGlzLnNlZ21lbnRlZExpc3QpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFzdFRhYiA9IHRoaXMuc2VnbWVudGVkTGlzdC5maW5kKGkgPT4gaS5zaG93KTtcclxuICAgIGlmIChsYXN0VGFiKSB7XHJcbiAgICAgIGxhc3RUYWIuc2hvdyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzZWdtZW50ZWQpIHtcclxuICAgICAgc2VnbWVudGVkID0gdGhpcy5zZWdtZW50ZWRMaXN0LmZpbmQoKHMsIGkpID0+IGkgPT09IGluZGV4KTtcclxuICAgIH1cclxuICAgIGlmIChzZWdtZW50ZWQpIHtcclxuICAgICAgc2VnbWVudGVkLnNob3cgPSB0cnVlO1xyXG4gICAgICB0aGlzLm1vZGVsID0gaW5kZXg7XHJcbiAgICAgIHN1cGVyLmNoYW5nZVZhbHVlKGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cInVzZXItc2VsZWN0OiBub25lOyBjdXJzb3I6IGRlZmF1bHQ7IGZsZXg6IDEgMSAwO1wiXHJcbiAgICAgW3N0eWxlLm1hcmdpbl09XCJtYXJnaW4gfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luQm90dG9tXT1cIm1hcmdpbkJvdHRvbSB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5SaWdodF09XCJtYXJnaW5SaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5Ub3BdPVwibWFyZ2luVG9wIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpbkxlZnRdPVwibWFyZ2luTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIChuZ3hEZXNrdG9wV2luZG93Qmx1cik9XCJ3aW5kb3dCbHVyID0gJGV2ZW50XCI+XHJcbiAgPGRpdiBjbGFzcz1cInRhYi1sYWJlbC13cmFwXCI+XHJcbiAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiXHJcbiAgICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50ZWQgb2YgdGhpcy5zZWdtZW50ZWRMaXN0OyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInNlZ21lbnRlZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpID09PSBtb2RlbFwiXHJcbiAgICAgICAgIChtb3VzZWRvd24pPVwic2VnbWVudGVkLmxhYmVsTW91c2Vkb3duID0gdHJ1ZVwiXHJcbiAgICAgICAgIFtjbGFzcy5tb3VzZWRvd25dPVwic2VnbWVudGVkLmxhYmVsTW91c2Vkb3duXCJcclxuICAgICAgICAgW2NsYXNzLmJsdXJdPVwid2luZG93Qmx1clwiXHJcbiAgICAgICAgIChjbGljayk9XCJzZWxlY3RUYWIoaSwgc2VnbWVudGVkKVwiPlxyXG4gICAgICB7e3NlZ21lbnRlZC5sYWJlbH19XHJcbiAgICA8L2Rpdj5cclxuPCEtLSAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwidGFiLWxhYmVsLXdyYXAgbGVmdC10YWIgc2VsZWN0ZWRcIj4tLT5cclxuPCEtLSAgICAgIFRhYiAxLS0+XHJcbjwhLS0gICAgPC9kaXY+LS0+XHJcbjwhLS0gICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInRhYi1sYWJlbC13cmFwXCI+LS0+XHJcbjwhLS0gICAgICBUYWIgMi0tPlxyXG48IS0tICAgIDwvZGl2Pi0tPlxyXG48IS0tICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJ0YWItbGFiZWwtd3JhcCByaWdodC10YWJcIj4tLT5cclxuPCEtLSAgICAgIFRhYiAzLS0+XHJcbjwhLS0gICAgPC9kaXY+LS0+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcFwiXHJcbiAgICAgICBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgW3N0eWxlLnBhZGRpbmddPVwicGFkZGluZyB8IHN0eWxlVmFsdWU6JzIzcHggMThweCAyMnB4IDE4cHgnXCJcclxuICAgICAgIFtzdHlsZS5wYWRkaW5nVG9wXT1cInBhZGRpbmdUb3AgfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS5wYWRkaW5nQm90dG9tXT1cInBhZGRpbmdCb3R0b20gfCBzdHlsZVZhbHVlXCJcclxuICAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgW3N0eWxlLnBhZGRpbmdSaWdodF09XCJwYWRkaW5nUmlnaHQgfCBzdHlsZVZhbHVlXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPCEtLSAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7IHVzZXItc2VsZWN0OiBub25lOyBjdXJzb3I6IGRlZmF1bHQ7IGZvbnQtc2l6ZTogMTNweDsgY29sb3I6IHJnYigwLCAwLCAwKTtcIj5Db250ZW50IDE8L3NwYW4+LS0+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=
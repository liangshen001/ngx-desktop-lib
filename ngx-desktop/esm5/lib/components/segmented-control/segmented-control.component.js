import { __extends } from "tslib";
import { Component, ContentChildren, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ControlValueAccessorAbstractComponent } from "../control-value-accessor-abstract.component";
import { SegmentedControlItemComponent } from "../segmented-control-item/segmented-control-item.component";
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ngx-desktop-window-blur.directive";
import * as i2 from "@angular/common";
import * as i3 from "../../pipes/style-value.pipe";
function SegmentedControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("mousedown", function SegmentedControlComponent_div_8_Template_div_mousedown_0_listener() { var segmented_r102 = ctx.$implicit; return segmented_r102.labelMousedown = true; })("click", function SegmentedControlComponent_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r106); var i_r103 = ctx.index; var segmented_r102 = ctx.$implicit; var ctx_r105 = i0.ɵɵnextContext(); return ctx_r105.selectTab(i_r103, segmented_r102); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var segmented_r102 = ctx.$implicit;
    var i_r103 = ctx.index;
    var ctx_r101 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", segmented_r102.disabled)("selected", i_r103 === ctx_r101.model)("mousedown", segmented_r102.labelMousedown)("blur", ctx_r101.windowBlur);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", segmented_r102.label, " ");
} }
var _c0 = ["*"];
var SegmentedControlComponent = /** @class */ (function (_super) {
    __extends(SegmentedControlComponent, _super);
    function SegmentedControlComponent() {
        var _this = _super.call(this) || this;
        _this.height = '100%';
        _this.width = '100%';
        _this.backgroundColor = 'rgba(0, 0, 0, 0.04)';
        return _this;
    }
    SegmentedControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model === undefined) {
            setTimeout(function () { return _this.selectTab(0); });
        }
    };
    SegmentedControlComponent.prototype.writeValue = function (obj) {
        this.model = obj;
        this.selectTab(this.model);
    };
    SegmentedControlComponent.prototype.selectTab = function (index, segmented) {
        if (!this.segmentedList) {
            return;
        }
        var lastTab = this.segmentedList.find(function (i) { return i.show; });
        if (lastTab) {
            lastTab.show = false;
        }
        if (!segmented) {
            segmented = this.segmentedList.find(function (s, i) { return i === index; });
        }
        if (segmented) {
            segmented.show = true;
            this.model = index;
            _super.prototype.changeValue.call(this, index);
        }
    };
    SegmentedControlComponent.ɵfac = function SegmentedControlComponent_Factory(t) { return new (t || SegmentedControlComponent)(); };
    SegmentedControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SegmentedControlComponent, selectors: [["ngx-desktop-segmented-control"]], contentQueries: function SegmentedControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SegmentedControlItemComponent, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.segmentedList = _t);
        } }, inputs: { height: "height", width: "width", backgroundColor: "backgroundColor", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return SegmentedControlComponent; }),
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
    return SegmentedControlComponent;
}(ControlValueAccessorAbstractComponent));
export { SegmentedControlComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SegmentedControlComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-segmented-control',
                templateUrl: './segmented-control.component.html',
                styleUrls: ['./segmented-control.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SegmentedControlComponent; }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudGVkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUVWLEtBQUssRUFLTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHFDQUFxQyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDbkcsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sNERBQTRELENBQUM7Ozs7Ozs7SUNKckcsOEJBUUU7SUFKRyxxTEFBd0MsSUFBSSxJQUFDLGtRQUFBO0lBSWhELFlBQ0Y7SUFBQSxpQkFBTTs7Ozs7SUFQRCxtREFBcUMsdUNBQUEsNENBQUEsNkJBQUE7SUFNeEMsZUFDRjtJQURFLHFEQUNGOzs7QURISjtJQVUrQyw2Q0FBcUM7SUFpQ2xGO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBOUJELFlBQU0sR0FBb0IsTUFBTSxDQUFDO1FBRWpDLFdBQUssR0FBb0IsTUFBTSxDQUFDO1FBRWhDLHFCQUFlLEdBQVcscUJBQXFCLENBQUM7O0lBMEJoRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCw4Q0FBVSxHQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkNBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxTQUF5QztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsaUJBQU0sV0FBVyxZQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztzR0FoRVUseUJBQXlCO2tFQUF6Qix5QkFBeUI7d0NBRW5CLDZCQUE2Qjs7OztzWUFSbkMsQ0FBQztvQkFDVixPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsQ0FBQztvQkFDeEQsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQzs7WUN2QkosOEJBUUU7WUFERyxrS0FBNEM7Ozs7Ozs7WUFDL0MsOEJBQ0U7WUFBQSwwRUFRRTtZQVdKLGlCQUFNO1lBQ04sOEJBT0k7Ozs7Ozs7WUFBQSxtQkFBWTtZQUVoQixpQkFBTTtZQUNSLGlCQUFNOztZQXRDRCwyREFBb0MsMERBQUEsd0RBQUEsb0RBQUEsc0RBQUEsMkNBQUE7WUFTaEMsZUFBMkQ7WUFBM0QsMkNBQTJEO1lBb0I3RCxlQUFvQztZQUFwQyw0REFBb0MsdUVBQUEsdURBQUEsNkRBQUEseURBQUEsMkRBQUE7O29DRDlCM0M7Q0EwRkMsQUEzRUQsQ0FVK0MscUNBQXFDLEdBaUVuRjtTQWpFWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQVZyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDO3dCQUN4RCxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2FBQ0g7O2tCQUdFLGVBQWU7bUJBQUMsNkJBQTZCOztrQkFFN0MsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW5cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yQWJzdHJhY3RDb21wb25lbnR9IGZyb20gXCIuLi9jb250cm9sLXZhbHVlLWFjY2Vzc29yLWFic3RyYWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi4vc2VnbWVudGVkLWNvbnRyb2wtaXRlbS9zZWdtZW50ZWQtY29udHJvbC1pdGVtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC1zZWdtZW50ZWQtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlZ21lbnRlZC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWdtZW50ZWQtY29udHJvbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWdtZW50ZWRDb250cm9sQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlZ21lbnRlZENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oU2VnbWVudGVkQ29udHJvbEl0ZW1Db21wb25lbnQpXHJcbiAgc2VnbWVudGVkTGlzdDogUXVlcnlMaXN0PFNlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50PjtcclxuICBASW5wdXQoKVxyXG4gIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9ICcxMDAlJztcclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoMCwgMCwgMCwgMC4wNCknO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5MZWZ0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW5SaWdodDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nQm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nTGVmdDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZ1JpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nVG9wOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IHN0cmluZyB8IG51bWJlcjtcclxuXHJcbiAgd2luZG93Qmx1cjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWxlY3RUYWIoMCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlbCA9IG9iajtcclxuICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMubW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VGFiKGluZGV4OiBudW1iZXIsIHNlZ21lbnRlZD86IFNlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuc2VnbWVudGVkTGlzdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsYXN0VGFiID0gdGhpcy5zZWdtZW50ZWRMaXN0LmZpbmQoaSA9PiBpLnNob3cpO1xyXG4gICAgaWYgKGxhc3RUYWIpIHtcclxuICAgICAgbGFzdFRhYi5zaG93ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIXNlZ21lbnRlZCkge1xyXG4gICAgICBzZWdtZW50ZWQgPSB0aGlzLnNlZ21lbnRlZExpc3QuZmluZCgocywgaSkgPT4gaSA9PT0gaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlZ21lbnRlZCkge1xyXG4gICAgICBzZWdtZW50ZWQuc2hvdyA9IHRydWU7XHJcbiAgICAgIHRoaXMubW9kZWwgPSBpbmRleDtcclxuICAgICAgc3VwZXIuY2hhbmdlVmFsdWUoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwidXNlci1zZWxlY3Q6IG5vbmU7IGN1cnNvcjogZGVmYXVsdDsgZmxleDogMSAxIDA7XCJcclxuICAgICBbc3R5bGUubWFyZ2luXT1cIm1hcmdpbiB8IHN0eWxlVmFsdWVcIlxyXG4gICAgIFtzdHlsZS5tYXJnaW5Cb3R0b21dPVwibWFyZ2luQm90dG9tIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpblJpZ2h0XT1cIm1hcmdpblJpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLm1hcmdpblRvcF09XCJtYXJnaW5Ub3AgfCBzdHlsZVZhbHVlXCJcclxuICAgICBbc3R5bGUubWFyZ2luTGVmdF09XCJtYXJnaW5MZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoIHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgKG5neERlc2t0b3BXaW5kb3dCbHVyKT1cIndpbmRvd0JsdXIgPSAkZXZlbnRcIj5cclxuICA8ZGl2IGNsYXNzPVwidGFiLWxhYmVsLXdyYXBcIj5cclxuICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCJcclxuICAgICAgICAgKm5nRm9yPVwibGV0IHNlZ21lbnRlZCBvZiB0aGlzLnNlZ21lbnRlZExpc3Q7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwic2VnbWVudGVkLmRpc2FibGVkXCJcclxuICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImkgPT09IG1vZGVsXCJcclxuICAgICAgICAgKG1vdXNlZG93bik9XCJzZWdtZW50ZWQubGFiZWxNb3VzZWRvd24gPSB0cnVlXCJcclxuICAgICAgICAgW2NsYXNzLm1vdXNlZG93bl09XCJzZWdtZW50ZWQubGFiZWxNb3VzZWRvd25cIlxyXG4gICAgICAgICBbY2xhc3MuYmx1cl09XCJ3aW5kb3dCbHVyXCJcclxuICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFRhYihpLCBzZWdtZW50ZWQpXCI+XHJcbiAgICAgIHt7c2VnbWVudGVkLmxhYmVsfX1cclxuICAgIDwvZGl2PlxyXG48IS0tICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJ0YWItbGFiZWwtd3JhcCBsZWZ0LXRhYiBzZWxlY3RlZFwiPi0tPlxyXG48IS0tICAgICAgVGFiIDEtLT5cclxuPCEtLSAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICA8ZGl2IGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwidGFiLWxhYmVsLXdyYXBcIj4tLT5cclxuPCEtLSAgICAgIFRhYiAyLS0+XHJcbjwhLS0gICAgPC9kaXY+LS0+XHJcbjwhLS0gICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInRhYi1sYWJlbC13cmFwIHJpZ2h0LXRhYlwiPi0tPlxyXG48IS0tICAgICAgVGFiIDMtLT5cclxuPCEtLSAgICA8L2Rpdj4tLT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwXCJcclxuICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICBbc3R5bGUucGFkZGluZ109XCJwYWRkaW5nIHwgc3R5bGVWYWx1ZTonMjNweCAxOHB4IDIycHggMThweCdcIlxyXG4gICAgICAgW3N0eWxlLnBhZGRpbmdUb3BdPVwicGFkZGluZ1RvcCB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgW3N0eWxlLnBhZGRpbmdCb3R0b21dPVwicGFkZGluZ0JvdHRvbSB8IHN0eWxlVmFsdWVcIlxyXG4gICAgICAgW3N0eWxlLnBhZGRpbmdMZWZ0XT1cInBhZGRpbmdMZWZ0IHwgc3R5bGVWYWx1ZVwiXHJcbiAgICAgICBbc3R5bGUucGFkZGluZ1JpZ2h0XT1cInBhZGRpbmdSaWdodCB8IHN0eWxlVmFsdWVcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48IS0tICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgdXNlci1zZWxlY3Q6IG5vbmU7IGN1cnNvcjogZGVmYXVsdDsgZm9udC1zaXplOiAxM3B4OyBjb2xvcjogcmdiKDAsIDAsIDApO1wiPkNvbnRlbnQgMTwvc3Bhbj4tLT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
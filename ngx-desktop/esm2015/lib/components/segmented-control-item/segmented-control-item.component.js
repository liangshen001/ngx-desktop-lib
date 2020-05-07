import { Component, HostListener, Input, } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class SegmentedControlItemComponent {
    constructor() {
    }
    ngOnInit() {
    }
    windowMouseupListener() {
        this.labelMousedown = false;
    }
}
SegmentedControlItemComponent.ɵfac = function SegmentedControlItemComponent_Factory(t) { return new (t || SegmentedControlItemComponent)(); };
SegmentedControlItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SegmentedControlItemComponent, selectors: [["ngx-desktop-segmented-control-item"]], hostBindings: function SegmentedControlItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseup", function SegmentedControlItemComponent_mouseup_HostBindingHandler() { return ctx.windowMouseupListener(); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { label: "label", disabled: "disabled" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function SegmentedControlItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("hidden", !ctx.show);
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SegmentedControlItemComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-segmented-control-item',
                templateUrl: './segmented-control-item.component.html',
                styleUrls: ['./segmented-control-item.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], windowMouseupListener: [{
            type: HostListener,
            args: ['window:mouseup']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlZ21lbnRlZC1jb250cm9sLWl0ZW0vc2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC1pdGVtL3NlZ21lbnRlZC1jb250cm9sLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDOzs7QUFPdkIsTUFBTSxPQUFPLDZCQUE2QjtJQVd4QztJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUdELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzswR0FwQlUsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7Ozs7UUNaMUMsOEJBQ0U7UUFBQSxrQkFBWTtRQUNkLGlCQUFNOztRQUZELGtDQUFnQjs7a0REWVIsNkJBQTZCO2NBTHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzthQUN0RDs7a0JBR0UsS0FBSzs7a0JBRUwsS0FBSzs7a0JBYUwsWUFBWTttQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC1zZWdtZW50ZWQtY29udHJvbC1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlZ21lbnRlZENvbnRyb2xJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIGxhYmVsTW91c2Vkb3duOiBib29sZWFuO1xyXG5cclxuICBzaG93OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNldXAnKVxyXG4gIHdpbmRvd01vdXNldXBMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMubGFiZWxNb3VzZWRvd24gPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBbaGlkZGVuXT1cIiFzaG93XCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19
import { Component, HostListener, Input, } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var SegmentedControlItemComponent = /** @class */ (function () {
    function SegmentedControlItemComponent() {
    }
    SegmentedControlItemComponent.prototype.ngOnInit = function () {
    };
    SegmentedControlItemComponent.prototype.windowMouseupListener = function () {
        this.labelMousedown = false;
    };
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
    return SegmentedControlItemComponent;
}());
export { SegmentedControlItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlZ21lbnRlZC1jb250cm9sLWl0ZW0vc2VnbWVudGVkLWNvbnRyb2wtaXRlbS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9zZWdtZW50ZWQtY29udHJvbC1pdGVtL3NlZ21lbnRlZC1jb250cm9sLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDOzs7QUFFdkI7SUFnQkU7SUFDQSxDQUFDO0lBRUQsZ0RBQVEsR0FBUjtJQUNBLENBQUM7SUFHRCw2REFBcUIsR0FEckI7UUFFRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDOzhHQXBCVSw2QkFBNkI7c0VBQTdCLDZCQUE2Qjs7OztZQ1oxQyw4QkFDRTtZQUFBLGtCQUFZO1lBQ2QsaUJBQU07O1lBRkQsa0NBQWdCOzt3Q0RBckI7Q0FpQ0MsQUExQkQsSUEwQkM7U0FyQlksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REOztrQkFHRSxLQUFLOztrQkFFTCxLQUFLOztrQkFhTCxZQUFZO21CQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLXNlZ21lbnRlZC1jb250cm9sLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWdtZW50ZWQtY29udHJvbC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWdtZW50ZWQtY29udHJvbC1pdGVtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VnbWVudGVkQ29udHJvbEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgbGFiZWxNb3VzZWRvd246IGJvb2xlYW47XHJcblxyXG4gIHNob3c6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcpXHJcbiAgd2luZG93TW91c2V1cExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5sYWJlbE1vdXNlZG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFtoaWRkZW5dPVwiIXNob3dcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=
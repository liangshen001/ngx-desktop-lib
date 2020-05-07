import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ngx-desktop-vertical-alignment.directive";
import * as i2 from "../../directives/ngx-desktop-horizontal-alignment.directive";
import * as i3 from "../../pipes/style-value.pipe";
const _c0 = ["*"];
export class ToolbarComponent {
    constructor() {
        this.verticalAlignment = 'center';
        this.horizontalAlignment = 'center';
    }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["ngx-desktop-toolbar"]], inputs: { height: "height", width: "width", verticalAlignment: "verticalAlignment", horizontalAlignment: "horizontalAlignment" }, ngContentSelectors: _c0, decls: 4, vars: 12, consts: [[2, "user-select", "none", "cursor", "default", "display", "flex", 3, "ngxDesktopVerticalAlignment", "ngxDesktopHorizontalAlignment"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵpipe(1, "styleValue");
        i0.ɵɵpipe(2, "styleValue");
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("height", i0.ɵɵpipeBind2(1, 6, ctx.height, "43px"))("width", i0.ɵɵpipeBind2(2, 9, ctx.width, "100%"));
        i0.ɵɵproperty("ngxDesktopVerticalAlignment", ctx.verticalAlignment)("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment);
    } }, directives: [i1.NgxDesktopVerticalAlignmentDirective, i2.NgxDesktopHorizontalAlignmentDirective], pipes: [i3.StyleValuePipe], styles: ["[_nghost-%COMP%]{display:contents}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return []; }, { height: [{
            type: Input
        }], width: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7Ozs7OztBQWN2QixNQUFNLE9BQU8sZ0JBQWdCO0lBVzNCO1FBSkEsc0JBQWlCLEdBQTJCLFFBQVEsQ0FBQztRQUVyRCx3QkFBbUIsR0FBNkIsUUFBUSxDQUFDO0lBR3pELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Z0ZBZlUsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7O1FDdkI3Qiw4QkFLRTs7O1FBQUEsa0JBQVk7UUFDZCxpQkFBTTs7UUFIRCxrRUFBMkMsa0RBQUE7UUFGM0MsbUVBQWlELDBEQUFBOztrRERzQnpDLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7O2tCQUdFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtWZXJ0aWNhbEFsaWdubWVudFR5cGVzfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC12ZXJ0aWNhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7SG9yaXpvbnRhbEFsaWdubWVudFR5cGVzfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1ob3Jpem9udGFsLWFsaWdubWVudC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTdHlsZVZhbHVlVHlwZXN9IGZyb20gXCIuLi8uLi9waXBlcy9zdHlsZS12YWx1ZS5waXBlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0OiBTdHlsZVZhbHVlVHlwZXM7XHJcbiAgQElucHV0KClcclxuICB3aWR0aDogU3R5bGVWYWx1ZVR5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmVydGljYWxBbGlnbm1lbnQ6IFZlcnRpY2FsQWxpZ25tZW50VHlwZXMgPSAnY2VudGVyJztcclxuICBASW5wdXQoKVxyXG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnRUeXBlcyA9ICdjZW50ZXInO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBzdHlsZT1cInVzZXItc2VsZWN0OiBub25lOyBjdXJzb3I6IGRlZmF1bHQ7IGRpc3BsYXk6IGZsZXg7XCJcclxuICAgICBbbmd4RGVza3RvcFZlcnRpY2FsQWxpZ25tZW50XT1cInZlcnRpY2FsQWxpZ25tZW50XCJcclxuICAgICBbbmd4RGVza3RvcEhvcml6b250YWxBbGlnbm1lbnRdPVwiaG9yaXpvbnRhbEFsaWdubWVudFwiXHJcbiAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHQgfCBzdHlsZVZhbHVlOic0M3B4J1wiXHJcbiAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoIHwgc3R5bGVWYWx1ZTonMTAwJSdcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=
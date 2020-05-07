import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ngx-desktop-vertical-alignment.directive";
import * as i2 from "../../directives/ngx-desktop-horizontal-alignment.directive";
import * as i3 from "../../pipes/style-value.pipe";
var _c0 = ["*"];
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.verticalAlignment = 'center';
        this.horizontalAlignment = 'center';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
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
    return ToolbarComponent;
}());
export { ToolbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7Ozs7OztBQVN2QjtJQWdCRTtRQUpBLHNCQUFpQixHQUEyQixRQUFRLENBQUM7UUFFckQsd0JBQW1CLEdBQTZCLFFBQVEsQ0FBQztJQUd6RCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtJQUNBLENBQUM7b0ZBZlUsZ0JBQWdCO3lEQUFoQixnQkFBZ0I7O1lDdkI3Qiw4QkFLRTs7O1lBQUEsa0JBQVk7WUFDZCxpQkFBTTs7WUFIRCxrRUFBMkMsa0RBQUE7WUFGM0MsbUVBQWlELDBEQUFBOzsyQkREdEQ7Q0F3Q0MsQUF0QkQsSUFzQkM7U0FqQlksZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztrQkFHRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3ItYWJzdHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7T3NUeXBlc30gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VmVydGljYWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge0hvcml6b250YWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaG9yaXpvbnRhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7U3R5bGVWYWx1ZVR5cGVzfSBmcm9tIFwiLi4vLi4vcGlwZXMvc3R5bGUtdmFsdWUucGlwZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGhlaWdodDogU3R5bGVWYWx1ZVR5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGg6IFN0eWxlVmFsdWVUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHZlcnRpY2FsQWxpZ25tZW50OiBWZXJ0aWNhbEFsaWdubWVudFR5cGVzID0gJ2NlbnRlcic7XHJcbiAgQElucHV0KClcclxuICBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50VHlwZXMgPSAnY2VudGVyJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJ1c2VyLXNlbGVjdDogbm9uZTsgY3Vyc29yOiBkZWZhdWx0OyBkaXNwbGF5OiBmbGV4O1wiXHJcbiAgICAgW25neERlc2t0b3BWZXJ0aWNhbEFsaWdubWVudF09XCJ2ZXJ0aWNhbEFsaWdubWVudFwiXHJcbiAgICAgW25neERlc2t0b3BIb3Jpem9udGFsQWxpZ25tZW50XT1cImhvcml6b250YWxBbGlnbm1lbnRcIlxyXG4gICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0IHwgc3R5bGVWYWx1ZTonNDNweCdcIlxyXG4gICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IHN0eWxlVmFsdWU6JzEwMCUnXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19
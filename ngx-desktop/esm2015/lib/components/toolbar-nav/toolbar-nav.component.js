import { Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarNavItemComponent } from "../toolbar-nav-item/toolbar-nav-item.component";
import * as i0 from "@angular/core";
import * as i1 from "../../directives/ngx-desktop-window-blur.directive";
import * as i2 from "@angular/common";
import * as i3 from "../../pipes/style-value.pipe";
function ToolbarNavComponent_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ToolbarNavComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵlistener("click", function ToolbarNavComponent_div_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r71); const i_r68 = ctx.index; const ctx_r70 = i0.ɵɵnextContext(); ctx_r70.selectedIndex = i_r68; return ctx_r70.selectedIndexChange.emit(i_r68); });
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, ToolbarNavComponent_div_3_ng_container_3_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const toolbarNavItemComponent_r67 = ctx.$implicit;
    const i_r68 = ctx.index;
    const ctx_r66 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", i_r68 === ctx_r66.selectedIndex);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", toolbarNavItemComponent_r67.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", toolbarNavItemComponent_r67.title, " ");
} }
export class ToolbarNavComponent {
    constructor() {
        this.selectedIndex = 0;
        this.selectedIndexChange = new EventEmitter();
        this.verticalAlignment = 'center';
        this.horizontalAlignment = 'center';
    }
    ngOnInit() {
    }
}
ToolbarNavComponent.ɵfac = function ToolbarNavComponent_Factory(t) { return new (t || ToolbarNavComponent)(); };
ToolbarNavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarNavComponent, selectors: [["ngx-desktop-toolbar-nav"]], contentQueries: function ToolbarNavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ToolbarNavItemComponent, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbarNavItemComponents = _t);
    } }, inputs: { selectedIndex: "selectedIndex", height: "height", width: "width", verticalAlignment: "verticalAlignment", horizontalAlignment: "horizontalAlignment" }, outputs: { selectedIndexChange: "selectedIndexChange" }, decls: 4, vars: 12, consts: [[2, "display", "flex", "align-items", "center", 3, "ngxDesktopWindowBlur"], ["class", "toolbar-nav-item", 3, "selected", 4, "ngFor", "ngForOf"], [1, "toolbar-nav-item"], [3, "click"], [1, "icon-wrap"], [4, "ngTemplateOutlet"], [1, "title-wrap"]], template: function ToolbarNavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("ngxDesktopWindowBlur", function ToolbarNavComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
        i0.ɵɵpipe(1, "styleValue");
        i0.ɵɵpipe(2, "styleValue");
        i0.ɵɵtemplate(3, ToolbarNavComponent_div_3_Template, 6, 4, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("opacity", ctx.windowBlur ? "0.5" : "1")("height", i0.ɵɵpipeBind2(1, 7, ctx.height, "54px"))("width", i0.ɵɵpipeBind1(2, 10, ctx.width));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.toolbarNavItemComponents);
    } }, directives: [i1.NgxDesktopWindowBlurDirective, i2.NgForOf, i2.NgTemplateOutlet], pipes: [i3.StyleValuePipe], styles: [".toolbar-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{-webkit-app-region:no-drag;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;margin-top:1px;margin-left:5px;margin-right:5px;width:64px}.icon-wrap[_ngcontent-%COMP%]{height:25px;display:flex;place-content:center;align-items:center;margin-bottom:1px}  .title-wrap{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:11px;color:#1e1c1e;line-height:13.2px}  .toolbar-nav-item a svg *{fill:#363336;fill-opacity:.8}  .toolbar-nav-item a:active svg *{fill:#1e1c1e;fill-opacity:.9}  .toolbar-nav-item.selected svg *{fill:#007bfa;fill-opacity:1}  .toolbar-nav-item.selected a:active svg *{fill:#003dd6;fill-opacity:1}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarNavComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-toolbar-nav',
                templateUrl: './toolbar-nav.component.html',
                styleUrls: ['./toolbar-nav.component.css']
            }]
    }], function () { return []; }, { toolbarNavItemComponents: [{
            type: ContentChildren,
            args: [ToolbarNavItemComponent]
        }], selectedIndex: [{
            type: Input
        }], selectedIndexChange: [{
            type: Output
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b29sYmFyLW5hdi90b29sYmFyLW5hdi5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90b29sYmFyLW5hdi90b29sYmFyLW5hdi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFnQixlQUFlLEVBQ3hDLFlBQVksRUFHWixLQUFLLEVBRUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBU3ZCLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDOzs7Ozs7SUNSL0Usd0JBQThFOzs7O0lBTHBGLDhCQUdFO0lBQUEsNEJBQ0U7SUFEQyxxTkFBMkIsdUNBQTJCLElBQUM7SUFDeEQsOEJBQ0U7SUFBQSw0RkFBK0Q7SUFDakUsaUJBQU07SUFDTiwrQkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTztJQUNULGlCQUFJO0lBQ04saUJBQU07Ozs7O0lBVEQsMkRBQXNDO0lBR3ZCLGVBQWdEO0lBQWhELG1FQUFnRDtJQUc5RCxlQUNGO0lBREUsa0VBQ0Y7O0FEV04sTUFBTSxPQUFPLG1CQUFtQjtJQW1COUI7UUFkQSxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQix3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXpDLHNCQUFpQixHQUEyQixRQUFRLENBQUM7UUFFckQsd0JBQW1CLEdBQTZCLFFBQVEsQ0FBQztJQUt6RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7O3NGQXZCVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtvQ0FFYix1QkFBdUI7Ozs7O1FDM0IxQyw4QkFLRTtRQURHLDRKQUE0Qzs7O1FBQy9DLG9FQUdFO1FBUkosaUJBS0U7O1FBSkcsdURBQTBDLG9EQUFBLDJDQUFBO1FBSXhDLGVBQWdGO1FBQWhGLHNEQUFnRjs7a0REb0IxRSxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztrQkFHRSxlQUFlO21CQUFDLHVCQUF1Qjs7a0JBRXZDLEtBQUs7O2tCQUVMLE1BQU07O2tCQUVOLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtWZXJ0aWNhbEFsaWdubWVudFR5cGVzfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC12ZXJ0aWNhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7SG9yaXpvbnRhbEFsaWdubWVudFR5cGVzfSBmcm9tIFwiLi4vLi4vZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1ob3Jpem9udGFsLWFsaWdubWVudC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTdHlsZVZhbHVlVHlwZXN9IGZyb20gXCIuLi8uLi9waXBlcy9zdHlsZS12YWx1ZS5waXBlXCI7XHJcbmltcG9ydCB7VG9vbGJhckNvbXBvbmVudH0gZnJvbSBcIi4uL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUb29sYmFyTmF2SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4uL3Rvb2xiYXItbmF2LWl0ZW0vdG9vbGJhci1uYXYtaXRlbS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtdG9vbGJhci1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci1uYXYuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihUb29sYmFyTmF2SXRlbUNvbXBvbmVudClcclxuICB0b29sYmFyTmF2SXRlbUNvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUb29sYmFyTmF2SXRlbUNvbXBvbmVudD47XHJcbiAgQElucHV0KClcclxuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IFN0eWxlVmFsdWVUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoOiBTdHlsZVZhbHVlVHlwZXM7XHJcbiAgQElucHV0KClcclxuICB2ZXJ0aWNhbEFsaWdubWVudDogVmVydGljYWxBbGlnbm1lbnRUeXBlcyA9ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpXHJcbiAgaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudFR5cGVzID0gJ2NlbnRlcic7XHJcblxyXG4gIHdpbmRvd0JsdXI6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIlxyXG4gICAgIFtzdHlsZS5vcGFjaXR5XT1cIndpbmRvd0JsdXIgPyAnMC41JyA6ICcxJ1wiXHJcbiAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHQgfCBzdHlsZVZhbHVlIDogJzU0cHgnXCJcclxuICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGggfCBzdHlsZVZhbHVlXCJcclxuICAgICAobmd4RGVza3RvcFdpbmRvd0JsdXIpPVwid2luZG93Qmx1ciA9ICRldmVudFwiPlxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IHRvb2xiYXJOYXZJdGVtQ29tcG9uZW50IG9mIHRvb2xiYXJOYXZJdGVtQ29tcG9uZW50czsgbGV0IGkgPSBpbmRleDtcIlxyXG4gICAgICAgY2xhc3M9XCJ0b29sYmFyLW5hdi1pdGVtXCJcclxuICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpID09PSBzZWxlY3RlZEluZGV4XCI+XHJcbiAgICA8YSAoY2xpY2spPVwic2VsZWN0ZWRJbmRleCA9IGk7c2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGkpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXdyYXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidG9vbGJhck5hdkl0ZW1Db21wb25lbnQuaWNvblwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZS13cmFwXCI+XHJcbiAgICAgICAge3t0b29sYmFyTmF2SXRlbUNvbXBvbmVudC50aXRsZX19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuIl19
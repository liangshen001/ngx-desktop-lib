import { Component, Input, ViewChildren } from '@angular/core';
import { startAnimation } from './progressCircleAnimation';
import { startAnimation2 } from "./progressCircleAnimation2";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "@angular/common";
import * as i3 from "../../pipes/style-value.pipe";
const _c0 = ["circle"];
function ProgressCircleComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "circle", 3, 4);
    i0.ɵɵelement(3, "circle", 3, 4);
    i0.ɵɵelement(5, "circle", 3, 4);
    i0.ɵɵelement(7, "circle", 3, 4);
    i0.ɵɵelement(9, "circle", 3, 4);
    i0.ɵɵelement(11, "circle", 3, 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("fill", ctx_r2.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r2.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r2.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r2.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r2.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r2.color);
} }
function ProgressCircleComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "path", 5, 4);
    i0.ɵɵelement(3, "path", 6, 4);
    i0.ɵɵelement(5, "path", 7, 4);
    i0.ɵɵelement(7, "path", 8, 4);
    i0.ɵɵelement(9, "path", 9, 4);
    i0.ɵɵelement(11, "path", 10, 4);
    i0.ɵɵelement(13, "path", 11, 4);
    i0.ɵɵelement(15, "path", 12, 4);
    i0.ɵɵelement(17, "path", 13, 4);
    i0.ɵɵelement(19, "path", 14, 4);
    i0.ɵɵelement(21, "path", 15, 4);
    i0.ɵɵelement(23, "path", 16, 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r3.color);
} }
export class ProgressCircleComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set os(os) {
        this._os = os;
        this.initColor();
    }
    get os() {
        return this.ngxDesktopService.getOs(this._os);
    }
    ngOnInit() {
        this.initColor();
    }
    ngAfterViewInit() {
        const elements = this.circles.map(({ nativeElement }) => nativeElement);
        if (this.os === 'mac') {
            startAnimation2(...elements);
        }
        else {
            startAnimation(...elements);
        }
    }
    initColor() {
        if (!this.color) {
            if (this.os === 'windows') {
                this.color = '#0063AE';
            }
            else {
                this.color = '#000000';
            }
        }
    }
}
ProgressCircleComponent.ɵfac = function ProgressCircleComponent_Factory(t) { return new (t || ProgressCircleComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
ProgressCircleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressCircleComponent, selectors: [["ngx-desktop-progress-circle"]], viewQuery: function ProgressCircleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.circles = _t);
    } }, inputs: { os: "os", size: "size", color: "color" }, decls: 6, vars: 13, consts: [[1, "progress-circle-container"], ["x", "0px", "y", "0px"], [4, "ngIf"], ["fill-opacity", "0", "cx", "75", "cy", "75", "r", "7.3"], ["circle", ""], ["d", "M16.1,9.4L16.1,9.4c-0.9,0-1.6-0.7-1.6-1.6V1.6c0-0.9,0.7-1.6,1.6-1.6h0c0.9,0,1.6,0.7,1.6,1.6v6.3 C17.7,8.7,17,9.4,16.1,9.4z"], ["d", "M19.4,10.3L19.4,10.3c-0.8-0.4-1-1.4-0.6-2.2L22,2.7c0.4-0.8,1.4-1,2.2-0.6l0,0c0.8,0.4,1,1.4,0.6,2.2 l-3.1,5.4C21.2,10.5,20.2,10.7,19.4,10.3z"], ["d", "M21.9,12.7L21.9,12.7c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C28.7,7,29.6,7.3,30.1,8l0,0c0.4,0.8,0.2,1.7-0.6,2.2 l-5.4,3.1C23.3,13.7,22.3,13.5,21.9,12.7z"], ["d", "M22.8,16.1L22.8,16.1c0-0.9,0.7-1.6,1.6-1.6h6.3c0.9,0,1.6,0.7,1.6,1.6v0c0,0.9-0.7,1.6-1.6,1.6h-6.3 C23.5,17.7,22.8,17,22.8,16.1z"], ["d", "M22,19.4L22,19.4c0.4-0.8,1.4-1,2.2-0.6l5.4,3.1c0.8,0.4,1,1.4,0.6,2.2l0,0c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1 C21.8,21.2,21.5,20.2,22,19.4z"], ["d", "M19.5,21.9L19.5,21.9c0.8-0.4,1.7-0.2,2.2,0.6l3.1,5.4c0.4,0.8,0.2,1.7-0.6,2.2l0,0 c-0.8,0.4-1.7,0.2-2.2-0.6l-3.1-5.4C18.5,23.3,18.8,22.3,19.5,21.9z"], ["d", "M16.2,22.8L16.2,22.8c0.9,0,1.6,0.7,1.6,1.6v6.3c0,0.9-0.7,1.6-1.6,1.6h0c-0.9,0-1.6-0.7-1.6-1.6v-6.3 C14.6,23.5,15.3,22.8,16.2,22.8z"], ["d", "M12.8,22L12.8,22c0.8,0.4,1,1.4,0.6,2.2l-3.1,5.4c-0.4,0.8-1.4,1-2.2,0.6l0,0c-0.8-0.4-1-1.4-0.6-2.2 l3.1-5.4C11.1,21.8,12.1,21.5,12.8,22z"], ["d", "M10.3,19.5L10.3,19.5c0.4,0.8,0.2,1.7-0.6,2.2l-5.4,3.1c-0.8,0.4-1.7,0.2-2.2-0.6l0,0 c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C8.9,18.5,9.9,18.8,10.3,19.5z"], ["d", "M9.4,16.2L9.4,16.2c0,0.9-0.7,1.6-1.6,1.6H1.6C0.7,17.8,0,17,0,16.2v0c0-0.9,0.7-1.6,1.6-1.6h6.3 C8.7,14.6,9.4,15.3,9.4,16.2z"], ["d", "M10.3,12.8L10.3,12.8c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1C2,9.8,1.7,8.9,2.1,8.1l0,0c0.4-0.8,1.4-1,2.2-0.6 l5.4,3.1C10.5,11.1,10.7,12.1,10.3,12.8z"], ["d", "M12.7,10.3L12.7,10.3c-0.8,0.4-1.7,0.2-2.2-0.6L7.4,4.3C7,3.6,7.3,2.6,8,2.2l0,0C8.8,1.7,9.8,2,10.2,2.8 l3.1,5.4C13.7,8.9,13.5,9.9,12.7,10.3z"]], template: function ProgressCircleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵpipe(2, "styleValue");
        i0.ɵɵpipe(3, "styleValue");
        i0.ɵɵtemplate(4, ProgressCircleComponent__svg_ng_container_4_Template, 13, 6, "ng-container", 2);
        i0.ɵɵtemplate(5, ProgressCircleComponent__svg_ng_container_5_Template, 25, 12, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", i0.ɵɵpipeBind2(2, 7, ctx.size, ctx.os === "mac" ? "25px" : "20px"))("height", i0.ɵɵpipeBind2(3, 10, ctx.size, ctx.os === "mac" ? "25px" : "20px"));
        i0.ɵɵattribute("viewBox", ctx.os === "mac" ? "0 0 32.3 32.3" : "0 0 150 150");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.os === "windows");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.os === "mac");
    } }, directives: [i2.NgIf], pipes: [i3.StyleValuePipe], styles: [".progress-circle-container[_ngcontent-%COMP%]{position:relative;visibility:visible;display:block}svg[_ngcontent-%COMP%]{position:relative}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressCircleComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-progress-circle',
                templateUrl: './progress-circle.component.html',
                styleUrls: ['./progress-circle.component.css']
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { os: [{
            type: Input
        }], size: [{
            type: Input
        }], color: [{
            type: Input
        }], circles: [{
            type: ViewChildren,
            args: ["circle"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBRVQsS0FBSyxFQUdMLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7OztJQ052RCw2QkFDRTtJQUFBLCtCQUFzRjtJQUN0RiwrQkFBc0Y7SUFDdEYsK0JBQXNGO0lBQ3RGLCtCQUFzRjtJQUN0RiwrQkFBc0Y7SUFDdEYsZ0NBQXNGO0lBQ3hGLDBCQUFlOzs7SUFORyxlQUFtQjtJQUFuQixvQ0FBbUI7SUFDbkIsZUFBbUI7SUFBbkIsb0NBQW1CO0lBQ25CLGVBQW1CO0lBQW5CLG9DQUFtQjtJQUNuQixlQUFtQjtJQUFuQixvQ0FBbUI7SUFDbkIsZUFBbUI7SUFBbkIsb0NBQW1CO0lBQ25CLGVBQW1CO0lBQW5CLG9DQUFtQjs7OztJQUVyQyw2QkFDRTtJQUFBLDZCQUM0STtJQUM1SSw2QkFDNko7SUFDN0osNkJBQ21LO0lBQ25LLDZCQUNpSjtJQUNqSiw2QkFDd0o7SUFDeEosK0JBQ29LO0lBQ3BLLCtCQUNvSjtJQUNwSiwrQkFDeUo7SUFDekosK0JBQ21LO0lBQ25LLCtCQUM0STtJQUM1SSwrQkFDOEo7SUFDOUosK0JBQzRKO0lBQzlKLDBCQUFlOzs7SUF4QkMsZUFBbUI7SUFBbkIsb0NBQW1CO0lBRW5CLGVBQW1CO0lBQW5CLG9DQUFtQjtJQUVuQixlQUFtQjtJQUFuQixvQ0FBbUI7SUFFbkIsZUFBbUI7SUFBbkIsb0NBQW1CO0lBRW5CLGVBQW1CO0lBQW5CLG9DQUFtQjtJQUVuQixlQUFtQjtJQUFuQixvQ0FBbUI7SUFFbkIsZUFBbUI7SUFBbkIsb0NBQW1CO0lBRW5CLGVBQW1CO0lBQW5CLG9DQUFtQjtJQUVuQixlQUFtQjtJQUFuQixvQ0FBbUI7SUFFbkIsZUFBbUI7SUFBbkIsb0NBQW1CO0lBRW5CLGVBQW1CO0lBQW5CLG9DQUFtQjtJQUVuQixlQUFtQjtJQUFuQixvQ0FBbUI7O0FEbEJ2QyxNQUFNLE9BQU8sdUJBQXVCO0lBa0JsQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDO0lBakJELElBQ0ksRUFBRSxDQUFDLEVBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7WUFDckIsZUFBZSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzs4RkExQ1UsdUJBQXVCOzREQUF2Qix1QkFBdUI7Ozs7OztRQ3BCcEMsOEJBQ0U7UUFBQSxtQkFNRTtRQU5GLDhCQU1FOzs7UUFBQSxnR0FDRTtRQU9GLGlHQUNFO1FBeUJKLGlCQUFNO1FBQ1IsaUJBQU07O1FBdENGLGVBQWtFO1FBQWxFLDJGQUFrRSwrRUFBQTtRQUVsRSw2RUFBK0Q7UUFDakQsZUFBd0I7UUFBeEIsMkNBQXdCO1FBUXhCLGVBQW9CO1FBQXBCLHVDQUFvQjs7a0RES3pCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7O2tCQUdFLEtBQUs7O2tCQVNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLFlBQVk7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHN0YXJ0QW5pbWF0aW9uIH0gZnJvbSAnLi9wcm9ncmVzc0NpcmNsZUFuaW1hdGlvbic7XHJcbmltcG9ydCB7T3NUeXBlc30gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7c3RhcnRBbmltYXRpb24yfSBmcm9tIFwiLi9wcm9ncmVzc0NpcmNsZUFuaW1hdGlvbjJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtcHJvZ3Jlc3MtY2lyY2xlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NpcmNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcHJpdmF0ZSBfb3M6IE9zVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZXQgb3Mob3M6IE9zVHlwZXMpIHtcclxuICAgIHRoaXMuX29zID0gb3M7XHJcbiAgICB0aGlzLmluaXRDb2xvcigpO1xyXG4gIH1cclxuICBnZXQgb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRPcyh0aGlzLl9vcyk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNpemU6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgQFZpZXdDaGlsZHJlbihcImNpcmNsZVwiKVxyXG4gIGNpcmNsZXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPFNWR0NpcmNsZUVsZW1lbnQgfCBTVkdQYXRoRWxlbWVudD4+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neERlc2t0b3BTZXJ2aWNlOiBOZ3hEZXNrdG9wU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRDb2xvcigpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmNpcmNsZXMubWFwKCh7bmF0aXZlRWxlbWVudH0pID0+IG5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgaWYgKHRoaXMub3MgPT09ICdtYWMnKSB7XHJcbiAgICAgIHN0YXJ0QW5pbWF0aW9uMiguLi5lbGVtZW50cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGFydEFuaW1hdGlvbiguLi5lbGVtZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0Q29sb3IoKSB7XHJcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcclxuICAgICAgaWYgKHRoaXMub3MgPT09ICd3aW5kb3dzJykge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnIzAwNjNBRSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtY2lyY2xlLWNvbnRhaW5lclwiPlxyXG4gIDxzdmdcclxuICAgIHg9XCIwcHhcIlxyXG4gICAgeT1cIjBweFwiXHJcbiAgICBbc3R5bGUud2lkdGhdPVwic2l6ZSB8IHN0eWxlVmFsdWUgOiBvcyA9PT0gJ21hYycgPyAnMjVweCcgOiAnMjBweCdcIlxyXG4gICAgW3N0eWxlLmhlaWdodF09XCJzaXplIHwgc3R5bGVWYWx1ZSA6IG9zID09PSAnbWFjJyA/ICcyNXB4JyA6ICcyMHB4J1wiXHJcbiAgICBbYXR0ci52aWV3Qm94XT1cIm9zID09PSAnbWFjJyA/ICcwIDAgMzIuMyAzMi4zJyA6ICcwIDAgMTUwIDE1MCdcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcyA9PT0gJ3dpbmRvd3MnXCI+XHJcbiAgICAgIDxjaXJjbGUgI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCIgZmlsbC1vcGFjaXR5PVwiMFwiIGN4PVwiNzVcIiBjeT1cIjc1XCIgcj1cIjcuM1wiPjwvY2lyY2xlPlxyXG4gICAgICA8Y2lyY2xlICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiIGZpbGwtb3BhY2l0eT1cIjBcIiBjeD1cIjc1XCIgY3k9XCI3NVwiIHI9XCI3LjNcIj48L2NpcmNsZT5cclxuICAgICAgPGNpcmNsZSAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIiBmaWxsLW9wYWNpdHk9XCIwXCIgY3g9XCI3NVwiIGN5PVwiNzVcIiByPVwiNy4zXCI+PC9jaXJjbGU+XHJcbiAgICAgIDxjaXJjbGUgI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCIgZmlsbC1vcGFjaXR5PVwiMFwiIGN4PVwiNzVcIiBjeT1cIjc1XCIgcj1cIjcuM1wiPjwvY2lyY2xlPlxyXG4gICAgICA8Y2lyY2xlICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiIGZpbGwtb3BhY2l0eT1cIjBcIiBjeD1cIjc1XCIgY3k9XCI3NVwiIHI9XCI3LjNcIj48L2NpcmNsZT5cclxuICAgICAgPGNpcmNsZSAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIiBmaWxsLW9wYWNpdHk9XCIwXCIgY3g9XCI3NVwiIGN5PVwiNzVcIiByPVwiNy4zXCI+PC9jaXJjbGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcyA9PT0gJ21hYydcIj5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0xNi4xLDkuNEwxNi4xLDkuNGMtMC45LDAtMS42LTAuNy0xLjYtMS42VjEuNmMwLTAuOSwwLjctMS42LDEuNi0xLjZoMGMwLjksMCwxLjYsMC43LDEuNiwxLjZ2Ni4zIEMxNy43LDguNywxNyw5LjQsMTYuMSw5LjR6XCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICBkPVwiTTE5LjQsMTAuM0wxOS40LDEwLjNjLTAuOC0wLjQtMS0xLjQtMC42LTIuMkwyMiwyLjdjMC40LTAuOCwxLjQtMSwyLjItMC42bDAsMGMwLjgsMC40LDEsMS40LDAuNiwyLjIgbC0zLjEsNS40QzIxLjIsMTAuNSwyMC4yLDEwLjcsMTkuNCwxMC4zelwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0yMS45LDEyLjdMMjEuOSwxMi43Yy0wLjQtMC44LTAuMi0xLjcsMC42LTIuMmw1LjQtMy4xQzI4LjcsNywyOS42LDcuMywzMC4xLDhsMCwwYzAuNCwwLjgsMC4yLDEuNy0wLjYsMi4yIGwtNS40LDMuMUMyMy4zLDEzLjcsMjIuMywxMy41LDIxLjksMTIuN3pcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNMjIuOCwxNi4xTDIyLjgsMTYuMWMwLTAuOSwwLjctMS42LDEuNi0xLjZoNi4zYzAuOSwwLDEuNiwwLjcsMS42LDEuNnYwYzAsMC45LTAuNywxLjYtMS42LDEuNmgtNi4zIEMyMy41LDE3LjcsMjIuOCwxNywyMi44LDE2LjF6XCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICBkPVwiTTIyLDE5LjRMMjIsMTkuNGMwLjQtMC44LDEuNC0xLDIuMi0wLjZsNS40LDMuMWMwLjgsMC40LDEsMS40LDAuNiwyLjJsMCwwYy0wLjQsMC44LTEuNCwxLTIuMiwwLjZsLTUuNC0zLjEgQzIxLjgsMjEuMiwyMS41LDIwLjIsMjIsMTkuNHpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTkuNSwyMS45TDE5LjUsMjEuOWMwLjgtMC40LDEuNy0wLjIsMi4yLDAuNmwzLjEsNS40YzAuNCwwLjgsMC4yLDEuNy0wLjYsMi4ybDAsMCBjLTAuOCwwLjQtMS43LDAuMi0yLjItMC42bC0zLjEtNS40QzE4LjUsMjMuMywxOC44LDIyLjMsMTkuNSwyMS45elwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0xNi4yLDIyLjhMMTYuMiwyMi44YzAuOSwwLDEuNiwwLjcsMS42LDEuNnY2LjNjMCwwLjktMC43LDEuNi0xLjYsMS42aDBjLTAuOSwwLTEuNi0wLjctMS42LTEuNnYtNi4zIEMxNC42LDIzLjUsMTUuMywyMi44LDE2LjIsMjIuOHpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTIuOCwyMkwxMi44LDIyYzAuOCwwLjQsMSwxLjQsMC42LDIuMmwtMy4xLDUuNGMtMC40LDAuOC0xLjQsMS0yLjIsMC42bDAsMGMtMC44LTAuNC0xLTEuNC0wLjYtMi4yIGwzLjEtNS40QzExLjEsMjEuOCwxMi4xLDIxLjUsMTIuOCwyMnpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTAuMywxOS41TDEwLjMsMTkuNWMwLjQsMC44LDAuMiwxLjctMC42LDIuMmwtNS40LDMuMWMtMC44LDAuNC0xLjcsMC4yLTIuMi0wLjZsMCwwIGMtMC40LTAuOC0wLjItMS43LDAuNi0yLjJsNS40LTMuMUM4LjksMTguNSw5LjksMTguOCwxMC4zLDE5LjV6XCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICBkPVwiTTkuNCwxNi4yTDkuNCwxNi4yYzAsMC45LTAuNywxLjYtMS42LDEuNkgxLjZDMC43LDE3LjgsMCwxNywwLDE2LjJ2MGMwLTAuOSwwLjctMS42LDEuNi0xLjZoNi4zIEM4LjcsMTQuNiw5LjQsMTUuMyw5LjQsMTYuMnpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTAuMywxMi44TDEwLjMsMTIuOGMtMC40LDAuOC0xLjQsMS0yLjIsMC42bC01LjQtMy4xQzIsOS44LDEuNyw4LjksMi4xLDguMWwwLDBjMC40LTAuOCwxLjQtMSwyLjItMC42IGw1LjQsMy4xQzEwLjUsMTEuMSwxMC43LDEyLjEsMTAuMywxMi44elwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0xMi43LDEwLjNMMTIuNywxMC4zYy0wLjgsMC40LTEuNywwLjItMi4yLTAuNkw3LjQsNC4zQzcsMy42LDcuMywyLjYsOCwyLjJsMCwwQzguOCwxLjcsOS44LDIsMTAuMiwyLjggbDMuMSw1LjRDMTMuNyw4LjksMTMuNSw5LjksMTIuNywxMC4zelwiPjwvcGF0aD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvc3ZnPlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==
import { __read, __spread } from "tslib";
import { Component, Input, ViewChildren } from '@angular/core';
import { startAnimation } from './progressCircleAnimation';
import { startAnimation2 } from "./progressCircleAnimation2";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "@angular/common";
import * as i3 from "../../pipes/style-value.pipe";
var _c0 = ["circle"];
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
    var ctx_r74 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("fill", ctx_r74.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r74.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r74.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r74.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r74.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r74.color);
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
    var ctx_r75 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r75.color);
} }
var ProgressCircleComponent = /** @class */ (function () {
    function ProgressCircleComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(ProgressCircleComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
            this.initColor();
        },
        enumerable: true,
        configurable: true
    });
    ProgressCircleComponent.prototype.ngOnInit = function () {
        this.initColor();
    };
    ProgressCircleComponent.prototype.ngAfterViewInit = function () {
        var elements = this.circles.map(function (_a) {
            var nativeElement = _a.nativeElement;
            return nativeElement;
        });
        if (this.os === 'mac') {
            startAnimation2.apply(void 0, __spread(elements));
        }
        else {
            startAnimation.apply(void 0, __spread(elements));
        }
    };
    ProgressCircleComponent.prototype.initColor = function () {
        if (!this.color) {
            if (this.os === 'windows') {
                this.color = '#0063AE';
            }
            else {
                this.color = '#000000';
            }
        }
    };
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
    return ProgressCircleComponent;
}());
export { ProgressCircleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBR0wsU0FBUyxFQUVULEtBQUssRUFHTCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzNELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7SUNOdkQsNkJBQ0U7SUFBQSwrQkFBc0Y7SUFDdEYsK0JBQXNGO0lBQ3RGLCtCQUFzRjtJQUN0RiwrQkFBc0Y7SUFDdEYsK0JBQXNGO0lBQ3RGLGdDQUFzRjtJQUN4RiwwQkFBZTs7O0lBTkcsZUFBbUI7SUFBbkIscUNBQW1CO0lBQ25CLGVBQW1CO0lBQW5CLHFDQUFtQjtJQUNuQixlQUFtQjtJQUFuQixxQ0FBbUI7SUFDbkIsZUFBbUI7SUFBbkIscUNBQW1CO0lBQ25CLGVBQW1CO0lBQW5CLHFDQUFtQjtJQUNuQixlQUFtQjtJQUFuQixxQ0FBbUI7Ozs7SUFFckMsNkJBQ0U7SUFBQSw2QkFDNEk7SUFDNUksNkJBQzZKO0lBQzdKLDZCQUNtSztJQUNuSyw2QkFDaUo7SUFDakosNkJBQ3dKO0lBQ3hKLCtCQUNvSztJQUNwSywrQkFDb0o7SUFDcEosK0JBQ3lKO0lBQ3pKLCtCQUNtSztJQUNuSywrQkFDNEk7SUFDNUksK0JBQzhKO0lBQzlKLCtCQUM0SjtJQUM5SiwwQkFBZTs7O0lBeEJDLGVBQW1CO0lBQW5CLHFDQUFtQjtJQUVuQixlQUFtQjtJQUFuQixxQ0FBbUI7SUFFbkIsZUFBbUI7SUFBbkIscUNBQW1CO0lBRW5CLGVBQW1CO0lBQW5CLHFDQUFtQjtJQUVuQixlQUFtQjtJQUFuQixxQ0FBbUI7SUFFbkIsZUFBbUI7SUFBbkIscUNBQW1CO0lBRW5CLGVBQW1CO0lBQW5CLHFDQUFtQjtJQUVuQixlQUFtQjtJQUFuQixxQ0FBbUI7SUFFbkIsZUFBbUI7SUFBbkIscUNBQW1CO0lBRW5CLGVBQW1CO0lBQW5CLHFDQUFtQjtJQUVuQixlQUFtQjtJQUFuQixxQ0FBbUI7SUFFbkIsZUFBbUI7SUFBbkIscUNBQW1COztBRHZCdkM7SUF1QkUsaUNBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7SUFqQkQsc0JBQ0ksdUNBQUU7YUFJTjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQVBELFVBQ08sRUFBVztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQWVELDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGlEQUFlLEdBQWY7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWU7Z0JBQWQsZ0NBQWE7WUFBTSxPQUFBLGFBQWE7UUFBYixDQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3JCLGVBQWUsd0JBQUksUUFBUSxHQUFFO1NBQzlCO2FBQU07WUFDTCxjQUFjLHdCQUFJLFFBQVEsR0FBRTtTQUM3QjtJQUNILENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO2dCQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQztrR0ExQ1UsdUJBQXVCO2dFQUF2Qix1QkFBdUI7Ozs7OztZQ3BCcEMsOEJBQ0U7WUFBQSxtQkFNRTtZQU5GLDhCQU1FOzs7WUFBQSxnR0FDRTtZQU9GLGlHQUNFO1lBeUJKLGlCQUFNO1lBQ1IsaUJBQU07O1lBdENGLGVBQWtFO1lBQWxFLDJGQUFrRSwrRUFBQTtZQUVsRSw2RUFBK0Q7WUFDakQsZUFBd0I7WUFBeEIsMkNBQXdCO1lBUXhCLGVBQW9CO1lBQXBCLHVDQUFvQjs7a0NEZnRDO0NBK0RDLEFBaERELElBZ0RDO1NBM0NZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7a0JBR0UsS0FBSzs7a0JBU0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsWUFBWTttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsXHJcbiAgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW5cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc3RhcnRBbmltYXRpb24gfSBmcm9tICcuL3Byb2dyZXNzQ2lyY2xlQW5pbWF0aW9uJztcclxuaW1wb3J0IHtPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtzdGFydEFuaW1hdGlvbjJ9IGZyb20gXCIuL3Byb2dyZXNzQ2lyY2xlQW5pbWF0aW9uMlwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC1wcm9ncmVzcy1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1jaXJjbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIF9vczogT3NUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNldCBvcyhvczogT3NUeXBlcykge1xyXG4gICAgdGhpcy5fb3MgPSBvcztcclxuICAgIHRoaXMuaW5pdENvbG9yKCk7XHJcbiAgfVxyXG4gIGdldCBvcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldE9zKHRoaXMuX29zKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2l6ZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IHN0cmluZztcclxuICBAVmlld0NoaWxkcmVuKFwiY2lyY2xlXCIpXHJcbiAgY2lyY2xlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY8U1ZHQ2lyY2xlRWxlbWVudCB8IFNWR1BhdGhFbGVtZW50Pj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdENvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY2lyY2xlcy5tYXAoKHtuYXRpdmVFbGVtZW50fSkgPT4gbmF0aXZlRWxlbWVudCk7XHJcbiAgICBpZiAodGhpcy5vcyA9PT0gJ21hYycpIHtcclxuICAgICAgc3RhcnRBbmltYXRpb24yKC4uLmVsZW1lbnRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXJ0QW5pbWF0aW9uKC4uLmVsZW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRDb2xvcigpIHtcclxuICAgIGlmICghdGhpcy5jb2xvcikge1xyXG4gICAgICBpZiAodGhpcy5vcyA9PT0gJ3dpbmRvd3MnKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjMDA2M0FFJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwcm9ncmVzcy1jaXJjbGUtY29udGFpbmVyXCI+XHJcbiAgPHN2Z1xyXG4gICAgeD1cIjBweFwiXHJcbiAgICB5PVwiMHB4XCJcclxuICAgIFtzdHlsZS53aWR0aF09XCJzaXplIHwgc3R5bGVWYWx1ZSA6IG9zID09PSAnbWFjJyA/ICcyNXB4JyA6ICcyMHB4J1wiXHJcbiAgICBbc3R5bGUuaGVpZ2h0XT1cInNpemUgfCBzdHlsZVZhbHVlIDogb3MgPT09ICdtYWMnID8gJzI1cHgnIDogJzIwcHgnXCJcclxuICAgIFthdHRyLnZpZXdCb3hdPVwib3MgPT09ICdtYWMnID8gJzAgMCAzMi4zIDMyLjMnIDogJzAgMCAxNTAgMTUwJ1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9zID09PSAnd2luZG93cydcIj5cclxuICAgICAgPGNpcmNsZSAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIiBmaWxsLW9wYWNpdHk9XCIwXCIgY3g9XCI3NVwiIGN5PVwiNzVcIiByPVwiNy4zXCI+PC9jaXJjbGU+XHJcbiAgICAgIDxjaXJjbGUgI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCIgZmlsbC1vcGFjaXR5PVwiMFwiIGN4PVwiNzVcIiBjeT1cIjc1XCIgcj1cIjcuM1wiPjwvY2lyY2xlPlxyXG4gICAgICA8Y2lyY2xlICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiIGZpbGwtb3BhY2l0eT1cIjBcIiBjeD1cIjc1XCIgY3k9XCI3NVwiIHI9XCI3LjNcIj48L2NpcmNsZT5cclxuICAgICAgPGNpcmNsZSAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIiBmaWxsLW9wYWNpdHk9XCIwXCIgY3g9XCI3NVwiIGN5PVwiNzVcIiByPVwiNy4zXCI+PC9jaXJjbGU+XHJcbiAgICAgIDxjaXJjbGUgI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCIgZmlsbC1vcGFjaXR5PVwiMFwiIGN4PVwiNzVcIiBjeT1cIjc1XCIgcj1cIjcuM1wiPjwvY2lyY2xlPlxyXG4gICAgICA8Y2lyY2xlICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiIGZpbGwtb3BhY2l0eT1cIjBcIiBjeD1cIjc1XCIgY3k9XCI3NVwiIHI9XCI3LjNcIj48L2NpcmNsZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9zID09PSAnbWFjJ1wiPlxyXG4gICAgICA8cGF0aCAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICBkPVwiTTE2LjEsOS40TDE2LjEsOS40Yy0wLjksMC0xLjYtMC43LTEuNi0xLjZWMS42YzAtMC45LDAuNy0xLjYsMS42LTEuNmgwYzAuOSwwLDEuNiwwLjcsMS42LDEuNnY2LjMgQzE3LjcsOC43LDE3LDkuNCwxNi4xLDkuNHpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTkuNCwxMC4zTDE5LjQsMTAuM2MtMC44LTAuNC0xLTEuNC0wLjYtMi4yTDIyLDIuN2MwLjQtMC44LDEuNC0xLDIuMi0wLjZsMCwwYzAuOCwwLjQsMSwxLjQsMC42LDIuMiBsLTMuMSw1LjRDMjEuMiwxMC41LDIwLjIsMTAuNywxOS40LDEwLjN6XCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICBkPVwiTTIxLjksMTIuN0wyMS45LDEyLjdjLTAuNC0wLjgtMC4yLTEuNywwLjYtMi4ybDUuNC0zLjFDMjguNyw3LDI5LjYsNy4zLDMwLjEsOGwwLDBjMC40LDAuOCwwLjIsMS43LTAuNiwyLjIgbC01LjQsMy4xQzIzLjMsMTMuNywyMi4zLDEzLjUsMjEuOSwxMi43elwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0yMi44LDE2LjFMMjIuOCwxNi4xYzAtMC45LDAuNy0xLjYsMS42LTEuNmg2LjNjMC45LDAsMS42LDAuNywxLjYsMS42djBjMCwwLjktMC43LDEuNi0xLjYsMS42aC02LjMgQzIzLjUsMTcuNywyMi44LDE3LDIyLjgsMTYuMXpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNMjIsMTkuNEwyMiwxOS40YzAuNC0wLjgsMS40LTEsMi4yLTAuNmw1LjQsMy4xYzAuOCwwLjQsMSwxLjQsMC42LDIuMmwwLDBjLTAuNCwwLjgtMS40LDEtMi4yLDAuNmwtNS40LTMuMSBDMjEuOCwyMS4yLDIxLjUsMjAuMiwyMiwxOS40elwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0xOS41LDIxLjlMMTkuNSwyMS45YzAuOC0wLjQsMS43LTAuMiwyLjIsMC42bDMuMSw1LjRjMC40LDAuOCwwLjIsMS43LTAuNiwyLjJsMCwwIGMtMC44LDAuNC0xLjcsMC4yLTIuMi0wLjZsLTMuMS01LjRDMTguNSwyMy4zLDE4LjgsMjIuMywxOS41LDIxLjl6XCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICBkPVwiTTE2LjIsMjIuOEwxNi4yLDIyLjhjMC45LDAsMS42LDAuNywxLjYsMS42djYuM2MwLDAuOS0wLjcsMS42LTEuNiwxLjZoMGMtMC45LDAtMS42LTAuNy0xLjYtMS42di02LjMgQzE0LjYsMjMuNSwxNS4zLDIyLjgsMTYuMiwyMi44elwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0xMi44LDIyTDEyLjgsMjJjMC44LDAuNCwxLDEuNCwwLjYsMi4ybC0zLjEsNS40Yy0wLjQsMC44LTEuNCwxLTIuMiwwLjZsMCwwYy0wLjgtMC40LTEtMS40LTAuNi0yLjIgbDMuMS01LjRDMTEuMSwyMS44LDEyLjEsMjEuNSwxMi44LDIyelwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0xMC4zLDE5LjVMMTAuMywxOS41YzAuNCwwLjgsMC4yLDEuNy0wLjYsMi4ybC01LjQsMy4xYy0wLjgsMC40LTEuNywwLjItMi4yLTAuNmwwLDAgYy0wLjQtMC44LTAuMi0xLjcsMC42LTIuMmw1LjQtMy4xQzguOSwxOC41LDkuOSwxOC44LDEwLjMsMTkuNXpcIj48L3BhdGg+XHJcbiAgICAgIDxwYXRoICNjaXJjbGUgW2F0dHIuZmlsbF09XCJjb2xvclwiXHJcbiAgICAgICAgICAgIGQ9XCJNOS40LDE2LjJMOS40LDE2LjJjMCwwLjktMC43LDEuNi0xLjYsMS42SDEuNkMwLjcsMTcuOCwwLDE3LDAsMTYuMnYwYzAtMC45LDAuNy0xLjYsMS42LTEuNmg2LjMgQzguNywxNC42LDkuNCwxNS4zLDkuNCwxNi4yelwiPjwvcGF0aD5cclxuICAgICAgPHBhdGggI2NpcmNsZSBbYXR0ci5maWxsXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgZD1cIk0xMC4zLDEyLjhMMTAuMywxMi44Yy0wLjQsMC44LTEuNCwxLTIuMiwwLjZsLTUuNC0zLjFDMiw5LjgsMS43LDguOSwyLjEsOC4xbDAsMGMwLjQtMC44LDEuNC0xLDIuMi0wLjYgbDUuNCwzLjFDMTAuNSwxMS4xLDEwLjcsMTIuMSwxMC4zLDEyLjh6XCI+PC9wYXRoPlxyXG4gICAgICA8cGF0aCAjY2lyY2xlIFthdHRyLmZpbGxdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICBkPVwiTTEyLjcsMTAuM0wxMi43LDEwLjNjLTAuOCwwLjQtMS43LDAuMi0yLjItMC42TDcuNCw0LjNDNywzLjYsNy4zLDIuNiw4LDIuMmwwLDBDOC44LDEuNyw5LjgsMiwxMC4yLDIuOCBsMy4xLDUuNEMxMy43LDguOSwxMy41LDkuOSwxMi43LDEwLjN6XCI+PC9wYXRoPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9zdmc+XHJcbjwvZGl2PlxyXG5cclxuIl19
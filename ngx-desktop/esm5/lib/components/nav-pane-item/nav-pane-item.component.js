import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
var _c0 = [[["ngx-desktop-nav-pane-item"]]];
var _c1 = ["ngx-desktop-nav-pane-item"];
var NavPaneItemComponent = /** @class */ (function () {
    function NavPaneItemComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.onSelect = new EventEmitter();
    }
    NavPaneItemComponent.prototype.ngOnInit = function () {
    };
    NavPaneItemComponent.ɵfac = function NavPaneItemComponent_Factory(t) { return new (t || NavPaneItemComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NavPaneItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavPaneItemComponent, selectors: [["ngx-desktop-nav-pane-item"]], inputs: { background: "background", color: "color", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", title: "title", icon: "icon", margin: "margin", padding: "padding", selected: "selected" }, outputs: { onSelect: "onSelect" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NavPaneItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
        } }, styles: [""] });
    return NavPaneItemComponent;
}());
export { NavPaneItemComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavPaneItemComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-nav-pane-item',
                templateUrl: './nav-pane-item.component.html',
                styleUrls: ['./nav-pane-item.component.css']
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { background: [{
            type: Input
        }], color: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], margin: [{
            type: Input
        }], padding: [{
            type: Input
        }], selected: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXBhbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25hdi1wYW5lLWl0ZW0vbmF2LXBhbmUtaXRlbS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9uYXYtcGFuZS1pdGVtL25hdi1wYW5lLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDRyxZQUFZLEVBSXhCLEtBQUssRUFDRyxNQUFNLEVBRWYsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVXZCO0lBNkJFLDhCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUh4RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUk5QixDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUNBLENBQUM7NEZBNUJVLG9CQUFvQjs2REFBcEIsb0JBQW9COztZQ3hCakMsa0JBQStDOzsrQkREL0M7Q0FzREMsQUFsQ0QsSUFrQ0M7U0E3Qlksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztrQkFHRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yQWJzdHJhY3RDb21wb25lbnR9IGZyb20gXCIuLi9jb250cm9sLXZhbHVlLWFjY2Vzc29yLWFic3RyYWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09TX1RPS0VOLCBPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtPc1V0aWxzfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3MudXRpbHNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIb3Jpem9udGFsQWxpZ25tZW50VHlwZXN9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLWhvcml6b250YWwtYWxpZ25tZW50LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge1ZlcnRpY2FsQWxpZ25tZW50VHlwZXN9IGZyb20gXCIuLi8uLi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXZlcnRpY2FsLWFsaWdubWVudC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTdHlsZVZhbHVlVHlwZXN9IGZyb20gXCIuLi8uLi9waXBlcy9zdHlsZS12YWx1ZS5waXBlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1kZXNrdG9wLW5hdi1wYW5lLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtcGFuZS1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXYtcGFuZS1pdGVtLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2UGFuZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50VHlwZXM7XHJcbiAgQElucHV0KClcclxuICB2ZXJ0aWNhbEFsaWdubWVudDogVmVydGljYWxBbGlnbm1lbnRUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBpY29uOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFyZ2luOiBTdHlsZVZhbHVlVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBTdHlsZVZhbHVlVHlwZXM7XHJcbiAgQElucHV0KClcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICBAT3V0cHV0KClcclxuICBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcbn1cclxuIiwiXHJcbjxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kZXNrdG9wLW5hdi1wYW5lLWl0ZW1cIj48L25nLWNvbnRlbnQ+XHJcbiJdfQ==
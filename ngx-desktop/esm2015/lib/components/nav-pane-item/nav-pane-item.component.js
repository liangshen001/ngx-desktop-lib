import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
const _c0 = [[["ngx-desktop-nav-pane-item"]]];
const _c1 = ["ngx-desktop-nav-pane-item"];
export class NavPaneItemComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.onSelect = new EventEmitter();
    }
    ngOnInit() {
    }
}
NavPaneItemComponent.ɵfac = function NavPaneItemComponent_Factory(t) { return new (t || NavPaneItemComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NavPaneItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavPaneItemComponent, selectors: [["ngx-desktop-nav-pane-item"]], inputs: { background: "background", color: "color", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", title: "title", icon: "icon", margin: "margin", padding: "padding", selected: "selected" }, outputs: { onSelect: "onSelect" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NavPaneItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵprojection(0);
    } }, styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXBhbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25hdi1wYW5lLWl0ZW0vbmF2LXBhbmUtaXRlbS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9uYXYtcGFuZS1pdGVtL25hdi1wYW5lLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDRyxZQUFZLEVBSXhCLEtBQUssRUFDRyxNQUFNLEVBRWYsTUFBTSxlQUFlLENBQUM7Ozs7O0FBZXZCLE1BQU0sT0FBTyxvQkFBb0I7SUF3Qi9CLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSHhELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTlCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7d0ZBNUJVLG9CQUFvQjt5REFBcEIsb0JBQW9COztRQ3hCakMsa0JBQStDOztrRER3QmxDLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7O2tCQUdFLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3JBYnN0cmFjdENvbXBvbmVudH0gZnJvbSBcIi4uL2NvbnRyb2wtdmFsdWUtYWNjZXNzb3ItYWJzdHJhY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7T1NfVE9LRU4sIE9zVHlwZXN9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xyXG5pbXBvcnQge09zVXRpbHN9IGZyb20gXCIuLi8uLi91dGlscy9vcy51dGlsc1wiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5pbXBvcnQge0hvcml6b250YWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtaG9yaXpvbnRhbC1hbGlnbm1lbnQuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7VmVydGljYWxBbGlnbm1lbnRUeXBlc30gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge1N0eWxlVmFsdWVUeXBlc30gZnJvbSBcIi4uLy4uL3BpcGVzL3N0eWxlLXZhbHVlLnBpcGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtbmF2LXBhbmUtaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1wYW5lLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25hdi1wYW5lLWl0ZW0uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZQYW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IEhvcml6b250YWxBbGlnbm1lbnRUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHZlcnRpY2FsQWxpZ25tZW50OiBWZXJ0aWNhbEFsaWdubWVudFR5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGljb246IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBtYXJnaW46IFN0eWxlVmFsdWVUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmc6IFN0eWxlVmFsdWVUeXBlcztcclxuICBASW5wdXQoKVxyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxufVxyXG4iLCJcclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRlc2t0b3AtbmF2LXBhbmUtaXRlbVwiPjwvbmctY29udGVudD5cclxuIl19
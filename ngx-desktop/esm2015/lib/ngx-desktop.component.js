import { Component, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxDesktopComponent {
    constructor() {
    }
    ngOnInit() {
    }
    windowBlurListener() {
        this.blur = true;
    }
    windowFocusListener() {
        this.blur = false;
    }
    registerOnChange(fn) {
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
    }
    writeValue(obj) {
    }
}
NgxDesktopComponent.ɵfac = function NgxDesktopComponent_Factory(t) { return new (t || NgxDesktopComponent)(); };
NgxDesktopComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxDesktopComponent, selectors: [["lib-ngx-desktop"]], hostBindings: function NgxDesktopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("blur", function NgxDesktopComponent_blur_HostBindingHandler() { return ctx.windowBlurListener(); }, false, i0.ɵɵresolveWindow)("focus", function NgxDesktopComponent_focus_HostBindingHandler() { return ctx.windowFocusListener(); }, false, i0.ɵɵresolveWindow);
    } }, decls: 0, vars: 0, template: function NgxDesktopComponent_Template(rf, ctx) { }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ngx-desktop',
                template: `
`,
                styles: [`
  `]
            }]
    }], function () { return []; }, { windowBlurListener: [{
            type: HostListener,
            args: ['window:blur']
        }], windowFocusListener: [{
            type: HostListener,
            args: ['window:focus']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvbmd4LWRlc2t0b3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFTLE1BQU0sZUFBZSxDQUFDOztBQVU5RCxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCO0lBQ0EsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBR0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFHRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87SUFDeEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87SUFDekIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO0lBQ3BDLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBUTtJQUNuQixDQUFDOztzRkE5QlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7OztrREFBbkIsbUJBQW1CO2NBUC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Q0FDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQztHQUNSLENBQUM7YUFDSDs7a0JBV0UsWUFBWTttQkFBQyxhQUFhOztrQkFLMUIsWUFBWTttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1uZ3gtZGVza3RvcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgYmx1cjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpibHVyJylcclxuICB3aW5kb3dCbHVyTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLmJsdXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmZvY3VzJylcclxuICB3aW5kb3dGb2N1c0xpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5ibHVyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xyXG4gIH1cclxufVxyXG4iXX0=
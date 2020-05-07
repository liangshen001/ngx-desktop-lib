import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopHorizontalAlignmentDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set ngxDesktopHorizontalAlignment(horizontalAlignment) {
        if (horizontalAlignment === 'left') {
            this.value = 'flex-start';
        }
        else if (horizontalAlignment === 'right') {
            this.value = 'flex-end';
        }
        else if (horizontalAlignment === 'center') {
            this.value = 'center';
        }
        else {
            this.value = 'normal';
        }
    }
    get style() {
        return this.value;
    }
}
NgxDesktopHorizontalAlignmentDirective.ɵfac = function NgxDesktopHorizontalAlignmentDirective_Factory(t) { return new (t || NgxDesktopHorizontalAlignmentDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopHorizontalAlignmentDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopHorizontalAlignmentDirective, selectors: [["", "ngxDesktopHorizontalAlignment", ""]], hostVars: 2, hostBindings: function NgxDesktopHorizontalAlignmentDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("justify-content", ctx.style);
    } }, inputs: { ngxDesktopHorizontalAlignment: "ngxDesktopHorizontalAlignment" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopHorizontalAlignmentDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopHorizontalAlignment]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopHorizontalAlignment: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.justify-content']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtaG9yaXpvbnRhbC1hbGlnbm1lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1ob3Jpem9udGFsLWFsaWdubWVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFNNUQsTUFBTSxPQUFPLHNDQUFzQztJQXNCakQsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBbEI1RCxJQUNJLDZCQUE2QixDQUFDLG1CQUE2QztRQUM3RSxJQUFJLG1CQUFtQixLQUFLLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztTQUMzQjthQUFNLElBQUksbUJBQW1CLEtBQUssT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxtQkFBbUIsS0FBSyxRQUFRLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs0SEFwQlUsc0NBQXNDOzJFQUF0QyxzQ0FBc0M7OztrREFBdEMsc0NBQXNDO2NBSGxELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2FBQzVDOztrQkFLRSxLQUFLOztrQkFhTCxXQUFXO21CQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wSG9yaXpvbnRhbEFsaWdubWVudF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wSG9yaXpvbnRhbEFsaWdubWVudERpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmd4RGVza3RvcEhvcml6b250YWxBbGlnbm1lbnQoaG9yaXpvbnRhbEFsaWdubWVudDogSG9yaXpvbnRhbEFsaWdubWVudFR5cGVzKSB7XHJcbiAgICBpZiAoaG9yaXpvbnRhbEFsaWdubWVudCA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnZmxleC1zdGFydCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvcml6b250YWxBbGlnbm1lbnQgPT09ICdyaWdodCcpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICdmbGV4LWVuZCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvcml6b250YWxBbGlnbm1lbnQgPT09ICdjZW50ZXInKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnY2VudGVyJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnbm9ybWFsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuanVzdGlmeS1jb250ZW50JylcclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSG9yaXpvbnRhbEFsaWdubWVudFR5cGVzID0gJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xyXG4iXX0=
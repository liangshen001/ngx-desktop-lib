import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopWidthDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set ngxDesktopWidth(size) {
        this.width = this.ngxDesktopService.getPxValue(size, 'auto');
    }
    get style() {
        return this.width;
    }
}
NgxDesktopWidthDirective.ɵfac = function NgxDesktopWidthDirective_Factory(t) { return new (t || NgxDesktopWidthDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopWidthDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopWidthDirective, selectors: [["", "ngxDesktopWidth", ""]], hostVars: 2, hostBindings: function NgxDesktopWidthDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.style);
    } }, inputs: { ngxDesktopWidth: "ngxDesktopWidth" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopWidthDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopWidth]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopWidth: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.width']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atd2lkdGguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC13aWR0aC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFNNUQsTUFBTSxPQUFPLHdCQUF3QjtJQVluQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFWNUQsSUFDSSxlQUFlLENBQUMsSUFBcUI7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O2dHQVZVLHdCQUF3Qjs2REFBeEIsd0JBQXdCOzs7a0RBQXhCLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7a0JBR0UsS0FBSzs7a0JBS0wsV0FBVzttQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BXaWR0aF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wV2lkdGhEaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgd2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wV2lkdGgoc2l6ZTogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKHNpemUsICdhdXRvJyk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7fVxyXG5cclxufVxyXG4iXX0=
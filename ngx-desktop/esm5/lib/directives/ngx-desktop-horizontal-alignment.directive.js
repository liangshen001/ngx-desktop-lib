import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopHorizontalAlignmentDirective = /** @class */ (function () {
    function NgxDesktopHorizontalAlignmentDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopHorizontalAlignmentDirective.prototype, "ngxDesktopHorizontalAlignment", {
        set: function (horizontalAlignment) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopHorizontalAlignmentDirective.prototype, "style", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopHorizontalAlignmentDirective.ɵfac = function NgxDesktopHorizontalAlignmentDirective_Factory(t) { return new (t || NgxDesktopHorizontalAlignmentDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopHorizontalAlignmentDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopHorizontalAlignmentDirective, selectors: [["", "ngxDesktopHorizontalAlignment", ""]], hostVars: 2, hostBindings: function NgxDesktopHorizontalAlignmentDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("justify-content", ctx.style);
        } }, inputs: { ngxDesktopHorizontalAlignment: "ngxDesktopHorizontalAlignment" } });
    return NgxDesktopHorizontalAlignmentDirective;
}());
export { NgxDesktopHorizontalAlignmentDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtaG9yaXpvbnRhbC1hbGlnbm1lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1ob3Jpem9udGFsLWFsaWdubWVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFHNUQ7SUF5QkUsZ0RBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQWxCNUQsc0JBQ0ksaUZBQTZCO2FBRGpDLFVBQ2tDLG1CQUE2QztZQUM3RSxJQUFJLG1CQUFtQixLQUFLLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxtQkFBbUIsS0FBSyxPQUFPLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2FBQ3pCO2lCQUFNLElBQUksbUJBQW1CLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQ0kseURBQUs7YUFEVDtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtnSUFwQlUsc0NBQXNDOytFQUF0QyxzQ0FBc0M7OztpREFObkQ7Q0E4QkMsQUEzQkQsSUEyQkM7U0F4Qlksc0NBQXNDO2tEQUF0QyxzQ0FBc0M7Y0FIbEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7O2tCQUtFLEtBQUs7O2tCQWFMLFdBQVc7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BIb3Jpem9udGFsQWxpZ25tZW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BIb3Jpem9udGFsQWxpZ25tZW50RGlyZWN0aXZlIHtcclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wSG9yaXpvbnRhbEFsaWdubWVudChob3Jpem9udGFsQWxpZ25tZW50OiBIb3Jpem9udGFsQWxpZ25tZW50VHlwZXMpIHtcclxuICAgIGlmIChob3Jpem9udGFsQWxpZ25tZW50ID09PSAnbGVmdCcpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICdmbGV4LXN0YXJ0JztcclxuICAgIH0gZWxzZSBpZiAoaG9yaXpvbnRhbEFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJ2ZsZXgtZW5kJztcclxuICAgIH0gZWxzZSBpZiAoaG9yaXpvbnRhbEFsaWdubWVudCA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICdjZW50ZXInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICdub3JtYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5qdXN0aWZ5LWNvbnRlbnQnKVxyXG4gIGdldCBzdHlsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsQWxpZ25tZW50VHlwZXMgPSAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XHJcbiJdfQ==
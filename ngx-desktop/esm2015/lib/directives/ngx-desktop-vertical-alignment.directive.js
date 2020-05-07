import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopVerticalAlignmentDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set ngxDesktopVerticalAlignment(verticalAlignment) {
        if (verticalAlignment === 'top') {
            this.value = 'flex-start';
        }
        else if (verticalAlignment === 'center') {
            this.value = 'center';
        }
        else if (verticalAlignment === 'bottom') {
            this.value = 'flex-end';
        }
        else {
            this.value = 'normal';
        }
    }
    get style() {
        return this.value;
    }
}
NgxDesktopVerticalAlignmentDirective.ɵfac = function NgxDesktopVerticalAlignmentDirective_Factory(t) { return new (t || NgxDesktopVerticalAlignmentDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopVerticalAlignmentDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopVerticalAlignmentDirective, selectors: [["", "ngxDesktopVerticalAlignment", ""]], hostVars: 2, hostBindings: function NgxDesktopVerticalAlignmentDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("align-items", ctx.style);
    } }, inputs: { ngxDesktopVerticalAlignment: "ngxDesktopVerticalAlignment" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopVerticalAlignmentDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopVerticalAlignment]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopVerticalAlignment: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.align-items']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQU01RCxNQUFNLE9BQU8sb0NBQW9DO0lBc0IvQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUFHLENBQUM7SUFsQjVELElBQ0ksMkJBQTJCLENBQUMsaUJBQXlDO1FBQ3ZFLElBQUksaUJBQWlCLEtBQUssS0FBSyxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxpQkFBaUIsS0FBSyxRQUFRLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDdkI7YUFBTSxJQUFJLGlCQUFpQixLQUFLLFFBQVEsRUFBRTtZQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7O3dIQXBCVSxvQ0FBb0M7eUVBQXBDLG9DQUFvQzs7O2tEQUFwQyxvQ0FBb0M7Y0FIaEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7YUFDMUM7O2tCQUtFLEtBQUs7O2tCQWFMLFdBQVc7bUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25neERlc2t0b3BWZXJ0aWNhbEFsaWdubWVudF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wVmVydGljYWxBbGlnbm1lbnREaXJlY3RpdmUge1xyXG5cclxuICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5neERlc2t0b3BWZXJ0aWNhbEFsaWdubWVudCh2ZXJ0aWNhbEFsaWdubWVudDogVmVydGljYWxBbGlnbm1lbnRUeXBlcykge1xyXG4gICAgaWYgKHZlcnRpY2FsQWxpZ25tZW50ID09PSAndG9wJykge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJ2ZsZXgtc3RhcnQnO1xyXG4gICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEFsaWdubWVudCA9PT0gJ2NlbnRlcicpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICdjZW50ZXInO1xyXG4gICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEFsaWdubWVudCA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICdmbGV4LWVuZCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJ25vcm1hbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmFsaWduLWl0ZW1zJylcclxuICBnZXQgc3R5bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVmVydGljYWxBbGlnbm1lbnRUeXBlcyA9ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJztcclxuIl19
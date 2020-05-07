import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopVerticalAlignmentDirective = /** @class */ (function () {
    function NgxDesktopVerticalAlignmentDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopVerticalAlignmentDirective.prototype, "ngxDesktopVerticalAlignment", {
        set: function (verticalAlignment) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopVerticalAlignmentDirective.prototype, "style", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopVerticalAlignmentDirective.ɵfac = function NgxDesktopVerticalAlignmentDirective_Factory(t) { return new (t || NgxDesktopVerticalAlignmentDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopVerticalAlignmentDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopVerticalAlignmentDirective, selectors: [["", "ngxDesktopVerticalAlignment", ""]], hostVars: 2, hostBindings: function NgxDesktopVerticalAlignmentDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("align-items", ctx.style);
        } }, inputs: { ngxDesktopVerticalAlignment: "ngxDesktopVerticalAlignment" } });
    return NgxDesktopVerticalAlignmentDirective;
}());
export { NgxDesktopVerticalAlignmentDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtdmVydGljYWwtYWxpZ25tZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUc1RDtJQXlCRSw4Q0FBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBbEI1RCxzQkFDSSw2RUFBMkI7YUFEL0IsVUFDZ0MsaUJBQXlDO1lBQ3ZFLElBQUksaUJBQWlCLEtBQUssS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQzthQUMzQjtpQkFBTSxJQUFJLGlCQUFpQixLQUFLLFFBQVEsRUFBRTtnQkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxpQkFBaUIsS0FBSyxRQUFRLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx1REFBSzthQURUO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzRIQXBCVSxvQ0FBb0M7NkVBQXBDLG9DQUFvQzs7OytDQU5qRDtDQThCQyxBQTNCRCxJQTJCQztTQXhCWSxvQ0FBb0M7a0RBQXBDLG9DQUFvQztjQUhoRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjthQUMxQzs7a0JBS0UsS0FBSzs7a0JBYUwsV0FBVzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcFZlcnRpY2FsQWxpZ25tZW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERlc2t0b3BWZXJ0aWNhbEFsaWdubWVudERpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmd4RGVza3RvcFZlcnRpY2FsQWxpZ25tZW50KHZlcnRpY2FsQWxpZ25tZW50OiBWZXJ0aWNhbEFsaWdubWVudFR5cGVzKSB7XHJcbiAgICBpZiAodmVydGljYWxBbGlnbm1lbnQgPT09ICd0b3AnKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnZmxleC1zdGFydCc7XHJcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQWxpZ25tZW50ID09PSAnY2VudGVyJykge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJ2NlbnRlcic7XHJcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQWxpZ25tZW50ID09PSAnYm90dG9tJykge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJ2ZsZXgtZW5kJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnbm9ybWFsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYWxpZ24taXRlbXMnKVxyXG4gIGdldCBzdHlsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbEFsaWdubWVudFR5cGVzID0gJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nO1xyXG4iXX0=
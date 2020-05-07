import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopBoldDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    set ngxDesktopBold(bold) {
        if (typeof bold === 'boolean') {
            this.value = bold ? 'bold' : 'normal';
        }
        else if (typeof bold === 'number') {
            this.value = `${bold}`;
        }
        else {
            this.value = bold;
        }
    }
    get style() {
        return this.value;
    }
}
NgxDesktopBoldDirective.ɵfac = function NgxDesktopBoldDirective_Factory(t) { return new (t || NgxDesktopBoldDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopBoldDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopBoldDirective, selectors: [["", "ngxDesktopBold", ""]], hostVars: 2, hostBindings: function NgxDesktopBoldDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("font-weight", ctx.style);
    } }, inputs: { ngxDesktopBold: "ngxDesktopBold" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopBoldDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopBold]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopBold: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.font-weight']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtYm9sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLWJvbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBTTVELE1BQU0sT0FBTyx1QkFBdUI7SUFtQmxDLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQUcsQ0FBQztJQWhCNUQsSUFDSSxjQUFjLENBQUMsSUFBK0I7UUFDaEQsSUFBSSxPQUFPLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OEZBakJVLHVCQUF1Qjs0REFBdkIsdUJBQXVCOzs7a0RBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7a0JBSUUsS0FBSzs7a0JBV0wsV0FBVzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcEJvbGRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcEJvbGREaXJlY3RpdmUge1xyXG5cclxuICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgbmd4RGVza3RvcEJvbGQoYm9sZDogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbikge1xyXG4gICAgaWYgKHR5cGVvZiBib2xkID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJztcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvbGQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBgJHtib2xkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZm9udC13ZWlnaHQnKVxyXG4gIGdldCBzdHlsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcbiJdfQ==
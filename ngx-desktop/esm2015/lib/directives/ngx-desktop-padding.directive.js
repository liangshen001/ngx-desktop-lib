import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopPaddingDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this._paddingBottom = '0';
        this._paddingLeft = '0';
        this._paddingRight = '0';
        this._paddingTop = '0';
    }
    set ngxDesktopPadding(height) {
        this.value = this.ngxDesktopService.getPxValue(height, '');
    }
    set paddingBottom(paddingBottom) {
        this._paddingBottom = this.ngxDesktopService.getPxValue(paddingBottom);
    }
    set paddingLeft(paddingLeft) {
        this._paddingLeft = this.ngxDesktopService.getPxValue(paddingLeft);
    }
    set paddingRight(paddingRight) {
        this._paddingRight = this.ngxDesktopService.getPxValue(paddingRight);
    }
    set paddingTop(paddingTop) {
        this._paddingTop = this.ngxDesktopService.getPxValue(paddingTop);
    }
    get style() {
        if (this.value) {
            return this.value;
        }
        return `${this._paddingTop} ${this._paddingRight} ${this._paddingBottom} ${this._paddingLeft}`;
    }
}
NgxDesktopPaddingDirective.ɵfac = function NgxDesktopPaddingDirective_Factory(t) { return new (t || NgxDesktopPaddingDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopPaddingDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopPaddingDirective, selectors: [["", "ngxDesktopPadding", ""]], hostVars: 2, hostBindings: function NgxDesktopPaddingDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("padding", ctx.style);
    } }, inputs: { ngxDesktopPadding: "ngxDesktopPadding", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopPaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopPadding]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopPadding: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.padding']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtcGFkZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGVza3RvcC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25neC1kZXNrdG9wLXBhZGRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBTTVELE1BQU0sT0FBTywwQkFBMEI7SUFvQ3JDLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBN0JoRCxtQkFBYyxHQUFXLEdBQUcsQ0FBQztRQUs3QixpQkFBWSxHQUFXLEdBQUcsQ0FBQztRQUszQixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUs1QixnQkFBVyxHQUFXLEdBQUcsQ0FBQztJQWN5QixDQUFDO0lBakM1RCxJQUNJLGlCQUFpQixDQUFDLE1BQXVCO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQ0ksYUFBYSxDQUFDLGFBQThCO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFDSSxXQUFXLENBQUMsV0FBNEI7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUNJLFlBQVksQ0FBQyxZQUE2QjtRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELElBQ0ksVUFBVSxDQUFDLFVBQTJCO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRyxDQUFDOztvR0FsQ1UsMEJBQTBCOytEQUExQiwwQkFBMEI7OztrREFBMUIsMEJBQTBCO2NBSHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOztrQkFJRSxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxXQUFXO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcFBhZGRpbmddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcFBhZGRpbmdEaXJlY3RpdmUge1xyXG5cclxuICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICBzZXQgbmd4RGVza3RvcFBhZGRpbmcoaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldFB4VmFsdWUoaGVpZ2h0LCAnJyk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3BhZGRpbmdCb3R0b206IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBwYWRkaW5nQm90dG9tKHBhZGRpbmdCb3R0b206IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fcGFkZGluZ0JvdHRvbSA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShwYWRkaW5nQm90dG9tKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGFkZGluZ0xlZnQ6IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBwYWRkaW5nTGVmdChwYWRkaW5nTGVmdDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9wYWRkaW5nTGVmdCA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShwYWRkaW5nTGVmdCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3BhZGRpbmdSaWdodDogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBhZGRpbmdSaWdodChwYWRkaW5nUmlnaHQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fcGFkZGluZ1JpZ2h0ID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKHBhZGRpbmdSaWdodCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3BhZGRpbmdUb3A6IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBwYWRkaW5nVG9wKHBhZGRpbmdUb3A6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fcGFkZGluZ1RvcCA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShwYWRkaW5nVG9wKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZycpXHJcbiAgZ2V0IHN0eWxlKCkge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCR7dGhpcy5fcGFkZGluZ1RvcH0gJHt0aGlzLl9wYWRkaW5nUmlnaHR9ICR7dGhpcy5fcGFkZGluZ0JvdHRvbX0gJHt0aGlzLl9wYWRkaW5nTGVmdH1gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcbiJdfQ==
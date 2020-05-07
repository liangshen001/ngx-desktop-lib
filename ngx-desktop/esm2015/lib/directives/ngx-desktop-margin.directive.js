import { Directive, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
export class NgxDesktopMarginDirective {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this._marginBottom = '0';
        this._marginLeft = '0';
        this._marginRight = '0';
        this._marginTop = '0';
    }
    set ngxDesktopMargin(height) {
        this.value = this.ngxDesktopService.getPxValue(height, '');
    }
    set marginBottom(marginBottom) {
        this._marginBottom = this.ngxDesktopService.getPxValue(marginBottom);
    }
    set marginLeft(marginLeft) {
        this._marginLeft = this.ngxDesktopService.getPxValue(marginLeft);
    }
    set marginRight(marginRight) {
        this._marginRight = this.ngxDesktopService.getPxValue(marginRight);
    }
    set marginTop(marginTop) {
        this._marginTop = this.ngxDesktopService.getPxValue(marginTop);
    }
    get style() {
        if (this.value) {
            return this.value;
        }
        return `${this._marginTop} ${this._marginRight} ${this._marginBottom} ${this._marginLeft}`;
    }
}
NgxDesktopMarginDirective.ɵfac = function NgxDesktopMarginDirective_Factory(t) { return new (t || NgxDesktopMarginDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NgxDesktopMarginDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopMarginDirective, selectors: [["", "ngxDesktopMargin", ""]], hostVars: 2, hostBindings: function NgxDesktopMarginDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("margin", ctx.style);
    } }, inputs: { ngxDesktopMargin: "ngxDesktopMargin", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopMarginDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopMargin]',
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopMargin: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.margin']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtbWFyZ2luLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbWFyZ2luLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQU01RCxNQUFNLE9BQU8seUJBQXlCO0lBb0NwQyxZQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTdCaEQsa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFLNUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFLMUIsaUJBQVksR0FBVyxHQUFHLENBQUM7UUFLM0IsZUFBVSxHQUFXLEdBQUcsQ0FBQztJQWMwQixDQUFDO0lBakM1RCxJQUNJLGdCQUFnQixDQUFDLE1BQXVCO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQ0ksWUFBWSxDQUFDLFlBQTZCO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsSUFDSSxVQUFVLENBQUMsVUFBMkI7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxJQUNJLFdBQVcsQ0FBQyxXQUE0QjtRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELElBQ0ksU0FBUyxDQUFDLFNBQTBCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RixDQUFDOztrR0FsQ1UseUJBQXlCOzhEQUF6Qix5QkFBeUI7OztrREFBekIseUJBQXlCO2NBSHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztrQkFJRSxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxXQUFXO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcE1hcmdpbl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcE1hcmdpbkRpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wTWFyZ2luKGhlaWdodDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRQeFZhbHVlKGhlaWdodCwgJycpO1xyXG4gIH1cclxuICBwcml2YXRlIF9tYXJnaW5Cb3R0b206IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXJnaW5Cb3R0b20obWFyZ2luQm90dG9tOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21hcmdpbkJvdHRvbSA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShtYXJnaW5Cb3R0b20pO1xyXG4gIH1cclxuICBwcml2YXRlIF9tYXJnaW5MZWZ0OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KClcclxuICBzZXQgbWFyZ2luTGVmdChtYXJnaW5MZWZ0OiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21hcmdpbkxlZnQgPSB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldFB4VmFsdWUobWFyZ2luTGVmdCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX21hcmdpblJpZ2h0OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KClcclxuICBzZXQgbWFyZ2luUmlnaHQobWFyZ2luUmlnaHQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5fbWFyZ2luUmlnaHQgPSB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldFB4VmFsdWUobWFyZ2luUmlnaHQpO1xyXG4gIH1cclxuICBwcml2YXRlIF9tYXJnaW5Ub3A6IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXJnaW5Ub3AobWFyZ2luVG9wOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21hcmdpblRvcCA9IHRoaXMubmd4RGVza3RvcFNlcnZpY2UuZ2V0UHhWYWx1ZShtYXJnaW5Ub3ApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXJnaW4nKVxyXG4gIGdldCBzdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3RoaXMuX21hcmdpblRvcH0gJHt0aGlzLl9tYXJnaW5SaWdodH0gJHt0aGlzLl9tYXJnaW5Cb3R0b219ICR7dGhpcy5fbWFyZ2luTGVmdH1gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcbiJdfQ==
import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
var NgxDesktopMousedownDirective = /** @class */ (function () {
    function NgxDesktopMousedownDirective() {
        this.ngxDesktopMousedown = new EventEmitter();
    }
    NgxDesktopMousedownDirective.prototype.mousedownListener = function () {
        this.ngxDesktopMousedown.emit(true);
    };
    NgxDesktopMousedownDirective.prototype.windowMouseupListener = function () {
        this.ngxDesktopMousedown.emit(false);
    };
    NgxDesktopMousedownDirective.ɵfac = function NgxDesktopMousedownDirective_Factory(t) { return new (t || NgxDesktopMousedownDirective)(); };
    NgxDesktopMousedownDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopMousedownDirective, selectors: [["", "ngxDesktopMousedown", ""]], hostBindings: function NgxDesktopMousedownDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function NgxDesktopMousedownDirective_mousedown_HostBindingHandler() { return ctx.mousedownListener(); })("mouseup", function NgxDesktopMousedownDirective_mouseup_HostBindingHandler() { return ctx.windowMouseupListener(); }, false, i0.ɵɵresolveWindow);
        } }, outputs: { ngxDesktopMousedown: "ngxDesktopMousedown" } });
    return NgxDesktopMousedownDirective;
}());
export { NgxDesktopMousedownDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopMousedownDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopMousedown]'
            }]
    }], function () { return []; }, { ngxDesktopMousedown: [{
            type: Output
        }], mousedownListener: [{
            type: HostListener,
            args: ['mousedown']
        }], windowMouseupListener: [{
            type: HostListener,
            args: ['window:mouseup']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtbW91c2Vkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbW91c2Vkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBZSxZQUFZLEVBQVMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUdoRztJQWdCRTtRQVhBLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFXbkMsQ0FBQztJQVJoQix3REFBaUIsR0FEakI7UUFFRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw0REFBcUIsR0FEckI7UUFFRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7NEdBWFUsNEJBQTRCO3FFQUE1Qiw0QkFBNEI7Ozt1Q0FOekM7Q0FxQkMsQUFsQkQsSUFrQkM7U0FmWSw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7a0JBRUUsTUFBTTs7a0JBR04sWUFBWTttQkFBQyxXQUFXOztrQkFJeEIsWUFBWTttQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcE1vdXNlZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wTW91c2Vkb3duRGlyZWN0aXZlIHtcclxuICBAT3V0cHV0KClcclxuICBuZ3hEZXNrdG9wTW91c2Vkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKVxyXG4gIG1vdXNlZG93bkxpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5uZ3hEZXNrdG9wTW91c2Vkb3duLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZXVwJylcclxuICB3aW5kb3dNb3VzZXVwTGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLm5neERlc2t0b3BNb3VzZWRvd24uZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG59XHJcbiJdfQ==
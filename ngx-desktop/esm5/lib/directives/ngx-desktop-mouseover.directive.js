import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopMouseoverDirective = /** @class */ (function () {
    function NgxDesktopMouseoverDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopMouseover = new EventEmitter();
    }
    NgxDesktopMouseoverDirective.prototype.mouseoverListener = function () {
        this.ngxDesktopMouseover.emit(true);
    };
    NgxDesktopMouseoverDirective.prototype.mouseoutListener = function () {
        this.ngxDesktopMouseover.emit(false);
    };
    NgxDesktopMouseoverDirective.ɵfac = function NgxDesktopMouseoverDirective_Factory(t) { return new (t || NgxDesktopMouseoverDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
    NgxDesktopMouseoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopMouseoverDirective, selectors: [["", "ngxDesktopMouseover", ""]], hostBindings: function NgxDesktopMouseoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseover", function NgxDesktopMouseoverDirective_mouseover_HostBindingHandler() { return ctx.mouseoverListener(); })("mouseout", function NgxDesktopMouseoverDirective_mouseout_HostBindingHandler() { return ctx.mouseoutListener(); });
        } }, outputs: { ngxDesktopMouseover: "ngxDesktopMouseover" } });
    return NgxDesktopMouseoverDirective;
}());
export { NgxDesktopMouseoverDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopMouseoverDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopMouseover]'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { ngxDesktopMouseover: [{
            type: Output
        }], mouseoverListener: [{
            type: HostListener,
            args: ['mouseover']
        }], mouseoutListener: [{
            type: HostListener,
            args: ['mouseout']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3AtbW91c2VvdmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbmd4LWRlc2t0b3AtbW91c2VvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBZSxZQUFZLEVBQVMsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFHaEc7SUFnQkUsc0NBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBWHhELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFXUyxDQUFDO0lBUjVELHdEQUFpQixHQURqQjtRQUVFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHVEQUFnQixHQURoQjtRQUVFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs0R0FYVSw0QkFBNEI7cUVBQTVCLDRCQUE0Qjs7O3VDQU56QztDQXFCQyxBQWxCRCxJQWtCQztTQWZZLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBSHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOztrQkFFRSxNQUFNOztrQkFHTixZQUFZO21CQUFDLFdBQVc7O2tCQUl4QixZQUFZO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05neERlc2t0b3BTZXJ2aWNlfSBmcm9tIFwiLi4vbmd4LWRlc2t0b3Auc2VydmljZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RGVza3RvcE1vdXNlb3Zlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hEZXNrdG9wTW91c2VvdmVyRGlyZWN0aXZlIHtcclxuICBAT3V0cHV0KClcclxuICBuZ3hEZXNrdG9wTW91c2VvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKVxyXG4gIG1vdXNlb3Zlckxpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5uZ3hEZXNrdG9wTW91c2VvdmVyLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0JylcclxuICBtb3VzZW91dExpc3RlbmVyKCkge1xyXG4gICAgdGhpcy5uZ3hEZXNrdG9wTW91c2VvdmVyLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHt9XHJcblxyXG59XHJcbiJdfQ==
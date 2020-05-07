import { Directive, EventEmitter, HostBinding, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../ngx-desktop.service";
var NgxDesktopOsClassDirective = /** @class */ (function () {
    function NgxDesktopOsClassDirective(ngxDesktopService, elementRef, renderer2) {
        this.ngxDesktopService = ngxDesktopService;
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.osChange = new EventEmitter();
    }
    Object.defineProperty(NgxDesktopOsClassDirective.prototype, "ngxDesktopOsClass", {
        set: function (ngxDesktopOsClass) {
            var os = this.ngxDesktopService.getOs(ngxDesktopOsClass);
            if (this.os !== os) {
                this.os = os;
                this.osChange.emit(os);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopOsClassDirective.prototype, "windowsClass", {
        get: function () {
            return this.os === 'windows';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopOsClassDirective.prototype, "osClass", {
        get: function () {
            return this.os === 'mac';
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopOsClassDirective.prototype.isMac = function () {
        return this.os === 'mac';
    };
    NgxDesktopOsClassDirective.prototype.styleDefaultValue = function (macStyle, windowsStyle) {
        return this.isMac() ? macStyle : windowsStyle;
    };
    NgxDesktopOsClassDirective.ɵfac = function NgxDesktopOsClassDirective_Factory(t) { return new (t || NgxDesktopOsClassDirective)(i0.ɵɵdirectiveInject(i1.NgxDesktopService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    NgxDesktopOsClassDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgxDesktopOsClassDirective, selectors: [["", "ngxDesktopOsClass", ""]], hostVars: 4, hostBindings: function NgxDesktopOsClassDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("windows", ctx.windowsClass)("mac", ctx.osClass);
        } }, inputs: { ngxDesktopOsClass: "ngxDesktopOsClass" }, outputs: { osChange: "osChange" }, exportAs: ["ngxDeskTopOs"] });
    return NgxDesktopOsClassDirective;
}());
export { NgxDesktopOsClassDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDesktopOsClassDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopOsClass]',
                exportAs: 'ngxDeskTopOs'
            }]
    }], function () { return [{ type: i1.NgxDesktopService }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { osChange: [{
            type: Output
        }], ngxDesktopOsClass: [{
            type: Input
        }], windowsClass: [{
            type: HostBinding,
            args: ['class.windows']
        }], osClass: [{
            type: HostBinding,
            args: ['class.mac']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRlc2t0b3Atb3MtY2xhc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9uZ3gtZGVza3RvcC1vcy1jbGFzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7OztBQUlqSDtJQW9DRSxvQ0FBb0IsaUJBQW9DLEVBQ3BDLFVBQXNCLEVBQ3RCLFNBQW9CO1FBRnBCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBL0J4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWdDdkMsQ0FBQztJQTVCRCxzQkFDSSx5REFBaUI7YUFEckIsVUFDc0IsaUJBQTBCO1lBQzlDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMzRCxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksb0RBQVk7YUFEaEI7WUFFRSxPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksK0NBQU87YUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBSyxHQUFMO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0Qsc0RBQWlCLEdBQWpCLFVBQWtCLFFBQWEsRUFBRSxZQUFpQjtRQUNoRCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDaEQsQ0FBQzt3R0EvQlUsMEJBQTBCO21FQUExQiwwQkFBMEI7OztxQ0FSdkM7Q0E2Q0MsQUF6Q0QsSUF5Q0M7U0FyQ1ksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxjQUFjO2FBQ3pCOztrQkFHRSxNQUFNOztrQkFLTixLQUFLOztrQkFTTCxXQUFXO21CQUFDLGVBQWU7O2tCQUszQixXQUFXO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T3NUeXBlc30gZnJvbSBcIi4uL3R5cGVzL3R5cGVzXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEZXNrdG9wT3NDbGFzc10nLFxyXG4gIGV4cG9ydEFzOiAnbmd4RGVza1RvcE9zJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGVza3RvcE9zQ2xhc3NEaXJlY3RpdmUge1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8T3NUeXBlcz4oKTtcclxuXHJcbiAgcHVibGljIG9zOiBPc1R5cGVzO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ3hEZXNrdG9wT3NDbGFzcyhuZ3hEZXNrdG9wT3NDbGFzczogT3NUeXBlcykge1xyXG4gICAgY29uc3Qgb3MgPSB0aGlzLm5neERlc2t0b3BTZXJ2aWNlLmdldE9zKG5neERlc2t0b3BPc0NsYXNzKTtcclxuICAgIGlmICh0aGlzLm9zICE9PSBvcykge1xyXG4gICAgICB0aGlzLm9zID0gb3M7XHJcbiAgICAgIHRoaXMub3NDaGFuZ2UuZW1pdChvcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLndpbmRvd3MnKVxyXG4gIGdldCB3aW5kb3dzQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcyA9PT0gJ3dpbmRvd3MnO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYWMnKVxyXG4gIGdldCBvc0NsYXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3MgPT09ICdtYWMnO1xyXG4gIH1cclxuXHJcbiAgaXNNYWMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcyA9PT0gJ21hYyc7XHJcbiAgfVxyXG4gIHN0eWxlRGVmYXVsdFZhbHVlKG1hY1N0eWxlOiBhbnksIHdpbmRvd3NTdHlsZTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc01hYygpID8gbWFjU3R5bGUgOiB3aW5kb3dzU3R5bGU7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
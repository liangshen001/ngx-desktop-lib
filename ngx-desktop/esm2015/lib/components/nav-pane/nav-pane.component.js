import { Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { NavPaneItemComponent } from "../nav-pane-item/nav-pane-item.component";
import { animate, state, style, transition, trigger } from "@angular/animations";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
const _c0 = [[["ngx-desktop-nav-pane-item"]]];
const _c1 = ["ngx-desktop-nav-pane-item"];
export class NavPaneComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.expandedChange = new EventEmitter();
        this.paneCompactedLength = '48px';
        this.paneExpandedLength = '200px';
        this.changePaneState = 'initial';
    }
    ngOnInit() {
    }
    a() {
        this.changePaneState = 'final';
    }
}
NavPaneComponent.ɵfac = function NavPaneComponent_Factory(t) { return new (t || NavPaneComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
NavPaneComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavPaneComponent, selectors: [["ngx-desktop-nav-pane"]], contentQueries: function NavPaneComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NavPaneItemComponent, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navPaneItems = _t);
    } }, inputs: { color: "color", expanded: "expanded", canPaneToggle: "canPaneToggle", paneCompactedLength: "paneCompactedLength", paneExpandedLength: "paneExpandedLength" }, outputs: { expandedChange: "expandedChange" }, ngContentSelectors: _c1, decls: 27, vars: 1, consts: [[1, "nav-pane-container"], [1, "nav-pane-label-container"], [2, "height", "48px"], [2, "position", "absolute", "padding", "8px 10px", "top", "7px", "left", "4px", "width", "20px", "height", "20px"], ["x", "0px", "y", "0px", "viewBox", "0 0 20 12.5", "data-radium", "true"], ["fill", "#000000", "fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0,12.5h20V11H0V12.5z M0,7h20V5.5H0V7z M0,0v1.5h20V0H0z"], ["data-radium", "true", 1, "pane-label", "checked", 3, "click"], ["data-radium", "true"], ["x", "0px", "y", "0px", "width", "16px", "height", "14.9px", "viewBox", "0 0 16 14.9"], ["fill", "#000000", "points", "16,5.6 10.6,4.7 8,0 5.4,4.7 0,5.7 3.8,9.6 3.1,14.9 8,12.6 13,14.8 12.3,9.5 "], ["data-radium", "true", 1, "pane-label"], ["x", "0px", "y", "0px", "width", "16px", "height", "13.5px", "viewBox", "0 0 16 13.5"], ["fill", "#000000", "d", "M16,4.2C16,1.9,14.1,0,11.7,0c-1.4,0-2.6,0.6-3.4,1.6c0,0,0,0,0,0C8.3,1.7,8.1,1.8,8,1.8 c-0.2,0-0.3-0.1-0.4-0.2c0,0,0,0,0,0C6.8,0.6,5.6,0,4.3,0C1.9,0,0,1.9,0,4.2c0,0,0,0.1,0,0.1l0,0c0,0,0,0.1,0,0.3 C0,4.8,0.1,5,0.1,5.2c0.3,1.4,1.4,4.1,5.1,6.5c2.1,1.4,2.6,1.8,2.8,1.8c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.7-0.4,2.8-1.8 c3.5-2.3,4.6-4.8,5-6.3C15.9,5.1,16,4.8,16,4.5C16,4.3,16,4.2,16,4.2L16,4.2C16,4.2,16,4.2,16,4.2z"], ["x", "0px", "y", "0px", "width", "16px", "height", "15.6px", "viewBox", "0 0 16 15.6"], ["fill", "#000000", "d", "M14.9,3.2c0.7-0.9,1-1.7,1.1-2.4c0-0.2,0-0.4-0.1-0.5c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1 C15.6,0,15.4,0,15.2,0c-0.7,0-1.6,0.4-2.4,1c-0.7,0.5-1.4,1.2-2.4,2.3C10.2,3.5,10,3.6,9.8,3.8L8.3,3.4L7.9,3.3C8,3.2,8.1,3.1,8.1,3 c0-0.1,0-0.2-0.1-0.3L7.6,2.3C7.5,2.3,7.4,2.2,7.3,2.2c-0.1,0-0.2,0-0.3,0.1L6.5,2.8L6.2,2.8c0.1-0.1,0.1-0.2,0.1-0.3 c0-0.1,0-0.2-0.1-0.3L5.8,1.9C5.7,1.8,5.6,1.8,5.5,1.8c-0.1,0-0.2,0-0.3,0.1L4.7,2.3L2.8,1.8c0,0-0.1,0-0.1,0 c-0.1,0-0.3,0.1-0.4,0.1L1.6,2.6C1.5,2.6,1.5,2.7,1.5,2.8c0,0.1,0.1,0.3,0.2,0.3l4.1,2.2c0,0,0.1,0.1,0.1,0.1L7,6.6 C6,7.7,5,8.8,4.2,9.7C4.2,9.8,4.1,9.9,4,10L0.9,9.7c0,0,0,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.2l-0.3,0.3C0,10.3,0,10.4,0,10.5 c0,0.1,0.1,0.3,0.2,0.3l2.2,1c0,0,0.1,0,0.1,0.1l0.2,0.2c-0.1,0.2-0.1,0.3-0.1,0.4c0,0.2,0.1,0.3,0.2,0.4C2.9,13,3,13.1,3.2,13.1 c0.1,0,0.3,0,0.4-0.1l0.2,0.2c0,0,0,0.1,0.1,0.1l1.1,2.2c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.2,0,0.3-0.1l0.3-0.3C6,15.1,6,14.9,6,14.8 c0,0-0.3-3.1-0.3-3.1c0.1-0.1,0.2-0.1,0.3-0.2c1-0.7,2.1-1.7,3.2-2.7l1.2,1.1c0,0,0.1,0.1,0.1,0.1l2.3,4c0.1,0.1,0.2,0.2,0.3,0.2 c0.1,0,0.2,0,0.3-0.1l0.7-0.7c0.1-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1l-0.5-1.8L13.6,11l0.5-0.4c0.1-0.1,0.1-0.2,0.1-0.3 c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1l-0.1-0.3l0.5-0.5c0.1-0.1,0.1-0.2,0.1-0.3 c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1L12.1,6c0.2-0.2,0.4-0.4,0.6-0.5 C13.7,4.5,14.4,3.8,14.9,3.2z"], [1, "nav-pane-content-container"], ["data-radium", "true", 1, "title-container"], ["data-radium", "true", 1, "last-title"], [2, "display", "flex", "flex", "1 1 0%", "flex-direction", "column", "padding", "10px 20px", "background", "rgb(255, 255, 255)"]], template: function NavPaneComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(4, "svg", 4);
        i0.ɵɵelement(5, "path", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(6, "a", 6);
        i0.ɵɵlistener("click", function NavPaneComponent_Template_a_click_6_listener() { return ctx.a(); });
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵelementStart(8, "i", 7);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(9, "svg", 8);
        i0.ɵɵelement(10, "polygon", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(11, "a", 10);
        i0.ɵɵelementStart(12, "span", 7);
        i0.ɵɵelementStart(13, "i", 7);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(14, "svg", 11);
        i0.ɵɵelement(15, "path", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(16, "a", 10);
        i0.ɵɵelementStart(17, "span", 7);
        i0.ɵɵelementStart(18, "i", 7);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(19, "svg", 13);
        i0.ɵɵelement(20, "path", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(21, "div", 15);
        i0.ɵɵelementStart(22, "div", 16);
        i0.ɵɵelementStart(23, "span", 17);
        i0.ɵɵtext(24, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 18);
        i0.ɵɵprojection(26);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(23);
        i0.ɵɵproperty("@changePane", ctx.changePaneState);
    } }, styles: [".nav-pane-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;position:relative;flex:1 1 0}.nav-pane-content-container[_ngcontent-%COMP%]{position:relative;flex-grow:1;flex-shrink:0;display:flex;flex-direction:column}[_nghost-%COMP%]{width:100%}.nav-pane-label-container[_ngcontent-%COMP%]{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;position:relative;flex-grow:0;flex-shrink:0;flex-direction:column;overflow:hidden;width:48px}.pane-label[_ngcontent-%COMP%]{display:flex;align-items:center;height:44px}.pane-label.checked[_ngcontent-%COMP%]{background-color:rgba(204,127,41,.6)}.pane-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;color:#000;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;letter-spacing:.4pt;padding:0 16px;transition:transform .1s ease-in;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pane-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:8px;height:44px;display:flex;align-items:center}.title-container[_ngcontent-%COMP%]{position:relative;color:#000;height:48px;display:flex;align-items:center;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;text-transform:uppercase;padding:0 24px;overflow:hidden;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.current-title[_ngcontent-%COMP%]{opacity:0;-webkit-animation:.3s forwards Title-radium-animation;animation:.3s forwards Title-radium-animation}.last-title[_ngcontent-%COMP%]{position:absolute;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;color:#000;height:48px;display:flex;align-items:center;font-size:15px;text-transform:uppercase;padding:0 24px;overflow:hidden;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:0;left:0}@-webkit-keyframes span-radium-animation{0%{opacity:1}100%{opacity:0}}@keyframes span-radium-animation{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes Title-radium-animation{0%{opacity:0}29%{opacity:0;transform:translateY(9px)}30%{opacity:.35;transform:translateY(9px)}100%{opacity:1;transform:translateY(0)}}@keyframes Title-radium-animation{0%{opacity:0}29%{opacity:0;transform:translateY(9px)}30%{opacity:.35;transform:translateY(9px)}100%{opacity:1;transform:translateY(0)}}"], data: { animation: [
            trigger('changePane', [
                state('initial', style({
                    transform: 'translateY(1)',
                    opacity: 0
                })),
                state('final', style({
                    transform: 'translateY(0)',
                    opacity: 0
                })),
                transition('initial=>final', animate(1000))
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NavPaneComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-nav-pane',
                templateUrl: './nav-pane.component.html',
                styleUrls: ['./nav-pane.component.css'],
                animations: [
                    trigger('changePane', [
                        state('initial', style({
                            transform: 'translateY(1)',
                            opacity: 0
                        })),
                        state('final', style({
                            transform: 'translateY(0)',
                            opacity: 0
                        })),
                        transition('initial=>final', animate(1000))
                    ])
                ]
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { color: [{
            type: Input
        }], expanded: [{
            type: Input
        }], expandedChange: [{
            type: Output
        }], canPaneToggle: [{
            type: Input
        }], paneCompactedLength: [{
            type: Input
        }], paneExpandedLength: [{
            type: Input
        }], navPaneItems: [{
            type: ContentChildren,
            args: [NavPaneItemComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXBhbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYtcGFuZS9uYXYtcGFuZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9uYXYtcGFuZS9uYXYtcGFuZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUFFLGVBQWUsRUFDZCxZQUFZLEVBSXhCLEtBQUssRUFDRyxNQUFNLEVBRWYsTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFOUUsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFtQi9FLE1BQU0sT0FBTyxnQkFBZ0I7SUF3QjNCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZnhELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU03Qyx3QkFBbUIsR0FBb0IsTUFBTSxDQUFDO1FBRTlDLHVCQUFrQixHQUFvQixPQUFPLENBQUM7UUFLOUMsb0JBQWUsR0FBRyxTQUFTLENBQUM7SUFHNUIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsQ0FBQztRQUNDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7O2dGQWhDVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjtvQ0FtQlYsb0JBQW9COzs7Ozs7UUN6RHZDLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSx5QkFBaUM7UUFDakMsK0JBQ0U7UUFBQSxtQkFDRTtRQURGLDhCQUNFO1FBQUEsMEJBQWdJO1FBQ2xJLGlCQUFNO1FBQ1IsaUJBQU87UUFDUCxvQkFDRTtRQURGLDRCQUNFO1FBRCtDLHdGQUFTLE9BQUcsSUFBQztRQUM1RCwrQkFDRTtRQUFBLDRCQUNFO1FBQUEsbUJBS0U7UUFMRiw4QkFLRTtRQUFBLDhCQUF1SDtRQUN6SCxpQkFBTTtRQUNSLGlCQUFJO1FBQ04saUJBQU87UUFDVCxpQkFBSTtRQUNKLG9CQUNFO1FBREYsOEJBQ0U7UUFBQSxnQ0FDRTtRQUFBLDZCQUNFO1FBQUEsbUJBS0U7UUFMRixnQ0FLRTtRQUFBLDRCQUVvYTtRQUN0YSxpQkFBTTtRQUNSLGlCQUFJO1FBQ04saUJBQU87UUFDVCxpQkFBSTtRQUNKLG9CQUNBO1FBREEsOEJBQ0E7UUFBQSxnQ0FDRTtRQUFBLDZCQUNFO1FBQUEsbUJBS0U7UUFMRixnQ0FLRTtRQUFBLDRCQUVxNUM7UUFDdjVDLGlCQUFNO1FBQ1IsaUJBQUk7UUFDTixpQkFBTztRQUNQLGlCQUFJO1FBQ04saUJBQU07UUFDTixvQkFDRTtRQURGLGdDQUNFO1FBQUEsZ0NBQ0U7UUFBQSxpQ0FBNEU7UUFBQSx1QkFBTTtRQUFBLGlCQUFPO1FBRTNGLGlCQUFNO1FBQ04sZ0NBQ0U7UUFBQSxtQkFBK0M7UUFDakQsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQVA0QyxnQkFBK0I7UUFBL0IsaURBQStCOzJqRkQ3Qm5FO1lBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTtnQkFDcEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7b0JBQ3JCLFNBQVMsRUFBRSxlQUFlO29CQUMxQixPQUFPLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7b0JBQ25CLFNBQVMsRUFBRSxlQUFlO29CQUMxQixPQUFPLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QyxDQUFDO1NBQUM7a0RBRU0sZ0JBQWdCO2NBakI1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNwQixLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQzs0QkFDckIsU0FBUyxFQUFFLGVBQWU7NEJBQzFCLE9BQU8sRUFBRSxDQUFDO3lCQUNYLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs0QkFDbkIsU0FBUyxFQUFFLGVBQWU7NEJBQzFCLE9BQU8sRUFBRSxDQUFDO3lCQUNYLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUM1QyxDQUFDO2lCQUFDO2FBQ047O2tCQUdFLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLE1BQU07O2tCQUdOLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLGVBQWU7bUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yQWJzdHJhY3RDb21wb25lbnR9IGZyb20gXCIuLi9jb250cm9sLXZhbHVlLWFjY2Vzc29yLWFic3RyYWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge09TX1RPS0VOLCBPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtPc1V0aWxzfSBmcm9tIFwiLi4vLi4vdXRpbHMvb3MudXRpbHNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdHlsZVZhbHVlVHlwZXN9IGZyb20gXCIuLi8uLi9waXBlcy9zdHlsZS12YWx1ZS5waXBlXCI7XHJcbmltcG9ydCB7TmF2UGFuZUl0ZW1Db21wb25lbnR9IGZyb20gXCIuLi9uYXYtcGFuZS1pdGVtL25hdi1wYW5lLWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VG9vbGJhck5hdkl0ZW1Db21wb25lbnR9IGZyb20gXCIuLi90b29sYmFyLW5hdi1pdGVtL3Rvb2xiYXItbmF2LWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC1uYXYtcGFuZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1wYW5lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXYtcGFuZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignY2hhbmdlUGFuZScsIFtcclxuICAgICAgc3RhdGUoJ2luaXRpYWwnLCBzdHlsZSh7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxKScsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICB9KSksXHJcbiAgICAgIHN0YXRlKCdmaW5hbCcsIHN0eWxlKHtcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignaW5pdGlhbD0+ZmluYWwnLCBhbmltYXRlKDEwMDApKVxyXG4gICAgXSldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZQYW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV4cGFuZGVkOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBleHBhbmRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBjYW5QYW5lVG9nZ2xlOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBhbmVDb21wYWN0ZWRMZW5ndGg6IFN0eWxlVmFsdWVUeXBlcyA9ICc0OHB4JztcclxuICBASW5wdXQoKVxyXG4gIHBhbmVFeHBhbmRlZExlbmd0aDogU3R5bGVWYWx1ZVR5cGVzID0gJzIwMHB4JztcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihOYXZQYW5lSXRlbUNvbXBvbmVudClcclxuICBuYXZQYW5lSXRlbXM6IFF1ZXJ5TGlzdDxOYXZQYW5lSXRlbUNvbXBvbmVudD47XHJcblxyXG4gIGNoYW5nZVBhbmVTdGF0ZSA9ICdpbml0aWFsJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgYSgpIHtcclxuICAgIHRoaXMuY2hhbmdlUGFuZVN0YXRlID0gJ2ZpbmFsJztcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm5hdi1wYW5lLWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJuYXYtcGFuZS1sYWJlbC1jb250YWluZXJcIj5cclxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDQ4cHg7XCI+PC9kaXY+XHJcbiAgICA8c3BhbiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgcGFkZGluZzogOHB4IDEwcHg7IHRvcDogN3B4OyBsZWZ0OiA0cHg7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XCI+XHJcbiAgICAgIDxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDIwIDEyLjVcIiBkYXRhLXJhZGl1bT1cInRydWVcIiA+XHJcbiAgICAgICAgPHBhdGggZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCwxMi41aDIwVjExSDBWMTIuNXogTTAsN2gyMFY1LjVIMFY3eiBNMCwwdjEuNWgyMFYwSDB6XCI+PC9wYXRoPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwicGFuZS1sYWJlbCBjaGVja2VkXCIgKGNsaWNrKT1cImEoKVwiPlxyXG4gICAgICA8c3BhbiBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgICA8aSBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgICAgIDxzdmcgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICBoZWlnaHQ9XCIxNC45cHhcIlxyXG4gICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE0LjlcIj5cclxuICAgICAgICAgICAgPHBvbHlnb24gZmlsbD1cIiMwMDAwMDBcIiBwb2ludHM9XCIxNiw1LjYgMTAuNiw0LjcgOCwwIDUuNCw0LjcgMCw1LjcgMy44LDkuNiAzLjEsMTQuOSA4LDEyLjYgMTMsMTQuOCAxMi4zLDkuNSBcIj48L3BvbHlnb24+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxhIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwicGFuZS1sYWJlbFwiPlxyXG4gICAgICA8c3BhbiBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgICA8aSBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgICAgIDxzdmcgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICBoZWlnaHQ9XCIxMy41cHhcIlxyXG4gICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDEzLjVcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgICAgZD1cIk0xNiw0LjJDMTYsMS45LDE0LjEsMCwxMS43LDBjLTEuNCwwLTIuNiwwLjYtMy40LDEuNmMwLDAsMCwwLDAsMEM4LjMsMS43LDguMSwxLjgsOCwxLjggYy0wLjIsMC0wLjMtMC4xLTAuNC0wLjJjMCwwLDAsMCwwLDBDNi44LDAuNiw1LjYsMCw0LjMsMEMxLjksMCwwLDEuOSwwLDQuMmMwLDAsMCwwLjEsMCwwLjFsMCwwYzAsMCwwLDAuMSwwLDAuMyBDMCw0LjgsMC4xLDUsMC4xLDUuMmMwLjMsMS40LDEuNCw0LjEsNS4xLDYuNWMyLjEsMS40LDIuNiwxLjgsMi44LDEuOGMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGMwLjEsMCwwLjctMC40LDIuOC0xLjggYzMuNS0yLjMsNC42LTQuOCw1LTYuM0MxNS45LDUuMSwxNiw0LjgsMTYsNC41QzE2LDQuMywxNiw0LjIsMTYsNC4yTDE2LDQuMkMxNiw0LjIsMTYsNC4yLDE2LDQuMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxhIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwicGFuZS1sYWJlbFwiPlxyXG4gICAgPHNwYW4gZGF0YS1yYWRpdW09XCJ0cnVlXCI+XHJcbiAgICAgIDxpIGRhdGEtcmFkaXVtPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxzdmcgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgIHdpZHRoPVwiMTZweFwiXHJcbiAgICAgICAgICAgICBoZWlnaHQ9XCIxNS42cHhcIlxyXG4gICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNS42XCI+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTQuOSwzLjJjMC43LTAuOSwxLTEuNywxLjEtMi40YzAtMC4yLDAtMC40LTAuMS0wLjVjMCwwLDAtMC4xLTAuMS0wLjFjMCwwLTAuMS0wLjEtMC4xLTAuMSBDMTUuNiwwLDE1LjQsMCwxNS4yLDBjLTAuNywwLTEuNiwwLjQtMi40LDFjLTAuNywwLjUtMS40LDEuMi0yLjQsMi4zQzEwLjIsMy41LDEwLDMuNiw5LjgsMy44TDguMywzLjRMNy45LDMuM0M4LDMuMiw4LjEsMy4xLDguMSwzIGMwLTAuMSwwLTAuMi0wLjEtMC4zTDcuNiwyLjNDNy41LDIuMyw3LjQsMi4yLDcuMywyLjJjLTAuMSwwLTAuMiwwLTAuMywwLjFMNi41LDIuOEw2LjIsMi44YzAuMS0wLjEsMC4xLTAuMiwwLjEtMC4zIGMwLTAuMSwwLTAuMi0wLjEtMC4zTDUuOCwxLjlDNS43LDEuOCw1LjYsMS44LDUuNSwxLjhjLTAuMSwwLTAuMiwwLTAuMywwLjFMNC43LDIuM0wyLjgsMS44YzAsMC0wLjEsMC0wLjEsMCBjLTAuMSwwLTAuMywwLjEtMC40LDAuMUwxLjYsMi42QzEuNSwyLjYsMS41LDIuNywxLjUsMi44YzAsMC4xLDAuMSwwLjMsMC4yLDAuM2w0LjEsMi4yYzAsMCwwLjEsMC4xLDAuMSwwLjFMNyw2LjYgQzYsNy43LDUsOC44LDQuMiw5LjdDNC4yLDkuOCw0LjEsOS45LDQsMTBMMC45LDkuN2MwLDAsMCwwLTAuMSwwYy0wLjEsMC0wLjMsMC4xLTAuNCwwLjJsLTAuMywwLjNDMCwxMC4zLDAsMTAuNCwwLDEwLjUgYzAsMC4xLDAuMSwwLjMsMC4yLDAuM2wyLjIsMWMwLDAsMC4xLDAsMC4xLDAuMWwwLjIsMC4yYy0wLjEsMC4yLTAuMSwwLjMtMC4xLDAuNGMwLDAuMiwwLjEsMC4zLDAuMiwwLjRDMi45LDEzLDMsMTMuMSwzLjIsMTMuMSBjMC4xLDAsMC4zLDAsMC40LTAuMWwwLjIsMC4yYzAsMCwwLDAuMSwwLjEsMC4xbDEuMSwyLjJjMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4xLDAsMC4yLDAsMC4zLTAuMWwwLjMtMC4zQzYsMTUuMSw2LDE0LjksNiwxNC44IGMwLDAtMC4zLTMuMS0wLjMtMy4xYzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4yYzEtMC43LDIuMS0xLjcsMy4yLTIuN2wxLjIsMS4xYzAsMCwwLjEsMC4xLDAuMSwwLjFsMi4zLDRjMC4xLDAuMSwwLjIsMC4yLDAuMywwLjIgYzAuMSwwLDAuMiwwLDAuMy0wLjFsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjIsMC4xLTAuM2MwLDAsMC0wLjEsMC0wLjFsLTAuNS0xLjhMMTMuNiwxMWwwLjUtMC40YzAuMS0wLjEsMC4xLTAuMiwwLjEtMC4zIGMwLTAuMSwwLTAuMi0wLjEtMC4zbC0wLjMtMC4zYy0wLjEtMC4xLTAuMi0wLjEtMC4zLTAuMWMtMC4xLDAtMC4yLDAtMC4zLDAuMWwtMC4xLTAuM2wwLjUtMC41YzAuMS0wLjEsMC4xLTAuMiwwLjEtMC4zIGMwLTAuMSwwLTAuMi0wLjEtMC4zbC0wLjMtMC4zYy0wLjEtMC4xLTAuMi0wLjEtMC4zLTAuMWMtMC4xLDAtMC4yLDAtMC4zLDAuMUwxMi4xLDZjMC4yLTAuMiwwLjQtMC40LDAuNi0wLjUgQzEzLjcsNC41LDE0LjQsMy44LDE0LjksMy4yelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJuYXYtcGFuZS1jb250ZW50LWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8c3BhbiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cImxhc3QtdGl0bGVcIiBbQGNoYW5nZVBhbmVdPVwiY2hhbmdlUGFuZVN0YXRlXCI+SXRlbSAyPC9zcGFuPlxyXG48IS0tICAgICAgPHNwYW4gZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJjdXJyZW50LXRpdGxlXCI+SXRlbSAxPC9zcGFuPi0tPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleDogMSAxIDAlOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nOiAxMHB4IDIwcHg7IGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmd4LWRlc2t0b3AtbmF2LXBhbmUtaXRlbVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19
import { Component, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { NavPaneItemComponent } from "../nav-pane-item/nav-pane-item.component";
import { animate, state, style, transition, trigger } from "@angular/animations";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
var _c0 = [[["ngx-desktop-nav-pane-item"]]];
var _c1 = ["ngx-desktop-nav-pane-item"];
var NavPaneComponent = /** @class */ (function () {
    function NavPaneComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.expandedChange = new EventEmitter();
        this.paneCompactedLength = '48px';
        this.paneExpandedLength = '200px';
        this.changePaneState = 'initial';
    }
    NavPaneComponent.prototype.ngOnInit = function () {
    };
    NavPaneComponent.prototype.a = function () {
        this.changePaneState = 'final';
    };
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
    return NavPaneComponent;
}());
export { NavPaneComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXBhbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWRlc2t0b3AvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYtcGFuZS9uYXYtcGFuZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9uYXYtcGFuZS9uYXYtcGFuZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUFFLGVBQWUsRUFDZCxZQUFZLEVBSXhCLEtBQUssRUFDRyxNQUFNLEVBRWYsTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFOUUsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFFL0U7SUF5Q0UsMEJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBZnhELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU03Qyx3QkFBbUIsR0FBb0IsTUFBTSxDQUFDO1FBRTlDLHVCQUFrQixHQUFvQixPQUFPLENBQUM7UUFLOUMsb0JBQWUsR0FBRyxTQUFTLENBQUM7SUFHNUIsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNEJBQUMsR0FBRDtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7b0ZBaENVLGdCQUFnQjt5REFBaEIsZ0JBQWdCO3dDQW1CVixvQkFBb0I7Ozs7OztZQ3pEdkMsOEJBQ0U7WUFBQSw4QkFDRTtZQUFBLHlCQUFpQztZQUNqQywrQkFDRTtZQUFBLG1CQUNFO1lBREYsOEJBQ0U7WUFBQSwwQkFBZ0k7WUFDbEksaUJBQU07WUFDUixpQkFBTztZQUNQLG9CQUNFO1lBREYsNEJBQ0U7WUFEK0Msd0ZBQVMsT0FBRyxJQUFDO1lBQzVELCtCQUNFO1lBQUEsNEJBQ0U7WUFBQSxtQkFLRTtZQUxGLDhCQUtFO1lBQUEsOEJBQXVIO1lBQ3pILGlCQUFNO1lBQ1IsaUJBQUk7WUFDTixpQkFBTztZQUNULGlCQUFJO1lBQ0osb0JBQ0U7WUFERiw4QkFDRTtZQUFBLGdDQUNFO1lBQUEsNkJBQ0U7WUFBQSxtQkFLRTtZQUxGLGdDQUtFO1lBQUEsNEJBRW9hO1lBQ3RhLGlCQUFNO1lBQ1IsaUJBQUk7WUFDTixpQkFBTztZQUNULGlCQUFJO1lBQ0osb0JBQ0E7WUFEQSw4QkFDQTtZQUFBLGdDQUNFO1lBQUEsNkJBQ0U7WUFBQSxtQkFLRTtZQUxGLGdDQUtFO1lBQUEsNEJBRXE1QztZQUN2NUMsaUJBQU07WUFDUixpQkFBSTtZQUNOLGlCQUFPO1lBQ1AsaUJBQUk7WUFDTixpQkFBTTtZQUNOLG9CQUNFO1lBREYsZ0NBQ0U7WUFBQSxnQ0FDRTtZQUFBLGlDQUE0RTtZQUFBLHVCQUFNO1lBQUEsaUJBQU87WUFFM0YsaUJBQU07WUFDTixnQ0FDRTtZQUFBLG1CQUErQztZQUNqRCxpQkFBTTtZQUNSLGlCQUFNO1lBQ1IsaUJBQU07O1lBUDRDLGdCQUErQjtZQUEvQixpREFBK0I7K2pGRDdCbkU7Z0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTtvQkFDcEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7d0JBQ3JCLFNBQVMsRUFBRSxlQUFlO3dCQUMxQixPQUFPLEVBQUUsQ0FBQztxQkFDWCxDQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7d0JBQ25CLFNBQVMsRUFBRSxlQUFlO3dCQUMxQixPQUFPLEVBQUUsQ0FBQztxQkFDWCxDQUFDLENBQUM7b0JBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUMsQ0FBQzthQUFDOzJCQXBDUDtDQXVFQyxBQWxERCxJQWtEQztTQWpDWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQWpCNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUN2QyxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDcEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7NEJBQ3JCLFNBQVMsRUFBRSxlQUFlOzRCQUMxQixPQUFPLEVBQUUsQ0FBQzt5QkFDWCxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7NEJBQ25CLFNBQVMsRUFBRSxlQUFlOzRCQUMxQixPQUFPLEVBQUUsQ0FBQzt5QkFDWCxDQUFDLENBQUM7d0JBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDNUMsQ0FBQztpQkFBQzthQUNOOztrQkFHRSxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxNQUFNOztrQkFHTixLQUFLOztrQkFHTCxLQUFLOztrQkFFTCxLQUFLOztrQkFHTCxlQUFlO21CQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPU19UT0tFTiwgT3NUeXBlc30gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XHJcbmltcG9ydCB7T3NVdGlsc30gZnJvbSBcIi4uLy4uL3V0aWxzL29zLnV0aWxzXCI7XHJcbmltcG9ydCB7Tmd4RGVza3RvcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9uZ3gtZGVza3RvcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3R5bGVWYWx1ZVR5cGVzfSBmcm9tIFwiLi4vLi4vcGlwZXMvc3R5bGUtdmFsdWUucGlwZVwiO1xyXG5pbXBvcnQge05hdlBhbmVJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi4vbmF2LXBhbmUtaXRlbS9uYXYtcGFuZS1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Rvb2xiYXJOYXZJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi4vdG9vbGJhci1uYXYtaXRlbS90b29sYmFyLW5hdi1pdGVtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRlc2t0b3AtbmF2LXBhbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtcGFuZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LXBhbmUuY29tcG9uZW50LmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2NoYW5nZVBhbmUnLCBbXHJcbiAgICAgIHN0YXRlKCdpbml0aWFsJywgc3R5bGUoe1xyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMSknLFxyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgfSkpLFxyXG4gICAgICBzdGF0ZSgnZmluYWwnLCBzdHlsZSh7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXHJcbiAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2luaXRpYWw9PmZpbmFsJywgYW5pbWF0ZSgxMDAwKSlcclxuICAgIF0pXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2UGFuZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBleHBhbmRlZDogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgZXhwYW5kZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2FuUGFuZVRvZ2dsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwYW5lQ29tcGFjdGVkTGVuZ3RoOiBTdHlsZVZhbHVlVHlwZXMgPSAnNDhweCc7XHJcbiAgQElucHV0KClcclxuICBwYW5lRXhwYW5kZWRMZW5ndGg6IFN0eWxlVmFsdWVUeXBlcyA9ICcyMDBweCc7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oTmF2UGFuZUl0ZW1Db21wb25lbnQpXHJcbiAgbmF2UGFuZUl0ZW1zOiBRdWVyeUxpc3Q8TmF2UGFuZUl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBjaGFuZ2VQYW5lU3RhdGUgPSAnaW5pdGlhbCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4RGVza3RvcFNlcnZpY2U6IE5neERlc2t0b3BTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGEoKSB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVTdGF0ZSA9ICdmaW5hbCc7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJuYXYtcGFuZS1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwibmF2LXBhbmUtbGFiZWwtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA0OHB4O1wiPjwvZGl2PlxyXG4gICAgPHNwYW4gc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHBhZGRpbmc6IDhweCAxMHB4OyB0b3A6IDdweDsgbGVmdDogNHB4OyB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1wiPlxyXG4gICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyMCAxMi41XCIgZGF0YS1yYWRpdW09XCJ0cnVlXCIgPlxyXG4gICAgICAgIDxwYXRoIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAsMTIuNWgyMFYxMUgwVjEyLjV6IE0wLDdoMjBWNS41SDBWN3ogTTAsMHYxLjVoMjBWMEgwelwiPjwvcGF0aD5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8YSBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInBhbmUtbGFiZWwgY2hlY2tlZFwiIChjbGljayk9XCJhKClcIj5cclxuICAgICAgPHNwYW4gZGF0YS1yYWRpdW09XCJ0cnVlXCI+XHJcbiAgICAgICAgPGkgZGF0YS1yYWRpdW09XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8c3ZnIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTQuOXB4XCJcclxuICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNC45XCI+XHJcbiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9XCIjMDAwMDAwXCIgcG9pbnRzPVwiMTYsNS42IDEwLjYsNC43IDgsMCA1LjQsNC43IDAsNS43IDMuOCw5LjYgMy4xLDE0LjkgOCwxMi42IDEzLDE0LjggMTIuMyw5LjUgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInBhbmUtbGFiZWxcIj5cclxuICAgICAgPHNwYW4gZGF0YS1yYWRpdW09XCJ0cnVlXCI+XHJcbiAgICAgICAgPGkgZGF0YS1yYWRpdW09XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8c3ZnIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICB5PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgd2lkdGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTMuNXB4XCJcclxuICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxMy41XCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTYsNC4yQzE2LDEuOSwxNC4xLDAsMTEuNywwYy0xLjQsMC0yLjYsMC42LTMuNCwxLjZjMCwwLDAsMCwwLDBDOC4zLDEuNyw4LjEsMS44LDgsMS44IGMtMC4yLDAtMC4zLTAuMS0wLjQtMC4yYzAsMCwwLDAsMCwwQzYuOCwwLjYsNS42LDAsNC4zLDBDMS45LDAsMCwxLjksMCw0LjJjMCwwLDAsMC4xLDAsMC4xbDAsMGMwLDAsMCwwLjEsMCwwLjMgQzAsNC44LDAuMSw1LDAuMSw1LjJjMC4zLDEuNCwxLjQsNC4xLDUuMSw2LjVjMi4xLDEuNCwyLjYsMS44LDIuOCwxLjhjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDBjMC4xLDAsMC43LTAuNCwyLjgtMS44IGMzLjUtMi4zLDQuNi00LjgsNS02LjNDMTUuOSw1LjEsMTYsNC44LDE2LDQuNUMxNiw0LjMsMTYsNC4yLDE2LDQuMkwxNiw0LjJDMTYsNC4yLDE2LDQuMiwxNiw0LjJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8YSBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cInBhbmUtbGFiZWxcIj5cclxuICAgIDxzcGFuIGRhdGEtcmFkaXVtPVwidHJ1ZVwiPlxyXG4gICAgICA8aSBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgICA8c3ZnIHg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICB3aWR0aD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgaGVpZ2h0PVwiMTUuNnB4XCJcclxuICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTUuNlwiPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbD1cIiMwMDAwMDBcIlxyXG4gICAgICAgICAgICBkPVwiTTE0LjksMy4yYzAuNy0wLjksMS0xLjcsMS4xLTIuNGMwLTAuMiwwLTAuNC0wLjEtMC41YzAsMCwwLTAuMS0wLjEtMC4xYzAsMC0wLjEtMC4xLTAuMS0wLjEgQzE1LjYsMCwxNS40LDAsMTUuMiwwYy0wLjcsMC0xLjYsMC40LTIuNCwxYy0wLjcsMC41LTEuNCwxLjItMi40LDIuM0MxMC4yLDMuNSwxMCwzLjYsOS44LDMuOEw4LjMsMy40TDcuOSwzLjNDOCwzLjIsOC4xLDMuMSw4LjEsMyBjMC0wLjEsMC0wLjItMC4xLTAuM0w3LjYsMi4zQzcuNSwyLjMsNy40LDIuMiw3LjMsMi4yYy0wLjEsMC0wLjIsMC0wLjMsMC4xTDYuNSwyLjhMNi4yLDIuOGMwLjEtMC4xLDAuMS0wLjIsMC4xLTAuMyBjMC0wLjEsMC0wLjItMC4xLTAuM0w1LjgsMS45QzUuNywxLjgsNS42LDEuOCw1LjUsMS44Yy0wLjEsMC0wLjIsMC0wLjMsMC4xTDQuNywyLjNMMi44LDEuOGMwLDAtMC4xLDAtMC4xLDAgYy0wLjEsMC0wLjMsMC4xLTAuNCwwLjFMMS42LDIuNkMxLjUsMi42LDEuNSwyLjcsMS41LDIuOGMwLDAuMSwwLjEsMC4zLDAuMiwwLjNsNC4xLDIuMmMwLDAsMC4xLDAuMSwwLjEsMC4xTDcsNi42IEM2LDcuNyw1LDguOCw0LjIsOS43QzQuMiw5LjgsNC4xLDkuOSw0LDEwTDAuOSw5LjdjMCwwLDAsMC0wLjEsMGMtMC4xLDAtMC4zLDAuMS0wLjQsMC4ybC0wLjMsMC4zQzAsMTAuMywwLDEwLjQsMCwxMC41IGMwLDAuMSwwLjEsMC4zLDAuMiwwLjNsMi4yLDFjMCwwLDAuMSwwLDAuMSwwLjFsMC4yLDAuMmMtMC4xLDAuMi0wLjEsMC4zLTAuMSwwLjRjMCwwLjIsMC4xLDAuMywwLjIsMC40QzIuOSwxMywzLDEzLjEsMy4yLDEzLjEgYzAuMSwwLDAuMywwLDAuNC0wLjFsMC4yLDAuMmMwLDAsMCwwLjEsMC4xLDAuMWwxLjEsMi4yYzAuMSwwLjEsMC4yLDAuMiwwLjQsMC4yYzAuMSwwLDAuMiwwLDAuMy0wLjFsMC4zLTAuM0M2LDE1LjEsNiwxNC45LDYsMTQuOCBjMCwwLTAuMy0zLjEtMC4zLTMuMWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMmMxLTAuNywyLjEtMS43LDMuMi0yLjdsMS4yLDEuMWMwLDAsMC4xLDAuMSwwLjEsMC4xbDIuMyw0YzAuMSwwLjEsMC4yLDAuMiwwLjMsMC4yIGMwLjEsMCwwLjIsMCwwLjMtMC4xbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4yLDAuMS0wLjNjMCwwLDAtMC4xLDAtMC4xbC0wLjUtMS44TDEzLjYsMTFsMC41LTAuNGMwLjEtMC4xLDAuMS0wLjIsMC4xLTAuMyBjMC0wLjEsMC0wLjItMC4xLTAuM2wtMC4zLTAuM2MtMC4xLTAuMS0wLjItMC4xLTAuMy0wLjFjLTAuMSwwLTAuMiwwLTAuMywwLjFsLTAuMS0wLjNsMC41LTAuNWMwLjEtMC4xLDAuMS0wLjIsMC4xLTAuMyBjMC0wLjEsMC0wLjItMC4xLTAuM2wtMC4zLTAuM2MtMC4xLTAuMS0wLjItMC4xLTAuMy0wLjFjLTAuMSwwLTAuMiwwLTAuMywwLjFMMTIuMSw2YzAuMi0wLjIsMC40LTAuNCwwLjYtMC41IEMxMy43LDQuNSwxNC40LDMuOCwxNC45LDMuMnpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvaT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibmF2LXBhbmUtY29udGVudC1jb250YWluZXJcIj5cclxuICAgIDxkaXYgZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgPHNwYW4gZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJsYXN0LXRpdGxlXCIgW0BjaGFuZ2VQYW5lXT1cImNoYW5nZVBhbmVTdGF0ZVwiPkl0ZW0gMjwvc3Bhbj5cclxuPCEtLSAgICAgIDxzcGFuIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwiY3VycmVudC10aXRsZVwiPkl0ZW0gMTwvc3Bhbj4tLT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXg6IDEgMSAwJTsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcGFkZGluZzogMTBweCAyMHB4OyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5neC1kZXNrdG9wLW5hdi1wYW5lLWl0ZW1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==
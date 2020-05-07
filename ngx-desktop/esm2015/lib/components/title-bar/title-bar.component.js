import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import * as i0 from "@angular/core";
import * as i1 from "../../ngx-desktop.service";
import * as i2 from "../../directives/ngx-desktop-window-blur.directive";
import * as i3 from "@angular/common";
import * as i4 from "../../directives/ngx-desktop-mouseover.directive";
import * as i5 from "../../directives/ngx-desktop-mousedown.directive";
function TitleBarComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function TitleBarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TitleBarComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r40 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r40);
} }
function TitleBarComponent_ng_container_3__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 9);
    i0.ɵɵelement(1, "path", 13);
    i0.ɵɵelement(2, "path", 14);
    i0.ɵɵelementEnd();
} }
function TitleBarComponent_ng_container_3__svg_svg_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 9);
    i0.ɵɵelement(1, "path", 15);
    i0.ɵɵelement(2, "path", 16);
    i0.ɵɵelementEnd();
} }
function TitleBarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_3_Template_a_ngxDesktopMousedown_1_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.closeMousedown = $event; })("click", function TitleBarComponent_ng_container_3_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r46); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onCloseClick.emit(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 6);
    i0.ɵɵelement(3, "path", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "a", 8);
    i0.ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_3_Template_a_ngxDesktopMousedown_4_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r48 = i0.ɵɵnextContext(); return ctx_r48.minimizeMousedown = $event; })("click", function TitleBarComponent_ng_container_3_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r46); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.onMinimizeClick.emit(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(5, "svg", 9);
    i0.ɵɵelement(6, "path", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "a", 11);
    i0.ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_3_Template_a_ngxDesktopMousedown_7_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r50 = i0.ɵɵnextContext(); return ctx_r50.maximizeMousedown = $event; })("click", function TitleBarComponent_ng_container_3_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r46); const ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.triggerMaximize(); });
    i0.ɵɵtemplate(8, TitleBarComponent_ng_container_3__svg_svg_8_Template, 3, 0, "svg", 12);
    i0.ɵɵtemplate(9, TitleBarComponent_ng_container_3__svg_svg_9_Template, 3, 0, "svg", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("closeMousedown", ctx_r36.closeMousedown);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("minimizeMousedown", ctx_r36.minimizeMousedown);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("maximizeMousedown", ctx_r36.maximizeMousedown);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r36.maximized);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r36.maximized);
} }
function TitleBarComponent_ng_container_4__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 26);
    i0.ɵɵelement(1, "path", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("fill", ctx_r52.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
} }
function TitleBarComponent_ng_container_4__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 24);
    i0.ɵɵelement(1, "path", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("fill", ctx_r53.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
} }
function TitleBarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 17);
    i0.ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMousedown_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.minimizeMousedown = $event; })("ngxDesktopMouseover", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMouseover_1_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.minimizeMouseover = $event; })("click", function TitleBarComponent_ng_container_4_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r55); const ctx_r57 = i0.ɵɵnextContext(); return ctx_r57.onMinimizeClick.emit(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 18);
    i0.ɵɵelement(3, "rect", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "a", 20);
    i0.ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMousedown_4_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.maximizeMousedown = $event; })("ngxDesktopMouseover", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMouseover_4_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r59 = i0.ɵɵnextContext(); return ctx_r59.maximizeMouseover = $event; })("click", function TitleBarComponent_ng_container_4_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r55); const ctx_r60 = i0.ɵɵnextContext(); return ctx_r60.triggerMaximize(); });
    i0.ɵɵtemplate(5, TitleBarComponent_ng_container_4__svg_svg_5_Template, 2, 1, "svg", 21);
    i0.ɵɵtemplate(6, TitleBarComponent_ng_container_4__svg_svg_6_Template, 2, 1, "svg", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 23);
    i0.ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMousedown_7_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r61 = i0.ɵɵnextContext(); return ctx_r61.closeMousedown = $event; })("ngxDesktopMouseover", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMouseover_7_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r62 = i0.ɵɵnextContext(); return ctx_r62.closeMouseover = $event; })("click", function TitleBarComponent_ng_container_4_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r55); const ctx_r63 = i0.ɵɵnextContext(); return ctx_r63.onCloseClick.emit(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(8, "svg", 24);
    i0.ɵɵelement(9, "polygon", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("minimizeMousedown", ctx_r37.minimizeMousedown)("minimizeMouseover", ctx_r37.minimizeMouseover);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r37.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("maximizeMousedown", ctx_r37.maximizeMousedown)("maximizeMouseover", ctx_r37.maximizeMouseover);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r37.maximized);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r37.maximized);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("closeMousedown", ctx_r37.closeMousedown)("closeMouseover", ctx_r37.closeMouseover);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("fill", ctx_r37.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
} }
function TitleBarComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
function TitleBarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TitleBarComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r40 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r40);
} }
function TitleBarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function TitleBarComponent_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r65.title, " ");
} }
function TitleBarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TitleBarComponent_ng_template_7_div_0_Template, 2, 1, "div", 29);
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r41.title || ctx_r41.os === "windows");
} }
const _c0 = [[["ngx-desktop-toolbar"]]];
const _c1 = ["ngx-desktop-toolbar"];
export class TitleBarComponent {
    constructor(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.controls = true;
        this.isFullscreen = false;
        this.transparent = false;
        this.onCloseClick = new EventEmitter();
        this.onMaximizeClick = new EventEmitter();
        this.onMinimizeClick = new EventEmitter();
        this.onResizeClick = new EventEmitter();
        this.maximizedChange = new EventEmitter();
    }
    set os(os) {
        this._os = os;
    }
    get os() {
        return this.ngxDesktopService.getOs(this._os);
    }
    ngOnInit() {
    }
    triggerMaximize() {
        this.maximized = !this.maximized;
        this.maximizedChange.emit(this.maximized);
        if (this.maximized) {
            this.onMaximizeClick.emit();
        }
        else {
            this.onResizeClick.emit();
        }
    }
}
TitleBarComponent.ɵfac = function TitleBarComponent_Factory(t) { return new (t || TitleBarComponent)(i0.ɵɵdirectiveInject(i1.NgxDesktopService)); };
TitleBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TitleBarComponent, selectors: [["ngx-desktop-title-bar"]], contentQueries: function TitleBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ToolbarComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbarComponent = _t.first);
    } }, inputs: { os: "os", title: "title", controls: "controls", isFullscreen: "isFullscreen", transparent: "transparent", maximized: "maximized" }, outputs: { onCloseClick: "onCloseClick", onMaximizeClick: "onMaximizeClick", onMinimizeClick: "onMinimizeClick", onResizeClick: "onResizeClick", maximizedChange: "maximizedChange" }, ngContentSelectors: _c1, decls: 9, vars: 13, consts: [[1, "title-bar-container", 3, "ngxDesktopWindowBlur"], [4, "ngIf"], [1, "controls-container", 3, "ngxDesktopMouseover"], ["titleTemp", ""], [3, "ngTemplateOutlet"], ["data-radium", "true", 1, "close-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "click"], ["x", "0px", "y", "0px", "width", "10px", "height", "10px", "viewBox", "0 0 10 10", "data-radium", "true", 1, "close-svg"], ["fill", "#4d0000", "d", "M5,3.552c0.438,-0.432 0.878,-0.861 1.322,-1.287c0.049,-0.044 0.101,-0.085 0.158,-0.119c0.149,-0.091 0.316,-0.137 0.49,-0.146c0.04,0 0.04,0 0.08,0.001c0.16,0.011 0.314,0.054 0.453,0.135c0.08,0.046 0.154,0.104 0.218,0.171c0.252,0.262 0.342,0.65 0.232,0.996c-0.045,0.141 -0.121,0.265 -0.218,0.375c-0.426,0.444 -0.855,0.884 -1.287,1.322c0.432,0.438 0.861,0.878 1.287,1.322c0.097,0.11 0.173,0.234 0.218,0.375c0.04,0.126 0.055,0.26 0.043,0.392c-0.011,0.119 -0.043,0.236 -0.094,0.344c-0.158,0.327 -0.49,0.548 -0.852,0.566c-0.106,0.005 -0.213,-0.007 -0.315,-0.035c-0.156,-0.043 -0.293,-0.123 -0.413,-0.229c-0.444,-0.426 -0.884,-0.855 -1.322,-1.287c-0.438,0.432 -0.878,0.861 -1.322,1.287c-0.11,0.097 -0.234,0.173 -0.375,0.218c-0.126,0.04 -0.26,0.055 -0.392,0.043c-0.119,-0.011 -0.236,-0.043 -0.344,-0.094c-0.327,-0.158 -0.548,-0.49 -0.566,-0.852c-0.005,-0.106 0.007,-0.213 0.035,-0.315c0.043,-0.156 0.123,-0.293 0.229,-0.413c0.426,-0.444 0.855,-0.884 1.287,-1.322c-0.432,-0.438 -0.861,-0.878 -1.287,-1.322c-0.106,-0.12 -0.186,-0.257 -0.229,-0.413c-0.025,-0.089 -0.037,-0.182 -0.036,-0.275c0.004,-0.363 0.211,-0.704 0.532,-0.874c0.13,-0.069 0.272,-0.105 0.418,-0.115c0.04,-0.001 0.04,-0.001 0.08,-0.001c0.174,0.009 0.341,0.055 0.49,0.146c0.057,0.034 0.109,0.075 0.158,0.119c0.444,0.426 0.884,0.855 1.322,1.287Z"], ["data-radium", "true", 1, "minimize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "click"], ["x", "0px", "y", "0px", "width", "10px", "height", "10px", "viewBox", "0 0 10 10", "data-radium", "true"], ["fill", "#995700", "d", "M8.048,4.001c0.163,0.012 0.318,0.054 0.459,0.137c0.325,0.191 0.518,0.559 0.49,0.934c-0.007,0.097 -0.028,0.192 -0.062,0.283c-0.04,0.105 -0.098,0.204 -0.171,0.29c-0.083,0.098 -0.185,0.181 -0.299,0.24c-0.131,0.069 -0.271,0.103 -0.417,0.114c-2.031,0.049 -4.065,0.049 -6.096,0c-0.163,-0.012 -0.318,-0.054 -0.459,-0.137c-0.325,-0.191 -0.518,-0.559 -0.49,-0.934c0.007,-0.097 0.028,-0.192 0.062,-0.283c0.04,-0.105 0.098,-0.204 0.171,-0.29c0.083,-0.098 0.185,-0.181 0.299,-0.24c0.131,-0.069 0.271,-0.103 0.417,-0.114c2.031,-0.049 4.065,-0.049 6.096,0Z"], ["data-radium", "true", 1, "maximize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "click"], ["x", "0px", "y", "0px", "width", "10px", "height", "10px", "viewBox", "0 0 10 10", "data-radium", "true", 4, "ngIf"], ["fill", "#006400", "d", "M5,10c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z"], ["fill", "#006400", "d", "M5,0c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z"], ["fill", "#006400", "d", "M2,3c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z"], ["fill", "#006400", "d", "M8,7c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z"], ["data-radium", "true", 1, "minimize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "ngxDesktopMouseover", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 1", "data-radium", "true", 2, "width", "10px", "height", "1px"], ["width", "10.2", "height", "1"], ["data-radium", "true", 1, "maximize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "ngxDesktopMouseover", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.1", "data-radium", "true", "style", "width: 10px; height: 10px;", 4, "ngIf"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.2", "data-radium", "true", "style", "width: 10px; height: 10px;", 4, "ngIf"], ["data-radium", "true", 1, "close-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "ngxDesktopMouseover", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.2", "data-radium", "true", 2, "width", "10px", "height", "10px"], ["points", "10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.1", "data-radium", "true", 2, "width", "10px", "height", "10px"], ["d", "M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"], ["d", "M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"], ["class", "title-container", 4, "ngIf"], [1, "title-container"]], template: function TitleBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("ngxDesktopWindowBlur", function TitleBarComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
        i0.ɵɵtemplate(1, TitleBarComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵlistener("ngxDesktopMouseover", function TitleBarComponent_Template_div_ngxDesktopMouseover_2_listener($event) { return ctx.mouseover = $event; });
        i0.ɵɵtemplate(3, TitleBarComponent_ng_container_3_Template, 10, 8, "ng-container", 1);
        i0.ɵɵtemplate(4, TitleBarComponent_ng_container_4_Template, 10, 16, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TitleBarComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(6, TitleBarComponent_ng_container_6_Template, 2, 0, "ng-container", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, TitleBarComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.os);
        i0.ɵɵstyleProp("padding", ctx.os === "mac" ? ctx.toolbarComponent ? "11px 8px" : "0 3px" : "0");
        i0.ɵɵclassProp("mouseover", ctx.mouseover)("windowBlur", ctx.windowBlur);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.os === "windows");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.os === "mac" && ctx.controls);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.os === "windows" && ctx.controls);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.os === "mac");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.os === "mac");
    } }, directives: [i2.NgxDesktopWindowBlurDirective, i3.NgIf, i4.NgxDesktopMouseoverDirective, i3.NgTemplateOutlet, i5.NgxDesktopMousedownDirective], styles: [".title-bar-container[_ngcontent-%COMP%]{-webkit-app-region:drag;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;width:100%;display:flex;align-items:center}.title-container[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.controls-container[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;display:flex}.controls-btn-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-app-region:no-drag;cursor:default;line-height:0}.windows.title-bar-container[_ngcontent-%COMP%]{height:31px;border-color:#fff}.windows[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{padding-left:12px;font-family:\"Segoe UI\",Arial,serif;font-size:12px;flex:1 1 0;color:#000}.windows.windowBlur[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{color:#a9a9a9}.windows[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]{height:32px}.windows[_ngcontent-%COMP%]   .controls-btn-wrap[_ngcontent-%COMP%]{width:46px;height:100%;display:flex;justify-content:center;align-items:center}.windows[_ngcontent-%COMP%]   .maximizeMouseover.maximize-btn-wrap[_ngcontent-%COMP%], .windows[_ngcontent-%COMP%]   .minimizeMouseover.minimize-btn-wrap[_ngcontent-%COMP%]{transition:background-color .1s;background-color:#e5e5e5}.windows[_ngcontent-%COMP%]   .closeMouseover.close-btn-wrap[_ngcontent-%COMP%]{transition:background-color .1s;background-color:#e81123}.windows[_ngcontent-%COMP%]   .maximize-btn-wrap.maximizeMousedown[_ngcontent-%COMP%], .windows[_ngcontent-%COMP%]   .minimize-btn-wrap.minimizeMousedown[_ngcontent-%COMP%]{background-color:#ccc}.windows[_ngcontent-%COMP%]   .close-btn-wrap.closeMousedown[_ngcontent-%COMP%]{background-color:#f1707a}.mac.title-bar-container[_ngcontent-%COMP%]{box-sizing:border-box;min-height:22px;background-image:-webkit-linear-gradient(top,#ededed 0,#ededed 1px,#e7e7e7 2px,#d1d1d1 100%);border-bottom:1px solid #afafaf;border-top:1px solid #f6f6f6;border-top-left-radius:5px;border-top-right-radius:5px}.mac[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;letter-spacing:0;color:#4d4d4d;flex-grow:1;flex-shrink:1;text-align:center;white-space:nowrap;overflow:hidden;padding-right:40px;padding-left:15px}.mac[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]{width:61px}.mac[_ngcontent-%COMP%]   .controls-btn-wrap[_ngcontent-%COMP%]{box-sizing:border-box;width:12px;height:12px;border-width:1px;border-style:solid;border-radius:50%;margin-top:1px;margin-left:4px;margin-right:4px}.mac[_ngcontent-%COMP%]   .close-btn-wrap[_ngcontent-%COMP%], .mac.mouseover[_ngcontent-%COMP%]   .close-btn-wrap[_ngcontent-%COMP%]{background-color:#ff5f57;border-color:#e2463f}.mac[_ngcontent-%COMP%]   .minimize-btn-wrap[_ngcontent-%COMP%], .mac.mouseover[_ngcontent-%COMP%]   .minimize-btn-wrap[_ngcontent-%COMP%]{background-color:#ffbd2e;border-color:#e1a116}.mac[_ngcontent-%COMP%]   .maximize-btn-wrap[_ngcontent-%COMP%], .mac.mouseover[_ngcontent-%COMP%]   .maximize-btn-wrap[_ngcontent-%COMP%]{background-color:#28c940;border-color:#12ac28}.mac[_ngcontent-%COMP%]   .closeMousedown.close-btn-wrap[_ngcontent-%COMP%]{background-color:#bf4943!important;border-color:#ad3934!important}.mac[_ngcontent-%COMP%]   .minimizeMousedown.minimize-btn-wrap[_ngcontent-%COMP%]{background-color:#bf9123!important;border-color:#ad7d15!important}.mac[_ngcontent-%COMP%]   .maximizeMousedown.maximize-btn-wrap[_ngcontent-%COMP%]{background-color:#1f9a31!important;border-color:#128622!important}.mac.windowBlur[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#ddd;border-color:#d0d0d0}.mac.windowBlur[_ngcontent-%COMP%]   .title-bar-container[_ngcontent-%COMP%]{color:#d3d3d3}.mac.windowBlur.title-bar-container[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#fafafa 0,#f6f6f6 2px,#f6f6f6 100%);border-bottom:1px solid #d1d1d1}.mac[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:10px;height:10px;opacity:0}.mac.mouseover[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{opacity:1!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TitleBarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-title-bar',
                templateUrl: './title-bar.component.html',
                styleUrls: ['./title-bar.component.css']
            }]
    }], function () { return [{ type: i1.NgxDesktopService }]; }, { toolbarComponent: [{
            type: ContentChild,
            args: [ToolbarComponent]
        }], os: [{
            type: Input
        }], title: [{
            type: Input
        }], controls: [{
            type: Input
        }], isFullscreen: [{
            type: Input
        }], transparent: [{
            type: Input
        }], onCloseClick: [{
            type: Output
        }], onMaximizeClick: [{
            type: Output
        }], onMinimizeClick: [{
            type: Output
        }], onResizeClick: [{
            type: Output
        }], maximized: [{
            type: Input
        }], maximizedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGl0bGUtYmFyL3RpdGxlLWJhci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90aXRsZS1iYXIvdGl0bGUtYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUN2QixZQUFZLEVBR1osS0FBSyxFQUVMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0lDUjVELDZCQUNFO0lBQUEsaUdBQTRDO0lBQzlDLDBCQUFlOzs7O0lBREEsZUFBOEI7SUFBOUIsdUNBQThCOzs7SUFzQnZDLG1CQUNFO0lBREYsOEJBQ0U7SUFBQSwyQkFDNEo7SUFDNUosMkJBQzZJO0lBQy9JLGlCQUFNOzs7SUFDTixtQkFDRTtJQURGLDhCQUNFO0lBQUEsMkJBQzZJO0lBQzdJLDJCQUMySjtJQUM3SixpQkFBTTs7OztJQTlCViw2QkFDRTtJQUFBLDRCQUVFO0lBRjZELHlPQUErQyx1SkFDMUQsMkJBQW1CLElBRHVDO0lBRTVHLG1CQUNFO0lBREYsOEJBQ0U7SUFBQSwwQkFDc3lDO0lBQ3h5QyxpQkFBTTtJQUNSLGlCQUFJO0lBQ0osb0JBR0U7SUFIRiw0QkFHRTtJQUZDLDRPQUFrRCx1SkFDSyw4QkFBc0IsSUFEM0I7SUFFbkQsbUJBQ0U7SUFERiw4QkFDRTtJQUFBLDJCQUNnakI7SUFDbGpCLGlCQUFNO0lBQ1IsaUJBQUk7SUFDSixvQkFHRTtJQUhGLDZCQUdFO0lBRkMsNE9BQWtELG9MQUFBO0lBRW5ELHVGQUNFO0lBS0YsdUZBQ0U7SUFLSixpQkFBSTtJQUNOLDBCQUFlOzs7SUE5QlYsZUFBdUM7SUFBdkMsd0RBQXVDO0lBUXZDLGVBQTZDO0lBQTdDLDhE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QUhHLDBKQUE0QztRQUcvQyxvRkFDRTtRQUVGLDhCQUNFO1FBRDhCLHVKQUEwQztRQUN4RSxxRkFDRTtRQWdDRixzRkFDRTtRQXFDSixpQkFBTTtRQUNOLG9GQUNFO1FBRUYsb0ZBQ0U7UUFFSixpQkFBTTtRQUVOLG1IQUNFOztRQTFGRyxxQkFBWTtRQUlaLCtGQUFnRjtRQUhoRiwwQ0FBNkIsOEJBQUE7UUFJbEIsZUFBd0I7UUFBeEIsMkNBQXdCO1FBSXRCLGVBQWdDO1FBQWhDLHVEQUFnQztRQWlDaEMsZUFBb0M7UUFBcEMsMkRBQW9DO1FBdUN0QyxlQUFvQjtRQUFwQix1Q0FBb0I7UUFHcEIsZUFBb0I7UUFBcEIsdUNBQW9COztrRERoRXZCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekM7O2tCQUdFLFlBQVk7bUJBQUMsZ0JBQWdCOztrQkFJN0IsS0FBSzs7a0JBT0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7a0JBWU4sS0FBSzs7a0JBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvckFic3RyYWN0Q29tcG9uZW50fSBmcm9tIFwiLi4vY29udHJvbC12YWx1ZS1hY2Nlc3Nvci1hYnN0cmFjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPc1R5cGVzfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uLy4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUb29sYmFyQ29tcG9uZW50fSBmcm9tIFwiLi4vdG9vbGJhci90b29sYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZGVza3RvcC10aXRsZS1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aXRsZS1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLWJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUb29sYmFyQ29tcG9uZW50KVxyXG4gIHRvb2xiYXJDb21wb25lbnQ6IFRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgX29zOiBPc1R5cGVzO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG9zKG9zOiBPc1R5cGVzKSB7XHJcbiAgICB0aGlzLl9vcyA9IG9zO1xyXG4gIH1cclxuICBnZXQgb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ3hEZXNrdG9wU2VydmljZS5nZXRPcyh0aGlzLl9vcyk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIGNvbnRyb2xzOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKVxyXG4gIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgdHJhbnNwYXJlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KClcclxuICBvbkNsb3NlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpXHJcbiAgb25NYXhpbWl6ZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uTWluaW1pemVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KClcclxuICBvblJlc2l6ZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICB3aW5kb3dCbHVyOiBib29sZWFuO1xyXG4gIG1vdXNlb3ZlcjogYm9vbGVhbjtcclxuICBjbG9zZU1vdXNlZG93bjogYm9vbGVhbjtcclxuICBtaW5pbWl6ZU1vdXNlZG93bjogYm9vbGVhbjtcclxuICBtYXhpbWl6ZU1vdXNlZG93bjogYm9vbGVhbjtcclxuICBtaW5pbWl6ZU1vdXNlb3ZlcjogYm9vbGVhbjtcclxuICBjbG9zZU1vdXNlb3ZlcjogYm9vbGVhbjtcclxuICBtYXhpbWl6ZU1vdXNlb3ZlcjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBtYXhpbWl6ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG1heGltaXplZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hEZXNrdG9wU2VydmljZTogTmd4RGVza3RvcFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlck1heGltaXplKCkge1xyXG4gICAgdGhpcy5tYXhpbWl6ZWQgPSAhdGhpcy5tYXhpbWl6ZWQ7XHJcbiAgICB0aGlzLm1heGltaXplZENoYW5nZS5lbWl0KHRoaXMubWF4aW1pemVkKTtcclxuICAgIGlmICh0aGlzLm1heGltaXplZCkge1xyXG4gICAgICB0aGlzLm9uTWF4aW1pemVDbGljay5lbWl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uUmVzaXplQ2xpY2suZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwidGl0bGUtYmFyLWNvbnRhaW5lclwiXHJcbiAgICAgW2NsYXNzXT1cIm9zXCJcclxuICAgICBbY2xhc3MubW91c2VvdmVyXT1cIm1vdXNlb3ZlclwiXHJcbiAgICAgKG5neERlc2t0b3BXaW5kb3dCbHVyKT1cIndpbmRvd0JsdXIgPSAkZXZlbnRcIlxyXG4gICAgIFtjbGFzcy53aW5kb3dCbHVyXT1cIndpbmRvd0JsdXJcIlxyXG4gICAgIFtzdHlsZS5wYWRkaW5nXT1cIm9zID09PSAnbWFjJyA/ICh0b29sYmFyQ29tcG9uZW50ID8gJzExcHggOHB4JyA6ICcwIDNweCcpIDogJzAnXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9zID09PSAnd2luZG93cydcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVRlbXBcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250cm9scy1jb250YWluZXJcIiAobmd4RGVza3RvcE1vdXNlb3Zlcik9XCJtb3VzZW92ZXIgPSAkZXZlbnRcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcyA9PT0gJ21hYycgJiYgY29udHJvbHNcIj5cclxuICAgICAgPGEgZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJjbG9zZS1idG4td3JhcCBjb250cm9scy1idG4td3JhcFwiIChuZ3hEZXNrdG9wTW91c2Vkb3duKT1cImNsb3NlTW91c2Vkb3duID0gJGV2ZW50XCJcclxuICAgICAgICAgW2NsYXNzLmNsb3NlTW91c2Vkb3duXT1cImNsb3NlTW91c2Vkb3duXCIgKGNsaWNrKT1cIm9uQ2xvc2VDbGljay5lbWl0KClcIj5cclxuICAgICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMHB4XCIgaGVpZ2h0PVwiMTBweFwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cImNsb3NlLXN2Z1wiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIiM0ZDAwMDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk01LDMuNTUyYzAuNDM4LC0wLjQzMiAwLjg3OCwtMC44NjEgMS4zMjIsLTEuMjg3YzAuMDQ5LC0wLjA0NCAwLjEwMSwtMC4wODUgMC4xNTgsLTAuMTE5YzAuMTQ5LC0wLjA5MSAwLjMxNiwtMC4xMzcgMC40OSwtMC4xNDZjMC4wNCwwIDAuMDQsMCAwLjA4LDAuMDAxYzAuMTYsMC4wMTEgMC4zMTQsMC4wNTQgMC40NTMsMC4xMzVjMC4wOCwwLjA0NiAwLjE1NCwwLjEwNCAwLjIxOCwwLjE3MWMwLjI1MiwwLjI2MiAwLjM0MiwwLjY1IDAuMjMyLDAuOTk2Yy0wLjA0NSwwLjE0MSAtMC4xMjEsMC4yNjUgLTAuMjE4LDAuMzc1Yy0wLjQyNiwwLjQ0NCAtMC44NTUsMC44ODQgLTEuMjg3LDEuMzIyYzAuNDMyLDAuNDM4IDAuODYxLDAuODc4IDEuMjg3LDEuMzIyYzAuMDk3LDAuMTEgMC4xNzMsMC4yMzQgMC4yMTgsMC4zNzVjMC4wNCwwLjEyNiAwLjA1NSwwLjI2IDAuMDQzLDAuMzkyYy0wLjAxMSwwLjExOSAtMC4wNDMsMC4yMzYgLTAuMDk0LDAuMzQ0Yy0wLjE1OCwwLjMyNyAtMC40OSwwLjU0OCAtMC44NTIsMC41NjZjLTAuMTA2LDAuMDA1IC0wLjIxMywtMC4wMDcgLTAuMzE1LC0wLjAzNWMtMC4xNTYsLTAuMDQzIC0wLjI5MywtMC4xMjMgLTAuNDEzLC0wLjIyOWMtMC40NDQsLTAuNDI2IC0wLjg4NCwtMC44NTUgLTEuMzIyLC0xLjI4N2MtMC40MzgsMC40MzIgLTAuODc4LDAuODYxIC0xLjMyMiwxLjI4N2MtMC4xMSwwLjA5NyAtMC4yMzQsMC4xNzMgLTAuMzc1LDAuMjE4Yy0wLjEyNiwwLjA0IC0wLjI2LDAuMDU1IC0wLjM5MiwwLjA0M2MtMC4xMTksLTAuMDExIC0wLjIzNiwtMC4wNDMgLTAuMzQ0LC0wLjA5NGMtMC4zMjcsLTAuMTU4IC0wLjU0OCwtMC40OSAtMC41NjYsLTAuODUyYy0wLjAwNSwtMC4xMDYgMC4wMDcsLTAuMjEzIDAuMDM1LC0wLjMxNWMwLjA0MywtMC4xNTYgMC4xMjMsLTAuMjkzIDAuMjI5LC0wLjQxM2MwLjQyNiwtMC40NDQgMC44NTUsLTAuODg0IDEuMjg3LC0xLjMyMmMtMC40MzIsLTAuNDM4IC0wLjg2MSwtMC44NzggLTEuMjg3LC0xLjMyMmMtMC4xMDYsLTAuMTIgLTAuMTg2LC0wLjI1NyAtMC4yMjksLTAuNDEzYy0wLjAyNSwtMC4wODkgLTAuMDM3LC0wLjE4MiAtMC4wMzYsLTAuMjc1YzAuMDA0LC0wLjM2MyAwLjIxMSwtMC43MDQgMC41MzIsLTAuODc0YzAuMTMsLTAuMDY5IDAuMjcyLC0wLjEwNSAwLjQxOCwtMC4xMTVjMC4wNCwtMC4wMDEgMC4wNCwtMC4wMDEgMC4wOCwtMC4wMDFjMC4xNzQsMC4wMDkgMC4zNDEsMC4wNTUgMC40OSwwLjE0NmMwLjA1NywwLjAzNCAwLjEwOSwwLjA3NSAwLjE1OCwwLjExOWMwLjQ0NCwwLjQyNiAwLjg4NCwwLjg1NSAxLjMyMiwxLjI4N1pcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgZGF0YS1yYWRpdW09XCJ0cnVlXCIgY2xhc3M9XCJtaW5pbWl6ZS1idG4td3JhcCBjb250cm9scy1idG4td3JhcFwiXHJcbiAgICAgICAgIChuZ3hEZXNrdG9wTW91c2Vkb3duKT1cIm1pbmltaXplTW91c2Vkb3duID0gJGV2ZW50XCJcclxuICAgICAgICAgW2NsYXNzLm1pbmltaXplTW91c2Vkb3duXT1cIm1pbmltaXplTW91c2Vkb3duXCIgKGNsaWNrKT1cIm9uTWluaW1pemVDbGljay5lbWl0KClcIj5cclxuICAgICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMHB4XCIgaGVpZ2h0PVwiMTBweFwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiBkYXRhLXJhZGl1bT1cInRydWVcIj5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjOTk1NzAwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNOC4wNDgsNC4wMDFjMC4xNjMsMC4wMTIgMC4zMTgsMC4wNTQgMC40NTksMC4xMzdjMC4zMjUsMC4xOTEgMC41MTgsMC41NTkgMC40OSwwLjkzNGMtMC4wMDcsMC4wOTcgLTAuMDI4LDAuMTkyIC0wLjA2MiwwLjI4M2MtMC4wNCwwLjEwNSAtMC4wOTgsMC4yMDQgLTAuMTcxLDAuMjljLTAuMDgzLDAuMDk4IC0wLjE4NSwwLjE4MSAtMC4yOTksMC4yNGMtMC4xMzEsMC4wNjkgLTAuMjcxLDAuMTAzIC0wLjQxNywwLjExNGMtMi4wMzEsMC4wNDkgLTQuMDY1LDAuMDQ5IC02LjA5NiwwYy0wLjE2MywtMC4wMTIgLTAuMzE4LC0wLjA1NCAtMC40NTksLTAuMTM3Yy0wLjMyNSwtMC4xOTEgLTAuNTE4LC0wLjU1OSAtMC40OSwtMC45MzRjMC4wMDcsLTAuMDk3IDAuMDI4LC0wLjE5MiAwLjA2MiwtMC4yODNjMC4wNCwtMC4xMDUgMC4wOTgsLTAuMjA0IDAuMTcxLC0wLjI5YzAuMDgzLC0wLjA5OCAwLjE4NSwtMC4xODEgMC4yOTksLTAuMjRjMC4xMzEsLTAuMDY5IDAuMjcxLC0wLjEwMyAwLjQxNywtMC4xMTRjMi4wMzEsLTAuMDQ5IDQuMDY1LC0wLjA0OSA2LjA5NiwwWlwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBkYXRhLXJhZGl1bT1cInRydWVcIiBjbGFzcz1cIm1heGltaXplLWJ0bi13cmFwIGNvbnRyb2xzLWJ0bi13cmFwXCJcclxuICAgICAgICAgKG5neERlc2t0b3BNb3VzZWRvd24pPVwibWF4aW1pemVNb3VzZWRvd24gPSAkZXZlbnRcIlxyXG4gICAgICAgICBbY2xhc3MubWF4aW1pemVNb3VzZWRvd25dPVwibWF4aW1pemVNb3VzZWRvd25cIiAoY2xpY2spPVwidHJpZ2dlck1heGltaXplKClcIj5cclxuICAgICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMHB4XCIgaGVpZ2h0PVwiMTBweFwiIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiBkYXRhLXJhZGl1bT1cInRydWVcIiAqbmdJZj1cIm1heGltaXplZFwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMDY0MDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk01LDEwYzAsMCAwLC0yLjc0NCAwLC00LjE2N2MwLC0wLjIyMSAtMC4wODgsLTAuNDMzIC0wLjI0NCwtMC41ODljLTAuMTU2LC0wLjE1NiAtMC4zNjgsLTAuMjQ0IC0wLjU4OSwtMC4yNDRjLTEuNDIzLDAgLTQuMTY3LDAgLTQuMTY3LDBsNSw1WlwiPjwvcGF0aD5cclxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDA2NDAwXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNNSwwYzAsMCAwLDIuNzQ0IDAsNC4xNjdjMCwwLjIyMSAwLjA4OCwwLjQzMyAwLjI0NCwwLjU4OWMwLjE1NiwwLjE1NiAwLjM2OCwwLjI0NCAwLjU4OSwwLjI0NGMxLjQyMywwIDQuMTY3LDAgNC4xNjcsMGwtNSwtNVpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHN2ZyB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTBweFwiIGhlaWdodD1cIjEwcHhcIiB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgZGF0YS1yYWRpdW09XCJ0cnVlXCIgKm5nSWY9XCIhbWF4aW1pemVkXCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAwNjQwMFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIsM2MwLDAgMCwyLjc0NCAwLDQuMTY3YzAsMC4yMjEgMC4wODgsMC40MzMgMC4yNDQsMC41ODljMC4xNTYsMC4xNTYgMC4zNjgsMC4yNDQgMC41ODksMC4yNDRjMS40MjMsMCA0LjE2NywwIDQuMTY3LDBsLTUsLTVaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMDY0MDBcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk04LDdjMCwwIDAsLTIuNzQ0IDAsLTQuMTY3YzAsLTAuMjIxIC0wLjA4OCwtMC40MzMgLTAuMjQ0LC0wLjU4OWMtMC4xNTYsLTAuMTU2IC0wLjM2OCwtMC4yNDQgLTAuNTg5LC0wLjI0NGMtMS40MjMsMCAtNC4xNjcsMCAtNC4xNjcsMGw1LDVaXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcyA9PT0gJ3dpbmRvd3MnICYmIGNvbnRyb2xzXCI+XHJcbiAgICAgIDxhIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwibWluaW1pemUtYnRuLXdyYXAgY29udHJvbHMtYnRuLXdyYXBcIlxyXG4gICAgICAgICAobmd4RGVza3RvcE1vdXNlZG93bik9XCJtaW5pbWl6ZU1vdXNlZG93biA9ICRldmVudFwiXHJcbiAgICAgICAgIFtjbGFzcy5taW5pbWl6ZU1vdXNlZG93bl09XCJtaW5pbWl6ZU1vdXNlZG93blwiXHJcbiAgICAgICAgIChuZ3hEZXNrdG9wTW91c2VvdmVyKT1cIm1pbmltaXplTW91c2VvdmVyID0gJGV2ZW50XCJcclxuICAgICAgICAgW2NsYXNzLm1pbmltaXplTW91c2VvdmVyXT1cIm1pbmltaXplTW91c2VvdmVyXCJcclxuICAgICAgICAgKGNsaWNrKT1cIm9uTWluaW1pemVDbGljay5lbWl0KClcIj5cclxuICAgICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMC4yIDFcIiBkYXRhLXJhZGl1bT1cInRydWVcIiBzdHlsZT1cIndpZHRoOiAxMHB4OyBoZWlnaHQ6IDFweDtcIj5cclxuICAgICAgICAgIDxyZWN0IFthdHRyLmZpbGxdPVwid2luZG93Qmx1ciA/ICdyZ2JhKDAsIDAsIDAsIC40KScgOiAncmdiYSgwLCAwLCAwKSdcIiB3aWR0aD1cIjEwLjJcIiBoZWlnaHQ9XCIxXCI+PC9yZWN0PlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwibWF4aW1pemUtYnRuLXdyYXAgY29udHJvbHMtYnRuLXdyYXBcIlxyXG4gICAgICAgICAobmd4RGVza3RvcE1vdXNlZG93bik9XCJtYXhpbWl6ZU1vdXNlZG93biA9ICRldmVudFwiXHJcbiAgICAgICAgIFtjbGFzcy5tYXhpbWl6ZU1vdXNlZG93bl09XCJtYXhpbWl6ZU1vdXNlZG93blwiXHJcbiAgICAgICAgIChuZ3hEZXNrdG9wTW91c2VvdmVyKT1cIm1heGltaXplTW91c2VvdmVyID0gJGV2ZW50XCJcclxuICAgICAgICAgW2NsYXNzLm1heGltaXplTW91c2VvdmVyXT1cIm1heGltaXplTW91c2VvdmVyXCJcclxuICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJNYXhpbWl6ZSgpXCI+XHJcbiAgICAgICAgPHN2ZyB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAuMiAxMC4xXCIgZGF0YS1yYWRpdW09XCJ0cnVlXCIgc3R5bGU9XCJ3aWR0aDogMTBweDsgaGVpZ2h0OiAxMHB4O1wiICpuZ0lmPVwiIW1heGltaXplZFwiPlxyXG4gICAgICAgICAgPHBhdGggW2F0dHIuZmlsbF09XCJ3aW5kb3dCbHVyID8gJ3JnYmEoMCwgMCwgMCwgLjQpJyA6ICdyZ2JhKDAsIDAsIDApJ1wiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTAsMHYxMC4xaDEwLjJWMEgweiBNOS4yLDkuMkgxLjFWMWg4LjFWOS4yelwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMC4yIDEwLjJcIiBkYXRhLXJhZGl1bT1cInRydWVcIiBzdHlsZT1cIndpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7XCIgKm5nSWY9XCJtYXhpbWl6ZWRcIj5cclxuICAgICAgICAgIDxwYXRoIFthdHRyLmZpbGxdPVwid2luZG93Qmx1ciA/ICdyZ2JhKDAsIDAsIDAsIC40KScgOiAncmdiYSgwLCAwLCAwKSdcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0yLjEsMHYySDB2OC4xaDguMnYtMmgyVjBIMi4xeiBNNy4yLDkuMkgxLjFWM2g2LjFWOS4yeiBNOS4yLDcuMWgtMVYySDMuMVYxaDYuMVY3LjF6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGRhdGEtcmFkaXVtPVwidHJ1ZVwiIGNsYXNzPVwiY2xvc2UtYnRuLXdyYXAgY29udHJvbHMtYnRuLXdyYXBcIlxyXG4gICAgICAgICAobmd4RGVza3RvcE1vdXNlZG93bik9XCJjbG9zZU1vdXNlZG93biA9ICRldmVudFwiXHJcbiAgICAgICAgIFtjbGFzcy5jbG9zZU1vdXNlZG93bl09XCJjbG9zZU1vdXNlZG93blwiXHJcbiAgICAgICAgIChuZ3hEZXNrdG9wTW91c2VvdmVyKT1cImNsb3NlTW91c2VvdmVyID0gJGV2ZW50XCJcclxuICAgICAgICAgW2NsYXNzLmNsb3NlTW91c2VvdmVyXT1cImNsb3NlTW91c2VvdmVyXCJcclxuICAgICAgICAgKGNsaWNrKT1cIm9uQ2xvc2VDbGljay5lbWl0KClcIj5cclxuICAgICAgICA8c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMC4yIDEwLjJcIiBkYXRhLXJhZGl1bT1cInRydWVcIiBzdHlsZT1cIndpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7XCI+XHJcbiAgICAgICAgICA8cG9seWdvbiBbYXR0ci5maWxsXT1cIndpbmRvd0JsdXIgPyAncmdiYSgwLCAwLCAwLCAuNCknIDogJ3JnYmEoMCwgMCwgMCknXCJcclxuICAgICAgICAgICAgICAgICAgIHBvaW50cz1cIjEwLjIsMC43IDkuNSwwIDUuMSw0LjQgMC43LDAgMCwwLjcgNC40LDUuMSAwLDkuNSAwLjcsMTAuMiA1LjEsNS44IDkuNSwxMC4yIDEwLjIsOS41IDUuOCw1LjEgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwib3MgPT09ICdtYWMnXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVUZW1wXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwib3MgPT09ICdtYWMnXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuZ3gtZGVza3RvcC10b29sYmFyXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjdGl0bGVUZW1wPlxyXG4gIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIiAqbmdJZj1cInRpdGxlIHx8IG9zID09PSAnd2luZG93cydcIj5cclxuICAgIHt7dGl0bGV9fVxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=
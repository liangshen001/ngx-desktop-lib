import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, EventEmitter, ɵɵdefineDirective, ɵɵlistener, ɵɵresolveWindow, Directive, Output, HostListener, ɵɵdirectiveInject, ɵɵdefinePipe, Pipe, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵpipe, ɵɵprojection, ɵɵelementEnd, ɵɵclassMap, ɵɵstyleProp, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵclassProp, ɵɵproperty, Component, ChangeDetectionStrategy, Input, HostBinding, ɵɵtext, ɵɵadvance, ɵɵtextInterpolate, ɵɵdefaultStyleSanitizer, ɵɵnamespaceSVG, ɵɵelement, ɵɵnextContext, ɵɵattribute, ChangeDetectorRef, ɵɵProvidersFeature, forwardRef, ɵɵtemplate, ɵɵstyleMap, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵnamespaceHTML, ContentChildren, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵviewQuery, ViewChildren, ɵɵstaticViewQuery, ɵɵInheritDefinitionFeature, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵreference, ViewChild, ɵɵtextInterpolate1, ɵɵtemplateRefExtractor, ContentChild, ɵɵelementContainer, ElementRef, Renderer2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __assign, __spread, __extends } from 'tslib';
import { NgStyle, NgIf, NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter as EventEmitter$1 } from 'events';
import { noop } from 'rxjs';
import { trigger, state, style, transition, animate as animate$1 } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var OS_TOKEN = new InjectionToken("os");

var ColorUtils = /** @class */ (function () {
    function ColorUtils() {
    }
    ColorUtils.darkenColor = function (color, percent) {
        return ColorUtils.colorLuminance(ColorUtils.convertColor(color), -percent);
    };
    ColorUtils.colorLuminance = function (hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        var rgb = '#', c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    };
    ColorUtils.isDarkColor = function (color) {
        var c = ColorUtils.convertColor(color).substring(1); // strip #
        var rgb = parseInt(c, 16); // convert rrggbb to decimal
        var r = (rgb >> 16) & 0xff; // extract red
        var g = (rgb >> 8) & 0xff; // extract green
        var b = (rgb >> 0) & 0xff; // extract blue
        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
        return luma < 40;
    };
    ColorUtils.convertColor = function (color) {
        var colors = {
            'aliceblue': '#f0f8ff', 'antiquewhite': '#faebd7', 'aqua': '#00ffff', 'aquamarine': '#7fffd4', 'azure': '#f0ffff',
            'beige': '#f5f5dc', 'bisque': '#ffe4c4', 'black': '#000000', 'blanchedalmond': '#ffebcd', 'blue': '#0000ff', 'blueviolet': '#8a2be2', 'brown': '#a52a2a', 'burlywood': '#deb887',
            'cadetblue': '#5f9ea0', 'chartreuse': '#7fff00', 'chocolate': '#d2691e', 'coral': '#ff7f50', 'cornflowerblue': '#6495ed', 'cornsilk': '#fff8dc', 'crimson': '#dc143c', 'cyan': '#00ffff',
            'darkblue': '#00008b', 'darkcyan': '#008b8b', 'darkgoldenrod': '#b8860b', 'darkgray': '#a9a9a9', 'darkgreen': '#006400', 'darkkhaki': '#bdb76b', 'darkmagenta': '#8b008b', 'darkolivegreen': '#556b2f',
            'darkorange': '#ff8c00', 'darkorchid': '#9932cc', 'darkred': '#8b0000', 'darksalmon': '#e9967a', 'darkseagreen': '#8fbc8f', 'darkslateblue': '#483d8b', 'darkslategray': '#2f4f4f', 'darkturquoise': '#00ced1',
            'darkviolet': '#9400d3', 'deeppink': '#ff1493', 'deepskyblue': '#00bfff', 'dimgray': '#696969', 'dodgerblue': '#1e90ff',
            'firebrick': '#b22222', 'floralwhite': '#fffaf0', 'forestgreen': '#228b22', 'fuchsia': '#ff00ff',
            'gainsboro': '#dcdcdc', 'ghostwhite': '#f8f8ff', 'gold': '#ffd700', 'goldenrod': '#daa520', 'gray': '#808080', 'green': '#008000', 'greenyellow': '#adff2f',
            'honeydew': '#f0fff0', 'hotpink': '#ff69b4',
            'indianred ': '#cd5c5c', 'indigo': '#4b0082', 'ivory': '#fffff0', 'khaki': '#f0e68c',
            'lavender': '#e6e6fa', 'lavenderblush': '#fff0f5', 'lawngreen': '#7cfc00', 'lemonchiffon': '#fffacd', 'lightblue': '#add8e6', 'lightcoral': '#f08080', 'lightcyan': '#e0ffff', 'lightgoldenrodyellow': '#fafad2',
            'lightgrey': '#d3d3d3', 'lightgreen': '#90ee90', 'lightpink': '#ffb6c1', 'lightsalmon': '#ffa07a', 'lightseagreen': '#20b2aa', 'lightskyblue': '#87cefa', 'lightslategray': '#778899', 'lightsteelblue': '#b0c4de',
            'lightyellow': '#ffffe0', 'lime': '#00ff00', 'limegreen': '#32cd32', 'linen': '#faf0e6',
            'magenta': '#ff00ff', 'maroon': '#800000', 'mediumaquamarine': '#66cdaa', 'mediumblue': '#0000cd', 'mediumorchid': '#ba55d3', 'mediumpurple': '#9370d8', 'mediumseagreen': '#3cb371', 'mediumslateblue': '#7b68ee',
            'mediumspringgreen': '#00fa9a', 'mediumturquoise': '#48d1cc', 'mediumvioletred': '#c71585', 'midnightblue': '#191970', 'mintcream': '#f5fffa', 'mistyrose': '#ffe4e1', 'moccasin': '#ffe4b5',
            'navajowhite': '#ffdead', 'navy': '#000080',
            'oldlace': '#fdf5e6', 'olive': '#808000', 'olivedrab': '#6b8e23', 'orange': '#ffa500', 'orangered': '#ff4500', 'orchid': '#da70d6',
            'palegoldenrod': '#eee8aa', 'palegreen': '#98fb98', 'paleturquoise': '#afeeee', 'palevioletred': '#d87093', 'papayawhip': '#ffefd5', 'peachpuff': '#ffdab9', 'peru': '#cd853f', 'pink': '#ffc0cb', 'plum': '#dda0dd', 'powderblue': '#b0e0e6', 'purple': '#800080',
            'red': '#ff0000', 'rosybrown': '#bc8f8f', 'royalblue': '#4169e1',
            'saddlebrown': '#8b4513', 'salmon': '#fa8072', 'sandybrown': '#f4a460', 'seagreen': '#2e8b57', 'seashell': '#fff5ee', 'sienna': '#a0522d', 'silver': '#c0c0c0', 'skyblue': '#87ceeb', 'slateblue': '#6a5acd', 'slategray': '#708090', 'snow': '#fffafa', 'springgreen': '#00ff7f', 'steelblue': '#4682b4',
            'tan': '#d2b48c', 'teal': '#008080', 'thistle': '#d8bfd8', 'tomato': '#ff6347', 'turquoise': '#40e0d0',
            'violet': '#ee82ee',
            'wheat': '#f5deb3', 'white': '#ffffff', 'whitesmoke': '#f5f5f5',
            'yellow': '#ffff00', 'yellowgreen': '#9acd32'
        };
        if (typeof color === 'string' && typeof colors[color.toLowerCase()] != 'undefined') {
            return colors[color.toLowerCase()];
        }
        return color;
    };
    ColorUtils.ligthenColor = function (color) {
        return color;
    };
    ColorUtils.transparentize = function (color, amount) {
        var c = ColorUtils.hexToRgb(color);
        return "rgba(" + c.r + ", " + c.g + ", " + c.b + ", " + Math.round((1 - amount) * 1000) / 1000 + ")";
    };
    ColorUtils.hexToRgb = function (hex) {
        var result;
        if (hex.match(/^#.{3}$/)) {
            result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
            result[1] += result[1];
            result[2] += result[2];
            result[3] += result[3];
        }
        else {
            result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        }
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };
    return ColorUtils;
}());

var macStyle = {
    default: {
        normal: {
            'border-color': '#C8C8C8 #C2C2C2 #ACACAC',
            'background-image': 'none',
            color: 'initial'
        },
        mousedown: {
            'border-color': '#4C98FE #125EED #0010DB',
            'background-image': '-webkit-linear-gradient(top, #6CB3FA 0%, #0564E3 100%)',
            color: 'rgba(255, 255, 255, 0.9)'
        }
    },
    blue: {
        normal: {
            'border-color': '#4CA2F9 #267FFC #015CFF',
            'background-image': '-webkit-linear-gradient(top, #6cb3fa 0%, #087eff 100%)',
            color: 'rgba(255, 255, 255, .9)'
        },
        mousedown: {
            'border-color': '#247fff #125eed #003ddb',
            'background-image': '-webkit-linear-gradient(top, #6CB3FA 0%, #0564E3 100%)',
            color: 'rgba(255, 255, 255, 0.9)'
        }
    },
    pink: {
        normal: {
            'border-color': '#ff4a53 #ff2852 #ff0031',
            'background-image': '-webkit-linear-gradient(top, #FF365D 0%, #fc0030 100%)',
            color: 'rgba(255, 255, 255, .9)'
        },
        mousedown: {
            'border-color': '#ff4053 #ed1141 #ce0026',
            'background-image': '-webkit-linear-gradient(top, #ff2d55 0%, #ff0030 100%)',
            color: 'rgba(255, 255, 255, 0.9)'
        }
    }
};

var MACOS = 'mac';
var WINDOWS = 'windows';
var OsUtils = /** @class */ (function () {
    function OsUtils() {
    }
    OsUtils.os = function () {
        // explicitly set these to avoid issues
        var w = window || null;
        var n = navigator || null;
        var p = (w && w.process) || null;
        // via node
        if (p && p.platform) {
            if (p.platform === 'darwin') {
                return MACOS;
            }
            if (p.platform.includes('win')) {
                return WINDOWS;
            }
        }
        // via user agent
        if (n && n.userAgent) {
            if (n.userAgent.includes('Macintosh')) {
                return MACOS;
            }
            if (n.userAgent.includes('Windows')) {
                return WINDOWS;
            }
        }
        // default to macOs
        return MACOS;
    };
    return OsUtils;
}());

var NgxDesktopService = /** @class */ (function () {
    function NgxDesktopService(osConfig) {
        this.osConfig = osConfig;
    }
    NgxDesktopService.prototype.getPxValue = function (value, defaultValue) {
        if (defaultValue === void 0) { defaultValue = '0'; }
        if (typeof value === 'number') {
            return value + "px";
        }
        else if (value) {
            return value;
        }
        return defaultValue;
    };
    NgxDesktopService.prototype.isMac = function (os) {
        return this.getOs(os) === 'mac';
    };
    NgxDesktopService.prototype.getOs = function (os) {
        if (os) {
            if (os === 'auto') {
                return this.getSystemOs();
            }
            return os;
        }
        if (this.osConfig === 'auto') {
            return this.getSystemOs();
        }
        return this.osConfig;
    };
    NgxDesktopService.prototype.getSystemOs = function () {
        if (this._systemOs) {
            return this._systemOs;
        }
        // explicitly set these to avoid issues
        var w = window || null;
        var n = navigator || null;
        var p = (w && w.process) || null;
        // via node
        if (p && p.platform) {
            if (p.platform === 'darwin') {
                this._systemOs = MACOS;
                return MACOS;
            }
            if (p.platform.includes('win')) {
                this._systemOs = WINDOWS;
                return WINDOWS;
            }
        }
        // via user agent
        if (n && n.userAgent) {
            if (n.userAgent.includes('Macintosh')) {
                this._systemOs = MACOS;
                return MACOS;
            }
            if (n.userAgent.includes('Windows')) {
                this._systemOs = WINDOWS;
                return WINDOWS;
            }
        }
        this._systemOs = MACOS;
        // default to macOs
        return MACOS;
    };
    NgxDesktopService.ɵfac = function NgxDesktopService_Factory(t) { return new (t || NgxDesktopService)(ɵɵinject(OS_TOKEN)); };
    NgxDesktopService.ɵprov = ɵɵdefineInjectable({ token: NgxDesktopService, factory: NgxDesktopService.ɵfac, providedIn: 'root' });
    return NgxDesktopService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [OS_TOKEN]
            }] }]; }, null); })();

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
    NgxDesktopMousedownDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopMousedownDirective, selectors: [["", "ngxDesktopMousedown", ""]], hostBindings: function NgxDesktopMousedownDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mousedown", function NgxDesktopMousedownDirective_mousedown_HostBindingHandler() { return ctx.mousedownListener(); })("mouseup", function NgxDesktopMousedownDirective_mouseup_HostBindingHandler() { return ctx.windowMouseupListener(); }, false, ɵɵresolveWindow);
        } }, outputs: { ngxDesktopMousedown: "ngxDesktopMousedown" } });
    return NgxDesktopMousedownDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopMousedownDirective, [{
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

var NgxDesktopWindowBlurDirective = /** @class */ (function () {
    function NgxDesktopWindowBlurDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopWindowBlur = new EventEmitter();
    }
    NgxDesktopWindowBlurDirective.prototype.mouseoverListener = function () {
        this.ngxDesktopWindowBlur.emit(true);
    };
    NgxDesktopWindowBlurDirective.prototype.mouseoutListener = function () {
        this.ngxDesktopWindowBlur.emit(false);
    };
    NgxDesktopWindowBlurDirective.ɵfac = function NgxDesktopWindowBlurDirective_Factory(t) { return new (t || NgxDesktopWindowBlurDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopWindowBlurDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopWindowBlurDirective, selectors: [["", "ngxDesktopWindowBlur", ""]], hostBindings: function NgxDesktopWindowBlurDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("blur", function NgxDesktopWindowBlurDirective_blur_HostBindingHandler() { return ctx.mouseoverListener(); }, false, ɵɵresolveWindow)("focus", function NgxDesktopWindowBlurDirective_focus_HostBindingHandler() { return ctx.mouseoutListener(); }, false, ɵɵresolveWindow);
        } }, outputs: { ngxDesktopWindowBlur: "ngxDesktopWindowBlur" } });
    return NgxDesktopWindowBlurDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopWindowBlurDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopWindowBlur]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopWindowBlur: [{
            type: Output
        }], mouseoverListener: [{
            type: HostListener,
            args: ['window:blur']
        }], mouseoutListener: [{
            type: HostListener,
            args: ['window:focus']
        }] }); })();

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
    NgxDesktopMouseoverDirective.ɵfac = function NgxDesktopMouseoverDirective_Factory(t) { return new (t || NgxDesktopMouseoverDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopMouseoverDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopMouseoverDirective, selectors: [["", "ngxDesktopMouseover", ""]], hostBindings: function NgxDesktopMouseoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mouseover", function NgxDesktopMouseoverDirective_mouseover_HostBindingHandler() { return ctx.mouseoverListener(); })("mouseout", function NgxDesktopMouseoverDirective_mouseout_HostBindingHandler() { return ctx.mouseoutListener(); });
        } }, outputs: { ngxDesktopMouseover: "ngxDesktopMouseover" } });
    return NgxDesktopMouseoverDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopMouseoverDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopMouseover]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopMouseover: [{
            type: Output
        }], mouseoverListener: [{
            type: HostListener,
            args: ['mouseover']
        }], mouseoutListener: [{
            type: HostListener,
            args: ['mouseout']
        }] }); })();

var StyleValuePipe = /** @class */ (function () {
    function StyleValuePipe() {
    }
    StyleValuePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'number') {
            return value + "px";
        }
        else if (typeof value === 'boolean') {
            return args[0] && value ? args[0] : 'no-set';
        }
        else if (value) {
            return value;
        }
        return args[0] ? args[0] : 'no-set';
    };
    StyleValuePipe.ɵfac = function StyleValuePipe_Factory(t) { return new (t || StyleValuePipe)(); };
    StyleValuePipe.ɵpipe = ɵɵdefinePipe({ name: "styleValue", type: StyleValuePipe, pure: true });
    StyleValuePipe.ɵprov = ɵɵdefineInjectable({ token: StyleValuePipe, factory: StyleValuePipe.ɵfac, providedIn: 'root' });
    return StyleValuePipe;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(StyleValuePipe, [{
        type: Pipe,
        args: [{
                name: 'styleValue',
                pure: true
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var _c0 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.onClick = new EventEmitter();
        this.type = 'button';
        this.size = 13;
    }
    Object.defineProperty(ButtonComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
            if (os === 'windows' && !this.color) {
                this.color = '#cccccc';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                this.darkenColor = ColorUtils.darkenColor(color, .35);
                this.isDarkColor = ColorUtils.isDarkColor(this.darkenColor);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonComponent.prototype, "style", {
        get: function () {
            if (this.os === 'mac') {
                var colorStyle = macStyle[this.color] || macStyle.default;
                return __assign(__assign(__assign(__assign({}, colorStyle.normal), this.mousedown ? colorStyle.mousedown : {}), this.windowBlur ? {
                    'border-color': '#C8C8C8 #C2C2C2 #ACACAC',
                    'background-image': 'none',
                    color: 'initial'
                } : {}), this.disabled ? {
                    color: '#bababa',
                    background: '#f6f6f6',
                    'border-color': '#dadada'
                } : {});
            }
            else {
                return __assign(__assign({ 'background-color': this.color, 'border-color': this.color, color: this.isDarkColor ? '#ffffff' : '#000000' }, this.mouseover ? {
                    'border-color': this.darkenColor
                } : {}), this.mousedown ? {
                    'background-color': this.darkenColor,
                    'border-color': this.darkenColor,
                    transform: 'scale(0.97)',
                    transition: 'transform .1s ease-in'
                } : {});
            }
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.ngOnInit = function () {
        if (this.os === 'windows' && !this.color) {
            this.color = '#cccccc';
        }
    };
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    ButtonComponent.ɵcmp = ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ngx-desktop-button"]], inputs: { disabled: "disabled", theme: "theme", type: "type", size: "size", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin", os: "os", color: "color" }, outputs: { onClick: "onClick" }, ngContentSelectors: _c0, decls: 13, vars: 55, consts: [["data-radium", "true", 3, "disabled", "type", "ngStyle", "click", "ngxDesktopMousedown", "ngxDesktopWindowBlur", "ngxDesktopMouseover"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.onClick.emit($event); })("ngxDesktopMousedown", function ButtonComponent_Template_button_ngxDesktopMousedown_0_listener($event) { return ctx.mousedown = $event; })("ngxDesktopWindowBlur", function ButtonComponent_Template_button_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; })("ngxDesktopMouseover", function ButtonComponent_Template_button_ngxDesktopMouseover_0_listener($event) { return ctx.mouseover = $event; });
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵpipe(7, "styleValue");
            ɵɵpipe(8, "styleValue");
            ɵɵpipe(9, "styleValue");
            ɵɵpipe(10, "styleValue");
            ɵɵpipe(11, "styleValue");
            ɵɵprojection(12);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMap(ctx.os);
            ɵɵstyleProp("margin", ɵɵpipeBind1(1, 31, ctx.margin))("margin-bottom", ɵɵpipeBind1(2, 33, ctx.marginBottom))("margin-right", ɵɵpipeBind1(3, 35, ctx.marginRight))("margin-top", ɵɵpipeBind1(4, 37, ctx.marginTop))("margin-left", ɵɵpipeBind1(5, 39, ctx.marginLeft))("padding", ɵɵpipeBind2(6, 41, ctx.padding, ctx.os === "mac" ? "0 13px" : "0 32px"))("padding-top", ɵɵpipeBind1(7, 44, ctx.paddingTop))("padding-bottom", ɵɵpipeBind1(8, 46, ctx.paddingBottom))("padding-left", ɵɵpipeBind1(9, 48, ctx.paddingLeft))("padding-right", ɵɵpipeBind1(10, 50, ctx.paddingRight))("font-size", ɵɵpipeBind2(11, 52, ctx.size, "13px"));
            ɵɵclassProp("mousedown", ctx.mousedown)("blur", ctx.windowBlur);
            ɵɵproperty("disabled", ctx.disabled)("type", ctx.type)("ngStyle", ctx.style);
        } }, directives: [NgStyle, NgxDesktopMousedownDirective, NgxDesktopWindowBlurDirective, NgxDesktopMouseoverDirective], pipes: [StyleValuePipe], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}button[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;outline:0;border-style:solid}button.windows[_ngcontent-%COMP%]{border-width:2px;line-height:28px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px}button.mac[_ngcontent-%COMP%]{background-color:#fff;border-width:1px;border-radius:5px;box-shadow:rgba(0,0,0,.04) 0 1px;line-height:19px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif}"], changeDetection: 0 });
    return ButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { disabled: [{
            type: Input
        }], onClick: [{
            type: Output
        }], theme: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], padding: [{
            type: Input
        }], margin: [{
            type: Input
        }], os: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

var NgxDesktopHorizontalAlignmentDirective = /** @class */ (function () {
    function NgxDesktopHorizontalAlignmentDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopHorizontalAlignmentDirective.prototype, "ngxDesktopHorizontalAlignment", {
        set: function (horizontalAlignment) {
            if (horizontalAlignment === 'left') {
                this.value = 'flex-start';
            }
            else if (horizontalAlignment === 'right') {
                this.value = 'flex-end';
            }
            else if (horizontalAlignment === 'center') {
                this.value = 'center';
            }
            else {
                this.value = 'normal';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopHorizontalAlignmentDirective.prototype, "style", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopHorizontalAlignmentDirective.ɵfac = function NgxDesktopHorizontalAlignmentDirective_Factory(t) { return new (t || NgxDesktopHorizontalAlignmentDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopHorizontalAlignmentDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopHorizontalAlignmentDirective, selectors: [["", "ngxDesktopHorizontalAlignment", ""]], hostVars: 2, hostBindings: function NgxDesktopHorizontalAlignmentDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("justify-content", ctx.style);
        } }, inputs: { ngxDesktopHorizontalAlignment: "ngxDesktopHorizontalAlignment" } });
    return NgxDesktopHorizontalAlignmentDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopHorizontalAlignmentDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopHorizontalAlignment]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopHorizontalAlignment: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.justify-content']
        }] }); })();

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
    NgxDesktopVerticalAlignmentDirective.ɵfac = function NgxDesktopVerticalAlignmentDirective_Factory(t) { return new (t || NgxDesktopVerticalAlignmentDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopVerticalAlignmentDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopVerticalAlignmentDirective, selectors: [["", "ngxDesktopVerticalAlignment", ""]], hostVars: 2, hostBindings: function NgxDesktopVerticalAlignmentDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("align-items", ctx.style);
        } }, inputs: { ngxDesktopVerticalAlignment: "ngxDesktopVerticalAlignment" } });
    return NgxDesktopVerticalAlignmentDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopVerticalAlignmentDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopVerticalAlignment]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopVerticalAlignment: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.align-items']
        }] }); })();

var _c0$1 = ["*"];
var BoxComponent = /** @class */ (function () {
    function BoxComponent() {
    }
    BoxComponent.prototype.ngOnInit = function () {
    };
    BoxComponent.ɵfac = function BoxComponent_Factory(t) { return new (t || BoxComponent)(); };
    BoxComponent.ɵcmp = ɵɵdefineComponent({ type: BoxComponent, selectors: [["ngx-desktop-box"]], inputs: { label: "label", background: "background", color: "color", height: "height", width: "width", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin" }, ngContentSelectors: _c0$1, decls: 18, vars: 59, consts: [[1, "box-wrap"], [1, "lable"], [1, "content-wrap", 3, "ngxDesktopHorizontalAlignment", "ngxDesktopVerticalAlignment"]], template: function BoxComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "span", 1);
            ɵɵtext(2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "div", 2);
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵpipe(7, "styleValue");
            ɵɵpipe(8, "styleValue");
            ɵɵpipe(9, "styleValue");
            ɵɵpipe(10, "styleValue");
            ɵɵpipe(11, "styleValue");
            ɵɵpipe(12, "styleValue");
            ɵɵpipe(13, "styleValue");
            ɵɵpipe(14, "styleValue");
            ɵɵpipe(15, "styleValue");
            ɵɵpipe(16, "styleValue");
            ɵɵprojection(17);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.label);
            ɵɵadvance(1);
            ɵɵstyleProp("height", ɵɵpipeBind1(4, 31, ctx.height))("width", ɵɵpipeBind1(5, 33, ctx.width))("margin", ɵɵpipeBind1(6, 35, ctx.margin))("margin-bottom", ɵɵpipeBind1(7, 37, ctx.marginBottom))("margin-right", ɵɵpipeBind1(8, 39, ctx.marginRight))("margin-top", ɵɵpipeBind1(9, 41, ctx.marginTop))("margin-left", ɵɵpipeBind1(10, 43, ctx.marginLeft))("padding", ɵɵpipeBind2(11, 45, ctx.padding, "23px 18px 22px"))("padding-top", ɵɵpipeBind1(12, 48, ctx.paddingTop))("padding-bottom", ɵɵpipeBind1(13, 50, ctx.paddingBottom))("padding-left", ɵɵpipeBind1(14, 52, ctx.paddingLeft))("padding-right", ɵɵpipeBind1(15, 54, ctx.paddingRight))("color", ctx.color)("background", ɵɵpipeBind2(16, 56, ctx.background, "rgba(0, 0, 0, 0.04)"), ɵɵdefaultStyleSanitizer);
            ɵɵproperty("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment)("ngxDesktopVerticalAlignment", ctx.verticalAlignment);
        } }, directives: [NgxDesktopHorizontalAlignmentDirective, NgxDesktopVerticalAlignmentDirective], pipes: [StyleValuePipe], styles: [".box-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;flex:1 1 0}.content-wrap[_ngcontent-%COMP%]{border-width:1px;border-style:solid;border-color:rgba(0,0,0,.07) rgba(0,0,0,.035) rgba(0,0,0,.027);border-radius:4px;position:relative}.lable[_ngcontent-%COMP%]{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:11px;color:#000;margin:0 0 1px 7px;line-height:13.2px}"] });
    return BoxComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BoxComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-box',
                templateUrl: './box.component.html',
                styleUrls: ['./box.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], background: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], padding: [{
            type: Input
        }], margin: [{
            type: Input
        }] }); })();

function CheckboxComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 8);
    ɵɵelement(2, "path", 9);
    ɵɵelementEnd();
    ɵɵelementStart(3, "svg", 10);
    ɵɵelement(4, "path", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r72 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r72.disabled ? "#8d8d8d" : ctx_r72.windowBlur ? "#404040" : "#FFFFFF");
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r72.disabled ? "#ededed" : ctx_r72.checked ? ctx_r72.windowBlur ? "#FFFFFF" : "#0050a5" : "#0050a5");
} }
function CheckboxComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 11);
    ɵɵelement(1, "polygon", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r73 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("fill", ctx_r73.disabled ? "#8d8d8d" : ctx_r73.isDarkColor ? "#000" : "#fff");
} }
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(ngxDesktopService, changeDetectorRef) {
        this.ngxDesktopService = ngxDesktopService;
        this.changeDetectorRef = changeDetectorRef;
        this.onChange = new EventEmitter$1();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(CheckboxComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
            if (this.os === 'windows' && !this.color) {
                this.color = '#0063AE';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            if (this._color !== color) {
                this._color = color;
                this.darkenColor = ColorUtils.darkenColor(color, .35);
                this.isDarkColor = ColorUtils.isDarkColor(this.darkenColor);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "style", {
        get: function () {
            if (this.os === 'windows') {
                return __assign({}, this.disabled ? {
                    'border-color': '#999999',
                } : __assign(__assign(__assign({}, this.checked ? {
                    'border-color': this.color,
                    'background-color': this.color
                } : {
                    'border-color': 'rgba(0, 0, 0, 0.8)'
                }), this.mouseover ? {
                    'border-color': '#000000'
                } : {}), this.mousedown ? {
                    'border-color': 'rgba(0, 0, 0, 0)',
                    'background-color': 'rgba(0, 0, 0, 0.57)'
                } : {}));
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.ngOnInit = function () {
        if (this.os === 'windows' && !this.color) {
            this.color = '#0063AE';
        }
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxComponent.prototype.changeValue = function () {
        this.checked = !this.checked;
        this.onChangeCallback(this.checked);
    };
    CheckboxComponent.prototype.writeValue = function (obj) {
        this.checked = obj;
        this.changeDetectorRef.markForCheck();
    };
    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(ɵɵdirectiveInject(NgxDesktopService), ɵɵdirectiveInject(ChangeDetectorRef)); };
    CheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["ngx-desktop-checkbox"]], inputs: { checked: "checked", disabled: "disabled", os: "os", label: "label", color: "color" }, outputs: { onChange: "onChange" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return CheckboxComponent; }),
                    multi: true
                }])], decls: 8, vars: 15, consts: [[2, "display", "inline-block"], ["data-radium", "true", 1, "checkbox-wrap", 3, "ngxDesktopWindowBlur", "ngxDesktopMouseover", "ngxDesktopMousedown"], ["data-radium", "true", 2, "position", "relative", "margin-right", "3px", "padding-top", "3px"], ["type", "checkbox", "data-radium", "true", 3, "checked", "disabled", "change"], ["data-radium", "true", "class", "checkbox-style", 4, "ngIf"], ["x", "0px", "y", "0px", "viewBox", "0 0 6.4 6.4", "data-radium", "true", "style", "position: absolute; top: 6px; left: 5px; color: rgb(255, 255, 255); height: 16px;", 4, "ngIf"], [1, "title"], ["data-radium", "true", 1, "checkbox-style"], ["viewBox", "0 0 285 283.4", "data-radium", "true", 1, "svg1"], ["d", "M101.2,215.7L227.5,20.6c0,0,20.7-31.9,44.4-16.2c25.4,16.8,6.1,41,6.1,41L134.5,271.9c0,0-8.8,11.5-23.9,11.5 s-29.2-13.3-29.2-13.3L2.7,175.4c0,0-9.4-17.3,6.8-27.4c19.7-12.3,34.6,2.8,34.6,2.8L101.2,215.7z"], ["viewBox", "0 0 285 283.4", "data-radium", "true", 1, "svg2"], ["x", "0px", "y", "0px", "viewBox", "0 0 6.4 6.4", "data-radium", "true", 2, "position", "absolute", "top", "6px", "left", "5px", "color", "rgb(255, 255, 255)", "height", "16px"], ["points", "0,3.3 2.2,5.5 6.4,1.23 6.1,0.9 2.2,4.8 0.3,2.9 "]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "label", 1);
            ɵɵlistener("ngxDesktopWindowBlur", function CheckboxComponent_Template_label_ngxDesktopWindowBlur_1_listener($event) { return ctx.windowBlur = $event; })("ngxDesktopMouseover", function CheckboxComponent_Template_label_ngxDesktopMouseover_1_listener($event) { return ctx.mouseover = $event; })("ngxDesktopMousedown", function CheckboxComponent_Template_label_ngxDesktopMousedown_1_listener($event) { return ctx.mousedown = $event; });
            ɵɵelementStart(2, "div", 2);
            ɵɵelementStart(3, "input", 3);
            ɵɵlistener("change", function CheckboxComponent_Template_input_change_3_listener() { return ctx.changeValue(); });
            ɵɵelementEnd();
            ɵɵtemplate(4, CheckboxComponent_div_4_Template, 5, 2, "div", 4);
            ɵɵtemplate(5, CheckboxComponent__svg_svg_5_Template, 2, 1, "svg", 5);
            ɵɵelementEnd();
            ɵɵelementStart(6, "span", 6);
            ɵɵtext(7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵclassMap(ctx.os);
            ɵɵclassProp("blur", ctx.windowBlur)("checked", ctx.checked)("disabled", ctx.disabled);
            ɵɵadvance(2);
            ɵɵstyleMap(ctx.style);
            ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "mac");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "windows" && ctx.checked);
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.label);
        } }, directives: [NgxDesktopWindowBlurDirective, NgxDesktopMouseoverDirective, NgxDesktopMousedownDirective, NgIf], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}.checkbox-wrap[_ngcontent-%COMP%]{display:flex;position:relative}input[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;outline:0;border-style:solid}.windows[_ngcontent-%COMP%]   .checkbox-wrap[_ngcontent-%COMP%]{align-items:center;margin-bottom:22px}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:2px;padding:8px;color:#fff;vertical-align:bottom;margin-right:6px;margin-top:0}.windows[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;margin-top:1px;color:#000}.windows.disabled[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#bbb}.mac.checkbox-wrap[_ngcontent-%COMP%]{height:20px;margin-right:1px}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:1px;border-radius:3px;padding:6px;margin:0 1px;box-shadow:rgba(224,224,224,.4) 0 1px 0 0 inset;transition:.4s;background-color:#fff;border-color:#b8b8b8}.mac.blur.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-color:#b8b8b8;background-color:#fff;transition:none}.mac.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-shadow:none!important;transition:.4s;background-color:#3b99fc;border-color:#2c91fc}.mac.checked[_ngcontent-%COMP%]   .checkbox-style[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.mac.disabled[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#a5a5a5}.mac.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#ececec!important;border-color:#bbb!important}.mac[_ngcontent-%COMP%]   .checkbox-style[_ngcontent-%COMP%]{position:absolute;top:6px;left:4px;width:8px;height:8px;opacity:0;transform:scale(0);transition:.5s}.mac[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:inline;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;color:#000}.mac[_ngcontent-%COMP%]   .svg1[_ngcontent-%COMP%]{z-index:2;position:absolute;top:0;left:0;height:8px}.mac[_ngcontent-%COMP%]   .svg2[_ngcontent-%COMP%]{z-index:1;position:absolute;top:1.5px;left:0;opacity:.37;height:8px;-webkit-filter:blur(.5px);filter:blur(.5px)}"] });
    return CheckboxComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CheckboxComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: NgxDesktopService }, { type: ChangeDetectorRef }]; }, { onChange: [{
            type: Output
        }], checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], os: [{
            type: Input
        }], label: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

var _c0$2 = ["*"];
var LabelComponent = /** @class */ (function () {
    function LabelComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(LabelComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    LabelComponent.prototype.ngOnInit = function () {
    };
    LabelComponent.ɵfac = function LabelComponent_Factory(t) { return new (t || LabelComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    LabelComponent.ɵcmp = ɵɵdefineComponent({ type: LabelComponent, selectors: [["ngx-desktop-label"]], inputs: { os: "os", color: "color", height: "height", width: "width", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin" }, ngContentSelectors: _c0$2, decls: 15, vars: 57, consts: [[1, "label-wrap", 3, "ngxDesktopVerticalAlignment", "ngxDesktopHorizontalAlignment"]], template: function LabelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "span", 0);
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵpipe(7, "styleValue");
            ɵɵpipe(8, "styleValue");
            ɵɵpipe(9, "styleValue");
            ɵɵpipe(10, "styleValue");
            ɵɵpipe(11, "styleValue");
            ɵɵpipe(12, "styleValue");
            ɵɵpipe(13, "styleValue");
            ɵɵprojection(14);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMap(ctx.os);
            ɵɵstyleProp("margin", ɵɵpipeBind1(1, 30, ctx.margin))("margin-bottom", ɵɵpipeBind1(2, 32, ctx.marginBottom))("margin-right", ɵɵpipeBind1(3, 34, ctx.marginRight))("margin-top", ɵɵpipeBind1(4, 36, ctx.marginTop))("margin-left", ɵɵpipeBind1(5, 38, ctx.marginLeft))("padding", ɵɵpipeBind1(6, 40, ctx.padding))("padding-top", ɵɵpipeBind1(7, 42, ctx.paddingTop))("padding-bottom", ɵɵpipeBind1(8, 44, ctx.paddingBottom))("padding-left", ɵɵpipeBind1(9, 46, ctx.paddingLeft))("padding-right", ɵɵpipeBind1(10, 48, ctx.paddingRight))("height", ɵɵpipeBind1(11, 50, ctx.height))("width", ɵɵpipeBind1(12, 52, ctx.width))("color", ɵɵpipeBind2(13, 54, ctx.color, "#000000"));
            ɵɵproperty("ngxDesktopVerticalAlignment", ctx.verticalAlignment)("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment);
        } }, directives: [NgxDesktopVerticalAlignmentDirective, NgxDesktopHorizontalAlignmentDirective], pipes: [StyleValuePipe], styles: [".label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.windows.label-wrap[_ngcontent-%COMP%]{font-size:14px;display:flex;line-height:25.96px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif}.mac.label-wrap[_ngcontent-%COMP%]{display:block;font-size:13px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif}"] });
    return LabelComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LabelComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-label',
                templateUrl: './label.component.html',
                styleUrls: ['./label.component.css']
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { os: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], padding: [{
            type: Input
        }], margin: [{
            type: Input
        }] }); })();

var _c0$3 = [[["ngx-desktop-nav-pane-item"]]];
var _c1 = ["ngx-desktop-nav-pane-item"];
var NavPaneItemComponent = /** @class */ (function () {
    function NavPaneItemComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.onSelect = new EventEmitter();
    }
    NavPaneItemComponent.prototype.ngOnInit = function () {
    };
    NavPaneItemComponent.ɵfac = function NavPaneItemComponent_Factory(t) { return new (t || NavPaneItemComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    NavPaneItemComponent.ɵcmp = ɵɵdefineComponent({ type: NavPaneItemComponent, selectors: [["ngx-desktop-nav-pane-item"]], inputs: { background: "background", color: "color", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", title: "title", icon: "icon", margin: "margin", padding: "padding", selected: "selected" }, outputs: { onSelect: "onSelect" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function NavPaneItemComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$3);
            ɵɵprojection(0);
        } }, styles: [""] });
    return NavPaneItemComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavPaneItemComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-nav-pane-item',
                templateUrl: './nav-pane-item.component.html',
                styleUrls: ['./nav-pane-item.component.css']
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { background: [{
            type: Input
        }], color: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], margin: [{
            type: Input
        }], padding: [{
            type: Input
        }], selected: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();

var _c0$4 = [[["ngx-desktop-nav-pane-item"]]];
var _c1$1 = ["ngx-desktop-nav-pane-item"];
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
    NavPaneComponent.ɵfac = function NavPaneComponent_Factory(t) { return new (t || NavPaneComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    NavPaneComponent.ɵcmp = ɵɵdefineComponent({ type: NavPaneComponent, selectors: [["ngx-desktop-nav-pane"]], contentQueries: function NavPaneComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NavPaneItemComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navPaneItems = _t);
        } }, inputs: { color: "color", expanded: "expanded", canPaneToggle: "canPaneToggle", paneCompactedLength: "paneCompactedLength", paneExpandedLength: "paneExpandedLength" }, outputs: { expandedChange: "expandedChange" }, ngContentSelectors: _c1$1, decls: 27, vars: 1, consts: [[1, "nav-pane-container"], [1, "nav-pane-label-container"], [2, "height", "48px"], [2, "position", "absolute", "padding", "8px 10px", "top", "7px", "left", "4px", "width", "20px", "height", "20px"], ["x", "0px", "y", "0px", "viewBox", "0 0 20 12.5", "data-radium", "true"], ["fill", "#000000", "fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M0,12.5h20V11H0V12.5z M0,7h20V5.5H0V7z M0,0v1.5h20V0H0z"], ["data-radium", "true", 1, "pane-label", "checked", 3, "click"], ["data-radium", "true"], ["x", "0px", "y", "0px", "width", "16px", "height", "14.9px", "viewBox", "0 0 16 14.9"], ["fill", "#000000", "points", "16,5.6 10.6,4.7 8,0 5.4,4.7 0,5.7 3.8,9.6 3.1,14.9 8,12.6 13,14.8 12.3,9.5 "], ["data-radium", "true", 1, "pane-label"], ["x", "0px", "y", "0px", "width", "16px", "height", "13.5px", "viewBox", "0 0 16 13.5"], ["fill", "#000000", "d", "M16,4.2C16,1.9,14.1,0,11.7,0c-1.4,0-2.6,0.6-3.4,1.6c0,0,0,0,0,0C8.3,1.7,8.1,1.8,8,1.8 c-0.2,0-0.3-0.1-0.4-0.2c0,0,0,0,0,0C6.8,0.6,5.6,0,4.3,0C1.9,0,0,1.9,0,4.2c0,0,0,0.1,0,0.1l0,0c0,0,0,0.1,0,0.3 C0,4.8,0.1,5,0.1,5.2c0.3,1.4,1.4,4.1,5.1,6.5c2.1,1.4,2.6,1.8,2.8,1.8c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0,0.7-0.4,2.8-1.8 c3.5-2.3,4.6-4.8,5-6.3C15.9,5.1,16,4.8,16,4.5C16,4.3,16,4.2,16,4.2L16,4.2C16,4.2,16,4.2,16,4.2z"], ["x", "0px", "y", "0px", "width", "16px", "height", "15.6px", "viewBox", "0 0 16 15.6"], ["fill", "#000000", "d", "M14.9,3.2c0.7-0.9,1-1.7,1.1-2.4c0-0.2,0-0.4-0.1-0.5c0,0,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1 C15.6,0,15.4,0,15.2,0c-0.7,0-1.6,0.4-2.4,1c-0.7,0.5-1.4,1.2-2.4,2.3C10.2,3.5,10,3.6,9.8,3.8L8.3,3.4L7.9,3.3C8,3.2,8.1,3.1,8.1,3 c0-0.1,0-0.2-0.1-0.3L7.6,2.3C7.5,2.3,7.4,2.2,7.3,2.2c-0.1,0-0.2,0-0.3,0.1L6.5,2.8L6.2,2.8c0.1-0.1,0.1-0.2,0.1-0.3 c0-0.1,0-0.2-0.1-0.3L5.8,1.9C5.7,1.8,5.6,1.8,5.5,1.8c-0.1,0-0.2,0-0.3,0.1L4.7,2.3L2.8,1.8c0,0-0.1,0-0.1,0 c-0.1,0-0.3,0.1-0.4,0.1L1.6,2.6C1.5,2.6,1.5,2.7,1.5,2.8c0,0.1,0.1,0.3,0.2,0.3l4.1,2.2c0,0,0.1,0.1,0.1,0.1L7,6.6 C6,7.7,5,8.8,4.2,9.7C4.2,9.8,4.1,9.9,4,10L0.9,9.7c0,0,0,0-0.1,0c-0.1,0-0.3,0.1-0.4,0.2l-0.3,0.3C0,10.3,0,10.4,0,10.5 c0,0.1,0.1,0.3,0.2,0.3l2.2,1c0,0,0.1,0,0.1,0.1l0.2,0.2c-0.1,0.2-0.1,0.3-0.1,0.4c0,0.2,0.1,0.3,0.2,0.4C2.9,13,3,13.1,3.2,13.1 c0.1,0,0.3,0,0.4-0.1l0.2,0.2c0,0,0,0.1,0.1,0.1l1.1,2.2c0.1,0.1,0.2,0.2,0.4,0.2c0.1,0,0.2,0,0.3-0.1l0.3-0.3C6,15.1,6,14.9,6,14.8 c0,0-0.3-3.1-0.3-3.1c0.1-0.1,0.2-0.1,0.3-0.2c1-0.7,2.1-1.7,3.2-2.7l1.2,1.1c0,0,0.1,0.1,0.1,0.1l2.3,4c0.1,0.1,0.2,0.2,0.3,0.2 c0.1,0,0.2,0,0.3-0.1l0.7-0.7c0.1-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.1l-0.5-1.8L13.6,11l0.5-0.4c0.1-0.1,0.1-0.2,0.1-0.3 c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1l-0.1-0.3l0.5-0.5c0.1-0.1,0.1-0.2,0.1-0.3 c0-0.1,0-0.2-0.1-0.3l-0.3-0.3c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1L12.1,6c0.2-0.2,0.4-0.4,0.6-0.5 C13.7,4.5,14.4,3.8,14.9,3.2z"], [1, "nav-pane-content-container"], ["data-radium", "true", 1, "title-container"], ["data-radium", "true", 1, "last-title"], [2, "display", "flex", "flex", "1 1 0%", "flex-direction", "column", "padding", "10px 20px", "background", "rgb(255, 255, 255)"]], template: function NavPaneComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$4);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelement(2, "div", 2);
            ɵɵelementStart(3, "span", 3);
            ɵɵnamespaceSVG();
            ɵɵelementStart(4, "svg", 4);
            ɵɵelement(5, "path", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵnamespaceHTML();
            ɵɵelementStart(6, "a", 6);
            ɵɵlistener("click", function NavPaneComponent_Template_a_click_6_listener() { return ctx.a(); });
            ɵɵelementStart(7, "span", 7);
            ɵɵelementStart(8, "i", 7);
            ɵɵnamespaceSVG();
            ɵɵelementStart(9, "svg", 8);
            ɵɵelement(10, "polygon", 9);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵnamespaceHTML();
            ɵɵelementStart(11, "a", 10);
            ɵɵelementStart(12, "span", 7);
            ɵɵelementStart(13, "i", 7);
            ɵɵnamespaceSVG();
            ɵɵelementStart(14, "svg", 11);
            ɵɵelement(15, "path", 12);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵnamespaceHTML();
            ɵɵelementStart(16, "a", 10);
            ɵɵelementStart(17, "span", 7);
            ɵɵelementStart(18, "i", 7);
            ɵɵnamespaceSVG();
            ɵɵelementStart(19, "svg", 13);
            ɵɵelement(20, "path", 14);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵnamespaceHTML();
            ɵɵelementStart(21, "div", 15);
            ɵɵelementStart(22, "div", 16);
            ɵɵelementStart(23, "span", 17);
            ɵɵtext(24, "Item 2");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(25, "div", 18);
            ɵɵprojection(26);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(23);
            ɵɵproperty("@changePane", ctx.changePaneState);
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
                    transition('initial=>final', animate$1(1000))
                ])
            ] } });
    return NavPaneComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavPaneComponent, [{
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
                        transition('initial=>final', animate$1(1000))
                    ])
                ]
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { color: [{
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

/**
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 *
 * Credits: is based on Firefox's nsSMILKeySpline.cpp
 * Usage:
 * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
 * spline.get(x) => returns the easing value | x must be in [0, 1] range
 *
 */
// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
}
function C(aA1) {
    return 3.0 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0)
            return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
/**
 * points is an array of [ mX1, mY1, mX2, mY2 ]
 */
function BezierEasing(points, b, c, d) {
    if (arguments.length === 4) {
        // @ts-ignore
        return new BezierEasing([points, b, c, d]);
    }
    if (!(this instanceof BezierEasing)) { // @ts-ignore
        // @ts-ignore
        return new BezierEasing(points);
    }
    if (!points || points.length !== 4) {
        throw new Error('BezierEasing: points must contains 4 values');
    }
    for (var i = 0; i < 4; ++i) {
        if (typeof points[i] !== 'number' || isNaN(points[i]) || !isFinite(points[i])) {
            throw new Error('BezierEasing: points should be integers.');
        }
    }
    if (points[0] < 0 || points[0] > 1 || points[2] < 0 || points[2] > 1) {
        throw new Error('BezierEasing x values must be in [0, 1] range.');
    }
    this._str = 'BezierEasing(' + points + ')';
    this._css = 'cubic-bezier(' + points + ')';
    this._p = points;
    this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    this._precomputed = false;
    this.get = this.get.bind(this);
}
BezierEasing.prototype = {
    get: function (x) {
        var mX1 = this._p[0], mY1 = this._p[1], mX2 = this._p[2], mY2 = this._p[3];
        if (!this._precomputed)
            this._precompute();
        if (mX1 === mY1 && mX2 === mY2)
            return x; // linear
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0)
            return 0;
        if (x === 1)
            return 1;
        return calcBezier(this._getTForX(x), mY1, mY2);
    },
    getPoints: function () {
        return this._p;
    },
    toString: function () {
        return this._str;
    },
    toCSS: function () {
        return this._css;
    },
    // Private part
    _precompute: function () {
        var mX1 = this._p[0], mY1 = this._p[1], mX2 = this._p[2], mY2 = this._p[3];
        this._precomputed = true;
        if (mX1 !== mY1 || mX2 !== mY2)
            this._calcSampleValues();
    },
    _calcSampleValues: function () {
        var mX1 = this._p[0], mX2 = this._p[2];
        for (var i = 0; i < kSplineTableSize; ++i) {
            this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
    },
    /**
     * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
     */
    _getTForX: function (aX) {
        var mX1 = this._p[0], mX2 = this._p[2], mSampleValues = this._mSampleValues;
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
};
// CSS mapping
// @ts-ignore
BezierEasing.css = {
    // @ts-ignore
    ease: BezierEasing.ease = BezierEasing(0.25, 0.1, 0.25, 1.0),
    // @ts-ignore
    linear: BezierEasing.linear = BezierEasing(0.00, 0.0, 1.00, 1.0),
    // @ts-ignore
    'ease-in': BezierEasing.easeIn = BezierEasing(0.42, 0.0, 1.00, 1.0),
    // @ts-ignore
    'ease-out': BezierEasing.easeOut = BezierEasing(0.00, 0.0, 0.58, 1.0),
    // @ts-ignore
    'ease-in-out': BezierEasing.easeInOut = BezierEasing(0.42, 0.0, 0.58, 1.0)
};

var requestAnimationFrame;
if (typeof window !== 'undefined') {
    requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
}
var totalIterations = 95;
var circlesInterval = 14;
var restartInterval = 250;
var stopRotationAt = totalIterations * 2 / 1.02;
var easing = BezierEasing(0, 0.47, 0.9, .25);
var bounding = 68;
var ids = [];
var animations = {};
function rotateCircle(circles) {
    var lastFrame = false;
    for (var i = 0, len = circles.length; i < len; ++i) {
        if (this.iteration >= circlesInterval * i) {
            var iteration = this.iteration - circlesInterval * i;
            var revolution = Math.floor(iteration / totalIterations);
            iteration = iteration - (revolution * totalIterations);
            if (iteration < 0) {
                iteration = totalIterations - iteration;
            }
            else if (iteration > totalIterations) {
                iteration = iteration - totalIterations;
            }
            if (iteration + (revolution * totalIterations) > stopRotationAt) {
                circles[i].setAttributeNS('', 'fill-opacity', '0');
                if (i === circles.length - 1) {
                    lastFrame = true;
                }
            }
            else {
                var value = easing.get(1 / totalIterations * iteration) * 2 * Math.PI * -1;
                circles[i].setAttributeNS('', 'fill-opacity', '1');
                circles[i].setAttributeNS('', 'cx', 75 + (bounding * Math.sin(value)) + '');
                circles[i].setAttributeNS('', 'cy', 75 + (bounding * Math.cos(value)) + '');
            }
        }
    }
    this.iteration++;
    if (!lastFrame) {
        animations[this.id] = ['animationFrame', requestAnimationFrame(rotateCircle.bind(this, circles))];
    }
    else {
        animations[this.id] = ['timeout', window.setTimeout(startAnimation.bind.apply(startAnimation, __spread([null], circles)), restartInterval)];
    }
}
function startAnimation() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    var id = 0;
    if (ids.length) {
        id = ids[ids.length - 1] + 1;
    }
    ids.push(id);
    if (requestAnimationFrame) {
        rotateCircle.apply({ iteration: 0, currentIteration: 0, id: id }, [elements]);
    }
    return id;
}
function stopAnimation(animation) {
    if (animations[animation][0] === 'timeout') {
        window.clearTimeout(animations[animation][1]);
    }
    else {
        window.cancelAnimationFrame(animations[animation][1]);
    }
}

var ids$1 = [];
var animations$1 = {};
var framerate = 60;
var duration = 1900;
function animate(elements) {
    var _this = this;
    this.currentStep = 0;
    this.steps = duration / framerate;
    this.increment = 1 / this.steps;
    animateStep.apply(this, [elements]);
    animations$1[this.id] = setInterval(function () { return animateStep.apply(_this, [elements]); }, 1000 / framerate);
}
function animateStep(elements) {
    this.currentStep++;
    if (this.currentStep > this.steps) {
        this.currentStep = 1;
    }
    for (var i = 0, len = 12; i < len; ++i) {
        elements[11 - i].style.opacity = this.increment * findStep.apply(this, [i]);
    }
}
function findStep(index) {
    var step = this.currentStep + (this.steps / 12 * index);
    if (step > this.steps) {
        step = -this.steps + step;
    }
    return this.steps - step;
}
function startAnimation2() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    var id = 0;
    if (ids$1.length) {
        id = ids$1[ids$1.length - 1] + 1;
    }
    ids$1.push(id);
    animate.apply({ id: id }, [elements]);
    return id;
}
function stopAnimation$1(animation) {
    window.clearInterval(animations$1[animation]);
}

var _c0$5 = ["circle"];
function ProgressCircleComponent__svg_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "circle", 3, 4);
    ɵɵelement(3, "circle", 3, 4);
    ɵɵelement(5, "circle", 3, 4);
    ɵɵelement(7, "circle", 3, 4);
    ɵɵelement(9, "circle", 3, 4);
    ɵɵelement(11, "circle", 3, 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r74 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("fill", ctx_r74.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r74.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r74.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r74.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r74.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r74.color);
} }
function ProgressCircleComponent__svg_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "path", 5, 4);
    ɵɵelement(3, "path", 6, 4);
    ɵɵelement(5, "path", 7, 4);
    ɵɵelement(7, "path", 8, 4);
    ɵɵelement(9, "path", 9, 4);
    ɵɵelement(11, "path", 10, 4);
    ɵɵelement(13, "path", 11, 4);
    ɵɵelement(15, "path", 12, 4);
    ɵɵelement(17, "path", 13, 4);
    ɵɵelement(19, "path", 14, 4);
    ɵɵelement(21, "path", 15, 4);
    ɵɵelement(23, "path", 16, 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r75 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r75.color);
} }
var ProgressCircleComponent = /** @class */ (function () {
    function ProgressCircleComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(ProgressCircleComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
            this.initColor();
        },
        enumerable: true,
        configurable: true
    });
    ProgressCircleComponent.prototype.ngOnInit = function () {
        this.initColor();
    };
    ProgressCircleComponent.prototype.ngAfterViewInit = function () {
        var elements = this.circles.map(function (_a) {
            var nativeElement = _a.nativeElement;
            return nativeElement;
        });
        if (this.os === 'mac') {
            startAnimation2.apply(void 0, __spread(elements));
        }
        else {
            startAnimation.apply(void 0, __spread(elements));
        }
    };
    ProgressCircleComponent.prototype.initColor = function () {
        if (!this.color) {
            if (this.os === 'windows') {
                this.color = '#0063AE';
            }
            else {
                this.color = '#000000';
            }
        }
    };
    ProgressCircleComponent.ɵfac = function ProgressCircleComponent_Factory(t) { return new (t || ProgressCircleComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    ProgressCircleComponent.ɵcmp = ɵɵdefineComponent({ type: ProgressCircleComponent, selectors: [["ngx-desktop-progress-circle"]], viewQuery: function ProgressCircleComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0$5, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.circles = _t);
        } }, inputs: { os: "os", size: "size", color: "color" }, decls: 6, vars: 13, consts: [[1, "progress-circle-container"], ["x", "0px", "y", "0px"], [4, "ngIf"], ["fill-opacity", "0", "cx", "75", "cy", "75", "r", "7.3"], ["circle", ""], ["d", "M16.1,9.4L16.1,9.4c-0.9,0-1.6-0.7-1.6-1.6V1.6c0-0.9,0.7-1.6,1.6-1.6h0c0.9,0,1.6,0.7,1.6,1.6v6.3 C17.7,8.7,17,9.4,16.1,9.4z"], ["d", "M19.4,10.3L19.4,10.3c-0.8-0.4-1-1.4-0.6-2.2L22,2.7c0.4-0.8,1.4-1,2.2-0.6l0,0c0.8,0.4,1,1.4,0.6,2.2 l-3.1,5.4C21.2,10.5,20.2,10.7,19.4,10.3z"], ["d", "M21.9,12.7L21.9,12.7c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C28.7,7,29.6,7.3,30.1,8l0,0c0.4,0.8,0.2,1.7-0.6,2.2 l-5.4,3.1C23.3,13.7,22.3,13.5,21.9,12.7z"], ["d", "M22.8,16.1L22.8,16.1c0-0.9,0.7-1.6,1.6-1.6h6.3c0.9,0,1.6,0.7,1.6,1.6v0c0,0.9-0.7,1.6-1.6,1.6h-6.3 C23.5,17.7,22.8,17,22.8,16.1z"], ["d", "M22,19.4L22,19.4c0.4-0.8,1.4-1,2.2-0.6l5.4,3.1c0.8,0.4,1,1.4,0.6,2.2l0,0c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1 C21.8,21.2,21.5,20.2,22,19.4z"], ["d", "M19.5,21.9L19.5,21.9c0.8-0.4,1.7-0.2,2.2,0.6l3.1,5.4c0.4,0.8,0.2,1.7-0.6,2.2l0,0 c-0.8,0.4-1.7,0.2-2.2-0.6l-3.1-5.4C18.5,23.3,18.8,22.3,19.5,21.9z"], ["d", "M16.2,22.8L16.2,22.8c0.9,0,1.6,0.7,1.6,1.6v6.3c0,0.9-0.7,1.6-1.6,1.6h0c-0.9,0-1.6-0.7-1.6-1.6v-6.3 C14.6,23.5,15.3,22.8,16.2,22.8z"], ["d", "M12.8,22L12.8,22c0.8,0.4,1,1.4,0.6,2.2l-3.1,5.4c-0.4,0.8-1.4,1-2.2,0.6l0,0c-0.8-0.4-1-1.4-0.6-2.2 l3.1-5.4C11.1,21.8,12.1,21.5,12.8,22z"], ["d", "M10.3,19.5L10.3,19.5c0.4,0.8,0.2,1.7-0.6,2.2l-5.4,3.1c-0.8,0.4-1.7,0.2-2.2-0.6l0,0 c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C8.9,18.5,9.9,18.8,10.3,19.5z"], ["d", "M9.4,16.2L9.4,16.2c0,0.9-0.7,1.6-1.6,1.6H1.6C0.7,17.8,0,17,0,16.2v0c0-0.9,0.7-1.6,1.6-1.6h6.3 C8.7,14.6,9.4,15.3,9.4,16.2z"], ["d", "M10.3,12.8L10.3,12.8c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1C2,9.8,1.7,8.9,2.1,8.1l0,0c0.4-0.8,1.4-1,2.2-0.6 l5.4,3.1C10.5,11.1,10.7,12.1,10.3,12.8z"], ["d", "M12.7,10.3L12.7,10.3c-0.8,0.4-1.7,0.2-2.2-0.6L7.4,4.3C7,3.6,7.3,2.6,8,2.2l0,0C8.8,1.7,9.8,2,10.2,2.8 l3.1,5.4C13.7,8.9,13.5,9.9,12.7,10.3z"]], template: function ProgressCircleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵnamespaceSVG();
            ɵɵelementStart(1, "svg", 1);
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵtemplate(4, ProgressCircleComponent__svg_ng_container_4_Template, 13, 6, "ng-container", 2);
            ɵɵtemplate(5, ProgressCircleComponent__svg_ng_container_5_Template, 25, 12, "ng-container", 2);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵstyleProp("width", ɵɵpipeBind2(2, 7, ctx.size, ctx.os === "mac" ? "25px" : "20px"))("height", ɵɵpipeBind2(3, 10, ctx.size, ctx.os === "mac" ? "25px" : "20px"));
            ɵɵattribute("viewBox", ctx.os === "mac" ? "0 0 32.3 32.3" : "0 0 150 150");
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.os === "windows");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "mac");
        } }, directives: [NgIf], pipes: [StyleValuePipe], styles: [".progress-circle-container[_ngcontent-%COMP%]{position:relative;visibility:visible;display:block}svg[_ngcontent-%COMP%]{position:relative}"] });
    return ProgressCircleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ProgressCircleComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-progress-circle',
                templateUrl: './progress-circle.component.html',
                styleUrls: ['./progress-circle.component.css']
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { os: [{
            type: Input
        }], size: [{
            type: Input
        }], color: [{
            type: Input
        }], circles: [{
            type: ViewChildren,
            args: ["circle"]
        }] }); })();

var ControlValueAccessorAbstractComponent = /** @class */ (function () {
    function ControlValueAccessorAbstractComponent() {
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    ControlValueAccessorAbstractComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ControlValueAccessorAbstractComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ControlValueAccessorAbstractComponent.prototype.writeValue = function (obj) {
        this.model = obj;
    };
    ControlValueAccessorAbstractComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    ControlValueAccessorAbstractComponent.prototype.changeValue = function ($event) {
        var _this = this;
        setTimeout(function () { return _this.onChangeCallback($event); });
    };
    return ControlValueAccessorAbstractComponent;
}());

var _c0$6 = ["inputElement"];
function RadioComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 8);
} }
function RadioComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 10);
    ɵɵelement(2, "circle", 11);
    ɵɵelementEnd();
    ɵɵelementStart(3, "svg", 12);
    ɵɵelement(4, "circle", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r96 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r96.disabled ? ctx_r96.checked ? "#919191" : "#FFFFFF" : ctx_r96.checked ? ctx_r96.windowBlur ? "#404040" : "#FFFFFF" : "#FFFFFF");
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r96.disabled ? ctx_r96.checked ? "#ededed" : "#ffffff" : ctx_r96.checked ? ctx_r96.windowBlur ? "#FFFFFF" : "#0050a5" : "#FFFFFF");
} }
var RadioComponent = /** @class */ (function (_super) {
    __extends(RadioComponent, _super);
    function RadioComponent(ngxDesktopService, changeDetectorRef) {
        var _this = _super.call(this) || this;
        _this.ngxDesktopService = ngxDesktopService;
        _this.changeDetectorRef = changeDetectorRef;
        _this.color = '#0063AE';
        return _this;
    }
    Object.defineProperty(RadioComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioComponent.prototype, "borderColor", {
        get: function () {
            return this.os === 'mac' ?
                (this.windowBlur ? '#B8B8B8' : (this.checked ? '#2C91FC' : '#B8B8B8')) :
                this.disabled ? '#999999' : (this.checked ? this.color : '#333333');
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.writeValue = function (obj) {
        this.model = obj;
        this.checked = this.value === obj;
        this.changeDetectorRef.markForCheck();
    };
    RadioComponent.ɵfac = function RadioComponent_Factory(t) { return new (t || RadioComponent)(ɵɵdirectiveInject(NgxDesktopService), ɵɵdirectiveInject(ChangeDetectorRef)); };
    RadioComponent.ɵcmp = ɵɵdefineComponent({ type: RadioComponent, selectors: [["ngx-desktop-radio"]], viewQuery: function RadioComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$6, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, inputs: { os: "os", color: "color", label: "label", name: "name", value: "value", disabled: "disabled", checked: "checked" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return RadioComponent; }),
                    multi: true
                }]), ɵɵInheritDefinitionFeature], decls: 9, vars: 17, consts: [["data-radium", "true", 2, "display", "inline-block", 3, "ngxDesktopWindowBlur"], ["data-radium", "true", 1, "radio-wrap"], ["data-radium", "true", 1, "radio-input-wrap"], ["type", "radio", "data-radium", "true", 3, "value", "disabled", "checked", "change"], ["inputElement", ""], ["data-radium", "true", "class", "windows-radio-style", 4, "ngIf"], ["data-radium", "true", "style", "position: absolute; top: 7px; left: 5px; width: 6px; height: 6px; opacity: 1; transform: scale(1); transition: opacity 0s ease 0s, transform 0.2s ease 0s;", 4, "ngIf"], [1, "label-wrap"], ["data-radium", "true", 1, "windows-radio-style"], ["data-radium", "true", 2, "position", "absolute", "top", "7px", "left", "5px", "width", "6px", "height", "6px", "opacity", "1", "transform", "scale(1)", "transition", "opacity 0s ease 0s, transform 0.2s ease 0s"], ["viewBox", "0 0 285 285", "data-radium", "true", 2, "z-index", "2", "position", "absolute", "top", "0", "left", "1px", "height", "6px"], ["cx", "142.5", "cy", "142.5", "r", "142.5"], ["viewBox", "0 0 285 285", "data-radium", "true", 2, "z-index", "1", "position", "absolute", "top", "1.5px", "left", "1px", "opacity", "0.37", "height", "6px", "filter", "blur(0.5px)"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
            var _r97 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("ngxDesktopWindowBlur", function RadioComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
            ɵɵelementStart(1, "label", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵelementStart(3, "input", 3, 4);
            ɵɵlistener("change", function RadioComponent_Template_input_change_3_listener() { ɵɵrestoreView(_r97); var _r94 = ɵɵreference(4); _r94.checked = true; ctx.checked = true; return ctx.changeValue(ctx.value); });
            ɵɵelementEnd();
            ɵɵtemplate(5, RadioComponent_div_5_Template, 1, 0, "div", 5);
            ɵɵtemplate(6, RadioComponent_div_6_Template, 5, 2, "div", 6);
            ɵɵelementEnd();
            ɵɵelementStart(7, "span", 7);
            ɵɵtext(8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMap(ctx.os);
            ɵɵclassProp("blur", ctx.windowBlur)("checked", ctx.checked)("disabled", ctx.disabled);
            ɵɵadvance(3);
            ɵɵstyleProp("border-color", ctx.borderColor);
            ɵɵproperty("value", ctx.value)("disabled", ctx.disabled)("checked", ctx.checked);
            ɵɵattribute("name", ctx.name);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.os === "windows" && ctx.checked);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "mac");
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.label);
        } }, directives: [NgxDesktopWindowBlurDirective, NgIf], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}.radio-wrap[_ngcontent-%COMP%]{display:flex}.radio-input-wrap[_ngcontent-%COMP%]{position:relative;padding-top:2px}label[_ngcontent-%COMP%]{display:flex;position:relative}input[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;border-style:solid;border-radius:50%;margin:0;outline:0}.label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;color:#000}.windows-radio-style[_ngcontent-%COMP%]{position:absolute;top:7px;left:9px;width:10px;height:10px;border-radius:50%;background:#333}.windows.radio-wrap[_ngcontent-%COMP%]{margin-bottom:21px}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:2px;background-color:transparent;padding:8px;margin-left:4px;margin-right:9px}.windows[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;display:inline;margin-top:1px}.windows.disabled.checked[_ngcontent-%COMP%]   .windows-radio-style[_ngcontent-%COMP%]{background:#999}.windows.disabled[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{color:#bbb}.mac[_ngcontent-%COMP%]   .radio-input-wrap[_ngcontent-%COMP%]{margin-right:2px}.mac[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{height:20px;margin-right:1px}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:1px;background-color:#fff;padding:7px;box-shadow:rgba(224,224,224,.4) 0 1px 0 0 inset;transition:.4s;margin:0 1px}.mac.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#3b99fc;box-shadow:none;transition:none}.mac.mousedown.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#0080f6;box-shadow:rgba(19,68,119,.22) 0 0 0 1px inset;transition:.4s}.mac.blur.checked[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#fff;transition:none}.mac[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{display:inline;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px}.mac.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f1f1f1}.mac.disabled[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{color:#b8b8b8}.mac.blur.checked.disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f1f1f1}"] });
    return RadioComponent;
}(ControlValueAccessorAbstractComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(RadioComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-radio',
                templateUrl: './radio.component.html',
                styleUrls: ['./radio.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return RadioComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: NgxDesktopService }, { type: ChangeDetectorRef }]; }, { os: [{
            type: Input
        }], color: [{
            type: Input
        }], label: [{
            type: Input
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ["inputElement", { static: true }]
        }], checked: [{
            type: Input
        }] }); })();

function SearchFieldComponent_ng_container_13_ng_template_1_Template(rf, ctx) { }
function SearchFieldComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SearchFieldComponent_ng_container_13_ng_template_1_Template, 0, 0, "ng-template", 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r98 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r98.icon);
} }
function SearchFieldComponent__svg_svg_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 12);
    ɵɵelement(1, "path", 13);
    ɵɵelement(2, "line", 14);
    ɵɵelementEnd();
} }
var SearchFieldComponent = /** @class */ (function () {
    function SearchFieldComponent() {
        this.placeholder = 'Search';
        this.onCancel = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onKeydown = new EventEmitter();
        this.onEnter = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    SearchFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SearchFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SearchFieldComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    SearchFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SearchFieldComponent.prototype.ngOnInit = function () {
    };
    SearchFieldComponent.ɵfac = function SearchFieldComponent_Factory(t) { return new (t || SearchFieldComponent)(); };
    SearchFieldComponent.ɵcmp = ɵɵdefineComponent({ type: SearchFieldComponent, selectors: [["ngx-desktop-search-field"]], inputs: { label: "label", placeholder: "placeholder", icon: "icon", color: "color", width: "width", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", margin: "margin" }, outputs: { onCancel: "onCancel", onChange: "onChange", onKeydown: "onKeydown", onEnter: "onEnter" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return SearchFieldComponent; }),
                    multi: true
                }])], decls: 18, vars: 28, consts: [[2, "position", "relative"], ["data-radium", "true", 2, "position", "relative", "z-index", "2"], ["data-radium", "true", 2, "position", "relative"], ["data-radium", "true"], ["data-radium", "true", 1, "icon-wrap"], ["data-radium", "true", 2, "display", "flex", "align-items", "center", "padding-top", "2px"], ["data-radium", "true", 2, "margin-left", "6px", "margin-right", "6px", "padding-top", "2px"], [4, "ngIf"], ["x", "0px", "y", "0px", "width", "12px", "height", "12px", "viewBox", "0 0 12 12", "data-radium", "true", 4, "ngIf"], [1, "placeholder"], ["type", "text", "data-radium", "true", 3, "ngModel", "ngModelChange", "focus", "blur", "change", "keydown", "keydown.enter"], [3, "ngTemplateOutlet"], ["x", "0px", "y", "0px", "width", "12px", "height", "12px", "viewBox", "0 0 12 12", "data-radium", "true"], ["fill", "none", "stroke", "#686868", "stroke-width", "1.1", "stroke-miterlimit", "10", "d", "M4.5,0.5c2.3,0,3.9,1.1,4.3,4.1C8.5,7.4,7.6,8.3,4.5,8.7c-2.8-0.3-4-2-4-4.3C0.5,1.6,2.6,0.5,4.5,0.5z"], ["fill", "none", "stroke", "#686868", "stroke-width", "1.1", "stroke-miterlimit", "10", "x1", "7.9", "y1", "7.9", "x2", "11.1", "y2", "11.1"]], template: function SearchFieldComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵelementStart(7, "div", 1);
            ɵɵelementStart(8, "div", 2);
            ɵɵelement(9, "div", 3);
            ɵɵelementStart(10, "div", 4);
            ɵɵelementStart(11, "div", 5);
            ɵɵelementStart(12, "div", 6);
            ɵɵtemplate(13, SearchFieldComponent_ng_container_13_Template, 2, 1, "ng-container", 7);
            ɵɵtemplate(14, SearchFieldComponent__svg_svg_14_Template, 3, 0, "svg", 8);
            ɵɵelementEnd();
            ɵɵelementStart(15, "span", 9);
            ɵɵtext(16);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(17, "input", 10);
            ɵɵlistener("ngModelChange", function SearchFieldComponent_Template_input_ngModelChange_17_listener($event) { return ctx.value = $event; })("focus", function SearchFieldComponent_Template_input_focus_17_listener() { return ctx.focus = true; })("blur", function SearchFieldComponent_Template_input_blur_17_listener() { return ctx.focus = false; })("change", function SearchFieldComponent_Template_input_change_17_listener($event) { return ctx.onChange.emit($event); })("keydown", function SearchFieldComponent_Template_input_keydown_17_listener($event) { return ctx.onKeydown.emit($event); })("keydown.enter", function SearchFieldComponent_Template_input_keydown_enter_17_listener($event) { return ctx.onEnter.emit($event); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("margin", ɵɵpipeBind1(1, 16, ctx.margin))("margin-bottom", ɵɵpipeBind1(2, 18, ctx.marginBottom))("margin-left", ɵɵpipeBind1(3, 20, ctx.marginLeft))("margin-right", ɵɵpipeBind1(4, 22, ctx.marginRight))("margin-top", ɵɵpipeBind1(5, 24, ctx.marginTop))("width", ɵɵpipeBind1(6, 26, ctx.width));
            ɵɵadvance(13);
            ɵɵproperty("ngIf", ctx.icon);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.icon);
            ɵɵadvance(2);
            ɵɵtextInterpolate(ctx.placeholder);
            ɵɵadvance(1);
            ɵɵproperty("ngModel", ctx.value);
        } }, directives: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, NgTemplateOutlet], pipes: [StyleValuePipe], styles: ["input[_ngcontent-%COMP%]{position:relative;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-width:1px;border-style:solid;border-color:#d0d0d0 #cacaca #afafaf;box-shadow:none;padding:4px 19px 3px 24px;line-height:15px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;letter-spacing:.4px;width:100%;box-sizing:border-box;outline:0;border-radius:4px;background-image:-webkit-linear-gradient(top,#fff 0,#f1f1f1 100%)}.placeholder[_ngcontent-%COMP%]{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:12px;color:silver;line-height:14.4px}.icon-wrap[_ngcontent-%COMP%]{position:absolute;z-index:4;display:flex;justify-content:center;align-items:center;width:100%;height:100%;padding-right:18px;box-sizing:border-box;pointer-events:none}@-webkit-keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-2px;left:-2px;border-radius:6px;border-width:2px;box-shadow:0 0 1px 0 rgba(125,195,242,.7)}}@keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-2px;left:-2px;border-radius:6px;border-width:2px;box-shadow:0 0 1px 0 rgba(125,195,242,.7)}}"] });
    return SearchFieldComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SearchFieldComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-search-field',
                templateUrl: './search-field.component.html',
                styleUrls: ['./search-field.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SearchFieldComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], icon: [{
            type: Input
        }], color: [{
            type: Input
        }], onCancel: [{
            type: Output
        }], onChange: [{
            type: Output
        }], onKeydown: [{
            type: Output
        }], onEnter: [{
            type: Output
        }], width: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], margin: [{
            type: Input
        }] }); })();

var _c0$7 = ["*"];
var SegmentedControlItemComponent = /** @class */ (function () {
    function SegmentedControlItemComponent() {
    }
    SegmentedControlItemComponent.prototype.ngOnInit = function () {
    };
    SegmentedControlItemComponent.prototype.windowMouseupListener = function () {
        this.labelMousedown = false;
    };
    SegmentedControlItemComponent.ɵfac = function SegmentedControlItemComponent_Factory(t) { return new (t || SegmentedControlItemComponent)(); };
    SegmentedControlItemComponent.ɵcmp = ɵɵdefineComponent({ type: SegmentedControlItemComponent, selectors: [["ngx-desktop-segmented-control-item"]], hostBindings: function SegmentedControlItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("mouseup", function SegmentedControlItemComponent_mouseup_HostBindingHandler() { return ctx.windowMouseupListener(); }, false, ɵɵresolveWindow);
        } }, inputs: { label: "label", disabled: "disabled" }, ngContentSelectors: _c0$7, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function SegmentedControlItemComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("hidden", !ctx.show);
        } }, styles: [""] });
    return SegmentedControlItemComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SegmentedControlItemComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-segmented-control-item',
                templateUrl: './segmented-control-item.component.html',
                styleUrls: ['./segmented-control-item.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], windowMouseupListener: [{
            type: HostListener,
            args: ['window:mouseup']
        }] }); })();

function SegmentedControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r106 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("mousedown", function SegmentedControlComponent_div_8_Template_div_mousedown_0_listener() { var segmented_r102 = ctx.$implicit; return segmented_r102.labelMousedown = true; })("click", function SegmentedControlComponent_div_8_Template_div_click_0_listener() { ɵɵrestoreView(_r106); var i_r103 = ctx.index; var segmented_r102 = ctx.$implicit; var ctx_r105 = ɵɵnextContext(); return ctx_r105.selectTab(i_r103, segmented_r102); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var segmented_r102 = ctx.$implicit;
    var i_r103 = ctx.index;
    var ctx_r101 = ɵɵnextContext();
    ɵɵclassProp("disabled", segmented_r102.disabled)("selected", i_r103 === ctx_r101.model)("mousedown", segmented_r102.labelMousedown)("blur", ctx_r101.windowBlur);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", segmented_r102.label, " ");
} }
var _c0$8 = ["*"];
var SegmentedControlComponent = /** @class */ (function (_super) {
    __extends(SegmentedControlComponent, _super);
    function SegmentedControlComponent() {
        var _this = _super.call(this) || this;
        _this.height = '100%';
        _this.width = '100%';
        _this.backgroundColor = 'rgba(0, 0, 0, 0.04)';
        return _this;
    }
    SegmentedControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.model === undefined) {
            setTimeout(function () { return _this.selectTab(0); });
        }
    };
    SegmentedControlComponent.prototype.writeValue = function (obj) {
        this.model = obj;
        this.selectTab(this.model);
    };
    SegmentedControlComponent.prototype.selectTab = function (index, segmented) {
        if (!this.segmentedList) {
            return;
        }
        var lastTab = this.segmentedList.find(function (i) { return i.show; });
        if (lastTab) {
            lastTab.show = false;
        }
        if (!segmented) {
            segmented = this.segmentedList.find(function (s, i) { return i === index; });
        }
        if (segmented) {
            segmented.show = true;
            this.model = index;
            _super.prototype.changeValue.call(this, index);
        }
    };
    SegmentedControlComponent.ɵfac = function SegmentedControlComponent_Factory(t) { return new (t || SegmentedControlComponent)(); };
    SegmentedControlComponent.ɵcmp = ɵɵdefineComponent({ type: SegmentedControlComponent, selectors: [["ngx-desktop-segmented-control"]], contentQueries: function SegmentedControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, SegmentedControlItemComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.segmentedList = _t);
        } }, inputs: { height: "height", width: "width", backgroundColor: "backgroundColor", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop", padding: "padding", margin: "margin" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return SegmentedControlComponent; }),
                    multi: true
                }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$8, decls: 17, vars: 50, consts: [[2, "user-select", "none", "cursor", "default", "flex", "1 1 0", 3, "ngxDesktopWindowBlur"], [1, "tab-label-wrap"], ["data-radium", "true", 3, "disabled", "selected", "mousedown", "blur", "click", 4, "ngFor", "ngForOf"], [1, "content-wrap"], ["data-radium", "true", 3, "mousedown", "click"]], template: function SegmentedControlComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("ngxDesktopWindowBlur", function SegmentedControlComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵelementStart(7, "div", 1);
            ɵɵtemplate(8, SegmentedControlComponent_div_8_Template, 2, 9, "div", 2);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 3);
            ɵɵpipe(10, "styleValue");
            ɵɵpipe(11, "styleValue");
            ɵɵpipe(12, "styleValue");
            ɵɵpipe(13, "styleValue");
            ɵɵpipe(14, "styleValue");
            ɵɵpipe(15, "styleValue");
            ɵɵprojection(16);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("margin", ɵɵpipeBind1(1, 25, ctx.margin))("margin-bottom", ɵɵpipeBind1(2, 27, ctx.marginBottom))("margin-right", ɵɵpipeBind1(3, 29, ctx.marginRight))("margin-top", ɵɵpipeBind1(4, 31, ctx.marginTop))("margin-left", ɵɵpipeBind1(5, 33, ctx.marginLeft))("width", ɵɵpipeBind1(6, 35, ctx.width));
            ɵɵadvance(8);
            ɵɵproperty("ngForOf", ctx.segmentedList);
            ɵɵadvance(1);
            ɵɵstyleProp("height", ɵɵpipeBind1(10, 37, ctx.height))("padding", ɵɵpipeBind2(11, 39, ctx.padding, "23px 18px 22px 18px"))("padding-top", ɵɵpipeBind1(12, 42, ctx.paddingTop))("padding-bottom", ɵɵpipeBind1(13, 44, ctx.paddingBottom))("padding-left", ɵɵpipeBind1(14, 46, ctx.paddingLeft))("padding-right", ɵɵpipeBind1(15, 48, ctx.paddingRight));
        } }, directives: [NgxDesktopWindowBlurDirective, NgForOf], pipes: [StyleValuePipe], styles: ["[_nghost-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;width:100%}.tab-label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;width:100%;display:flex;justify-content:center;position:relative;z-index:1}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;background:#fff;border-top:1px solid #c7c7c7;border-bottom:1px solid #a6a6a6;border-right:1px solid #d8d8d8;padding:1px 12px 2px;line-height:16px;font-size:13px;box-shadow:rgba(0,0,0,.04) 0 1px,rgba(0,0,0,.1) 0 0 .5px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif}.tab-label-wrap[_ngcontent-%COMP%]   div.selected[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#5ab2f6 0,#0082fa 100%);border-width:1px 0 1px 1px;border-style:solid;border-color:#30a0f5 #0080f7 #0060fa;color:#fff}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{border-width:1px;border-style:solid;border-top-left-radius:4px;border-bottom-left-radius:4px;border-color:#c7c7c7 #d8d8d8 #a6a6a6 #b8b8b8}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;border-right:1px solid #b8b8b8}.tab-label-wrap[_ngcontent-%COMP%]   div.selected.mousedown[_ngcontent-%COMP%]{background:-webkit-linear-gradient(top,#3397f9 0,#0068df 100%);border-color:#0093f9 #0061e9 #0040d8}.tab-label-wrap[_ngcontent-%COMP%]   div.selected.blur[_ngcontent-%COMP%]{background:#e5e5e5;border-color:#c7c7c7 #b7b7b7 #a6a6a6;color:#000;border-left:none}.tab-label-wrap[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child.selected.blur{border-color:#c7c7c7 #b7b7b7 #b7b7b7 #a6a6a6;border-left:1px solid #b7b7b7}.tab-label-wrap[_ngcontent-%COMP%]   div.mousedown[_ngcontent-%COMP%]{background:#f0f0f0}.content-wrap[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;flex:1 1 0;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.07) rgba(0,0,0,.035) rgba(0,0,0,.027);border-radius:4px;position:relative;margin-top:-11px;z-index:0}"] });
    return SegmentedControlComponent;
}(ControlValueAccessorAbstractComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SegmentedControlComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-segmented-control',
                templateUrl: './segmented-control.component.html',
                styleUrls: ['./segmented-control.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SegmentedControlComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return []; }, { segmentedList: [{
            type: ContentChildren,
            args: [SegmentedControlItemComponent]
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], padding: [{
            type: Input
        }], margin: [{
            type: Input
        }] }); })();

var NgxDesktopBoldDirective = /** @class */ (function () {
    function NgxDesktopBoldDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopBoldDirective.prototype, "ngxDesktopBold", {
        set: function (bold) {
            if (typeof bold === 'boolean') {
                this.value = bold ? 'bold' : 'normal';
            }
            else if (typeof bold === 'number') {
                this.value = "" + bold;
            }
            else {
                this.value = bold;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopBoldDirective.prototype, "style", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopBoldDirective.ɵfac = function NgxDesktopBoldDirective_Factory(t) { return new (t || NgxDesktopBoldDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopBoldDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopBoldDirective, selectors: [["", "ngxDesktopBold", ""]], hostVars: 2, hostBindings: function NgxDesktopBoldDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("font-weight", ctx.style);
        } }, inputs: { ngxDesktopBold: "ngxDesktopBold" } });
    return NgxDesktopBoldDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopBoldDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopBold]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopBold: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.font-weight']
        }] }); })();

var _c0$9 = ["*"];
var TextComponent = /** @class */ (function () {
    function TextComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.size = 13;
        this.color = '#000000';
    }
    Object.defineProperty(TextComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent.ɵfac = function TextComponent_Factory(t) { return new (t || TextComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    TextComponent.ɵcmp = ɵɵdefineComponent({ type: TextComponent, selectors: [["ngx-desktop-text"]], inputs: { os: "os", size: "size", color: "color", background: "background", textAlign: "textAlign", height: "height", width: "width", bold: "bold", margin: "margin", marginTop: "marginTop", marginLeft: "marginLeft", marginRight: "marginRight", marginBottom: "marginBottom", padding: "padding", paddingTop: "paddingTop", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingBottom: "paddingBottom" }, ngContentSelectors: _c0$9, decls: 15, vars: 60, consts: [[1, "text-wrap", 3, "ngxDesktopBold"]], template: function TextComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "span", 0);
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵpipe(7, "styleValue");
            ɵɵpipe(8, "styleValue");
            ɵɵpipe(9, "styleValue");
            ɵɵpipe(10, "styleValue");
            ɵɵpipe(11, "styleValue");
            ɵɵpipe(12, "styleValue");
            ɵɵpipe(13, "styleValue");
            ɵɵprojection(14);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMap(ctx.os);
            ɵɵstyleProp("margin", ɵɵpipeBind1(1, 33, ctx.margin))("margin-bottom", ɵɵpipeBind1(2, 35, ctx.marginBottom))("margin-right", ɵɵpipeBind1(3, 37, ctx.marginRight))("margin-top", ɵɵpipeBind1(4, 39, ctx.marginTop))("margin-left", ɵɵpipeBind1(5, 41, ctx.marginLeft))("padding", ɵɵpipeBind1(6, 43, ctx.padding))("padding-top", ɵɵpipeBind1(7, 45, ctx.paddingTop))("padding-bottom", ɵɵpipeBind1(8, 47, ctx.paddingBottom))("padding-left", ɵɵpipeBind1(9, 49, ctx.paddingLeft))("padding-right", ɵɵpipeBind1(10, 51, ctx.paddingRight))("font-size", ɵɵpipeBind2(11, 53, ctx.size, "13px"))("height", ɵɵpipeBind1(12, 56, ctx.height))("width", ɵɵpipeBind1(13, 58, ctx.width))("color", ctx.color)("text-align", ctx.textAlign);
            ɵɵproperty("ngxDesktopBold", ctx.bold);
        } }, directives: [NgxDesktopBoldDirective], pipes: [StyleValuePipe], styles: [".text-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.windows.text-wrap[_ngcontent-%COMP%]{line-height:25.96px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:14px;display:flex}.mac.text-wrap[_ngcontent-%COMP%]{display:block;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;color:#fff}"] });
    return TextComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-text',
                templateUrl: './text.component.html',
                styleUrls: ['./text.component.css']
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { os: [{
            type: Input
        }], size: [{
            type: Input
        }], color: [{
            type: Input
        }], background: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], bold: [{
            type: Input
        }], margin: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], padding: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }] }); })();

var TextInputComponent = /** @class */ (function () {
    function TextInputComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.placeholder = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(TextInputComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputComponent.prototype, "style", {
        get: function () {
            if (this.os === 'windows') {
                return __assign(__assign({}, this.mouseover ? {
                    'border-color': '#646464',
                    background: 'rgba(255, 255, 255, 0.5)'
                } : {}), this.focus ? {
                    'border-color': this.color,
                    background: '#FFFFFF'
                } : {});
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    TextInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TextInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TextInputComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    TextInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    TextInputComponent.prototype.ngOnInit = function () {
    };
    TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    TextInputComponent.ɵcmp = ɵɵdefineComponent({ type: TextInputComponent, selectors: [["ngx-desktop-text-input"]], inputs: { os: "os", label: "label", placeholder: "placeholder", color: "color", width: "width", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", margin: "margin", disabled: "disabled" }, features: [ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return TextInputComponent; }),
                    multi: true
                }])], decls: 14, vars: 34, consts: [["data-radium", "true", 1, "text-input-wrap"], [1, "label-wrap"], ["data-radium", "true", 2, "position", "relative"], ["data-radium", "true"], ["type", "text", "data-radium", "true", 3, "ngStyle", "placeholder", "ngModel", "focus", "blur", "mouseover", "mouseleave", "ngModelChange"]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵelementStart(7, "span", 1);
            ɵɵtext(8);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 2);
            ɵɵelementStart(10, "div", 3);
            ɵɵelement(11, "div", 3);
            ɵɵelementEnd();
            ɵɵelementStart(12, "div");
            ɵɵelementStart(13, "input", 4);
            ɵɵlistener("focus", function TextInputComponent_Template_input_focus_13_listener() { return ctx.focus = true; })("blur", function TextInputComponent_Template_input_blur_13_listener() { return ctx.focus = false; })("mouseover", function TextInputComponent_Template_input_mouseover_13_listener() { return ctx.mouseover = true; })("mouseleave", function TextInputComponent_Template_input_mouseleave_13_listener() { return ctx.mouseover = false; })("ngModelChange", function TextInputComponent_Template_input_ngModelChange_13_listener($event) { return ctx.value = $event; })("ngModelChange", function TextInputComponent_Template_input_ngModelChange_13_listener($event) { return ctx.onChangeCallback($event); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMap(ctx.os);
            ɵɵstyleProp("z-index", ctx.focus ? 3 : 2)("margin", ɵɵpipeBind1(1, 22, ctx.margin))("margin-top", ɵɵpipeBind1(2, 24, ctx.marginTop))("margin-right", ɵɵpipeBind1(3, 26, ctx.marginRight))("margin-left", ɵɵpipeBind1(4, 28, ctx.marginLeft))("margin-bottom", ɵɵpipeBind1(5, 30, ctx.marginBottom))("width", ɵɵpipeBind1(6, 32, ctx.width));
            ɵɵadvance(8);
            ɵɵtextInterpolate(ctx.label);
            ɵɵadvance(3);
            ɵɵclassProp("border-div", ctx.focus);
            ɵɵadvance(2);
            ɵɵproperty("ngStyle", ctx.style)("placeholder", ctx.placeholder)("ngModel", ctx.value);
        } }, directives: [DefaultValueAccessor, NgStyle, NgControlStatus, NgModel], pipes: [StyleValuePipe], styles: [".label-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;color:#000}input[_ngcontent-%COMP%]{outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.text-input-wrap[_ngcontent-%COMP%]{position:relative}.windows[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{line-height:25.96px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:14px;display:flex}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:2px 10px 3px;line-height:23px;font-family:\"Segoe UI\",Frutiger,\"Frutiger Linotype\",\"Dejavu Sans\",\"Helvetica Neue\",Arial,sans-serif;font-size:15px;font-weight:100;color:#000;margin-bottom:18px;background:rgba(255,255,255,.35);border:2px solid #949494}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{border-color:#646464;background:rgba(255,255,255,.5)}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#636363}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#636363}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#636363}.windows[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#636363}.windows.text-input-wrap[_ngcontent-%COMP%]{font:13px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:#f0f0f0 0 0 0 1px inset;padding:4px 3.5px 3px;line-height:15px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;letter-spacing:.4px;width:100%;box-sizing:border-box;border:1px solid #bebfbf}.mac[_ngcontent-%COMP%]   .label-wrap[_ngcontent-%COMP%]{display:block;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px}.mac[_ngcontent-%COMP%]   .border-div[_ngcontent-%COMP%]{position:absolute;z-index:1;width:100%;height:100%;top:-3px;left:-3px;background:#7dc3f2;border:3px solid #7dc3f2;opacity:0;border-radius:4px;-webkit-animation:.25s linear forwards text-input-focus-radium-animation;animation:.25s linear forwards text-input-focus-radium-animation}@-webkit-keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-3px;left:-3px;border-radius:4px;border-width:3px}}@keyframes text-input-focus-radium-animation{0%{opacity:0;border-width:34px;top:-34px;left:-34px}32%{opacity:0;border-radius:10px;border-width:30px;top:-30px;left:-30px}50%{opacity:.2;border-width:15px;top:-15px;left:-15px}80%{opacity:.4;border-width:9px;top:-9px;left:-9px}90%{opacity:.9;border-width:6px;top:-6px;left:-6px}100%{opacity:1;top:-3px;left:-3px;border-radius:4px;border-width:3px}}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:silver}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:silver}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:silver}.mac[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:silver}"] });
    return TextInputComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextInputComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-text-input',
                templateUrl: './text-input.component.html',
                styleUrls: ['./text-input.component.css'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TextInputComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { os: [{
            type: Input
        }], label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], color: [{
            type: Input
        }], width: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], margin: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

var _c0$a = ["*"];
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.verticalAlignment = 'center';
        this.horizontalAlignment = 'center';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
    ToolbarComponent.ɵcmp = ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["ngx-desktop-toolbar"]], inputs: { height: "height", width: "width", verticalAlignment: "verticalAlignment", horizontalAlignment: "horizontalAlignment" }, ngContentSelectors: _c0$a, decls: 4, vars: 12, consts: [[2, "user-select", "none", "cursor", "default", "display", "flex", 3, "ngxDesktopVerticalAlignment", "ngxDesktopHorizontalAlignment"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵprojection(3);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("height", ɵɵpipeBind2(1, 6, ctx.height, "43px"))("width", ɵɵpipeBind2(2, 9, ctx.width, "100%"));
            ɵɵproperty("ngxDesktopVerticalAlignment", ctx.verticalAlignment)("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment);
        } }, directives: [NgxDesktopVerticalAlignmentDirective, NgxDesktopHorizontalAlignmentDirective], pipes: [StyleValuePipe], styles: ["[_nghost-%COMP%]{display:contents}"] });
    return ToolbarComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css']
            }]
    }], function () { return []; }, { height: [{
            type: Input
        }], width: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }] }); })();

function TitleBarComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function TitleBarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TitleBarComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r112 = ɵɵreference(8);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r112);
} }
function TitleBarComponent_ng_container_3__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 9);
    ɵɵelement(1, "path", 13);
    ɵɵelement(2, "path", 14);
    ɵɵelementEnd();
} }
function TitleBarComponent_ng_container_3__svg_svg_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 9);
    ɵɵelement(1, "path", 15);
    ɵɵelement(2, "path", 16);
    ɵɵelementEnd();
} }
function TitleBarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r118 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 5);
    ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_3_Template_a_ngxDesktopMousedown_1_listener($event) { ɵɵrestoreView(_r118); var ctx_r117 = ɵɵnextContext(); return ctx_r117.closeMousedown = $event; })("click", function TitleBarComponent_ng_container_3_Template_a_click_1_listener() { ɵɵrestoreView(_r118); var ctx_r119 = ɵɵnextContext(); return ctx_r119.onCloseClick.emit(); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 6);
    ɵɵelement(3, "path", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(4, "a", 8);
    ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_3_Template_a_ngxDesktopMousedown_4_listener($event) { ɵɵrestoreView(_r118); var ctx_r120 = ɵɵnextContext(); return ctx_r120.minimizeMousedown = $event; })("click", function TitleBarComponent_ng_container_3_Template_a_click_4_listener() { ɵɵrestoreView(_r118); var ctx_r121 = ɵɵnextContext(); return ctx_r121.onMinimizeClick.emit(); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(5, "svg", 9);
    ɵɵelement(6, "path", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(7, "a", 11);
    ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_3_Template_a_ngxDesktopMousedown_7_listener($event) { ɵɵrestoreView(_r118); var ctx_r122 = ɵɵnextContext(); return ctx_r122.maximizeMousedown = $event; })("click", function TitleBarComponent_ng_container_3_Template_a_click_7_listener() { ɵɵrestoreView(_r118); var ctx_r123 = ɵɵnextContext(); return ctx_r123.triggerMaximize(); });
    ɵɵtemplate(8, TitleBarComponent_ng_container_3__svg_svg_8_Template, 3, 0, "svg", 12);
    ɵɵtemplate(9, TitleBarComponent_ng_container_3__svg_svg_9_Template, 3, 0, "svg", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r108 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("closeMousedown", ctx_r108.closeMousedown);
    ɵɵadvance(3);
    ɵɵclassProp("minimizeMousedown", ctx_r108.minimizeMousedown);
    ɵɵadvance(3);
    ɵɵclassProp("maximizeMousedown", ctx_r108.maximizeMousedown);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r108.maximized);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r108.maximized);
} }
function TitleBarComponent_ng_container_4__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 26);
    ɵɵelement(1, "path", 27);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r124 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵattribute("fill", ctx_r124.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
} }
function TitleBarComponent_ng_container_4__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 24);
    ɵɵelement(1, "path", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r125 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵattribute("fill", ctx_r125.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
} }
function TitleBarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    var _r127 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 17);
    ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMousedown_1_listener($event) { ɵɵrestoreView(_r127); var ctx_r126 = ɵɵnextContext(); return ctx_r126.minimizeMousedown = $event; })("ngxDesktopMouseover", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMouseover_1_listener($event) { ɵɵrestoreView(_r127); var ctx_r128 = ɵɵnextContext(); return ctx_r128.minimizeMouseover = $event; })("click", function TitleBarComponent_ng_container_4_Template_a_click_1_listener() { ɵɵrestoreView(_r127); var ctx_r129 = ɵɵnextContext(); return ctx_r129.onMinimizeClick.emit(); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 18);
    ɵɵelement(3, "rect", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(4, "a", 20);
    ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMousedown_4_listener($event) { ɵɵrestoreView(_r127); var ctx_r130 = ɵɵnextContext(); return ctx_r130.maximizeMousedown = $event; })("ngxDesktopMouseover", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMouseover_4_listener($event) { ɵɵrestoreView(_r127); var ctx_r131 = ɵɵnextContext(); return ctx_r131.maximizeMouseover = $event; })("click", function TitleBarComponent_ng_container_4_Template_a_click_4_listener() { ɵɵrestoreView(_r127); var ctx_r132 = ɵɵnextContext(); return ctx_r132.triggerMaximize(); });
    ɵɵtemplate(5, TitleBarComponent_ng_container_4__svg_svg_5_Template, 2, 1, "svg", 21);
    ɵɵtemplate(6, TitleBarComponent_ng_container_4__svg_svg_6_Template, 2, 1, "svg", 22);
    ɵɵelementEnd();
    ɵɵelementStart(7, "a", 23);
    ɵɵlistener("ngxDesktopMousedown", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMousedown_7_listener($event) { ɵɵrestoreView(_r127); var ctx_r133 = ɵɵnextContext(); return ctx_r133.closeMousedown = $event; })("ngxDesktopMouseover", function TitleBarComponent_ng_container_4_Template_a_ngxDesktopMouseover_7_listener($event) { ɵɵrestoreView(_r127); var ctx_r134 = ɵɵnextContext(); return ctx_r134.closeMouseover = $event; })("click", function TitleBarComponent_ng_container_4_Template_a_click_7_listener() { ɵɵrestoreView(_r127); var ctx_r135 = ɵɵnextContext(); return ctx_r135.onCloseClick.emit(); });
    ɵɵnamespaceSVG();
    ɵɵelementStart(8, "svg", 24);
    ɵɵelement(9, "polygon", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r109 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("minimizeMousedown", ctx_r109.minimizeMousedown)("minimizeMouseover", ctx_r109.minimizeMouseover);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r109.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
    ɵɵadvance(1);
    ɵɵclassProp("maximizeMousedown", ctx_r109.maximizeMousedown)("maximizeMouseover", ctx_r109.maximizeMouseover);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r109.maximized);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r109.maximized);
    ɵɵadvance(1);
    ɵɵclassProp("closeMousedown", ctx_r109.closeMousedown)("closeMouseover", ctx_r109.closeMouseover);
    ɵɵadvance(2);
    ɵɵattribute("fill", ctx_r109.windowBlur ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0)");
} }
function TitleBarComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
function TitleBarComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TitleBarComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    var _r112 = ɵɵreference(8);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r112);
} }
function TitleBarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
} }
function TitleBarComponent_ng_template_7_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r137 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r137.title, " ");
} }
function TitleBarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, TitleBarComponent_ng_template_7_div_0_Template, 2, 1, "div", 29);
} if (rf & 2) {
    var ctx_r113 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r113.title || ctx_r113.os === "windows");
} }
var _c0$b = [[["ngx-desktop-toolbar"]]];
var _c1$2 = ["ngx-desktop-toolbar"];
var TitleBarComponent = /** @class */ (function () {
    function TitleBarComponent(ngxDesktopService) {
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
    Object.defineProperty(TitleBarComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    TitleBarComponent.prototype.ngOnInit = function () {
    };
    TitleBarComponent.prototype.triggerMaximize = function () {
        this.maximized = !this.maximized;
        this.maximizedChange.emit(this.maximized);
        if (this.maximized) {
            this.onMaximizeClick.emit();
        }
        else {
            this.onResizeClick.emit();
        }
    };
    TitleBarComponent.ɵfac = function TitleBarComponent_Factory(t) { return new (t || TitleBarComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    TitleBarComponent.ɵcmp = ɵɵdefineComponent({ type: TitleBarComponent, selectors: [["ngx-desktop-title-bar"]], contentQueries: function TitleBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, ToolbarComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarComponent = _t.first);
        } }, inputs: { os: "os", title: "title", controls: "controls", isFullscreen: "isFullscreen", transparent: "transparent", maximized: "maximized" }, outputs: { onCloseClick: "onCloseClick", onMaximizeClick: "onMaximizeClick", onMinimizeClick: "onMinimizeClick", onResizeClick: "onResizeClick", maximizedChange: "maximizedChange" }, ngContentSelectors: _c1$2, decls: 9, vars: 13, consts: [[1, "title-bar-container", 3, "ngxDesktopWindowBlur"], [4, "ngIf"], [1, "controls-container", 3, "ngxDesktopMouseover"], ["titleTemp", ""], [3, "ngTemplateOutlet"], ["data-radium", "true", 1, "close-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "click"], ["x", "0px", "y", "0px", "width", "10px", "height", "10px", "viewBox", "0 0 10 10", "data-radium", "true", 1, "close-svg"], ["fill", "#4d0000", "d", "M5,3.552c0.438,-0.432 0.878,-0.861 1.322,-1.287c0.049,-0.044 0.101,-0.085 0.158,-0.119c0.149,-0.091 0.316,-0.137 0.49,-0.146c0.04,0 0.04,0 0.08,0.001c0.16,0.011 0.314,0.054 0.453,0.135c0.08,0.046 0.154,0.104 0.218,0.171c0.252,0.262 0.342,0.65 0.232,0.996c-0.045,0.141 -0.121,0.265 -0.218,0.375c-0.426,0.444 -0.855,0.884 -1.287,1.322c0.432,0.438 0.861,0.878 1.287,1.322c0.097,0.11 0.173,0.234 0.218,0.375c0.04,0.126 0.055,0.26 0.043,0.392c-0.011,0.119 -0.043,0.236 -0.094,0.344c-0.158,0.327 -0.49,0.548 -0.852,0.566c-0.106,0.005 -0.213,-0.007 -0.315,-0.035c-0.156,-0.043 -0.293,-0.123 -0.413,-0.229c-0.444,-0.426 -0.884,-0.855 -1.322,-1.287c-0.438,0.432 -0.878,0.861 -1.322,1.287c-0.11,0.097 -0.234,0.173 -0.375,0.218c-0.126,0.04 -0.26,0.055 -0.392,0.043c-0.119,-0.011 -0.236,-0.043 -0.344,-0.094c-0.327,-0.158 -0.548,-0.49 -0.566,-0.852c-0.005,-0.106 0.007,-0.213 0.035,-0.315c0.043,-0.156 0.123,-0.293 0.229,-0.413c0.426,-0.444 0.855,-0.884 1.287,-1.322c-0.432,-0.438 -0.861,-0.878 -1.287,-1.322c-0.106,-0.12 -0.186,-0.257 -0.229,-0.413c-0.025,-0.089 -0.037,-0.182 -0.036,-0.275c0.004,-0.363 0.211,-0.704 0.532,-0.874c0.13,-0.069 0.272,-0.105 0.418,-0.115c0.04,-0.001 0.04,-0.001 0.08,-0.001c0.174,0.009 0.341,0.055 0.49,0.146c0.057,0.034 0.109,0.075 0.158,0.119c0.444,0.426 0.884,0.855 1.322,1.287Z"], ["data-radium", "true", 1, "minimize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "click"], ["x", "0px", "y", "0px", "width", "10px", "height", "10px", "viewBox", "0 0 10 10", "data-radium", "true"], ["fill", "#995700", "d", "M8.048,4.001c0.163,0.012 0.318,0.054 0.459,0.137c0.325,0.191 0.518,0.559 0.49,0.934c-0.007,0.097 -0.028,0.192 -0.062,0.283c-0.04,0.105 -0.098,0.204 -0.171,0.29c-0.083,0.098 -0.185,0.181 -0.299,0.24c-0.131,0.069 -0.271,0.103 -0.417,0.114c-2.031,0.049 -4.065,0.049 -6.096,0c-0.163,-0.012 -0.318,-0.054 -0.459,-0.137c-0.325,-0.191 -0.518,-0.559 -0.49,-0.934c0.007,-0.097 0.028,-0.192 0.062,-0.283c0.04,-0.105 0.098,-0.204 0.171,-0.29c0.083,-0.098 0.185,-0.181 0.299,-0.24c0.131,-0.069 0.271,-0.103 0.417,-0.114c2.031,-0.049 4.065,-0.049 6.096,0Z"], ["data-radium", "true", 1, "maximize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "click"], ["x", "0px", "y", "0px", "width", "10px", "height", "10px", "viewBox", "0 0 10 10", "data-radium", "true", 4, "ngIf"], ["fill", "#006400", "d", "M5,10c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z"], ["fill", "#006400", "d", "M5,0c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z"], ["fill", "#006400", "d", "M2,3c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z"], ["fill", "#006400", "d", "M8,7c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z"], ["data-radium", "true", 1, "minimize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "ngxDesktopMouseover", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 1", "data-radium", "true", 2, "width", "10px", "height", "1px"], ["width", "10.2", "height", "1"], ["data-radium", "true", 1, "maximize-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "ngxDesktopMouseover", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.1", "data-radium", "true", "style", "width: 10px; height: 10px;", 4, "ngIf"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.2", "data-radium", "true", "style", "width: 10px; height: 10px;", 4, "ngIf"], ["data-radium", "true", 1, "close-btn-wrap", "controls-btn-wrap", 3, "ngxDesktopMousedown", "ngxDesktopMouseover", "click"], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.2", "data-radium", "true", 2, "width", "10px", "height", "10px"], ["points", "10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "], ["x", "0px", "y", "0px", "viewBox", "0 0 10.2 10.1", "data-radium", "true", 2, "width", "10px", "height", "10px"], ["d", "M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"], ["d", "M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"], ["class", "title-container", 4, "ngIf"], [1, "title-container"]], template: function TitleBarComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$b);
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("ngxDesktopWindowBlur", function TitleBarComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
            ɵɵtemplate(1, TitleBarComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵlistener("ngxDesktopMouseover", function TitleBarComponent_Template_div_ngxDesktopMouseover_2_listener($event) { return ctx.mouseover = $event; });
            ɵɵtemplate(3, TitleBarComponent_ng_container_3_Template, 10, 8, "ng-container", 1);
            ɵɵtemplate(4, TitleBarComponent_ng_container_4_Template, 10, 16, "ng-container", 1);
            ɵɵelementEnd();
            ɵɵtemplate(5, TitleBarComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
            ɵɵtemplate(6, TitleBarComponent_ng_container_6_Template, 2, 0, "ng-container", 1);
            ɵɵelementEnd();
            ɵɵtemplate(7, TitleBarComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            ɵɵclassMap(ctx.os);
            ɵɵstyleProp("padding", ctx.os === "mac" ? ctx.toolbarComponent ? "11px 8px" : "0 3px" : "0");
            ɵɵclassProp("mouseover", ctx.mouseover)("windowBlur", ctx.windowBlur);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "windows");
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.os === "mac" && ctx.controls);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "windows" && ctx.controls);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "mac");
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.os === "mac");
        } }, directives: [NgxDesktopWindowBlurDirective, NgIf, NgxDesktopMouseoverDirective, NgTemplateOutlet, NgxDesktopMousedownDirective], styles: [".title-bar-container[_ngcontent-%COMP%]{-webkit-app-region:drag;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;width:100%;display:flex;align-items:center}.title-container[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.controls-container[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;display:flex}.controls-btn-wrap[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-app-region:no-drag;cursor:default;line-height:0}.windows.title-bar-container[_ngcontent-%COMP%]{height:31px;border-color:#fff}.windows[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{padding-left:12px;font-family:\"Segoe UI\",Arial,serif;font-size:12px;flex:1 1 0;color:#000}.windows.windowBlur[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{color:#a9a9a9}.windows[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]{height:32px}.windows[_ngcontent-%COMP%]   .controls-btn-wrap[_ngcontent-%COMP%]{width:46px;height:100%;display:flex;justify-content:center;align-items:center}.windows[_ngcontent-%COMP%]   .maximizeMouseover.maximize-btn-wrap[_ngcontent-%COMP%], .windows[_ngcontent-%COMP%]   .minimizeMouseover.minimize-btn-wrap[_ngcontent-%COMP%]{transition:background-color .1s;background-color:#e5e5e5}.windows[_ngcontent-%COMP%]   .closeMouseover.close-btn-wrap[_ngcontent-%COMP%]{transition:background-color .1s;background-color:#e81123}.windows[_ngcontent-%COMP%]   .maximize-btn-wrap.maximizeMousedown[_ngcontent-%COMP%], .windows[_ngcontent-%COMP%]   .minimize-btn-wrap.minimizeMousedown[_ngcontent-%COMP%]{background-color:#ccc}.windows[_ngcontent-%COMP%]   .close-btn-wrap.closeMousedown[_ngcontent-%COMP%]{background-color:#f1707a}.mac.title-bar-container[_ngcontent-%COMP%]{box-sizing:border-box;min-height:22px;background-image:-webkit-linear-gradient(top,#ededed 0,#ededed 1px,#e7e7e7 2px,#d1d1d1 100%);border-bottom:1px solid #afafaf;border-top:1px solid #f6f6f6;border-top-left-radius:5px;border-top-right-radius:5px}.mac[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;letter-spacing:0;color:#4d4d4d;flex-grow:1;flex-shrink:1;text-align:center;white-space:nowrap;overflow:hidden;padding-right:40px;padding-left:15px}.mac[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]{width:61px}.mac[_ngcontent-%COMP%]   .controls-btn-wrap[_ngcontent-%COMP%]{box-sizing:border-box;width:12px;height:12px;border-width:1px;border-style:solid;border-radius:50%;margin-top:1px;margin-left:4px;margin-right:4px}.mac[_ngcontent-%COMP%]   .close-btn-wrap[_ngcontent-%COMP%], .mac.mouseover[_ngcontent-%COMP%]   .close-btn-wrap[_ngcontent-%COMP%]{background-color:#ff5f57;border-color:#e2463f}.mac[_ngcontent-%COMP%]   .minimize-btn-wrap[_ngcontent-%COMP%], .mac.mouseover[_ngcontent-%COMP%]   .minimize-btn-wrap[_ngcontent-%COMP%]{background-color:#ffbd2e;border-color:#e1a116}.mac[_ngcontent-%COMP%]   .maximize-btn-wrap[_ngcontent-%COMP%], .mac.mouseover[_ngcontent-%COMP%]   .maximize-btn-wrap[_ngcontent-%COMP%]{background-color:#28c940;border-color:#12ac28}.mac[_ngcontent-%COMP%]   .closeMousedown.close-btn-wrap[_ngcontent-%COMP%]{background-color:#bf4943!important;border-color:#ad3934!important}.mac[_ngcontent-%COMP%]   .minimizeMousedown.minimize-btn-wrap[_ngcontent-%COMP%]{background-color:#bf9123!important;border-color:#ad7d15!important}.mac[_ngcontent-%COMP%]   .maximizeMousedown.maximize-btn-wrap[_ngcontent-%COMP%]{background-color:#1f9a31!important;border-color:#128622!important}.mac.windowBlur[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#ddd;border-color:#d0d0d0}.mac.windowBlur[_ngcontent-%COMP%]   .title-bar-container[_ngcontent-%COMP%]{color:#d3d3d3}.mac.windowBlur.title-bar-container[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#fafafa 0,#f6f6f6 2px,#f6f6f6 100%);border-bottom:1px solid #d1d1d1}.mac[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:10px;height:10px;opacity:0}.mac.mouseover[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{opacity:1!important}"] });
    return TitleBarComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TitleBarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-title-bar',
                templateUrl: './title-bar.component.html',
                styleUrls: ['./title-bar.component.css']
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { toolbarComponent: [{
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

var ToolbarNavItemComponent = /** @class */ (function () {
    function ToolbarNavItemComponent() {
    }
    ToolbarNavItemComponent.prototype.ngOnInit = function () {
    };
    ToolbarNavItemComponent.ɵfac = function ToolbarNavItemComponent_Factory(t) { return new (t || ToolbarNavItemComponent)(); };
    ToolbarNavItemComponent.ɵcmp = ɵɵdefineComponent({ type: ToolbarNavItemComponent, selectors: [["ngx-desktop-toolbar-nav-item"]], inputs: { title: "title", icon: "icon" }, decls: 0, vars: 0, template: function ToolbarNavItemComponent_Template(rf, ctx) { }, styles: [""] });
    return ToolbarNavItemComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarNavItemComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-toolbar-nav-item',
                templateUrl: './toolbar-nav-item.component.html',
                styleUrls: ['./toolbar-nav-item.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();

function ToolbarNavComponent_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ToolbarNavComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r143 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "a", 3);
    ɵɵlistener("click", function ToolbarNavComponent_div_3_Template_a_click_1_listener() { ɵɵrestoreView(_r143); var i_r140 = ctx.index; var ctx_r142 = ɵɵnextContext(); ctx_r142.selectedIndex = i_r140; return ctx_r142.selectedIndexChange.emit(i_r140); });
    ɵɵelementStart(2, "div", 4);
    ɵɵtemplate(3, ToolbarNavComponent_div_3_ng_container_3_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 6);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var toolbarNavItemComponent_r139 = ctx.$implicit;
    var i_r140 = ctx.index;
    var ctx_r138 = ɵɵnextContext();
    ɵɵclassProp("selected", i_r140 === ctx_r138.selectedIndex);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", toolbarNavItemComponent_r139.icon);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", toolbarNavItemComponent_r139.title, " ");
} }
var ToolbarNavComponent = /** @class */ (function () {
    function ToolbarNavComponent() {
        this.selectedIndex = 0;
        this.selectedIndexChange = new EventEmitter();
        this.verticalAlignment = 'center';
        this.horizontalAlignment = 'center';
    }
    ToolbarNavComponent.prototype.ngOnInit = function () {
    };
    ToolbarNavComponent.ɵfac = function ToolbarNavComponent_Factory(t) { return new (t || ToolbarNavComponent)(); };
    ToolbarNavComponent.ɵcmp = ɵɵdefineComponent({ type: ToolbarNavComponent, selectors: [["ngx-desktop-toolbar-nav"]], contentQueries: function ToolbarNavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, ToolbarNavItemComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarNavItemComponents = _t);
        } }, inputs: { selectedIndex: "selectedIndex", height: "height", width: "width", verticalAlignment: "verticalAlignment", horizontalAlignment: "horizontalAlignment" }, outputs: { selectedIndexChange: "selectedIndexChange" }, decls: 4, vars: 12, consts: [[2, "display", "flex", "align-items", "center", 3, "ngxDesktopWindowBlur"], ["class", "toolbar-nav-item", 3, "selected", 4, "ngFor", "ngForOf"], [1, "toolbar-nav-item"], [3, "click"], [1, "icon-wrap"], [4, "ngTemplateOutlet"], [1, "title-wrap"]], template: function ToolbarNavComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("ngxDesktopWindowBlur", function ToolbarNavComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵtemplate(3, ToolbarNavComponent_div_3_Template, 6, 4, "div", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("opacity", ctx.windowBlur ? "0.5" : "1")("height", ɵɵpipeBind2(1, 7, ctx.height, "54px"))("width", ɵɵpipeBind1(2, 10, ctx.width));
            ɵɵadvance(3);
            ɵɵproperty("ngForOf", ctx.toolbarNavItemComponents);
        } }, directives: [NgxDesktopWindowBlurDirective, NgForOf, NgTemplateOutlet], pipes: [StyleValuePipe], styles: [".toolbar-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{-webkit-app-region:no-drag;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;margin-top:1px;margin-left:5px;margin-right:5px;width:64px}.icon-wrap[_ngcontent-%COMP%]{height:25px;display:flex;place-content:center;align-items:center;margin-bottom:1px}  .title-wrap{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;font-size:11px;color:#1e1c1e;line-height:13.2px}  .toolbar-nav-item a svg *{fill:#363336;fill-opacity:.8}  .toolbar-nav-item a:active svg *{fill:#1e1c1e;fill-opacity:.9}  .toolbar-nav-item.selected svg *{fill:#007bfa;fill-opacity:1}  .toolbar-nav-item.selected a:active svg *{fill:#003dd6;fill-opacity:1}"] });
    return ToolbarNavComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarNavComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-toolbar-nav',
                templateUrl: './toolbar-nav.component.html',
                styleUrls: ['./toolbar-nav.component.css']
            }]
    }], function () { return []; }, { toolbarNavItemComponents: [{
            type: ContentChildren,
            args: [ToolbarNavItemComponent]
        }], selectedIndex: [{
            type: Input
        }], selectedIndexChange: [{
            type: Output
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }] }); })();

var NgxDesktopLayoutDirective = /** @class */ (function () {
    function NgxDesktopLayoutDirective() {
    }
    Object.defineProperty(NgxDesktopLayoutDirective.prototype, "ngxDesktopLayout", {
        set: function (layout) {
            if (layout === 'horizontal') {
                this.value = 'row';
            }
            else {
                this.value = 'column';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopLayoutDirective.prototype, "style", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopLayoutDirective.ɵfac = function NgxDesktopLayoutDirective_Factory(t) { return new (t || NgxDesktopLayoutDirective)(); };
    NgxDesktopLayoutDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopLayoutDirective, selectors: [["", "ngxDesktopLayout", ""]], hostVars: 2, hostBindings: function NgxDesktopLayoutDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("flex-direction", ctx.style);
        } }, inputs: { ngxDesktopLayout: "ngxDesktopLayout" } });
    return NgxDesktopLayoutDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopLayoutDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopLayout]'
            }]
    }], function () { return []; }, { ngxDesktopLayout: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.flexDirection']
        }] }); })();

var _c0$c = ["*"];
var ViewComponent = /** @class */ (function () {
    function ViewComponent(ngxDesktopService, styleValuePipe) {
        this.ngxDesktopService = ngxDesktopService;
        this.styleValuePipe = styleValuePipe;
        this.background = false;
        this.layout = 'horizontal';
    }
    Object.defineProperty(ViewComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    ViewComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ViewComponent.prototype, "styleWidth", {
        get: function () {
            return this.styleValuePipe.transform(this.width);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewComponent.prototype, "styleHeight", {
        get: function () {
            return this.styleValuePipe.transform(this.height);
        },
        enumerable: true,
        configurable: true
    });
    ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(ɵɵdirectiveInject(NgxDesktopService), ɵɵdirectiveInject(StyleValuePipe)); };
    ViewComponent.ɵcmp = ɵɵdefineComponent({ type: ViewComponent, selectors: [["ngx-desktop-view"]], hostVars: 4, hostBindings: function ViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("width", ctx.styleWidth)("height", ctx.styleHeight);
        } }, inputs: { os: "os", horizontalAlignment: "horizontalAlignment", verticalAlignment: "verticalAlignment", height: "height", width: "width", margin: "margin", marginTop: "marginTop", marginLeft: "marginLeft", marginRight: "marginRight", marginBottom: "marginBottom", padding: "padding", paddingTop: "paddingTop", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingBottom: "paddingBottom", background: "background", layout: "layout" }, ngContentSelectors: _c0$c, decls: 13, vars: 48, consts: [[1, "view-wrap", 3, "ngxDesktopHorizontalAlignment", "ngxDesktopVerticalAlignment", "ngxDesktopLayout"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵpipe(5, "styleValue");
            ɵɵpipe(6, "styleValue");
            ɵɵpipe(7, "styleValue");
            ɵɵpipe(8, "styleValue");
            ɵɵpipe(9, "styleValue");
            ɵɵpipe(10, "styleValue");
            ɵɵpipe(11, "styleValue");
            ɵɵprojection(12);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵstyleProp("margin", ɵɵpipeBind1(1, 25, ctx.margin))("margin-bottom", ɵɵpipeBind1(2, 27, ctx.marginBottom))("margin-right", ɵɵpipeBind1(3, 29, ctx.marginRight))("margin-top", ɵɵpipeBind1(4, 31, ctx.marginTop))("margin-left", ɵɵpipeBind1(5, 33, ctx.marginLeft))("padding", ɵɵpipeBind1(6, 35, ctx.padding))("padding-top", ɵɵpipeBind1(7, 37, ctx.paddingTop))("padding-bottom", ɵɵpipeBind1(8, 39, ctx.paddingBottom))("padding-left", ɵɵpipeBind1(9, 41, ctx.paddingLeft))("padding-right", ɵɵpipeBind1(10, 43, ctx.paddingRight))("background", ɵɵpipeBind2(11, 45, ctx.background, ctx.os === "windows" && "#0063AE"), ɵɵdefaultStyleSanitizer);
            ɵɵproperty("ngxDesktopHorizontalAlignment", ctx.horizontalAlignment)("ngxDesktopVerticalAlignment", ctx.verticalAlignment)("ngxDesktopLayout", ctx.layout);
        } }, directives: [NgxDesktopHorizontalAlignmentDirective, NgxDesktopVerticalAlignmentDirective, NgxDesktopLayoutDirective], pipes: [StyleValuePipe], styles: [".view-wrap[_ngcontent-%COMP%]{display:flex;position:relative;box-sizing:border-box;width:100%;height:100%}"] });
    return ViewComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-view',
                templateUrl: './view.component.html',
                styleUrls: ['./view.component.css']
            }]
    }], function () { return [{ type: NgxDesktopService }, { type: StyleValuePipe }]; }, { os: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], margin: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], padding: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], background: [{
            type: Input
        }], layout: [{
            type: Input
        }], styleWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], styleHeight: [{
            type: HostBinding,
            args: ['style.height']
        }] }); })();

var _c0$d = [[["ngx-desktop-title-bar"]], "*"];
var _c1$3 = ["ngx-desktop-title-bar", "*"];
var WindowComponent = /** @class */ (function () {
    function WindowComponent(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.verticalAlignment = 'top';
        this.horizontalAlignment = 'left';
        this.padding = '24px 20px 20px';
        this.layout = 'horizontal';
    }
    Object.defineProperty(WindowComponent.prototype, "os", {
        get: function () {
            return this.ngxDesktopService.getOs(this._os);
        },
        set: function (os) {
            this._os = os;
        },
        enumerable: true,
        configurable: true
    });
    WindowComponent.prototype.ngOnInit = function () {
    };
    WindowComponent.ɵfac = function WindowComponent_Factory(t) { return new (t || WindowComponent)(ɵɵdirectiveInject(NgxDesktopService)); };
    WindowComponent.ɵcmp = ɵɵdefineComponent({ type: WindowComponent, selectors: [["ngx-desktop-window"]], inputs: { os: "os", label: "label", disabled: "disabled", background: "background", color: "color", height: "height", width: "width", verticalAlignment: "verticalAlignment", horizontalAlignment: "horizontalAlignment", padding: "padding", paddingTop: "paddingTop", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingBottom: "paddingBottom", layout: "layout" }, ngContentSelectors: _c1$3, decls: 8, vars: 35, consts: [[1, "window-container", 3, "ngxDesktopWindowBlur"], [1, "window-content-container", 3, "os", "layout", "padding", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "horizontalAlignment", "verticalAlignment", "height", "width"]], template: function WindowComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c0$d);
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("ngxDesktopWindowBlur", function WindowComponent_Template_div_ngxDesktopWindowBlur_0_listener($event) { return ctx.windowBlur = $event; });
            ɵɵpipe(1, "styleValue");
            ɵɵpipe(2, "styleValue");
            ɵɵpipe(3, "styleValue");
            ɵɵpipe(4, "styleValue");
            ɵɵprojection(5);
            ɵɵelementStart(6, "ngx-desktop-view", 1);
            ɵɵprojection(7, 1);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassMap(ctx.os);
            ɵɵstyleProp("background", ɵɵpipeBind2(1, 23, ctx.background, ctx.os === "mac" ? "#ECECEC" : "#FFFFFF"), ɵɵdefaultStyleSanitizer)("height", ɵɵpipeBind2(2, 26, ctx.height, "100vh"))("width", ɵɵpipeBind2(3, 29, ctx.width, "100vw"))("border-color", ctx.os === "windows" ? ctx.windowBlur ? "#AAAAAA" : ɵɵpipeBind2(4, 32, ctx.color, "#0063AE") : "");
            ɵɵclassProp("windowBlur", ctx.windowBlur);
            ɵɵadvance(6);
            ɵɵproperty("os", ctx.os)("layout", ctx.layout)("padding", ctx.padding)("paddingTop", ctx.paddingTop)("paddingLeft", ctx.paddingLeft)("paddingBottom", ctx.paddingBottom)("paddingRight", ctx.paddingRight)("horizontalAlignment", ctx.horizontalAlignment)("verticalAlignment", ctx.verticalAlignment)("height", "100%")("width", "100%");
        } }, directives: [NgxDesktopWindowBlurDirective, ViewComponent], pipes: [StyleValuePipe], styles: [".window-container[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;display:flex;flex-direction:column;box-sizing:border-box}.mac.window-container[_ngcontent-%COMP%]{border-radius:4px;box-shadow:rgba(0,0,0,.26) 0 0 1px,rgba(0,0,0,.16) 0 0 5px,rgba(0,0,0,.06) 0 8px 10px,rgba(0,0,0,.48) 0 25px 65px}.mac.windowBlur.window-container[_ngcontent-%COMP%]{box-shadow:rgba(0,0,0,.31) 0 0 1px,rgba(0,0,0,.18) 0 0 5px,rgba(0,0,0,.3) 0 8px 50px}.window-container[_ngcontent-%COMP%]   .window-content-container[_ngcontent-%COMP%]{flex:1 1 0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.windows.window-container[_ngcontent-%COMP%]{border-width:1px;border-style:solid;box-shadow:rgba(0,0,0,.2) 0 2px 11px 3px}"] });
    return WindowComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(WindowComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-desktop-window',
                templateUrl: './window.component.html',
                styleUrls: ['./window.component.css']
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { os: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], background: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], verticalAlignment: [{
            type: Input
        }], horizontalAlignment: [{
            type: Input
        }], padding: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], layout: [{
            type: Input
        }] }); })();

var NgxDesktopFocusDirective = /** @class */ (function () {
    function NgxDesktopFocusDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this.ngxDesktopFocus = new EventEmitter();
    }
    NgxDesktopFocusDirective.prototype.focusListener = function () {
        this.ngxDesktopFocus.emit(true);
    };
    NgxDesktopFocusDirective.prototype.blurListener = function () {
        this.ngxDesktopFocus.emit(false);
    };
    NgxDesktopFocusDirective.ɵfac = function NgxDesktopFocusDirective_Factory(t) { return new (t || NgxDesktopFocusDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopFocusDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopFocusDirective, selectors: [["", "ngxDesktopFocus", ""]], hostBindings: function NgxDesktopFocusDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("focus", function NgxDesktopFocusDirective_focus_HostBindingHandler() { return ctx.focusListener(); })("blur", function NgxDesktopFocusDirective_blur_HostBindingHandler() { return ctx.blurListener(); });
        } }, outputs: { ngxDesktopFocus: "ngxDesktopFocus" } });
    return NgxDesktopFocusDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopFocusDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopFocus]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopFocus: [{
            type: Output
        }], focusListener: [{
            type: HostListener,
            args: ['focus']
        }], blurListener: [{
            type: HostListener,
            args: ['blur']
        }] }); })();

var NgxDesktopHeightDirective = /** @class */ (function () {
    function NgxDesktopHeightDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopHeightDirective.prototype, "ngxDesktopHeight", {
        set: function (height) {
            this.height = this.ngxDesktopService.getPxValue(height, 'auto');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopHeightDirective.prototype, "style", {
        get: function () {
            return this.height;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopHeightDirective.ɵfac = function NgxDesktopHeightDirective_Factory(t) { return new (t || NgxDesktopHeightDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopHeightDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopHeightDirective, selectors: [["", "ngxDesktopHeight", ""]], hostVars: 2, hostBindings: function NgxDesktopHeightDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("height", ctx.style);
        } }, inputs: { ngxDesktopHeight: "ngxDesktopHeight" } });
    return NgxDesktopHeightDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopHeight]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopHeight: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.height']
        }] }); })();

var NgxDesktopMarginDirective = /** @class */ (function () {
    function NgxDesktopMarginDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this._marginBottom = '0';
        this._marginLeft = '0';
        this._marginRight = '0';
        this._marginTop = '0';
    }
    Object.defineProperty(NgxDesktopMarginDirective.prototype, "ngxDesktopMargin", {
        set: function (height) {
            this.value = this.ngxDesktopService.getPxValue(height, '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopMarginDirective.prototype, "marginBottom", {
        set: function (marginBottom) {
            this._marginBottom = this.ngxDesktopService.getPxValue(marginBottom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopMarginDirective.prototype, "marginLeft", {
        set: function (marginLeft) {
            this._marginLeft = this.ngxDesktopService.getPxValue(marginLeft);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopMarginDirective.prototype, "marginRight", {
        set: function (marginRight) {
            this._marginRight = this.ngxDesktopService.getPxValue(marginRight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopMarginDirective.prototype, "marginTop", {
        set: function (marginTop) {
            this._marginTop = this.ngxDesktopService.getPxValue(marginTop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopMarginDirective.prototype, "style", {
        get: function () {
            if (this.value) {
                return this.value;
            }
            return this._marginTop + " " + this._marginRight + " " + this._marginBottom + " " + this._marginLeft;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopMarginDirective.ɵfac = function NgxDesktopMarginDirective_Factory(t) { return new (t || NgxDesktopMarginDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopMarginDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopMarginDirective, selectors: [["", "ngxDesktopMargin", ""]], hostVars: 2, hostBindings: function NgxDesktopMarginDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("margin", ctx.style);
        } }, inputs: { ngxDesktopMargin: "ngxDesktopMargin", marginBottom: "marginBottom", marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop" } });
    return NgxDesktopMarginDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopMarginDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopMargin]',
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopMargin: [{
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
    NgxDesktopOsClassDirective.ɵfac = function NgxDesktopOsClassDirective_Factory(t) { return new (t || NgxDesktopOsClassDirective)(ɵɵdirectiveInject(NgxDesktopService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    NgxDesktopOsClassDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopOsClassDirective, selectors: [["", "ngxDesktopOsClass", ""]], hostVars: 4, hostBindings: function NgxDesktopOsClassDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassProp("windows", ctx.windowsClass)("mac", ctx.osClass);
        } }, inputs: { ngxDesktopOsClass: "ngxDesktopOsClass" }, outputs: { osChange: "osChange" }, exportAs: ["ngxDeskTopOs"] });
    return NgxDesktopOsClassDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopOsClassDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopOsClass]',
                exportAs: 'ngxDeskTopOs'
            }]
    }], function () { return [{ type: NgxDesktopService }, { type: ElementRef }, { type: Renderer2 }]; }, { osChange: [{
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

var NgxDesktopPaddingDirective = /** @class */ (function () {
    function NgxDesktopPaddingDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
        this._paddingBottom = '0';
        this._paddingLeft = '0';
        this._paddingRight = '0';
        this._paddingTop = '0';
    }
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "ngxDesktopPadding", {
        set: function (height) {
            this.value = this.ngxDesktopService.getPxValue(height, '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingBottom", {
        set: function (paddingBottom) {
            this._paddingBottom = this.ngxDesktopService.getPxValue(paddingBottom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingLeft", {
        set: function (paddingLeft) {
            this._paddingLeft = this.ngxDesktopService.getPxValue(paddingLeft);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingRight", {
        set: function (paddingRight) {
            this._paddingRight = this.ngxDesktopService.getPxValue(paddingRight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "paddingTop", {
        set: function (paddingTop) {
            this._paddingTop = this.ngxDesktopService.getPxValue(paddingTop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopPaddingDirective.prototype, "style", {
        get: function () {
            if (this.value) {
                return this.value;
            }
            return this._paddingTop + " " + this._paddingRight + " " + this._paddingBottom + " " + this._paddingLeft;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopPaddingDirective.ɵfac = function NgxDesktopPaddingDirective_Factory(t) { return new (t || NgxDesktopPaddingDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopPaddingDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopPaddingDirective, selectors: [["", "ngxDesktopPadding", ""]], hostVars: 2, hostBindings: function NgxDesktopPaddingDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("padding", ctx.style);
        } }, inputs: { ngxDesktopPadding: "ngxDesktopPadding", paddingBottom: "paddingBottom", paddingLeft: "paddingLeft", paddingRight: "paddingRight", paddingTop: "paddingTop" } });
    return NgxDesktopPaddingDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopPaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopPadding]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopPadding: [{
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

var NgxDesktopSizeDirective = /** @class */ (function () {
    function NgxDesktopSizeDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopSizeDirective.prototype, "ngxDesktopSize", {
        set: function (size) {
            this.size = this.ngxDesktopService.getPxValue(size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopSizeDirective.prototype, "style", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopSizeDirective.ɵfac = function NgxDesktopSizeDirective_Factory(t) { return new (t || NgxDesktopSizeDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopSizeDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopSizeDirective, selectors: [["", "ngxDesktopSize", ""]], hostVars: 2, hostBindings: function NgxDesktopSizeDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("font-size", ctx.style);
        } }, inputs: { ngxDesktopSize: "ngxDesktopSize" } });
    return NgxDesktopSizeDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopSizeDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopSize]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopSize: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.font-size']
        }] }); })();

var NgxDesktopWidthDirective = /** @class */ (function () {
    function NgxDesktopWidthDirective(ngxDesktopService) {
        this.ngxDesktopService = ngxDesktopService;
    }
    Object.defineProperty(NgxDesktopWidthDirective.prototype, "ngxDesktopWidth", {
        set: function (size) {
            this.width = this.ngxDesktopService.getPxValue(size, 'auto');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDesktopWidthDirective.prototype, "style", {
        get: function () {
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    NgxDesktopWidthDirective.ɵfac = function NgxDesktopWidthDirective_Factory(t) { return new (t || NgxDesktopWidthDirective)(ɵɵdirectiveInject(NgxDesktopService)); };
    NgxDesktopWidthDirective.ɵdir = ɵɵdefineDirective({ type: NgxDesktopWidthDirective, selectors: [["", "ngxDesktopWidth", ""]], hostVars: 2, hostBindings: function NgxDesktopWidthDirective_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵstyleProp("width", ctx.style);
        } }, inputs: { ngxDesktopWidth: "ngxDesktopWidth" } });
    return NgxDesktopWidthDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopWidthDirective, [{
        type: Directive,
        args: [{
                selector: '[ngxDesktopWidth]'
            }]
    }], function () { return [{ type: NgxDesktopService }]; }, { ngxDesktopWidth: [{
            type: Input
        }], style: [{
            type: HostBinding,
            args: ['style.width']
        }] }); })();

var NgxDesktopComponent = /** @class */ (function () {
    function NgxDesktopComponent() {
    }
    NgxDesktopComponent.prototype.ngOnInit = function () {
    };
    NgxDesktopComponent.prototype.windowBlurListener = function () {
        this.blur = true;
    };
    NgxDesktopComponent.prototype.windowFocusListener = function () {
        this.blur = false;
    };
    NgxDesktopComponent.prototype.registerOnChange = function (fn) {
    };
    NgxDesktopComponent.prototype.registerOnTouched = function (fn) {
    };
    NgxDesktopComponent.prototype.setDisabledState = function (isDisabled) {
    };
    NgxDesktopComponent.prototype.writeValue = function (obj) {
    };
    NgxDesktopComponent.ɵfac = function NgxDesktopComponent_Factory(t) { return new (t || NgxDesktopComponent)(); };
    NgxDesktopComponent.ɵcmp = ɵɵdefineComponent({ type: NgxDesktopComponent, selectors: [["lib-ngx-desktop"]], hostBindings: function NgxDesktopComponent_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("blur", function NgxDesktopComponent_blur_HostBindingHandler() { return ctx.windowBlurListener(); }, false, ɵɵresolveWindow)("focus", function NgxDesktopComponent_focus_HostBindingHandler() { return ctx.windowFocusListener(); }, false, ɵɵresolveWindow);
        } }, decls: 0, vars: 0, template: function NgxDesktopComponent_Template(rf, ctx) { }, styles: [""] });
    return NgxDesktopComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ngx-desktop',
                template: "\n",
                styles: ["\n  "]
            }]
    }], function () { return []; }, { windowBlurListener: [{
            type: HostListener,
            args: ['window:blur']
        }], windowFocusListener: [{
            type: HostListener,
            args: ['window:focus']
        }] }); })();

var NgxDesktopModule = /** @class */ (function () {
    function NgxDesktopModule() {
    }
    NgxDesktopModule.forRoot = function (os) {
        if (os === void 0) { os = 'auto'; }
        return {
            ngModule: NgxDesktopModule,
            providers: [{
                    provide: OS_TOKEN,
                    useValue: os
                }]
        };
    };
    NgxDesktopModule.ɵmod = ɵɵdefineNgModule({ type: NgxDesktopModule });
    NgxDesktopModule.ɵinj = ɵɵdefineInjector({ factory: function NgxDesktopModule_Factory(t) { return new (t || NgxDesktopModule)(); }, imports: [[
                FormsModule,
                CommonModule,
                BrowserAnimationsModule,
                ReactiveFormsModule
            ]] });
    return NgxDesktopModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxDesktopModule, { declarations: [NgxDesktopComponent,
        CheckboxComponent,
        ButtonComponent,
        BoxComponent,
        LabelComponent,
        RadioComponent,
        TextInputComponent,
        SegmentedControlComponent,
        SegmentedControlItemComponent,
        TextComponent,
        WindowComponent,
        ViewComponent,
        NgxDesktopSizeDirective,
        NgxDesktopHeightDirective,
        NgxDesktopWidthDirective,
        NgxDesktopBoldDirective,
        NgxDesktopMarginDirective,
        NgxDesktopPaddingDirective,
        NgxDesktopHorizontalAlignmentDirective,
        NgxDesktopVerticalAlignmentDirective,
        NgxDesktopOsClassDirective,
        NgxDesktopMouseoverDirective,
        NgxDesktopFocusDirective,
        NgxDesktopMousedownDirective,
        NgxDesktopWindowBlurDirective,
        StyleValuePipe,
        TitleBarComponent,
        ProgressCircleComponent,
        ToolbarComponent,
        ToolbarNavComponent,
        ToolbarNavItemComponent,
        NavPaneComponent,
        NavPaneItemComponent,
        SearchFieldComponent,
        NgxDesktopLayoutDirective], imports: [FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule], exports: [NgxDesktopComponent,
        CheckboxComponent,
        ButtonComponent,
        BoxComponent,
        LabelComponent,
        RadioComponent,
        TextInputComponent,
        SegmentedControlComponent,
        SegmentedControlItemComponent,
        TextComponent,
        WindowComponent,
        ViewComponent,
        NgxDesktopSizeDirective,
        NgxDesktopHeightDirective,
        NgxDesktopWidthDirective,
        NgxDesktopBoldDirective,
        NgxDesktopMarginDirective,
        NgxDesktopPaddingDirective,
        NgxDesktopHorizontalAlignmentDirective,
        NgxDesktopVerticalAlignmentDirective,
        NgxDesktopOsClassDirective,
        NgxDesktopMouseoverDirective,
        NgxDesktopFocusDirective,
        NgxDesktopMousedownDirective,
        NgxDesktopWindowBlurDirective,
        StyleValuePipe,
        TitleBarComponent,
        ProgressCircleComponent,
        ToolbarComponent,
        ToolbarNavComponent,
        ToolbarNavItemComponent,
        NavPaneComponent,
        NavPaneItemComponent,
        SearchFieldComponent,
        NgxDesktopLayoutDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxDesktopModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxDesktopComponent,
                    CheckboxComponent,
                    ButtonComponent,
                    BoxComponent,
                    LabelComponent,
                    RadioComponent,
                    TextInputComponent,
                    SegmentedControlComponent,
                    SegmentedControlItemComponent,
                    TextComponent,
                    WindowComponent,
                    ViewComponent,
                    NgxDesktopSizeDirective,
                    NgxDesktopHeightDirective,
                    NgxDesktopWidthDirective,
                    NgxDesktopBoldDirective,
                    NgxDesktopMarginDirective,
                    NgxDesktopPaddingDirective,
                    NgxDesktopHorizontalAlignmentDirective,
                    NgxDesktopVerticalAlignmentDirective,
                    NgxDesktopOsClassDirective,
                    NgxDesktopMouseoverDirective,
                    NgxDesktopFocusDirective,
                    NgxDesktopMousedownDirective,
                    NgxDesktopWindowBlurDirective,
                    StyleValuePipe,
                    TitleBarComponent,
                    ProgressCircleComponent,
                    ToolbarComponent,
                    ToolbarNavComponent,
                    ToolbarNavItemComponent,
                    NavPaneComponent,
                    NavPaneItemComponent,
                    SearchFieldComponent,
                    NgxDesktopLayoutDirective,
                ],
                imports: [
                    FormsModule,
                    CommonModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule
                ],
                exports: [
                    NgxDesktopComponent,
                    CheckboxComponent,
                    ButtonComponent,
                    BoxComponent,
                    LabelComponent,
                    RadioComponent,
                    TextInputComponent,
                    SegmentedControlComponent,
                    SegmentedControlItemComponent,
                    TextComponent,
                    WindowComponent,
                    ViewComponent,
                    NgxDesktopSizeDirective,
                    NgxDesktopHeightDirective,
                    NgxDesktopWidthDirective,
                    NgxDesktopBoldDirective,
                    NgxDesktopMarginDirective,
                    NgxDesktopPaddingDirective,
                    NgxDesktopHorizontalAlignmentDirective,
                    NgxDesktopVerticalAlignmentDirective,
                    NgxDesktopOsClassDirective,
                    NgxDesktopMouseoverDirective,
                    NgxDesktopFocusDirective,
                    NgxDesktopMousedownDirective,
                    NgxDesktopWindowBlurDirective,
                    StyleValuePipe,
                    TitleBarComponent,
                    ProgressCircleComponent,
                    ToolbarComponent,
                    ToolbarNavComponent,
                    ToolbarNavItemComponent,
                    NavPaneComponent,
                    NavPaneItemComponent,
                    SearchFieldComponent,
                    NgxDesktopLayoutDirective,
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-desktop
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BoxComponent, ButtonComponent, CheckboxComponent, LabelComponent, NavPaneComponent, NavPaneItemComponent, NgxDesktopBoldDirective, NgxDesktopComponent, NgxDesktopFocusDirective, NgxDesktopHeightDirective, NgxDesktopHorizontalAlignmentDirective, NgxDesktopLayoutDirective, NgxDesktopMarginDirective, NgxDesktopModule, NgxDesktopMousedownDirective, NgxDesktopMouseoverDirective, NgxDesktopOsClassDirective, NgxDesktopPaddingDirective, NgxDesktopService, NgxDesktopSizeDirective, NgxDesktopVerticalAlignmentDirective, NgxDesktopWidthDirective, NgxDesktopWindowBlurDirective, OS_TOKEN, ProgressCircleComponent, RadioComponent, SearchFieldComponent, SegmentedControlComponent, SegmentedControlItemComponent, StyleValuePipe, TextComponent, TextInputComponent, TitleBarComponent, ToolbarComponent, ToolbarNavComponent, ToolbarNavItemComponent, ViewComponent, WindowComponent };
//# sourceMappingURL=ngx-desktop.js.map

import { Injectable, Pipe } from "@angular/core";
import * as i0 from "@angular/core";
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
    StyleValuePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "styleValue", type: StyleValuePipe, pure: true });
    StyleValuePipe.ɵprov = i0.ɵɵdefineInjectable({ token: StyleValuePipe, factory: StyleValuePipe.ɵfac, providedIn: 'root' });
    return StyleValuePipe;
}());
export { StyleValuePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StyleValuePipe, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdmFsdWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3N0eWxlLXZhbHVlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQUc5RDtJQVNFO0lBQWUsQ0FBQztJQUVoQixrQ0FBUyxHQUFULFVBQVUsS0FBZ0M7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUN4RCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFVLEtBQUssT0FBSSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUM5QzthQUFNLElBQUksS0FBSyxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQztnRkFiVSxjQUFjO3VFQUFkLGNBQWM7MERBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTt5QkFScEI7Q0F3QkMsQUFyQkQsSUFxQkM7U0FkWSxjQUFjO2tEQUFkLGNBQWM7Y0FQMUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsSUFBSTthQUNYOztjQUNBLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc3R5bGVWYWx1ZScsXHJcbiAgcHVyZTogdHJ1ZVxyXG59KVxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZVZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogU3R5bGVWYWx1ZVR5cGVzIHwgYm9vbGVhbiwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuIGFyZ3NbMF0gJiYgdmFsdWUgPyBhcmdzWzBdIDogJ25vLXNldCc7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcmdzWzBdID8gYXJnc1swXSA6ICduby1zZXQnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVWYWx1ZVR5cGVzID0gc3RyaW5nIHwgbnVtYmVyO1xyXG4iXX0=
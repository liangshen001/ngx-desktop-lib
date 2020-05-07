import { Injectable, Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class StyleValuePipe {
    constructor() {
    }
    transform(value, ...args) {
        if (typeof value === 'number') {
            return `${value}px`;
        }
        else if (typeof value === 'boolean') {
            return args[0] && value ? args[0] : 'no-set';
        }
        else if (value) {
            return value;
        }
        return args[0] ? args[0] : 'no-set';
    }
}
StyleValuePipe.ɵfac = function StyleValuePipe_Factory(t) { return new (t || StyleValuePipe)(); };
StyleValuePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "styleValue", type: StyleValuePipe, pure: true });
StyleValuePipe.ɵprov = i0.ɵɵdefineInjectable({ token: StyleValuePipe, factory: StyleValuePipe.ɵfac, providedIn: 'root' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtdmFsdWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kZXNrdG9wLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3N0eWxlLXZhbHVlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOztBQVU5RCxNQUFNLE9BQU8sY0FBYztJQUV6QjtJQUFlLENBQUM7SUFFaEIsU0FBUyxDQUFDLEtBQWdDLEVBQUUsR0FBRyxJQUFXO1FBQ3hELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxLQUFLLElBQUksQ0FBQztTQUNyQjthQUFNLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDOUM7YUFBTSxJQUFJLEtBQUssRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7OzRFQWJVLGNBQWM7bUVBQWQsY0FBYztzREFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNO2tEQUVQLGNBQWM7Y0FQMUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsSUFBSTthQUNYOztjQUNBLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ3hEZXNrdG9wU2VydmljZX0gZnJvbSBcIi4uL25neC1kZXNrdG9wLnNlcnZpY2VcIjtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnc3R5bGVWYWx1ZScsXHJcbiAgcHVyZTogdHJ1ZVxyXG59KVxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHlsZVZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogU3R5bGVWYWx1ZVR5cGVzIHwgYm9vbGVhbiwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgcmV0dXJuIGFyZ3NbMF0gJiYgdmFsdWUgPyBhcmdzWzBdIDogJ25vLXNldCc7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcmdzWzBdID8gYXJnc1swXSA6ICduby1zZXQnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVWYWx1ZVR5cGVzID0gc3RyaW5nIHwgbnVtYmVyO1xyXG4iXX0=
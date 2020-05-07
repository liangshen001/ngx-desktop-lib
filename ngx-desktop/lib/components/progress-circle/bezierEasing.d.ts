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
/**
 * points is an array of [ mX1, mY1, mX2, mY2 ]
 */
export declare function BezierEasing(points: any, b?: any, c?: any, d?: any): any;
export declare namespace BezierEasing {
    var css: {
        ease: any;
        linear: any;
        'ease-in': any;
        'ease-out': any;
        'ease-in-out': any;
    };
}

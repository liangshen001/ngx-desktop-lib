export declare class ColorUtils {
    static darkenColor(color: any, percent: any): string;
    static colorLuminance(hex: any, lum: any): string;
    static isDarkColor(color: any): boolean;
    static convertColor(color: any): any;
    static ligthenColor(color: any): any;
    static transparentize(color: any, amount: any): string;
    static hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    };
}

import { ControlValueAccessor } from "@angular/forms";
export declare abstract class ControlValueAccessorAbstractComponent implements ControlValueAccessor {
    disabled: boolean;
    model: any;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(obj: any): void;
    setDisabledState(isDisabled: boolean): void;
    changeValue($event: any): void;
}

import {noop} from "rxjs";
import {ControlValueAccessor} from "@angular/forms";

export abstract class ControlValueAccessorAbstractComponent implements ControlValueAccessor {

  disabled: boolean;
  model: any;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(obj: any): void {
    this.model = obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  changeValue($event) {
    setTimeout(() => this.onChangeCallback($event));
  }

}

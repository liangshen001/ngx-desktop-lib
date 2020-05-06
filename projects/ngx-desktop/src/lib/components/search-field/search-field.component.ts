import {
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {noop} from "rxjs";

@Component({
  selector: 'ngx-desktop-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchFieldComponent),
    multi: true
  }]
})
export class SearchFieldComponent implements OnInit, ControlValueAccessor {

  @Input()
  label: string;
  @Input()
  placeholder: string = 'Search';
  @Input()
  icon: TemplateRef<SVGElement>;
  @Input()
  color: string;
  @Output()
  onCancel = new EventEmitter<void>();
  @Output()
  onChange = new EventEmitter<Event>();
  @Output()
  onKeydown = new EventEmitter<KeyboardEvent>();
  @Output()
  onEnter = new EventEmitter<KeyboardEvent>();
  @Input()
  width: string | number;
  @Input()
  marginBottom: string | number;
  @Input()
  marginLeft: string | number;
  @Input()
  marginRight: string | number;
  @Input()
  marginTop: string | number;
  @Input()
  margin: string | number;

  focus: boolean;

  disabled: boolean;
  value: string;
  onTouchedCallback: () => void = noop;
  onChangeCallback: (_: any) => void = noop;

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  constructor() {
  }

  ngOnInit(): void {
  }
}

import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {OsUtils} from "../../utils/os.utils";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {MacColor, WindowsColor} from "../button/button.component";
import {ColorUtils} from "../../utils/color.utils";

@Component({
  selector: 'ngx-desktop-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
  }]
})
export class RadioComponent extends ControlValueAccessorAbstractComponent implements OnInit, ControlValueAccessor {

  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }

  @Input()
  color: WindowsColor = '#0063AE';

  windowBlur: boolean;

  @Input()
  label: string;
  @Input()
  name: string;
  @Input()
  value: string;

  @Input()
  disabled: boolean;

  @ViewChild("inputElement", {static: true})
  inputElement: ElementRef<HTMLInputElement>;

  @Input()
  checked: boolean;

  get borderColor() {
    return this.os === 'mac' ?
      (this.windowBlur ? '#B8B8B8' : (this.checked ? '#2C91FC' : '#B8B8B8')) :
      this.disabled ? '#999999' : (this.checked ? this.color : '#333333');
  }

  constructor(private ngxDesktopService: NgxDesktopService,
              private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
  }


  writeValue(obj: any): void {
    this.model = obj;
    this.checked = this.value === obj;
    this.changeDetectorRef.markForCheck();
  }
}

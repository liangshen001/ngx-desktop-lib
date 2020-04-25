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

  // @Input()
  // set checked(checked: boolean) {
  //     if (checked) {
  //       this.model = this.value;
  //     }
  //     this.inputElement.nativeElement.checked = checked;
  // }
  //
  // get checked() {
  // // || this.afterViewInit && this.inputElement && this.inputElement.nativeElement.checked
  //   console.log(this.model);
  //   return this.model === this.value || this.inputElement.nativeElement.checked;
  // }
  // afterViewInit: boolean;
  //
  // ngAfterViewInit(): void {
  //   setTimeout(() => this.afterViewInit = true);
  // }

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

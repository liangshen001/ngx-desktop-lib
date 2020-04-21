import {Component, forwardRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {OS_TOKEN, OsTypes} from "../../types/types";
import {OsUtils} from "../../utils/os.utils";

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

  windowBlur: boolean;
  currentOs: OsTypes;

  @Input()
  label: string;
  @Input()
  name: string;
  @Input()
  value: string;

  @Input()
  os: OsTypes;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  osChange($event: "mac" | "windows" | "auto") {
    this.currentOs = $event;
  }
}

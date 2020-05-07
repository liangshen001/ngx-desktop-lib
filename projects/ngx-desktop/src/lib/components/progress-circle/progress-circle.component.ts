import {
  AfterContentInit,
  AfterViewInit,
  Component, ContentChild,
  ContentChildren, ElementRef,
  Input,
  OnInit,
  QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import { startAnimation } from './progressCircleAnimation';
import {OsTypes} from "../../types/types";
import {NgxDesktopService} from "../../ngx-desktop.service";
import {startAnimation2} from "./progressCircleAnimation2";

@Component({
  selector: 'ngx-desktop-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css']
})
export class ProgressCircleComponent implements OnInit, AfterViewInit {
  private _os: OsTypes;
  @Input()
  set os(os: OsTypes) {
    this._os = os;
    setTimeout(() => this.init());
  }
  get os() {
    return this.ngxDesktopService.getOs(this._os);
  }

  @Input()
  size: string | number;
  private _color: string;
  private _colorInit: boolean;
  @Input()
  set color(color: string) {
    if (color) {
      this._colorInit = true;
      this._color = color;
    } else {
      this._colorInit = false;
      this.initColor();
    }
  }
  get color() {
    return this._color;
  }
  @ViewChildren("circle")
  circles: QueryList<ElementRef<SVGCircleElement | SVGPathElement>>;

  constructor(private ngxDesktopService: NgxDesktopService) {
  }

  ngOnInit(): void {
    this.initColor();
  }

  ngAfterViewInit(): void {
  }
  init() {
    const elements = this.circles.map(({nativeElement}) => nativeElement);
    if (this.os === 'mac') {
      startAnimation2(...elements);
    } else {
      startAnimation(...elements);
    }
    this.initColor();
  }

  initColor() {
    if (!this._colorInit) {
      if (this.os === 'windows') {
        this._color = '#0063AE';
      } else {
        this._color = '#000000';
      }
    }
  }
}

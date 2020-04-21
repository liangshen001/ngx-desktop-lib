import {
  Component,
  ContentChildren,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorAbstractComponent} from "../control-value-accessor-abstract.component";
import {SegmentedControlItemComponent} from "../segmented-control-item/segmented-control-item.component";

@Component({
  selector: 'ngx-desktop-segmented-control',
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SegmentedControlComponent),
    multi: true
  }]
})
export class SegmentedControlComponent extends ControlValueAccessorAbstractComponent implements OnInit, ControlValueAccessor {

  @ContentChildren(SegmentedControlItemComponent)
  segmentedList: QueryList<SegmentedControlItemComponent>;

  @Input()
  height: string = 'auto';
  @Input()
  width: string = 'auto';

  @Input()
  backgroundColor: string = 'rgba(0, 0, 0, 0.04)';

  marginBottom: string = '0';
  marginLeft: string = '0';
  marginRight: string = '0';
  marginTop: string = '0';
  paddingBottom: string = '22px';
  paddingLeft: string = '18px';
  paddingRight: string = '18px';
  paddingTop: string = '23px';

  @Input('marginBottom')
  set marginBottomS(marginBottom: string | number) {
    this.marginBottom = SegmentedControlComponent.getValue(marginBottom);
  }
  @Input('marginLeft')
  set marginLeftS(marginLeft: string | number) {
    this.marginLeft = SegmentedControlComponent.getValue(marginLeft);
  }

  @Input('marginRight')
  set marginRightS(marginRight: string | number) {
    this.marginRight = SegmentedControlComponent.getValue(marginRight);
  }

  @Input('marginTop')
  set marginTopS(marginTop: string | number) {
    this.marginTop = SegmentedControlComponent.getValue(marginTop);
  }

  @Input('paddingBottom')
  set paddingBottomS(paddingBottom: string | number) {
    this.paddingBottom = SegmentedControlComponent.getValue(paddingBottom);
  }

  @Input('paddingLeft')
  set paddingLeftS(paddingLeft: string | number) {
    this.paddingLeft = SegmentedControlComponent.getValue(paddingLeft);
  }

  @Input('paddingRight')
  set paddingRightS(paddingRight: string | number) {
    this.paddingRight = SegmentedControlComponent.getValue(paddingRight);
  }

  @Input('paddingTop')
  set paddingTopS(paddingTop: string | number) {
    this.paddingTop = SegmentedControlComponent.getValue(paddingTop);
  }

  @Input()
  padding: string = `${this.paddingTop} ${this.paddingLeft} ${this.paddingRight} ${this.paddingBottom}`;
  @Input()
  margin: string = `${this.marginTop} ${this.marginLeft} ${this.marginRight} ${this.marginBottom}`;

  static getValue(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.model = obj;
    this.selectTab(this.model);
  }

  selectTab(index: number, segmented?: SegmentedControlItemComponent) {
    if (!this.segmentedList) {
      return;
    }
    const lastTab = this.segmentedList.find(i => i.show);
    if (lastTab) {
      lastTab.show = false;
    }
    if (!segmented) {
      segmented = this.segmentedList.find((s, i) => i === index);
    }
    if (segmented) {
      segmented.show = true;
      this.model = index;
      super.changeValue(index);
    }
  }
}

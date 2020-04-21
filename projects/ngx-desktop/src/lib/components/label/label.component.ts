import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoxModelComponent} from "../box-model.component";

@Component({
  selector: 'ngx-desktop-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input()
  color: string = 'rgb(0, 0, 0)';
  @Input()
  height: string = 'auto';
  @Input()
  width: string = 'auto';

  justifyContent: string;
  @Input()
  set horizontalAlignment (horizontalAlignment: 'left' | 'center' | 'right') {
    if (horizontalAlignment === 'left') {
      this.justifyContent = 'flex-start';
    } else if (horizontalAlignment === 'right') {
      this.justifyContent = 'flex-end';
    } else if (horizontalAlignment === 'center') {
      this.justifyContent = 'center';
    }
    this.justifyContent = 'normal';
  }

  alignItems: string;
  @Input()
  set verticalAlignment(verticalAlignment: 'top' | 'center' | 'bottom') {
    if (verticalAlignment === 'top') {
      this.alignItems = 'start';
    } else if (verticalAlignment === 'center') {
      this.alignItems = 'center';
    } else if (verticalAlignment === 'bottom') {
      this.alignItems = 'end';
    }
    this.alignItems = 'normal';
  }

  marginBottom: string = '0';
  marginLeft: string = '0';
  marginRight: string = '0';
  marginTop: string = '0';
  paddingBottom: string = '0';
  paddingLeft: string = '0';
  paddingRight: string = '0';
  paddingTop: string = '0';

  @Input('marginBottom')
  set marginBottomS(marginBottom: string | number) {
    this.marginBottom = LabelComponent.getValue(marginBottom);
  };
  @Input('marginLeft')
  set marginLeftS(marginLeft: string | number) {
    this.marginLeft = LabelComponent.getValue(marginLeft);
  };

  @Input('marginRight')
  set marginRightS(marginRight: string | number) {
    this.marginRight = LabelComponent.getValue(marginRight);
  };

  @Input('marginTop')
  set marginTopS(marginTop: string | number) {
    this.marginTop = LabelComponent.getValue(marginTop);
  };

  @Input('paddingBottom')
  set paddingBottomS(paddingBottom: string | number) {
    this.paddingBottom = LabelComponent.getValue(paddingBottom);
  };

  @Input('paddingLeft')
  set paddingLeftS(paddingLeft: string | number) {
    this.paddingLeft = LabelComponent.getValue(paddingLeft);
  };

  @Input('paddingRight')
  set paddingRightS(paddingRight: string | number) {
    this.paddingRight = LabelComponent.getValue(paddingRight);
  };

  @Input('paddingTop')
  set paddingTopS(paddingTop: string | number) {
    this.paddingTop = LabelComponent.getValue(paddingTop);
  };

  @Input()
  padding: string = `${this.paddingTop} ${this.paddingLeft} ${this.paddingRight} ${this.paddingBottom}`;
  @Input()
  margin: string = `${this.marginTop} ${this.marginLeft} ${this.marginRight} ${this.marginBottom}`;

  static getValue(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`
    }
    return value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}

import {Input} from "@angular/core";

export abstract class BoxModelComponent {
  @Input()
  padding: string = '23px 18px 22px';
  @Input()
  height: string = 'auto';
  @Input()
  width: string = 'auto';
  @Input()
  margin: string = 'auto';

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

  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  marginTop: string;
  paddingBottom: string = '22px';
  paddingLeft: string = '18px';
  paddingRight: string = '18px';
  paddingTop: string = '23px';

  @Input('marginBottom')
  set marginBottomS(marginBottom: string | number) {
    this.marginBottom = BoxModelComponent.getValue(marginBottom);
  };
  @Input('marginLeft')
  set marginLeftS(marginLeft: string | number) {
    this.marginLeft = BoxModelComponent.getValue(marginLeft);
  };

  @Input('marginRight')
  set marginRightS(marginRight: string | number) {
    this.marginRight = BoxModelComponent.getValue(marginRight);
  };

  @Input('marginTop')
  set marginTopS(marginTop: string | number) {
    this.marginTop = BoxModelComponent.getValue(marginTop);
  };

  @Input('paddingBottom')
  set paddingBottomS(paddingBottom: string | number) {
    this.paddingBottom = BoxModelComponent.getValue(paddingBottom);
  };

  @Input('paddingLeft')
  set paddingLeftS(paddingLeft: string | number) {
    this.paddingLeft = BoxModelComponent.getValue(paddingLeft);
  };

  @Input('paddingRight')
  set paddingRightS(paddingRight: string | number) {
    this.paddingRight = BoxModelComponent.getValue(paddingRight);
  };

  @Input('paddingTop')
  set paddingTopS(paddingTop: string | number) {
    this.paddingTop = BoxModelComponent.getValue(paddingTop);
  };

  static getValue(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`
    }
    return value;
  }
}

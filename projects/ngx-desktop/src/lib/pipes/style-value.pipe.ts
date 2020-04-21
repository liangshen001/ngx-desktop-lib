import {Pipe, PipeTransform} from "@angular/core";
import {NgxDesktopService} from "../ngx-desktop.service";

@Pipe({
  name: 'styleValue',
  pure: true
})
export class StyleValuePipe implements PipeTransform {

  constructor() {}

  transform(value: string | number, ...args: any[]): any {
    if (typeof value === 'number') {
      return `${value}px`;
    } else if (value) {
      return value;
    }
    return args[0] ? args[0] : 'no-set';
  }

}
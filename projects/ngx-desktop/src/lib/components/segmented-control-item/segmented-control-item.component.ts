import {
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ngx-desktop-segmented-control-item',
  templateUrl: './segmented-control-item.component.html',
  styleUrls: ['./segmented-control-item.component.css']
})
export class SegmentedControlItemComponent implements OnInit {

  @Input()
  label: string;
  @Input()
  disabled: boolean;

  labelMousedown: boolean;

  show: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:mouseup')
  windowMouseupListener() {
    this.labelMousedown = false;
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-desktop-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input()
  label: string;
  @Input()
  background: string = 'rgba(0, 0, 0, 0.04)';
  @Input()
  color: string;
  @Input()
  height: string | number;
  @Input()
  width: string | number;
  @Input()
  horizontalAlignment: 'left' | 'center' | 'right';
  @Input()
  verticalAlignment: 'top' | 'center' | 'bottom';
  @Input()
  marginBottom: string | number;
  @Input()
  marginLeft: string | number;
  @Input()
  marginRight: string | number;
  @Input()
  marginTop: string | number;
  @Input()
  paddingBottom: string | number;
  @Input()
  paddingLeft: string | number;
  @Input()
  paddingRight: string | number;
  @Input()
  paddingTop: string | number;
  @Input()
  padding: string | number;
  @Input()
  margin: string | number;

  constructor() {
  }

  ngOnInit(): void {
  }
}

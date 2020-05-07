import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedControlDemoComponent } from './segmented-control-demo.component';

describe('SegmentedControlDemoComponent', () => {
  let component: SegmentedControlDemoComponent;
  let fixture: ComponentFixture<SegmentedControlDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentedControlDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentedControlDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

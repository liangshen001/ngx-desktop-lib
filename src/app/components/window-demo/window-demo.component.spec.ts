import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowDemoComponent } from './window-demo.component';

describe('WindowDemoComponent', () => {
  let component: WindowDemoComponent;
  let fixture: ComponentFixture<WindowDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

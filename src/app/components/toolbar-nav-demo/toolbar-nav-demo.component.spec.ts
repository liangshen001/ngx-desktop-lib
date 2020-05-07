import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNavDemoComponent } from './toolbar-nav-demo.component';

describe('ToolbarNavDemoComponent', () => {
  let component: ToolbarNavDemoComponent;
  let fixture: ComponentFixture<ToolbarNavDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarNavDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarNavDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

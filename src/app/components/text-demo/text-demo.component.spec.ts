import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDemoComponent } from './text-demo.component';

describe('TextDemoComponent', () => {
  let component: TextDemoComponent;
  let fixture: ComponentFixture<TextDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsSwitchComponent } from './os-switch.component';

describe('OsSwitchComponent', () => {
  let component: OsSwitchComponent;
  let fixture: ComponentFixture<OsSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

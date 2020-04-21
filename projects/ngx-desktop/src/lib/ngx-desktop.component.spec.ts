import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDesktopComponent } from './ngx-desktop.component';

describe('NgxDesktopComponent', () => {
  let component: NgxDesktopComponent;
  let fixture: ComponentFixture<NgxDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

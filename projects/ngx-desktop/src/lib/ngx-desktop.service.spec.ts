import { TestBed } from '@angular/core/testing';

import { NgxDesktopService } from './ngx-desktop.service';

describe('NgxDesktopService', () => {
  let service: NgxDesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

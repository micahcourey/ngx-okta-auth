import { TestBed } from '@angular/core/testing';

import { NgxOktaAuthService } from './ngx-okta-auth.service';

describe('NgxOktaAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxOktaAuthService = TestBed.get(NgxOktaAuthService);
    expect(service).toBeTruthy();
  });
});

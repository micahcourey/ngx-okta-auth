import { TestBed } from '@angular/core/testing';

describe('NgxOktaAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxOktaAuthService = TestBed.get(NgxOktaAuthService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdminSignupApiService } from './admin-signup-api.service';

describe('AdminSignupApiService', () => {
  let service: AdminSignupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSignupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

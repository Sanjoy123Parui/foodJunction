import { TestBed } from '@angular/core/testing';

import { UsersSignupApiService } from './users-signup-api.service';

describe('UsersSignupApiService', () => {
  let service: UsersSignupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersSignupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

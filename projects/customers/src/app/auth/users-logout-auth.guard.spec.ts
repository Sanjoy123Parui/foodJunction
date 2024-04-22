import { TestBed } from '@angular/core/testing';

import { UsersLogoutAuthGuard } from './users-logout-auth.guard';

describe('UsersLogoutAuthGuard', () => {
  let guard: UsersLogoutAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersLogoutAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

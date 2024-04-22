import { TestBed } from '@angular/core/testing';

import { UsersLoginAuthGuard } from './users-login-auth.guard';

describe('UsersLoginAuthGuard', () => {
  let guard: UsersLoginAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersLoginAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

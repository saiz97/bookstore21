import { TestBed } from '@angular/core/testing';

import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';

describe('CanNavigateToAdminGuard', () => {
  let guard: CanNavigateToAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanNavigateToAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

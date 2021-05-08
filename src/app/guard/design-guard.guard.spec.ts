import { TestBed } from '@angular/core/testing';

import { DesignGuardGuard } from './design-guard.guard';

describe('DesignGuardGuard', () => {
  let guard: DesignGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesignGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

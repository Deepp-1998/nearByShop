import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { unSavedRegGuard } from './un-saved-reg.guard';

describe('unSavedRegGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unSavedRegGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

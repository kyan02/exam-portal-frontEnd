import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { learnerGuard } from './learner.guard';

describe('learnerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => learnerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

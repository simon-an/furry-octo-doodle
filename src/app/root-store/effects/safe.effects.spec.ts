import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SafeEffects } from './safe.effects';

describe('SafeEffects', () => {
  let actions$: Observable<any>;
  let effects: SafeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SafeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SafeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

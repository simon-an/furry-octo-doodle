import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SafeItemEffects } from './safe-item.effects';

describe('SafeItemEffects', () => {
  let actions$: Observable<any>;
  let effects: SafeItemEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SafeItemEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SafeItemEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

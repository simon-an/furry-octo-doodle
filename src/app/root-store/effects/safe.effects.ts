import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, map, catchError, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import {
  SafeActionTypes,
  SafeActions,
  LoadSafeSuccess,
  LoadSafeFailure,
  UserLoadSafe,
  AdminLoadSafes,
  LoadSafesFailure,
  LoadSafesSuccess,
} from '../actions/safe.actions';
import { SafeService } from '~core/services';
import { SafeApi } from '~core/model';
import { Safe } from '../models/safe';

@Injectable()
export class SafeEffects {
  @Effect()
  loadSafe$ = this.actions$.pipe(
    ofType(SafeActionTypes.UserLoadSafe),
    exhaustMap((action: UserLoadSafe) => this.safeService.getSafe(action.payload.safeId)),
    map((safe: SafeApi) => new LoadSafeSuccess({ safe: { ...safe } as Safe })),
    catchError(err => of(new LoadSafeFailure())),
  );

  @Effect()
  loadSafes$ = this.actions$.pipe(
    ofType(SafeActionTypes.AdminLoadSafes),
    exhaustMap((action: AdminLoadSafes) => this.safeService.getSafes()),
    map((safes: SafeApi[]) => new LoadSafesSuccess({ safes: [...safes] as Safe[] })),
    catchError(err => of(new LoadSafesFailure())),
  );

  constructor(private actions$: Actions<SafeActions>, private safeService: SafeService) {}
}

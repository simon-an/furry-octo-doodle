import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { SafeActionTypes, SafeActions } from '../actions/safe.actions';


@Injectable()
export class SafeEffects {


  // @Effect()
  // loadSafes$ = this.actions$.pipe(
  //   ofType(SafeActionTypes.LoadSafes),
  //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //   concatMap(() => EMPTY)
  // );


  constructor(private actions$: Actions<SafeActions>) {}

}

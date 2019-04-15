import { AddNewSafeItem, AddNewSafeItemSuccess, AddNewSafeItemFailure } from './../actions/safe-item.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SafeItemActionTypes, UserLoadSafeItems, AddSafeItems } from '../actions/safe-item.actions';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { SafeService } from '~core/services';
import { of } from 'rxjs';
import { SafeItemApi } from '~core/model';

@Injectable()
export class SafeItemEffects {
  @Effect()
  loadSafes$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.UserLoadSafeItems),
    tap(action => console.log('effects', action)),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    exhaustMap((action: UserLoadSafeItems) => this.safeService.getItems(action.payload.safeId)),
    catchError(err => of([])),
    map((items: SafeItemApi[]) => new AddSafeItems({ safeItems: items })),
  );

  @Effect()
  addSafeItem$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.AddNewSafeItem),
    tap(action => console.log('add item effect', action)),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    exhaustMap((action: AddNewSafeItem) => this.safeService.addItem(action.payload.safeItem.safeId, action.payload.safeItem)),
    catchError(err => of(new AddNewSafeItemFailure())),
    map((item: SafeItemApi) => new AddNewSafeItemSuccess({ safeItem: item })),
  );

  constructor(private actions$: Actions, private safeService: SafeService) {}
}

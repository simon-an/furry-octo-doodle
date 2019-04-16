import { UpdateSafeItemIds } from './../actions/safe.actions';
import { AddNewSafeItem, AddNewSafeItemSuccess, AddNewSafeItemFailure } from './../actions/safe-item.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SafeItemActionTypes, UserLoadSafeItems, AddSafeItems } from '../actions/safe-item.actions';
import { exhaustMap, catchError, map, tap } from 'rxjs/operators';
import { SafeService } from '~core/services';
import { of } from 'rxjs';
import { SafeItemApi } from '~core/model';
import { SafeItem } from '../models/safe-item.model';

@Injectable()
export class SafeItemEffects {
  @Effect()
  loadSafes$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.UserLoadSafeItems),
    tap(action => console.log('effects', action)),
    exhaustMap((action: UserLoadSafeItems) => this.safeService.getItems(action.payload.safeId)),
    catchError(err => of([])),
    map((items: SafeItemApi[]) => new AddSafeItems({ safeItems: items })),
  );

  @Effect()
  addSafeItem$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.AddNewSafeItem),
    tap(action => console.log('add item effect', action)),
    exhaustMap((action: AddNewSafeItem) =>
      this.safeService.addItem(action.payload.safeItem.safeId, { ...action.payload.safeItem } as SafeItemApi),
    ),
    catchError(err => of(new AddNewSafeItemFailure())),
    map((item: SafeItemApi) => {
      return { ...item } as SafeItem;
    }),
    map((item: SafeItem) => new AddNewSafeItemSuccess({ safeItem: item })),
  );

  @Effect()
  addSafeItemToSafe$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.AddNewSafeItemSuccess),
    map((action: AddNewSafeItemSuccess) => {
      return new UpdateSafeItemIds({ safeId: action.payload.safeItem.safeId, ids: [action.payload.safeItem.id] });
    }),
  );

  @Effect()
  addSafeItemsToSafe$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.AddSafeItems),
    map((action: AddSafeItems) => {
      return new UpdateSafeItemIds({
        safeId: action.payload.safeItems[0].safeId,
        ids: [
          ...action.payload.safeItems.map((safeItem: SafeItem) => {
            return safeItem.id;
          }),
        ],
      });
    }),
  );

  constructor(private actions$: Actions, private safeService: SafeService) {}
}

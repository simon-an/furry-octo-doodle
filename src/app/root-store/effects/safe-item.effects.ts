import { UpdateSafeItemIds } from './../actions/safe.actions';
import {
  AddNewSafeItem,
  AddNewSafeItemSuccess,
  AddNewSafeItemFailure,
  AdminLoadSafeItems,
  LoadSafeItemsFailure,
  LoadSafeItemsSuccess,
} from './../actions/safe-item.actions';
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
  loadSafeItems$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.UserLoadSafeItems),
    tap(action => console.log('effects', action)),
    exhaustMap((action: UserLoadSafeItems) => this.safeService.getItems(action.payload.safeId)),
    map((items: SafeItemApi[]) => new LoadSafeItemsSuccess({ safeItems: items })),
    catchError(err => of(new LoadSafeItemsFailure({ error: err }))),
  );

  @Effect()
  addSafeItem$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.AddNewSafeItem),
    tap(action => console.log('add item effect', action)),
    exhaustMap((action: AddNewSafeItem) =>
      this.safeService.addItem(action.payload.safeItem.safeId, { ...action.payload.safeItem } as SafeItemApi),
    ),
    map((item: SafeItemApi) => {
      return { ...item } as SafeItem;
    }),
    map((item: SafeItem) => new AddNewSafeItemSuccess({ safeItem: item })),
    catchError(err => of(new AddNewSafeItemFailure(err))),
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

  @Effect()
  loadSafeItemsAdmin$ = this.actions$.pipe(
    ofType(SafeItemActionTypes.AdminLoadSafeItems),
    exhaustMap((action: AdminLoadSafeItems) => this.safeService.getAllItems()),
    map(items => new AddSafeItems({ safeItems: items as SafeItem[] })),
  );
  constructor(private actions$: Actions, private safeService: SafeService) {}
}

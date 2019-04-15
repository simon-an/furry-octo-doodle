import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromSafe from './reducers/safe.reducer';
import * as fromSafeItem from './reducers/safe-item.reducer';

export interface State {
  safe: fromSafe.State;
  safeItem: fromSafeItem.State;
}

export const reducers: ActionReducerMap<State> = {
  safe: fromSafe.reducer,
  safeItem: fromSafeItem.reducer
 };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

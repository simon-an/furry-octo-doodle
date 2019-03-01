import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromSafe from './reducers/safe.reducer';

export interface State {  safe: fromSafe.State;
}

export const reducers: ActionReducerMap<State> = {  safe: fromSafe.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

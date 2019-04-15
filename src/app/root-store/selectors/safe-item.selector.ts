import { adapter } from './../reducers/safe-item.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '..';
import * as fromSafe from '../reducers/safe.reducer';

const selectSlice = (state: fromRoot.State) => state.safeItem;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(selectSlice);

export const selectAllSafeItems = selectAll;

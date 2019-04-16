import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '..';
import * as fromSafe from '../reducers/safe.reducer';

const selectSlice = (state: fromRoot.State) => state.safe;

export const selectSafes = createSelector(
  selectSlice,
  (state: fromSafe.State) => state.safes,
);

export const selectSafe = createSelector(
  selectSlice,
  (state: fromSafe.State, params: { safeId: string }) => {
    console.log('selectSafe params: ', params);
    return state.safes.find(s => s.id === params.safeId);
  },
);

export const selectSafesLoading = createSelector(
  selectSlice,
  state => state.pending,
);

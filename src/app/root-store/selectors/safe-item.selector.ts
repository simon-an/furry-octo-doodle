import { selectSafe } from 'app/root-store/selectors/safe.selector';
import { Safe } from './../models/safe';
import { Dictionary } from '@ngrx/entity';
import { adapter, State } from './../reducers/safe-item.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '..';
import * as fromSafe from '../reducers/safe.reducer';
import { SafeItem } from '../models/safe-item.model';

const selectSlice = (state: fromRoot.State) => state.safeItem;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(selectSlice);

export const selectSafeItemsBySafeId = createSelector(
  selectEntities,
  selectSafe,
  (safeItems: Dictionary<SafeItem>, safe: Safe, params: { safeId: string }) => {
    if (!!safe && !!safe.items) {
      return safe.items.map(itemId => safeItems[itemId]);
    } else {
      return [];
    }
  },
);

export const selectOpenTasks = createSelector(
  selectAll,
  (safeItems: SafeItem[]) => {
    return safeItems.filter(safeItem => !safeItem.approved);
  },
);

export const selectOpenTasksCount = createSelector(
  selectOpenTasks,
  (safeItems: SafeItem[]) => safeItems.length,
);

export const selectAllSafeItems = selectAll;

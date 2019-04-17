import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { SafeItem } from '../models/safe-item.model';
import { SafeItemActions, SafeItemActionTypes } from '../actions/safe-item.actions';
import * as fromRoot from '..';
import { v4 as uuidv4 } from 'uuid';
export interface State extends EntityState<SafeItem> {
  newSafeItems: string[];
  updatedSafeItems: string[];
}

export const adapter: EntityAdapter<SafeItem> = createEntityAdapter<SafeItem>();

export const initialState: State = adapter.getInitialState({
  newSafeItems: [],
  updatedSafeItems: [],
});

export function reducer(state = initialState, action: SafeItemActions): State {
  switch (action.type) {
    case SafeItemActionTypes.AddNewSafeItem: {
      const id = uuidv4();
      const newState: State = { ...state, newSafeItems: Array.from(new Set([...state.newSafeItems, id])) };
      const item: SafeItem = { ...action.payload.safeItem, id };
      return adapter.addOne(item, newState);
    }
    case SafeItemActionTypes.AddNewSafeItemSuccess: {
      const newState: State = { ...state, newSafeItems: [] };
      const removed: State = adapter.removeOne(state.newSafeItems[0], newState);
      return adapter.addOne(action.payload.safeItem, removed);
    }

    case SafeItemActionTypes.AddNewSafeItemFailure: {
      const newState: State = { ...state, newSafeItems: [] };
      return adapter.removeOne(state.newSafeItems[0], newState);
    }

    // case SafeItemActionTypes.UpsertSafeItem: {
    //   return adapter.upsertOne(action.payload.safeItem, state);
    // }

    case SafeItemActionTypes.LoadSafeItemsSuccess:
    case SafeItemActionTypes.AddSafeItems: {
      return adapter.addMany(action.payload.safeItems, state);
    }

    // case SafeItemActionTypes.UpsertSafeItems: {
    //   return adapter.upsertMany(action.payload.safeItems, state);
    // }

    // case SafeItemActionTypes.UpdateSafeItem: {
    //   return adapter.updateOne(action.payload.safeItem, state);
    // }

    // case SafeItemActionTypes.UpdateSafeItems: {
    //   return adapter.updateMany(action.payload.safeItems, state);
    // }

    // case SafeItemActionTypes.DeleteSafeItem: {
    //   return adapter.removeOne(action.payload.id, state);
    // }

    // case SafeItemActionTypes.DeleteSafeItems: {
    //   return adapter.removeMany(action.payload.ids, state);
    // }

    // case SafeItemActionTypes.LoadSafeItems: {
    //   return adapter.addAll(action.payload.safeItems, state);
    // }

    // case SafeItemActionTypes.ClearSafeItems: {
    //   return adapter.removeAll(state);
    // }

    default: {
      return state;
    }
  }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors(
  (state: fromRoot.State) => state.safeItem,
);

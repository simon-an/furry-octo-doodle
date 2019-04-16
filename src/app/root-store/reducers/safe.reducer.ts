import { Action } from '@ngrx/store';
import { SafeActions, SafeActionTypes } from '../actions/safe.actions';
import { Safe } from '../models/safe';

export interface State {
  safes: Safe[];
  pending: boolean;
}

export const initialState: State = {
  safes: [],
  pending: false,
};

export function reducer(state = initialState, action: SafeActions): State {
  switch (action.type) {
    case SafeActionTypes.UserLoadSafe:
    case SafeActionTypes.AdminLoadSafes:
    case SafeActionTypes.UserLoadSafeOnItemsChange:
      return { ...state, pending: true };
    case SafeActionTypes.LoadSafesSuccess:
      return { safes: [...action.payload.safes], pending: false };
    case SafeActionTypes.LoadSafeSuccess:
      const index = state.safes.findIndex(safe => safe.id === action.payload.safe.id);
      if (index > -1) {
        return {
          safes: [...state.safes.slice(0, index - 1), action.payload.safe, ...state.safes.slice(index + 1)],
          pending: false,
        };
      } else {
        return { safes: [...state.safes, action.payload.safe], pending: false };
      }
    case SafeActionTypes.LoadSafeFailure:
    case SafeActionTypes.LoadSafesFailure:
      return { ...state, pending: false };
    default:
      return state;
  }
}

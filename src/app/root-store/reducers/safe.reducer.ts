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
      return { safes: [...state.safes, action.payload.safe], pending: false };
    case SafeActionTypes.LoadSafeFailure:
    case SafeActionTypes.LoadSafesFailure:
      return { ...state, pending: false };
    default:
      return state;
  }
}

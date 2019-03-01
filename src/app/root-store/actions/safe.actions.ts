import { Action } from '@ngrx/store';
import { Safe } from '../models/safe';

export enum SafeActionTypes {
  UserLoadSafeOnItemsChange = '[User Safe Page] Load Safe On Items Change',
  AdminLoadSafes = '[Admin Landing Page] Load Safes',
  UserLoadSafe = '[User Landing Page] Load Safe',
  LoadSafesSuccess = '[Safe API] Load Safes Success',
  LoadSafesFailure = '[Safe API] Load Safes Failure',
  LoadSafeSuccess = '[Safe API] Load Safe Success',
  LoadSafeFailure = '[Safe API] Load Safe Failure',
}

export class LoadSafeOnItemsChange implements Action {
  readonly type = SafeActionTypes.UserLoadSafeOnItemsChange;

  constructor(public payload: { safeId: string; userId: string }) {}
}
export class AdminLoadSafes implements Action {
  readonly type = SafeActionTypes.AdminLoadSafes;
}
export class UserLoadSafe implements Action {
  readonly type = SafeActionTypes.UserLoadSafe;

  constructor(public payload: { safeId: string; userId: string }) {}
}
export class LoadSafeSuccess implements Action {
  readonly type = SafeActionTypes.LoadSafeSuccess;

  constructor(public payload: { safe: Safe }) {}
}
export class LoadSafeFailure implements Action {
  readonly type = SafeActionTypes.LoadSafeFailure;
}
export class LoadSafesSuccess implements Action {
  readonly type = SafeActionTypes.LoadSafesSuccess;

  constructor(public payload: { safes: Safe[] }) {}
}
export class LoadSafesFailure implements Action {
  readonly type = SafeActionTypes.LoadSafesFailure;
}

export type SafeActions =
  | LoadSafeOnItemsChange
  | AdminLoadSafes
  | UserLoadSafe
  | LoadSafesSuccess
  | LoadSafeSuccess
  | LoadSafesFailure
  | LoadSafeFailure;

import { Action } from "@ngrx/store";
// import model/interface from db.json here...
import {
  VehicleState,
  VehicleStateMake,
  VehicleStateModel,
  VehicleStateOption,
  VehicleStateTrim,
  VehicleStateYear
} from "../reducers/vehicle.reducer";
// Action constants
export const LOAD_YEARS = "[Fitment] Load Years";
export const LOAD_YEARS_FAIL = "[Fitment] Load Years Fail";
export const LOAD_YEARS_SUCCESS = "[Fitment] Load Years Success";

export const LOAD_MAKES = "[Fitment] Load Makes";
export const LOAD_MAKES_FAIL = "[Fitment] Load Makes Fail";
export const LOAD_MAKES_SUCCESS = "[Fitment] Load Makes Success";

export const LOAD_MODELS = "[Fitment] Load Models";
export const LOAD_MODEL_FAIL = "[Fitment] Load Model Fail";
export const LOAD_MODEL_SUCCESS = "[Fitment] Load Model Success";

export const LOAD_TRIM = "[Fitment] Load Trim";
export const LOAD_TRIM_FAIL = "[Fitment] Load Trim Fail";
export const LOAD_TRIM_SUCCESS = "[Fitment] Load Trim Success";

export const LOAD_OPTIONS = "[Fitment] Load Options";
export const LOAD_OPTIONS_FAIL = "[Fitment] Load Options Fail";
export const LOAD_OPTIONS_SUCCESS = "[Fitment] Load Options Success";

// Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: VehicleStateYear) {} // Replace 'any' with interface
}

export class LoadMakes implements Action {
  readonly type = LOAD_MAKES;
}
export class LoadMakesFail implements Action {
  readonly type = LOAD_MAKES_FAIL;
  constructor(public payload: any) {}
}
export class LoadMakesSuccess implements Action {
  readonly type = LOAD_MAKES_SUCCESS;
  constructor(public payload: VehicleStateMake) {} // Replace 'any' with interface
}

export class LoadModels implements Action {
  readonly type = LOAD_MODELS;
}
export class LoadModelsFail implements Action {
  readonly type = LOAD_MODEL_FAIL;
  constructor(public payload: any) {}
}
export class LoadModelsSuccess implements Action {
  readonly type = LOAD_MODEL_SUCCESS;
  constructor(public payload: VehicleStateModel) {} // Replace 'any' with interface
}

export class LoadTrim implements Action {
  readonly type = LOAD_TRIM;
}
export class LoadTrimFail implements Action {
  readonly type = LOAD_TRIM_FAIL;
  constructor(public payload: any) {}
}
export class LoadTrimSuccess implements Action {
  readonly type = LOAD_TRIM_SUCCESS;
  constructor(public payload: VehicleStateTrim) {} // Replace 'any' with interface
}

export class LoadOptions implements Action {
  readonly type = LOAD_OPTIONS;
}
export class LoadOptionsFail implements Action {
  readonly type = LOAD_OPTIONS_FAIL;
  constructor(public payload: any) {}
}
export class LoadOptionsSuccess implements Action {
  readonly type = LOAD_OPTIONS_SUCCESS;
  constructor(public payload: VehicleStateOption) {} // Replace 'any' with interface
}

// Action types
export type VehicleAction =
  | LoadYears
  | LoadYearsFail
  | LoadYearsSuccess
  | LoadMakes
  | LoadMakesFail
  | LoadMakesSuccess
  | LoadModels
  | LoadModelsFail
  | LoadModelsSuccess
  | LoadTrim
  | LoadTrimFail
  | LoadTrimSuccess
  | LoadOptions
  | LoadOptionsFail
  | LoadOptionsSuccess;

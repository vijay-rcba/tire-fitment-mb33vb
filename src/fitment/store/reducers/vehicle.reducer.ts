// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import {
  LOAD_MAKES,
  LOAD_MAKES_FAIL,
  LOAD_MAKES_SUCCESS,
  LOAD_MODELS,
  LOAD_MODEL_FAIL,
  LOAD_MODEL_SUCCESS,
  LOAD_OPTIONS,
  LOAD_OPTIONS_FAIL,
  LOAD_OPTIONS_SUCCESS,
  LOAD_TRIM,
  LOAD_TRIM_FAIL,
  LOAD_TRIM_SUCCESS,
  LOAD_YEARS,
  LOAD_YEARS_FAIL,
  LOAD_YEARS_SUCCESS,
  VehicleAction
} from "../actions/vehicle.action";
export interface VehicleState {
  years: string[];
  make: string[];
  models: string[];
  trims: string[];
  options: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  make: [],
  models: [],
  trims: [],
  options: [],
  loaded: false,
  loading: false
};

export interface VehicleStateYear {
  years: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialStateYear: VehicleStateYear = {
  years: [],
  loaded: false,
  loading: false
};

export interface VehicleStateMake {
  make: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialStateMake: VehicleStateMake = {
  make: [],
  loaded: false,
  loading: false
};

export interface VehicleStateModel {
  models: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialStateModel: VehicleStateModel = {
  models: [],
  loaded: false,
  loading: false
};

export interface VehicleStateTrim {
  trims: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialStateTrim: VehicleStateTrim = {
  trims: [],
  loaded: false,
  loading: false
};

export interface VehicleStateOption {
  options: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialStateOption: VehicleStateOption = {
  options: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: VehicleAction
): VehicleState {
  switch (action.type) {
    case LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case LOAD_YEARS_SUCCESS: {
      return {
        ...state,
        years: action.payload.years,
        loaded: true,
        loading: false
      };
    }
    case LOAD_MAKES: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_MAKES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case LOAD_MAKES_SUCCESS: {
      return {
        ...state,
        make: action.payload.make,
        loaded: true,
        loading: false
      };
    }
    case LOAD_MODELS: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_MODEL_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case LOAD_MODEL_SUCCESS: {
      return {
        ...state,
        models: action.payload.models,
        loaded: true,
        loading: false
      };
    }

    case LOAD_TRIM: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_TRIM_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case LOAD_TRIM_SUCCESS: {
      return {
        ...state,
        trims: action.payload.trims,
        loaded: true,
        loading: false
      };
    }

    case LOAD_OPTIONS: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_OPTIONS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case LOAD_OPTIONS_SUCCESS:
      {
        return {
          ...state,
          options: action.payload.options,
          loaded: true,
          loading: false
        };
      }

      return state;
  }
}

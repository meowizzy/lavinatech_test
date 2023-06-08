import { AuthAction, AuthState, AuthActionTypes } from "../types/auth";

const initialState: AuthState = {
     token: "",
     error: null
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
     switch(action.type) {
          case AuthActionTypes.AUTH_SUCCESS: 
               return { ...state, token: action.payload, error: null };
          case AuthActionTypes.AUTH_ERROR: 
               return { ...state, token: "", error: action.payload }
          case AuthActionTypes.AUTH_REMOVE:
               return { ...state, token: "", error: null }
          default: return state;
     }
};
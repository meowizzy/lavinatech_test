import { AuthActionTypes, AuthAction } from "../types/auth"

export const AuthSuccessAction = (payload: string): AuthAction => {
     return { type: AuthActionTypes.AUTH_SUCCESS, payload: payload}
};

export const AuthErrorAction = (payload: string | any): AuthAction => {
     return { type: AuthActionTypes.AUTH_ERROR, payload: payload}
};

export const AuthRemoveAction = (): AuthAction => {
     return { type: AuthActionTypes.AUTH_REMOVE }
};
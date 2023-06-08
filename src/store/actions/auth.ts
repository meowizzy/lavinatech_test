import { AuthActionTypes, AuthAction, UserInfo } from "../types/auth"

export const AuthSuccessAction = (payload: UserInfo): AuthAction => {
     return { type: AuthActionTypes.AUTH_SUCCESS, payload: payload}
};

export const AuthErrorAction = (payload: string | any): AuthAction => {
     return { type: AuthActionTypes.AUTH_ERROR, payload: payload}
};

export const AuthRemoveAction = (): AuthAction => {
     return { type: AuthActionTypes.AUTH_REMOVE }
};
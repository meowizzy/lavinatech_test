export enum AuthActionTypes {
     AUTH_SUCCESS = "AUTH_SUCCESS",
     AUTH_REMOVE = "AUTH_REMOVE",
     AUTH_ERROR = "AUTH_ERROR"
};

export interface AuthState {
     token: string;
     error: null | string
};

interface AuthSuccessAction {
     type: AuthActionTypes.AUTH_SUCCESS;
     payload: string
};

interface AuthRemoveAction {
     type: AuthActionTypes.AUTH_REMOVE;
};

interface AuthErrorAction {
     type: AuthActionTypes.AUTH_ERROR;
     payload: string;
};

export type AuthAction = AuthSuccessAction | AuthRemoveAction | AuthErrorAction;
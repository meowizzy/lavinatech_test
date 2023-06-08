import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { booksReducer } from "./booksReducer";


export const rootReducer = combineReducers({
     auth: authReducer,
     books: booksReducer
});

export type RootState = ReturnType<typeof rootReducer>;
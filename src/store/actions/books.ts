import { BooksActionTypes, BooksAction, BooksInfo } from "../types/books"

export const BooksAddAction = (payload: BooksInfo): BooksAction => {
     return { type: BooksActionTypes.BOOKS_ADD, payload: payload}
};

export const BooksErrorAction = (payload: string | any): BooksAction => {
     return { type: BooksActionTypes.BOOKS_ERROR, payload: payload}
};

export const BooksRemoveAction = (payload: number): BooksAction => {
     return { type: BooksActionTypes.BOOKS_REMOVE, payload: payload }
};
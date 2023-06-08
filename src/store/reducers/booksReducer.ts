import { BooksActionTypes, BooksInfo, BooksState, BooksAction } from "../types/books";

const initialState = {
    books: [],
    error: "",
    success: ""
};

export const booksReducer = (state = initialState, action: BooksAction): BooksState => {
    switch(action.type) {
        case BooksActionTypes.BOOKS_ADD:
            return { ...state, books: action.payload, error: "", success: "Book added successfully" }
        case BooksActionTypes.BOOKS_REMOVE:
            return { ...state, books: state.books.filter((item: BooksInfo) => item.isbn !== action.payload), error: "", success: ""}
        case BooksActionTypes.BOOKS_ERROR:
            return { ...state, error: action.payload, books: [], success: ""}
        default: return state;
    }
};
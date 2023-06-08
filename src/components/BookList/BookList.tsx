import { BookItem } from "./BookItem/BookItem";
import fetchAuth from "../../services/fetchAuth";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { BooksRemoveAction } from "../../store/actions/books";
import { BooksInfo } from "../../store/types/books";

export const BookList = ({ data }: {data: Array<BooksInfo>}) => {
    const state = useTypedSelector(state => state.auth.info);
    const dispatch = useDispatch();
    const handleDelete = (Id: number) => {
        fetchAuth({ key: state.key, secret: state.secret }, `/books/${Id}`, "DELETE")
            .then(res => {
                if (res.isOk) dispatch(BooksRemoveAction(Id));
            });
    }
    const handleEdit = () => {}
    return (
        <>
            {
                data.length ? data.map((item: BooksInfo) => (
                    <>
                        <BookItem 
                            Id={item.id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            isbn={item.isbn}
                            key={item.id} 
                            title={item.title} 
                            author={item.author} 
                            published={item.published}
                        />
                        <br />
                    </>
                )) : ''
            }
        </>
    );
};
import AddBookForm from "../../components/AddBookForm";
import BookList from "../../components/BookList";
import styles from './Content.module.css';

const Content = () => {
    return (
        <div className={styles.columns}>
            <div className={styles.columns_left}>
                <AddBookForm />
            </div>
            <div className={styles.columns_right}>
                <BookList />
            </div>
        </div>
    );
};

export default Content;
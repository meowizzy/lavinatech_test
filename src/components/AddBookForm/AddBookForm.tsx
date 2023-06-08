import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import postUpdate from '../../services/postUpdate';
import { CircularProgress, Typography, FormHelperText, TextField, Button } from '@mui/material';
import { BooksAddAction, BooksErrorAction } from '../../store/actions/books';
import styles from './AddBookForm.module.css';

export const AddBookForm: React.FC = () => {
    const [isbn, setIsbn] =  useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const state = useTypedSelector(state => state);
    const { key, secret } = state.auth.info;
    const { books, error,  } = state.;

    const handleClick = () => {
        if (!isbn.length) return;
        const url = '/books';
        const body = { isbn: isbn };
        const headers = {key: key, secret: secret};

        setLoading(true);
        postUpdate("POST", body, headers, url)
            .then(res => {
                if (!res.isOk) dispatch(BooksErrorAction(res.message));
                else dispatch(BooksAddAction(res.data));
                setLoading(false);
            });
        
    };  

    return (
        <div className={styles.row}>
            { isLoading && <div style={{textAlign: "center", marginBottom: '10px'}}><CircularProgress /></div> }
            { !!error && <FormHelperText style={{width: "100%", margin: "0 10px 10px 10px"}} error={true} children={error}/> }
            <TextField
                sx={{mx: 1, my: 0}} 
                label="Book isbn code"
                type="text"
                margin="normal"
                name="isbn"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
            />
            <Button 
                type="submit" 
                variant="contained"
                onClick={handleClick}
            >
                Add book
            </Button>
            { !!succes.length && <Typography variant="subtitle1" align="left" style={{width: "100%", margin: "0 10px 10px 10px"}}>{succes}</Typography> }
        </div>
    );
};
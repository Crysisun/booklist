import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    books: BooksReducer //global state: books
});

export default rootReducer;


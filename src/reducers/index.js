import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { oAuthReducer } from './oAuthReducers';
import { booksReducer, bookReducer } from './booksReducer';
import { bookshelfReducer, savedBookReducer } from './bookshelfReducer';
import { pathReducer } from './pathReducer';
import { heightReducer } from './styleReducers';
import { 
    optionsReducer,
    selectionReducer
} from './filtersReducer';
 
export const reducers = combineReducers({
    options: optionsReducer,
    selections: selectionReducer,

    form: formReducer, 

    books: booksReducer,
    book: bookReducer,
    
    bookshelf: bookshelfReducer,
    savedBook: savedBookReducer,
    
    path: pathReducer,

    height: heightReducer,
    auth: oAuthReducer
});
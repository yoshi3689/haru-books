import _ from 'lodash';
import { FETCH_BOOKS, FETCH_BOOK, CLEAR_BOOKS } from '../actions/actionTypes';

export const booksReducer = (state=null, action) => {
    switch (action.type) {
        case FETCH_BOOKS : 
           return { ...state, ..._.mapKeys(action.payload, 'id') };
        case CLEAR_BOOKS :
           return state = null;
        default :
            return state;
   }
}
//for a single fetch
export const bookReducer = (state=null, action) => {
   switch (action.type) {
      case FETCH_BOOK :
         return action.payload;
      default :
         return state;
   }
}
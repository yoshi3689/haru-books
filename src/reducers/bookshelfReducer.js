import _ from 'lodash';
import { FETCH_SAVED_BOOKS, FETCH_SAVED_BOOK, SAVE_BOOK, DELETE_SAVED_BOOK } from '../actions/actionTypes';

export const bookshelfReducer = (state=null, action) => {
    switch(action.type) {
        case FETCH_SAVED_BOOKS :
            return _.mapKeys(action.payload, 'id');
        case SAVE_BOOK :
            return { ...state, [action.payload.id]:action.payload };
        case DELETE_SAVED_BOOK :
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
export const savedBookReducer = (state=null, action) => {
    switch (action.type) {
        case FETCH_SAVED_BOOK :
           return state = action.payload;
        default :
           return state;
     }
}
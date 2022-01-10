import _ from 'lodash';
import { FETCH_SAVED_BOOKS, FETCH_SAVED_BOOK, SAVE_BOOK, DELETE_SAVED_BOOK } from '../actions/actionTypes';

export const bookshelfReducer = (state=null, action) => {
    switch(action.type) {
        case FETCH_SAVED_BOOKS :
            //both of the solutions below work just fine...
            // return {...state, ..._.mapKeys(action.payload, 'id')};
            //compare the current state bookshelf and the new incoming bookshelf?
            return _.mapKeys(action.payload, 'id');
            //merely converts the array to an object with a unique id assigned to each item when the bookshelf is pulled out for rendering
        case SAVE_BOOK :
            return { ...state, [action.payload.id]:action.payload };
            // since the POST req, the state obj doesn't have to spread out
            // but the new coming object needs to have an id key like the boave either by ..._.mapKeys(action.payload, 'id') or the above
        case DELETE_SAVED_BOOK :
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
export const savedBookReducer = (state=null, action) => {
    switch (action.type) {
        case FETCH_SAVED_BOOK :
            // return action.payload;
           return state = action.payload;
        default :
           return state;
     }
}
import {GET_HEIGHT} from '../actions/actionTypes';

export const heightReducer = (state={}, action) => {
    if(action.type === GET_HEIGHT) {
        return action.payload;
    } 
    return state;
}
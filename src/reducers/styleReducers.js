import {GET_HEIGHT} from '../actions/actionTypes';

export const heightReducer = (state={}, action) => {
    if(action.type === GET_HEIGHT) {
        console.log(action.payload);
        return action.payload;
    } 
    return state;
}
import { GET_PATH } from '../actions/actionTypes';

export const pathReducer = (state="/", action) => {
    if(action.type === GET_PATH) {
        return action.payload;
    } 
    return state;
}
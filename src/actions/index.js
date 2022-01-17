import googleBook from '../API/googleBook';

import {
    FETCH_BOOKS, FETCH_BOOK,CLEAR_BOOKS,
    SIGN_IN,SIGN_OUT,
    FETCH_SAVED_BOOKS, FETCH_SAVED_BOOK, SAVE_BOOK, DELETE_SAVED_BOOK,
    FETCH_USERS, ADD_USER,
    GET_PATH,
    GET_HEIGHT,
    LANG_SELECTED,
    FILTER_SELECTED,
    PRINTTYPE_SELECTED,
    ORDER_SELECTED,
    MAX_RESULT_NUM_SELECTED} from './actionTypes';

import { FILTER, LANGUAGE, MAX_RESULT_NUM, ORDER, PRINTTYPE } from '../reducers/reducerTypes';

import { savedBooks, users } from '../API/server';

import history from '../components/history';

export const fetchBooks = formValues => async (dispatch, getState) => {
    const values = Object.values(getState().selections);
    const { data } = await googleBook.get('/volumes?', {
        params: {
            q: formValues,
            orderBy: values[0].value,
            maxResults: values[1].value,
            langRestrict: values[2].value,
            filter: values[3].value,
            printType: values[4].value,
            download: 'epub', 
            key: process.env.REACT_APP_BOOKS_API_KEY
            },
        });
    dispatch({ type: FETCH_BOOKS, payload: data.items });
};
export const fetchBook = volumeId => async dispatch => {
    const { data } = await googleBook.get(`/volumes/${volumeId}`);
    dispatch({type: FETCH_BOOK, payload: data});
}
export const clearBooks = () => {
    return {
        type: CLEAR_BOOKS
    }
}

export const fetchSavedBooks = (userId) => async(dispatch) => {
    if (userId) {
        const { data } = await savedBooks.get(userId);
        dispatch({type: FETCH_SAVED_BOOKS, payload: data.data});
    }
}
export const fetchSavedBook = (volumeId, userId) => async dispatch =>{
    const { data } = await savedBooks.get(`/${userId}/${volumeId}`);
    if(data.data.userId === userId) {
        dispatch({type: FETCH_SAVED_BOOK, payload: data.data});
    } else {
    }  
}
export const saveBook = (bookToSave, userId) => async dispatch => {
    const { data } = await savedBooks.post('', {userId, id: bookToSave.id ,saleInfo: {retailPrice: bookToSave.saleInfo.retailPrice},volumeInfo: {...bookToSave.volumeInfo}});
    dispatch({type: SAVE_BOOK, payload: data});
    history.push('/');
    
}
export const deleteSavedBook = (volumeId, userId) => async dispatch => {
    await savedBooks.delete(`/${userId}/${volumeId}`);
    dispatch({type: DELETE_SAVED_BOOK, payload: volumeId});
    history.push(`/bookshelf/${userId}`);
}

export const fetchUsers = () => async(dispatch) => {
    const { data } = await users.get();
    dispatch({type: FETCH_USERS, payload: data});
}
export const addUser = userId => async dispatch => {
    const { data } = await users.post(userId);
    dispatch({type: ADD_USER, payload: data});
}

export const signIn = userId => {
    return {type: SIGN_IN, payload: userId};
}
export const signOut = () => {
    return {type: SIGN_OUT};
}

export const getPath = (path) => {
    return { type: GET_PATH, payload: path }
}

export const getHeight = height => {
    return {type: GET_HEIGHT, payload: height};
};

export const selectLanguage = language => {
    return { type: LANG_SELECTED, payload: { [LANGUAGE]:language} };
};
export const selectFilter = filter => {
    return { type: FILTER_SELECTED, payload: {[FILTER]:filter} };
};
export const selectPrintType = printType => {
    return { type: PRINTTYPE_SELECTED, payload: {[PRINTTYPE]:printType} };
};
export const selectOrder = order => {
    return {
        type: ORDER_SELECTED,
        payload: {[ORDER]:order}
    }
}
export const selectMaxResultNum = maxResultNum => {
    return {
        type: MAX_RESULT_NUM_SELECTED,
        payload: {[MAX_RESULT_NUM]:maxResultNum}
    };
};

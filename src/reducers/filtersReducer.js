import {LANG_SELECTED, FILTER_SELECTED, PRINTTYPE_SELECTED, ORDER_SELECTED, MAX_RESULT_NUM_SELECTED} from '../actions/actionTypes';
import { FILTER, LANGUAGE, MAX_RESULT_NUM, ORDER, PRINTTYPE } from './reducerTypes';


export const optionsReducer = () => {
    return {
        languages: [
            {
                label: "English" ,
                value: "en"
            },
            {
                label: "Japanese" ,
                value: "ja"
            },
            {
                label: "French" ,
                value: "fr"
            },
            {
                label: "Chinese" ,
                value: "ch"
            },
            {
                label: "Spanish" ,
                value: "sp"
            },
            {
                label: "Arabic" ,
                value: "ar"
            }
        ],
        filters: [
            {
                label: "All e-books" ,
                value: "ebooks"
            },
            {
                label: "Free books" ,
                value: "free-ebooks"
            },
            {
                label: "Paid books" ,
                value: "paid-ebooks"
            },
        
        ],
        printTypes:   [
            {
                label: "All" ,
                value: "all"
            },
            {
                label: "Books" ,
                value: "books"
            },
            {
                label: "Magazines" ,
                value: "magazines"
            },
        
        ],
        orders: [
            {
                label: 'Most Relevant',
                value: 'relevance'
            },
            {
                label: 'Newest',
                value: 'newest'
            }
        ],
        maxResultNums: [
            {
                label: '10',
                value: 10
            },
            {
                label: '20',
                value: 20
            },
            {
                label: '30',
                value: 30
            },
            {
                label: '40',
                value: 40
            }
        ]
    };
};

const {languages, filters, printTypes, orders, maxResultNums} = optionsReducer();
const INITIAL_SELECTIONS = {
[ORDER]:orders[0], [MAX_RESULT_NUM]:maxResultNums[0], [LANGUAGE]:languages[0], [FILTER]:filters[0], [PRINTTYPE]:printTypes[0] 
};
export const selectionReducer = ( state=INITIAL_SELECTIONS, action) => {
    switch(action.type) {
        case LANG_SELECTED:
            return { ...state, ...action.payload };
        case FILTER_SELECTED:
            return { ...state, ...action.payload };
        case PRINTTYPE_SELECTED:
            return { ...state, ...action.payload };
        case ORDER_SELECTED:
            return { ...state, ...action.payload };
        case MAX_RESULT_NUM_SELECTED:
            return { ...state, ...action.payload };
        default:
            return state;
    }

}

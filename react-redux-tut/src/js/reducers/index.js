// src/js/reducers/index.

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            // state.articles.push(action.payload);
            return { ...state, articles: [...state.articles, action.payload] };
            // state.articles.concat(action.payload) 
        default:
        return state;
    }
};

export default rootReducer;

// This breaks the reducers main Redux principle: Immutablity
// Array.prototype.push alters the original array
// Using Array.prototype.concat is enough to keep the initial array immutable.
// (...) is a spread operator.
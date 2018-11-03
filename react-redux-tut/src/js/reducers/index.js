// src/js/reducers/index.

import { ADD_ARTICLE } from "../constants/actions-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            state.articles.push(action.payload);
            return state;
        default:
        return state;
    }
};

export default rootReducer;
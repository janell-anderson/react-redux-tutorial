// src/js/actions/index.js

import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({
    type: "ADD_ARTICLE",
    payload: article
});

/*
- type property is a string
- the reducer will use the string to determine how to calculate the next state.
- to reduce types and duplicates make action types constants. It helps avoid errors that will be difficult to debug.
*/
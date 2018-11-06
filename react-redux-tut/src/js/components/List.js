// src/js/components/List.js

import React from "react";
import { connect } from "react-redux";

// connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.
const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;

/*
This component recieves the prop articles which copies the article array.
The array lives inside the Redux state we had created earlier. It comes 
from the index.js file we have in the reducer folder.

el.title and el.id are generating the articles title and id number.
*/
import React from "react";
import { render } from "react-dom";
// import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";

// const render = ReactDOM.render;
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);


// Provider wraps up your React app and makes it aware of the entire Redux's store.

/* OLD CODE
import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;
*/
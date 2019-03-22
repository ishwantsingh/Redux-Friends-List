import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { FriendList, Spinner } from "./state/reducers";
import thunk from "redux-thunk";
import * as types from "./state/actionTypes";

const customMiddlewareToSaveUserToken = store => next => action => {
  if (action.type === types.LOGIN_SUCCESS) {
    localStorage.setItem("userToken", action.payload);
  }
  next(action);
};

const rootReducer = combineReducers({ FriendList, Spinner });

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, customMiddlewareToSaveUserToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

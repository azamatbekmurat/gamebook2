import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//import store from './store';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import createSagaMiddleware from "redux-saga";

import signInReducer from "./store/reducers/signInReducer";
//import usersReducer from "./store/reducers/usersReducer";
import thunk from "redux-thunk";
//import promise from "redux-promise-middleware";
import { watchSignIn } from "./sagas/saga";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "video-react/dist/video-react.css";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
  signInReducer,
  applyMiddleware(loggerMiddleware, sagaMiddleware)
);

sagaMiddleware.run(watchSignIn);

store.subscribe(() => console.log("store updated", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
// serviceWorker.unregister();

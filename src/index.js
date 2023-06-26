import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

const rootReducer = combineReducers({
  // ...nhung reducer khac
  form: formReducer,
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

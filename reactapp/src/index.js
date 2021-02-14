import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {store, history} from './store'
import { keycloak } from './keycloak-config';

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function addItem(text) {
    return { type: 'ADD_ITEM', text };
}

keycloak.init({ onLoad: 'check-sso', checkLoginIframeInterval: 1 }).success(authenticated => {
    if (keycloak.authenticated) {
      sessionStorage.setItem('kctoken', keycloak.token);
  
      //Updating some value in store to re-render the component
      store.dispatch(addItem('Welcome!'));
      
      setInterval(() => {
        keycloak.updateToken(10).error(() => keycloak.logout());
        sessionStorage.setItem('kctoken', keycloak.token);
      }, 10000);
      } else {
        keycloak.login();
      }
  });

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
// import thunkMiddleware from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import createRootReducer from "./store/reducer";
import routes from "./routes";

const history = createBrowserHistory();
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history))),
);

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <ConnectedRouter history={history}>{routes}</ConnectedRouter>
            </Provider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

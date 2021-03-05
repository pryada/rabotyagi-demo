import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { MainReducer } from "./reducers";

export default (history) =>
    combineReducers({
        data: MainReducer,
        router: connectRouter(history),
    });

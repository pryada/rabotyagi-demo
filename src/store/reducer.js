import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { MainReducer } from "./reducers";

 const createRootReducer = (history) =>
     combineReducers({
         data: MainReducer,
         router: connectRouter(history),
     });

export default createRootReducer;
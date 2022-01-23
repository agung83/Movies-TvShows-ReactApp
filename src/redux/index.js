import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./ducks";


export default createStore(
    combineReducers(reducers),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
        ),
    )
);

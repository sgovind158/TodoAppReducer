import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import { authReducer } from "./Auth/authReducer"
import thunk from "redux-thunk"
import { counterReducer } from "./Counter/counterReducer";
import { todoReducer } from "./Todos/todoReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth : authReducer,
    counter: counterReducer,
    todo: todoReducer
})

export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
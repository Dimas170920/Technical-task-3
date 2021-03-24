import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk";
import heroesReducer from "./heroes-reducer";
import commentReducer from "./comment-reducer";

let reducers = combineReducers({
    heroesPage: heroesReducer,
    commentPage: commentReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store;
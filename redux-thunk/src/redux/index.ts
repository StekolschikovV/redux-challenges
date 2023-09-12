import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import jokeReducer, {IJokeState} from "./reducers/jokeReducer";
import lengthReducer, {ILengthState} from "./reducers/lengthReducer";

export interface ISate {
    joke: IJokeState
    length: ILengthState
}

const rootReducer = combineReducers({
    joke: jokeReducer,
    length: lengthReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
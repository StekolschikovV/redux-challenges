import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
    data: dataReducer,
    // Другие редюсеры, если есть
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
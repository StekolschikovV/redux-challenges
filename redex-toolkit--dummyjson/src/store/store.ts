import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/user/UserSlice'
import catalogReducer from './reducers/catalog/CatalogSlice'
import {productAPI} from "./services/ProductService";

const rootReducer = combineReducers({
    catalogReducer,
    userReducer,
    lastAction(state = null, action) {
        return action;
    },
    [productAPI.reducerPath]: productAPI.reducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

const store = setupStore();

export default store


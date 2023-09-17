import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {IProduct} from "../../../type";
import {loadCatalog} from "./ActionCreators";

interface IProductState {
    products: IProduct[]
    isLoading: boolean;
    error: string;
}

const initialState: IProductState = {
    products: [],
    isLoading: false,
    error: '',
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: {
        [loadCatalog.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
            state.error = ""
            state.isLoading = false;
            toast("Catalog data has been loaded!")
        },
        [loadCatalog.pending.type]: (state) => {
            state.isLoading = true;
            state.error = ""
            toast("Request to download a sent catalog")
        },
        [loadCatalog.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false;
            toast("Error: " + state.error)
        },
    }
})

export default catalogSlice.reducer;

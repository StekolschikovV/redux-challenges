import {createAsyncThunk} from "@reduxjs/toolkit";

export const loadCatalog = createAsyncThunk(
    'catalog/load',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://dummyjson.com/products', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            })
                .then(res => res.json())
                .catch(e => e)
            if (response?.message) {
                throw new Error(response.message)
            }
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to load")
        }
    }
)

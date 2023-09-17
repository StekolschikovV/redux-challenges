import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUserCredentials} from "../../../type";

export const userLogin = createAsyncThunk(
    'user/login',
    async (data: IUserCredentials, thunkAPI) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .catch(e => console.log("++++2"))
            if (response?.message) {
                throw new Error(response.message)
            }
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to login")
        }
    }
)

export const userLogout = () => {
    return {
        type: 'user/logout',
    }
}
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userLogin} from "./ActionCreators";
import {toast} from "react-toastify";
import {IUser} from "../../../type";

interface IUserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: IUserState = {
    user: null,
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = ""
            state.isLoading = false;
            localStorage.removeItem("user")
            toast("You are logged out of your account")
        }
    },
    extraReducers: {
        [userLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ""
            state.isLoading = false;
            localStorage.setItem("user", JSON.stringify(state))
            toast("You are logged in to your account")
        },
        [userLogin.pending.type]: (state) => {
            state.isLoading = true;
            state.error = ""
            localStorage.removeItem("user")
            toast("Request for authorization to send")
        },
        [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false;
            localStorage.removeItem("user")
            toast("Error: " + state.error)
        },
        ["@@INIT"]: (state, action: PayloadAction<null>) => {
            const storeData: string | null = localStorage.getItem("user")
            if (storeData) {
                return JSON.parse(storeData)
            }
        },
    }
})

export default userSlice.reducer;

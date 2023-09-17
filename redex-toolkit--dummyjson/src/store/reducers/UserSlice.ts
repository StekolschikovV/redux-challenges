import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../type";
import {userLogin} from "./ActionCreators";
import {toast} from "react-toastify";

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
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
            toast("You are logged out of your account")
        }
    },
    extraReducers: {
        [userLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ""
            state.isLoading = false;
            toast("You are logged in to your account")

        },
        [userLogin.pending.type]: (state) => {
            state.isLoading = true;
            state.error = ""
            toast("Request for authorization to send")
        },
        [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false;
            toast("Error: " + state.error)
        },
    }
})

export default userSlice.reducer;

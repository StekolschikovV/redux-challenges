import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../type";
import {userLogin} from "./ActionCreators";

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
            console.log("logout")
            state.user = null;
            state.error = ""
            state.isLoading = false;
        }
    },
    extraReducers: {
        [userLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.error = ""
            state.isLoading = false;
        },
        [userLogin.pending.type]: (state) => {
            state.isLoading = true;
            state.error = ""
        },
        [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false;
        },
    }
})

export default userSlice.reducer;

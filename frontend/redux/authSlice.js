import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.Loading = action.payload;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
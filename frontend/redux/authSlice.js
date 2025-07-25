import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        //isLoggedIn: false,
        loading: false,
        user: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
         setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});
export const { setLoading, setUser } = authSlice.actions;

export default authSlice.reducer;
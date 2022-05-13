import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState: {
        user: false,
        loading: false,
        status: null,
        error: null,
    },
    reducers:{
        setUser: (state, actions) => {
            state.user = actions.payload;
        },
        loaderPage: (state, action) => {
            state.loading = action.payload;
        }
    },
});

export const { setUser, loaderPage } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState: {
        user: false,
        status: null,
        error: null,
    },
    reducers:{
        setUser: (state, actions) => {
            state.user = actions.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { aboutList } from "../../http/aboutAPI";

export const fetchAbout = createAsyncThunk(
    'about/fetchAbout',
    async () => {
        const response = await aboutList();
        return response.data;
    }
);

export const aboutSlice = createSlice({
    name:'about',
    initialState: {
        about: [],
        status: null,
        error: null,
    },
    reducers:{
        removeAbout: (state, action) => {
            state.about = state.about.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchAbout.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchAbout.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.about = [...state.about,...action.payload];
        },
        [fetchAbout.rejected]: (state, action) => {},
    },
});

export const { removeAbout } = aboutSlice.actions;

export default aboutSlice.reducer;

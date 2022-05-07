import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { typeAboutList } from "../../http/typeAboutAPI";

export const fetchTypeAbout = createAsyncThunk(
    'typeAbout/fetchTypeAbout',
    async () => {
        const response = await typeAboutList();
        return response.data;
    }
);

export const typeAboutSlice = createSlice({
    name:'typeAbout',
    initialState: {
        typeAbout: [],
        status: null,
        error: null,
    },
    reducers:{
        removeTypeAbout: (state, action) => {
            state.typeAbout = state.typeAbout.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchTypeAbout.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchTypeAbout.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.typeAbout = [...state.typeAbout,...action.payload];
        },
        [fetchTypeAbout.rejected]: (state, action) => {},
    },
});

export const { removeTypeAbout } = typeAboutSlice.actions;

export default typeAboutSlice.reducer;

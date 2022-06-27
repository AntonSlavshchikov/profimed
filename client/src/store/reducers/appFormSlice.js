import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { appFormList } from "../../http/appFormAPI"; 

export const fetchAppForm = createAsyncThunk(
    'appForm/fetchAppForm',
    async () => {
        const response = await appFormList();
        return response.data;
    }
);

export const appFormSlice = createSlice({
    name:'appForm',
    initialState: {
        appForm: [],
        status: null,
        error: null,
    },
    reducers:{
        removeAppForm: (state, action) => {
            state.appForm = state.appForm.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchAppForm.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchAppForm.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.appForm = [...state.appForm,...action.payload];
        },
        [fetchAppForm.rejected]: (state, action) => {
            state.error = 'error';
        },
    },
});

export const { removeAppForm } = appFormSlice.actions;

export default appFormSlice.reducer;

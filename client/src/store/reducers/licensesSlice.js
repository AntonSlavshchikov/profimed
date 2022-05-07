import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { licensesList } from "../../http/licensesAPI"

export const fetchLicenses = createAsyncThunk(
    'licenses/fetchLicenses',
    async () => {
        const response = await licensesList();
        return response.data;
    }
);

export const licensesSlice = createSlice({
    name:'licenses',
    initialState: {
        licenses: [],
        status: null,
        error: null,
    },
    reducers:{
        removeLicenses: (state, action) => {
            state.licenses = state.licenses.filter(n => n.id !== action.payload);
        },
    },
    extraReducers: {
        [fetchLicenses.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchLicenses.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.licenses = [...state.licenses,...action.payload];
        },
        [fetchLicenses.rejected]: (state, action) => {},
    },
});

export const { removeLicenses } = licensesSlice.actions;

export default licensesSlice.reducer;

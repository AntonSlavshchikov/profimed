import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { typeServicesList } from "../../http/typeServicesAPI";

export const fetchTypeServices = createAsyncThunk(
    'typeServices/fetchTypeServices',
    async () => {
        const response = await typeServicesList();
        return response.data;
    }
)

export const typeServicesSlice = createSlice({
    name:'typeServices',
    initialState: {
        typeServices: [],
        status: null,
        error: null,
    },
    reducers:{
        removeTypeServices: (state, action) => {
            state.typeServices = state.typeServices.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchTypeServices.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchTypeServices.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.typeServices = [...state.typeServices,...action.payload];
        },
        [fetchTypeServices.rejected]: (state, action) => {},
    },
});

export const { removeTypeServices } = typeServicesSlice.actions;

export default typeServicesSlice.reducer;

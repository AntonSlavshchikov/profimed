import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { servicesList } from "../../http/servicesAPI";

export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async () => {
        const response = await servicesList();
        return response.data;
    }
)

export const servicesSlice = createSlice({
    name:'services',
    initialState: {
        services: [],
        status: null,
        error: null,
    },
    reducers:{
        removeServices: (state, action) => {
            state.services = state.services.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchServices.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchServices.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.services = [...state.services,...action.payload];
        },
        [fetchServices.rejected]: (state, action) => {},
    },
});

export const { removeServices } = servicesSlice.actions;

export default servicesSlice.reducer;

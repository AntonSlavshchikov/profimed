import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { workersList } from "../../http/workersAPI";

export const fetchWorkers = createAsyncThunk(
    'workers/fetchWorkers',
    async () => {
        const response = await workersList();
        return response.data;
    }
)

export const workersSlice = createSlice({
    name:'workers',
    initialState: {
        workers: [],
        status: null,
        error: null,
    },
    reducers:{
        removeWorker: (state, action) => {
            state.workers = state.workers.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchWorkers.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchWorkers.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.workers = [...state.workers,...action.payload];
        },
        [fetchWorkers.rejected]: (state, action) => {
            state.status = "error";
        },
    },
});

export const { removeWorker } = workersSlice.actions;
export default workersSlice.reducer;

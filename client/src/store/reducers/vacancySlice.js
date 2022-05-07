import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { vacancyList } from "../../http/vacancyAPI";

export const fetchVacancy = createAsyncThunk(
    'vacancy/fetchVacancy',
    async () => {
        const response = await vacancyList();
        return response.data;
    }
)

export const vacancySlice = createSlice({
    name:'vacancy',
    initialState: {
        vacancy: [],
        status: null,
        error: null,
    },
    reducers:{
        removeVacancy: (state, action) => {
            state.vacancy = state.vacancy.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchVacancy.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchVacancy.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.vacancy = [...state.vacancy,...action.payload];
        },
        [fetchVacancy.rejected]: (state, action) => {},
    },
});

export const { removeVacancy } = vacancySlice.actions;

export default vacancySlice.reducer;

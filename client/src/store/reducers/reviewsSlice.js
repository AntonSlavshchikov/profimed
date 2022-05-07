import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reviewsList } from "../../http/reviewsAPI";

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (limit) => {
        const response = await reviewsList(limit);
        return response.data;
    }
)

export const reviewsSlice = createSlice({
    name:'reviews',
    initialState: {
        reviews: [],
        status: null,
        error: null,
    },
    reducers:{
        removeReview: (state, action) => {
            state.reviews = state.reviews.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchReviews.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchReviews.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.reviews = [...state.reviews,...action.payload];
        },
        [fetchReviews.rejected]: (state, action) => {},
    },
});

export const { removeReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;

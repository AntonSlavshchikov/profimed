import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reviewsList, reviewsCount } from "../../http/reviewsAPI";

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
        count: 0,
        status: null,
        error: null,
    },
    reducers:{
        removeReview: (state, action) => {
            state.reviews = state.reviews.filter(n => n.id !== action.payload);
        },
        addCountReviews: (state, action) => {
            state.count = action.payload;
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

export const { removeReview, addCountReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;

export const fetchCountReviews = () =>{
    return async dispatch => {
        const responce = await reviewsCount();
        return dispatch(addCountReviews(responce.data));
    }
}
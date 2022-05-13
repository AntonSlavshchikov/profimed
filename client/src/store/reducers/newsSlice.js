import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { newsList, newsCount } from "../../http/newsAPI";

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (limit) => {
        const response = await newsList(limit);
        return response.data;
    }
);

export const newsSlice = createSlice({
    name:'news',
    initialState: {
        news: [],
        count: 0,
        status: null,
        error: null,
    },
    reducers:{
        removeNews: (state, action) => {
            state.news = state.news.filter(n => n.id !== action.payload);
        },
        addNewsCount: (state, action) => {
            state.count = action.payload;
        },
    },
    extraReducers: {
        [fetchNews.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.news = [...state.news,...action.payload];
        },
        [fetchNews.rejected]: (state, action) => {},
    },
});

export const { removeNews, addNewsCount } = newsSlice.actions;

export default newsSlice.reducer;

export const fetchCountNews = () => {
    return async dispatch => {
        const response = await newsCount();
        dispatch(addNewsCount(response.data));
    }
   
}
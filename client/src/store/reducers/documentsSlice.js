import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { documentsList } from "../../http/documentsAPI"

export const fetchDocuments = createAsyncThunk(
    'documents/fetchDocuments',
    async () => {
        const response = await documentsList();
        return response.data;
    }
);

export const documentsSlice = createSlice({
    name:'documents',
    initialState: {
        documents: [],
        status: null,
        error: null,
    },
    reducers:{
        removeDocument: (state, action) => {
            state.documents = state.documents.filter(n => n.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchDocuments.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchDocuments.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.documents = [...state.documents,...action.payload];
        },
        [fetchDocuments.rejected]: (state, action) => {},
    },
});

export const { removeDocument } = documentsSlice.actions;

export default documentsSlice.reducer;

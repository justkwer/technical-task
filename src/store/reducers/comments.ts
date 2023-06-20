import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CommentsState} from 'core/types';
import {getData} from 'store/api';

const initialState: CommentsState = {
    data: {},
    totalComments: 0,
    totalLikes: 0,
    loading: false,
    error: false,
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        updateLikes: (state, {payload}: PayloadAction<number>) => {
            state.totalLikes = payload;
        },
        updateComments: (state, {payload}: PayloadAction<number>) => {
            state.totalComments = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            if (!state.error) state.error = false;
            state.loading = true;
        });
        builder.addCase(getData.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.loading = false;
        });
        builder.addCase(getData.rejected, (state) => {
            state.error = true;
            state.loading = false;
        });
    },
});

export const {updateLikes, updateComments} = commentsSlice.actions;
export const comments = commentsSlice.reducer;

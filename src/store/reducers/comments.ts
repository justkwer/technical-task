import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CommentsState} from 'core/types';
import {getAuthors, getComments} from 'store/api';

const initialState: CommentsState = {
    totalLikes: 0,
    page: 1,
    loading: [true, true],
    error: false,
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        updateLikes: (state, {payload}: PayloadAction<boolean>) => {
            state.totalLikes = payload
                ? state.totalLikes - 1
                : state.totalLikes + 1;
        },
        changePage: (state, {payload}: PayloadAction<number>) => {
            state.page = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAuthors.fulfilled, (state, {payload}) => {
            state.authors = payload;
            state.loading[0] = false;
        });
        builder.addCase(getAuthors.rejected, (state) => {
            state.error = true;
            state.loading[0] = false;
        });
        builder.addCase(getComments.pending, (state) => {
            state.loading[1] = true;
            if (state.error) state.error = false;
        });
        builder.addCase(getComments.fulfilled, (state, {payload}) => {
            state.comments = payload;
            state.totalLikes = payload.data.reduce(
                (likes, comment) => likes + comment.likes,
                0,
            );
            if (state.error) state.error = false;
            state.loading[1] = false;
        });
        builder.addCase(getComments.rejected, (state) => {
            state.error = true;
            state.loading[1] = false;
        });
    },
});

export const {updateLikes, changePage} = commentsSlice.actions;
export const comments = commentsSlice.reducer;

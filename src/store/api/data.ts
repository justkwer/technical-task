import {createAsyncThunk} from '@reduxjs/toolkit';
import getAuthorsRequest from 'api/authors/getAuthorsRequest';
import getCommentsRequest from 'api/comments/getCommentsRequest';
import {Author, Data} from 'core/types';

export const getData = createAsyncThunk('comments/getData', async () => {
    const authors: Author[] = await getAuthorsRequest();
    const pages: number = await getCommentsRequest(1).then(
        (res) => res.pagination.total_pages,
    );
    const comments: Data[][] = await Promise.all(
        Array.from(Array(pages), (_, index) =>
            getCommentsRequest(index + 1).then((res) => res.data),
        ),
    );

    return {
        authors: authors,
        comments,
    };
});

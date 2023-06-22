import {Author, Data, IPagination} from './interface';

type AuthorsLoading = boolean;
type CommentsLoading = boolean;

export type CommentsState = {
    authors?: Author[];
    comments?: IPagination;
    page: number;
    totalLikes: number;
    loading: [AuthorsLoading, CommentsLoading];
    error: boolean;
};

export type CommentsProps = {
    data?: Data[] | Data;
};

export type CommentProps = Omit<Data, 'id' | 'parent'>;

export type AuthorProps = Omit<CommentProps, 'text'>;

export type LikesProps = Pick<Data, 'likes'>;

export type CreatedProps = Pick<Data, 'created'>;
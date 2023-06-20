import {Author, Data} from './interface';

export type CommentsState = {
    data:
        | {
              authors: Author[];
              comments: Data[][];
          }
        | object;
    totalComments: number;
    totalLikes: number;
    loading: boolean;
    error: boolean;
};

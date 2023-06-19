export type AuthorType = {
    id: number;
    name: string;
    avatar: string;
};

export type DataType = {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: null | number;
    likes: number;
};

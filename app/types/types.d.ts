 type Blog = {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    authors: Author[];
    comments: Comment[];
}

 type Author = {
    createdAt: string;
    name: string;
    avatar: string;
    updatedAt: string;
    id: string;
    postId: string;
}

 type Comment = {
    createdAt: string;
    name: string;
    updatedAt: string;
    id: string;
    postId: string;
}

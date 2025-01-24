

export interface Post {
    id: number,
    title: string,
    content: string,
    category: string,
    views: number
}

export interface Comment {
    id: number,
    content: string,
    postId: number,
    authorId: number,
    createdAt: string,
    updatedAt: string,
    post: {
        id: number,
        title: string
    }
}
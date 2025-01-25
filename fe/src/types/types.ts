
export interface Author {
    username: string,
    email: string,
}

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
    author: Author,
    createdAt: string,
    updatedAt: string,
    post: {
        id: number,
        title: string
    }
}
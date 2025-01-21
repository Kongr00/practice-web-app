export class CreateCommentDto {
    readonly content: string;
    readonly postId: number;
    readonly authorId: number;
}

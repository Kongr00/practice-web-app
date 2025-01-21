import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Post} from "../post/post.model";
import {User} from "../user/user.model";

interface CommentCreationAttrs {
    content: string;
    postId: number;
    authorId: number;
}

@Table({ tableName: "comments", createdAt: true, updatedAt: true })
export class Comment extends Model<Comment, CommentCreationAttrs> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    content: string;

    @ForeignKey(() => Post)
    @Column({ type: DataType.INTEGER, allowNull: false })
    postId: number;

    @BelongsTo(() => Post)
    post: Post;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    authorId: number;

    @BelongsTo(() => User)
    user: User;
}
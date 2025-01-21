import {Column, DataType, Model, Table} from "sequelize-typescript";


interface PostCreationAttrs {
    title: string;
    content: string;
    category: string;
}

@Table({tableName: "post", createdAt: false, updatedAt: false})
export class Post extends Model<Post, PostCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @Column({type: DataType.STRING, allowNull: false})
    category: string;

    @Column({type: DataType.INTEGER, allowNull: false, defaultValue: 0})
    views: number;
}
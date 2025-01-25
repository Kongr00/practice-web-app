import React, {FC, useEffect} from 'react';
import {Comment} from "../../../types/types.ts";
import cls from './CommentBlock.module.css'
import { User } from "lucide-react";
interface CommentBlockProps {
    comment: Comment
}
const CommentBlock: FC<CommentBlockProps> = ({comment}) => {


    return (
        <div className={cls.commentBlock}>
            <div className={cls.photoBlock}>
                <User size={32} color={'#000'}/>
            </div>
            <div className={cls.contentBlock}>
                <div className={cls.author}>{comment.author.username}</div>
                <div className={cls.content}>{comment.content}</div>
                <div className={cls.createDate}>{comment.createdAt}</div>
            </div>
        </div>
    );
};

export default CommentBlock;
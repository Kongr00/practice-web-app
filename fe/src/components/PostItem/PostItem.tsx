import React, {FC} from 'react';
import {Post} from "../../types/types.ts";
import cls from './PostItem.module.css'
interface PostItemProps {
    postData: Post;
}

const PostItem: FC<PostItemProps> = ({postData}) => {
    return (
        <div className={cls.postBox}>
            <div className={cls.imageArea}>
                <img src="https://random.imagecdn.app/400/400" alt="random-pic"/>
            </div>
            <div className={cls.contentArea}>
                <div className={cls.title}>{postData.title}</div>
                <div className={cls.article}>{postData.content}</div>
                <div className={cls.postFooter}>
                    <div className={cls.categoryLink}>{postData.category}</div>
                    <div>Views: {postData.views}</div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
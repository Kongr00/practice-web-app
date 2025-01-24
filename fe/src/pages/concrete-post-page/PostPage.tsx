import React from 'react';
import {useParams} from "react-router-dom";
import cls from './PostPage.module.css'
const PostPage = () => {
    const { id } = useParams();
    return (
        <div className={cls.container}>
            Picked news id is : {id}
        </div>
    );
};

export default PostPage;
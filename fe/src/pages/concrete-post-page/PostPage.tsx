import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import cls from './PostPage.module.css'
import {useFetching} from "../../hooks/useFetchig.ts";
import axios from "axios";
import {Post, Comment} from "../../types/types.ts";
import {getToken} from "../../utils/getToken.ts";

const PostPage = () => {

    const { id } = useParams();
    const [post, setPost] = useState<Post>()
    const [comments, setComments] = useState<Comment[]>([])


    const [fetchPost, isPostLoading, fetchPostError] = useFetching( async () => {
            const postResponse = await axios.get<Post>(`/api/post/${id}`, {
                headers: getToken()
            });
            console.log(postResponse.data)
            setPost(postResponse.data)
        }
    )

    const [fetchComments, isCommentsLoading, fetchCommentsError] = useFetching( async () => {
            const commentResponse = await axios.get<Comment[]>(`/api/comment/by-post-id/${id}`, {
                headers: getToken()
            });
            setComments(commentResponse.data)
        }
    )
    useEffect(() => {
        fetchPost()
        fetchComments()
    }, []);



    return (
        <div className={cls.container}>
            {
                isPostLoading
                    ?  <div>Loading...</div>
                    : <div>
                        <div>{post?.id}</div>
                        <div>{post?.category}</div>
                        <div>{post?.title}</div>
                        <div>{post?.content}</div>
                    </div>
            }

            <div>
                {
                    isCommentsLoading
                        ?  <div>Loading...</div>
                        : comments.map((comment) => (
                            <div key={comment.id}>
                                <div>id : {comment.id}</div>
                                <div>content: {comment.content}</div>
                                <div>post id: {comment.postId}</div>
                                <div>author id: {comment.authorId}</div>
                                <div>created at: {comment.createdAt}</div>
                            </div>
                            )
                        )
                }
            </div>

        </div>
    );
};

export default PostPage;
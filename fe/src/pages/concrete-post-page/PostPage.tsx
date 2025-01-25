import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import cls from './PostPage.module.css'
import {useFetching} from "../../hooks/useFetchig.ts";
import axios from "axios";
import {Post, Comment} from "../../types/types.ts";
import {getToken} from "../../utils/getToken.ts";
import CommentBlock from "./post-page-ui/CommentBlock.tsx";

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
            console.log(commentResponse.data)
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

            <div style={{width: "30%", display: 'flex', flexDirection: 'column', gap: 15}}>
                {
                    isCommentsLoading
                        ?  <div>Loading...</div>
                        : comments.map((comment) => (
                            <CommentBlock comment={comment} key={comment.id}/>
                            )
                        )
                }
            </div>

        </div>
    );
};

export default PostPage;
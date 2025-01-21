import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetchig.ts";
import axios from "axios";
import {getToken} from "../../utils/getToken.ts";
import {Post} from "../../types/types.ts";


const CategoryPage = () => {

    const { category } = useParams();
    const [posts, setPosts] = useState<Post[]>([])

    const [fetchPost, isLoading, error] = useFetching( async () => {
            const postResponse = await axios.get<Post[]>(`/api/post/category/${category}`, {
                headers: getToken()
            });
            setPosts(postResponse.data)
        }
    )

    useEffect(() => {
        fetchPost()
    }, [category]);

    return (
        <div>
            Picked category is : {category}
            {error && <div>{error}</div>}
            {
                isLoading
                    ?  <div>Loading...</div>
                    : posts.map((post: Post) => (
                        <div key={post.id}>
                            <div>Title: {post.title}</div>
                            <div>Content: {post.content}</div>
                            <div>Views: {post.views}</div>
                        </div>
                    ))
            }
        </div>
    );
};

export default CategoryPage;
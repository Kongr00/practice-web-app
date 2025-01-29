import React, {useEffect, useState} from 'react';
import cls from './ProfilePage.module.css'
import {useFetching} from "../../hooks/useFetchig.ts";
import axios from "axios";
import {Post} from "../../types/types.ts";
import {getToken} from "../../utils/getToken.ts";
const ProfilePage = () => {

    const [userComments, setUserComments] = useState()

    const {fetchComments, error, isLoading} = useFetching(async () => {
        const postResponse = await axios.get<Post>(`/api`, {
            headers: getToken()
        });
        setUserComments(postResponse.data)
    })

    useEffect(() => {
        fetchComments()
    }, []);

    return (
        <div className={cls.container}>
            <div className={cls.profileBlockArea}>
                <div className={cls.userInfoArea}>
                    user info will be here
                </div>
                <div className={cls.commentsListArea}>
                    user comments wil be here
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
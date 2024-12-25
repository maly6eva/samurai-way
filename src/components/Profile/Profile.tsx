import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import {} from "../../index";
import {PostProps} from "../../redux/state";


export type ProfileProps = {
    post: PostProps[]
    addPost: (postMassage: string) => void
}


export const Profile = ({post, addPost}: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <div className={s.myPosts}>
                <MyPosts post={post} addPost={addPost}/>
            </div>
        </div>
    );
};


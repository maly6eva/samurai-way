import React from 'react';
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {ProfilePageProps} from "../../redux/state";

export type ProfileProps = {
    addPost: (postMessage: string) => void;
    profilePage: ProfilePageProps;
    updateNewPostText: (newText: string) => void;
};

export const Profile: React.FC<ProfileProps> = ({ profilePage, addPost, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo />
            <div className={s.myPosts}>
                <MyPosts
                    post={profilePage.post}
                    newPostText={profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </div>
        </div>
    );
};


import React from 'react';
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {ActionType, ProfilePageProps} from "../../redux/state";

export type ProfileProps = {
    profilePage: ProfilePageProps;
    dispatch: (action: ActionType) => void
};

export const Profile: React.FC<ProfileProps> = ({ profilePage,  dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <div className={s.myPosts}>
                <MyPosts
                    post={profilePage.post}
                    newPostText={profilePage.newPostText}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
};


import React, {ChangeEvent} from 'react';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { RootState} from "../../redux/redux-store";
import {ActionType} from "../../redux/store";



export type ProfileProps = {
    profilePage: {
        post: { id: number; message: string; like: number; name: string }[];
        newPostText: string;
    };
    dispatch: (action: ActionType) => void;
};

export const Profile: React.FC<ProfileProps> = ({  dispatch, profilePage}) => {
    return (
        <div>
            <ProfileInfo />
            <div className={s.myPosts}>
                <MyPostsContainer
                    post={profilePage.post}
                    newPostText={profilePage.newPostText}
                    dispatch={dispatch}
                />
            </div>
        </div>
    );
};
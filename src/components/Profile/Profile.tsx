import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <div >
                <MyPosts like={213} message={'rd'}/>
            </div>

        </div>
    );
};


import React from 'react';
import content from "../../images/content.webp";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={content} alt=""/>
            </div>

            <div>ava + description</div>
           <MyPosts/>
        </div>
    );
};


import React from 'react';
import s from './MyPosts.module.css'
import avatar from "../../../images/tyra.png";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                New post
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};


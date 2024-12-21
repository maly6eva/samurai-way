import React from 'react';
import {Post, PostProps} from "./Post/Post";
import s from './MyPosts.module.css'


export const MyPosts = ({message, like}: PostProps) => {
    return (
        <div className={s.descriptionBlock}>
            My posts
            <div>
                <h3> New post</h3>
            </div>
            <div>
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message="Go" like={333}/>
                <Post message="Gi" like={363}/>
                <Post message="Good post" like={303}/>
            </div>
        </div>
    );
};


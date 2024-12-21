import React from 'react';
import {Post, PostProps} from "./Post/Post";
import s from './MyPosts.module.css'


export const MyPosts = ({message, like}: PostProps) => {

    let postsData = [
        {id: 1, message: 'Go', like: 373},
        {id: 2, message: 'Gi', like: 233},
        {id: 3, message: 'Good post', like: 133},
    ]

    let postElement = postsData.map((post) => {
        return (
            <Post message={post.message} like={post.like}/>
        )
    })
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
                {postElement}
            </div>
        </div>
    );
};


import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostProps} from "../../../index";



export type MyPostsProps = {
    post:  PostProps[]
}


export const MyPosts = ({post}: MyPostsProps ) => {



    let postElement = post.map((p) => {
        return (
            <Post message={p.message} like={p.like} id={p.id}/>
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


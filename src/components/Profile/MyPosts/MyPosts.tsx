import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import { } from "../../../index";
import {PostProps} from "../../../redux/state";




export type MyPostsProps = {
    post: PostProps[]

}


export const MyPosts = ({post}: MyPostsProps) => {


    let postElement = post.map((p) => {
        return (
            <div className={s.posts}>
                <Post message={p.message} like={p.like}  name={p.name}  />
            </div>

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


            <div className={s.dialogs}>
                <div className={s.posts}>
                    {postElement}

                </div>
            </div>


        </div>
    );
};


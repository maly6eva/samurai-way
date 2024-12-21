import React from 'react';
import {Post, PostProps} from "./Post/Post";
import s from './MyPosts.module.css'


export const MyPosts = ({message, like}: PostProps) => {

    let postsData = [
        {id: 1, message: 'Go', like: 373},
        {id: 2, message: 'Gi', like: 233},
        {id: 3, message: 'Good post', like: 133},
    ]
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
                {postsData.map((post) => {
                    return (
                        <Post message={post.message} like={post.like}/>
                    )
                })}

                {/*<Post message={postsData[0].message} like={postsData[0].like}/>*/}
                {/*<Post message={postsData[1].message} like={postsData[1].like}/>*/}
                {/*<Post message={postsData[2].message} like={postsData[2].like}/>*/}
            </div>
        </div>
    );
};


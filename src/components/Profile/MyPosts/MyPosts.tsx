import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionType, PostProps} from "../../../redux/store";
import {addPostElement, addPostValue} from "../../../redux/profile-reducer";


export type MyPostsProps = {
    post: PostProps[]
    newPostText: string,
    updateNewPostText: () => void
    updateNewPostValue: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const MyPosts = ({post, newPostText, updateNewPostText, updateNewPostValue}: MyPostsProps) => {


    const postElement = post.map((p) => {
        return (
            <div className={s.posts} key={p.id}>
                <Post message={p.message} like={p.like} name={p.name}/>
            </div>
        )
    })
    return (
        <div className={s.descriptionBlock}>
           <h3>My posts </h3>
            <div>
                <h3>New post</h3>
            </div>
            <div>
                <textarea value={newPostText} onChange={ updateNewPostValue }
                          placeholder={'Введите сообщение...'}/>
            </div>

            <div>
                <button onClick={updateNewPostText}>Add post</button>
            </div>
            <div className={s.dialogs}>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    );
};



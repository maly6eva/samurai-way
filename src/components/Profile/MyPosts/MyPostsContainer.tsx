import React, {ChangeEvent} from 'react';
import {ActionType, PostProps} from "../../../redux/store";
import {addPostElement, addPostValue} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


export type MyPostsProps = {
    post: PostProps[]
    dispatch: (action: ActionType) => void
    newPostText: string,
}

export const MyPostsContainer = ({post, newPostText, dispatch}: MyPostsProps) => {

    const updateNewPostText = () => addPostElement(newPostText, dispatch)
    const updateNewPostValue = (e: ChangeEvent<HTMLTextAreaElement>) => addPostValue(e, dispatch)

    return(
        <MyPosts updateNewPostText={updateNewPostText} updateNewPostValue={updateNewPostValue} post={post} newPostText={newPostText}/>
    )
};



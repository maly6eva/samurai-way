import React, {ChangeEvent, useRef, useState} from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import { } from "../../../index";
import {PostProps} from "../../../redux/state";




export type MyPostsProps = {

    post: PostProps[]
    addPost: (postMassage: string) => void
}


export const MyPosts = ({post, addPost}: MyPostsProps) => {
    const [newPostElement, setNewPostElement ] = useState('')

    let postElement = post.map((p) => {
        return (
            <div className={s.posts}>
                <Post message={p.message} like={p.like}  name={p.name}  />
            </div>
        )
    })

    let addPostValue = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        setNewPostElement(e.currentTarget.value)
    }


    let addPostElement = () => {
        debugger
    if(newPostElement) {
        addPost(newPostElement)
    }
    }

    return (
        <div className={s.descriptionBlock}>
            My posts
            <div>
                <h3> New post</h3>
            </div>
            <div>
                <textarea value={newPostElement} onChange={addPostValue} placeholder={'Введите сообщение...'}></textarea>
            </div>
            <div>
                <button  onClick={addPostElement}>Add post</button>
            </div>

            <div className={s.dialogs}>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    );
};






























//
// import React, {useRef} from 'react';
// import {Post} from "./Post/Post";
// import s from './MyPosts.module.css'
// import { } from "../../../index";
// import {PostProps} from "../../../redux/state";
//
//
//
//
// export type MyPostsProps = {
//     post: PostProps[]
// }
//
//
// export const MyPosts = ({post}: MyPostsProps) => {
// const newPostElement = useRef<HTMLTextAreaElement>(null)
//
//     let postElement = post.map((p) => {
//         return (
//             <div className={s.posts}>
//                 <Post message={p.message} like={p.like}  name={p.name}  />
//             </div>
//         )
//     })
//
//     let addPost = () => {
//       const text = newPostElement.current?.value;
//       alert(text)
//     }
//
//     return (
//         <div className={s.descriptionBlock}>
//             My posts
//             <div>
//                 <h3> New post</h3>
//             </div>
//             <div>
//                 <textarea ref={newPostElement}></textarea>
//             </div>
//             <div>
//                 <button  onClick={ addPost}>Add post</button>
//             </div>
//
//             <div className={s.dialogs}>
//                 <div className={s.posts}>
//                     {postElement}
//                 </div>
//             </div>
//         </div>
//     );
// };


import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionType, addPostElement, addPostValue, PostProps} from "../../../redux/state";


export type MyPostsProps = {
    post: PostProps[]
    dispatch: (action: ActionType) => void
    newPostText: string,
}

export const MyPosts = ({post, newPostText, dispatch}: MyPostsProps) => {
    const postElement = post.map((p) => {
        return (
            <div className={s.posts} key={p.id}>
                <Post message={p.message} like={p.like} name={p.name}/>
            </div>
        )
    })
    return (
        <div className={s.descriptionBlock}>
            My posts
            <div>
                <h3>New post</h3>
            </div>
            <div>
                <textarea value={newPostText} onChange={(e) => addPostValue(e, dispatch)}
                          placeholder={'Введите сообщение...'}/>
            </div>

            <div>
                <button onClick={() => addPostElement(newPostText, dispatch)}>Add post</button>
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


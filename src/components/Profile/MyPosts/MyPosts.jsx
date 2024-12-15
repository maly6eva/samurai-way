import React from 'react';
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
                <Post message="Go" like={333} />
                <Post message="Gi" like={363} />
                <Post message="Good post" like={303}  />
            </div>
        </div>
    );
};


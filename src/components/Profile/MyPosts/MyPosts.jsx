import React from 'react';
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div>My posts
                <div>
                    New post
                </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <div>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
                <div className={s.item}>post3</div>
                <div className={s.item}>post4</div>
                <div className={s.item}>post5</div>
                <div className={s.item}>post6</div>
            </div>
        </div>
    );
};


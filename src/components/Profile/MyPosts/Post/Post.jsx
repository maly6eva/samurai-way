import React from 'react';
import s from './Post.module.css'
import avatar from "../../../../images/tyra.png";

export const Post= () => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="Tyra Bunks"/>
            post1
            <div>
                <span>
                    like
                </span>
            </div>
        </div>
    );
};


import React from 'react';
import s from './Post.module.css'
import avatar from "../../../../images/tyra.png";

export type PostProps = {
    message: string;
    like: number;
}



export const Post= ({message, like}: PostProps) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="Tyra Bunks"/>
            {message}
            <div>
                <span>
                    like
                </span> {like}
            </div>
        </div>
    );
};


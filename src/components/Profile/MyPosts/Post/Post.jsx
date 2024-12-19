import React from 'react';
import s from './Post.module.css'
import avatar from "../../../../images/tyra.png";





export const Post= (props) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="Tyra Bunks"/>
            {props.message}
            <div>
                <span>
                    like
                </span> {props.like}
            </div>
        </div>
    );
};

